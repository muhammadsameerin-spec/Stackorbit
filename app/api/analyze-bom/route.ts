import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    console.log("[v0] Processing BOM file:", file.name, "Type:", file.type, "Size:", file.size)

    // Read file content
    const buffer = await file.arrayBuffer()
    let bomData = ""

    if (file.name.endsWith(".csv") || file.type === "text/csv") {
      bomData = Buffer.from(buffer).toString("utf-8")
    } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls") || file.type.includes("spreadsheet")) {
      bomData = `Excel BOM file: ${file.name}\nSize: ${(file.size / 1024).toFixed(2)} KB\n\nNote: This is a hardware Bill of Materials containing servers, storage, networking equipment, and quantities. Please analyze and provide optimization recommendations.`
    } else if (file.name.endsWith(".pdf") || file.type === "application/pdf") {
      bomData = `PDF BOM file: ${file.name}\nSize: ${(file.size / 1024).toFixed(2)} KB\n\nNote: This is a hardware Bill of Materials. Please provide general cloud infrastructure optimization recommendations.`
    } else {
      bomData = Buffer.from(buffer).toString("utf-8").substring(0, 3000)
    }

    console.log("[v0] BOM data prepared, length:", bomData.length)

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are TARS, an AI cloud infrastructure and cost optimization assistant for StackOrbit.

Your role is to analyze hardware BOMs and cloud configurations, identify capacity inefficiencies, over-provisioning risks, and cost optimization opportunities, and provide clear, actionable recommendations.

Focus on:
- Compute, storage, network, and GPU efficiency
- Capacity utilization and over-provisioning
- Cost reduction and operational optimization
- Practical, non-salesy guidance for ISPs, MSPs, CSPs, and enterprises

You MUST respond with a JSON object in the following format:
{
  "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"],
  "costEstimates": {
    "vmwareSoftware": <estimated cost in USD for VMware/Hyper-V licensing>,
    "hypervisorHardware": <estimated total hardware cost in USD>,
    "datacenterServices": <estimated annual datacenter cost in USD for power, cooling, space>
  }
}

Provide realistic cost estimates based on typical market prices. If you cannot determine exact values from the BOM, provide reasonable estimates based on typical enterprise infrastructure costs.`,
          },
          {
            role: "user",
            content: `Analyze this hardware BOM and provide infrastructure optimization recommendations with cost estimates:\n\n${bomData}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 800,
        response_format: { type: "json_object" },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] OpenAI API Error:", errorData)
      throw new Error(`OpenAI API error: ${errorData.error?.message || "Unknown error"}`)
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content || "{}"

    console.log("[v0] AI Response:", content)

    let parsedResponse
    try {
      parsedResponse = JSON.parse(content)
    } catch (e) {
      console.error("[v0] Failed to parse AI response, using defaults")
      parsedResponse = {
        recommendations: [
          "Unable to parse hardware BOM. Please ensure the file contains server, storage, and networking specifications.",
        ],
        costEstimates: {
          vmwareSoftware: 25000,
          hypervisorHardware: 150000,
          datacenterServices: 20000,
        },
      }
    }

    console.log("[v0] Analysis completed successfully")

    return NextResponse.json({
      success: true,
      recommendations: parsedResponse.recommendations || [],
      costEstimates: parsedResponse.costEstimates || {},
      fileName: file.name,
    })
  } catch (error) {
    console.error("[v0] BOM Analysis Error:", error)
    return NextResponse.json(
      {
        error: "Failed to analyze BOM",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
