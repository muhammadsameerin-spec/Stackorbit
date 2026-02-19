"use client"

import type React from "react"
import { MessageCircle } from "lucide-react" // Import MessageCircle

import { useState, useEffect, useRef } from "react"
import { X, Sun, Moon, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: string
}

const SUGGESTED_QUESTIONS = [
  "What is StackOrbit?",
  "Do you support Apache CloudStack?",
  "Can I build a sovereign cloud with StackOrbit?",
  "What AI and GPU services do you offer?",
  "How is StackOrbit different from VMware or Virtuozzo?",
]

const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error("API request failed")
    }

    const data = await response.json()
    return data.reply
  } catch (error) {
    console.error("[v0] TARS API error:", error)
    throw error
  }
}

const TarsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* First angled bar - bottom left to top right */}
      <path d="M3 18 L7 21 L18 10 L14 7 Z" transform="rotate(-15 10.5 14)" />
      {/* Second angled bar - top left to bottom right */}
      <path d="M6 3 L10 6 L15 11 L11 14 L6 9 L2 6 Z" transform="rotate(25 8.5 10)" />
      {/* Third angled bar - crossing diagonally */}
      <path d="M14 3 L18 6 L13 15 L9 12 Z" transform="rotate(45 13.5 9)" />
      {/* Fourth angled bar - vertical accent */}
      <path d="M16 8 L20 11 L18 18 L14 15 Z" transform="rotate(-10 17 13)" />
    </g>
  </svg>
)

export function TARSChatWidget() {
  const [showPreview, setShowPreview] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load state from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("tars-theme") as "light" | "dark" | null
    const savedOpen = localStorage.getItem("tars-open") === "true"

    if (savedTheme) setTheme(savedTheme)
    if (savedOpen) setIsOpen(true)
  }, [])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Show welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content:
          "Hi, I'm TARS, the StackOrbit AI Assistant.\nAsk me anything about our cloud platforms, Apache CloudStack, or AI services.",
        role: "assistant",
        timestamp: new Date().toISOString(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  const toggleOpen = () => {
    const newState = !isOpen
    setIsOpen(newState)
    localStorage.setItem("tars-open", String(newState))
    if (newState && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const handlePreviewClick = () => {
    setShowPreview(false)
    setIsOpen(true)
    localStorage.setItem("tars-open", "true")
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("tars-theme", newTheme)
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: content.trim(),
      role: "user",
      timestamp: new Date().toISOString(),
    }

    // Optimistic UI update
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const reply = await sendMessageToAI(content)
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: reply,
        role: "assistant",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: "Sorry, I'm having trouble responding right now. Please try again.",
        role: "assistant",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(inputValue)
    }
  }

  const showSuggestions = messages.length <= 1

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      {!isOpen && !showPreview ? (
        <button
          onClick={() => setShowPreview(true)}
          className="group relative flex flex-col items-center gap-2 focus:outline-none"
          aria-label="Open TARS Assistant"
        >
          {/* Main circular icon with border ring */}
          <div className="relative">
            {/* Outer purple border ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-purple-400/60 scale-110" />
            
            {/* White background circle with icon */}
            <div className="relative h-14 w-14 rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl flex items-center justify-center">
              <TarsIcon className="h-7 w-7 text-gray-800 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            {/* Sparkle indicator badge */}
            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-md">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>

          {/* Ask TARS pill label */}
          <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg">
            <MessageCircle className="h-3.5 w-3.5 text-gray-600" />
            <span className="text-xs font-semibold text-gray-700">Ask TARS</span>
          </div>
        </button>
      ) : !isOpen && showPreview ? (
        <div
          className={cn(
            "relative flex flex-col items-center gap-3 sm:gap-4 rounded-2xl shadow-2xl p-5 sm:p-8 border-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 backdrop-blur-sm w-[calc(100vw-32px)] sm:w-auto",
            theme === "light"
              ? "bg-white/95 border-purple-200 shadow-purple-200/50"
              : "bg-gray-900/95 border-purple-700 shadow-purple-900/50",
          )}
          style={{ minWidth: "260px", maxWidth: "320px" }}
        >
          <button
            onClick={() => setShowPreview(false)}
            className={cn(
              "absolute top-3 right-3 p-1.5 rounded-full transition-colors",
              theme === "light"
                ? "hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                : "hover:bg-gray-800 text-gray-600 hover:text-gray-400",
            )}
            aria-label="Close preview"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Icon with gradient background */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-2xl" />
            <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800">
              <TarsIcon className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title with icon */}
          <div className="flex items-center gap-2">
            <TarsIcon className={cn("h-4 w-4", theme === "light" ? "text-gray-800" : "text-white")} />
            <span className={cn("text-lg font-bold", theme === "light" ? "text-gray-900" : "text-white")}>
              Ask TARS
            </span>
          </div>

          {/* Description */}
          <p
            className={cn(
              "text-sm text-center leading-relaxed max-w-[240px]",
              theme === "light" ? "text-gray-600" : "text-gray-400",
            )}
          >
            Get instant, precise, tailored answers and insights about StackOrbit
          </p>

          {/* CTA Button */}
          <Button
            onClick={handlePreviewClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 h-11"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Ask TARS
          </Button>

          {/* Features list */}
          <div
            className={cn(
              "flex items-center gap-3 text-xs mt-2",
              theme === "light" ? "text-gray-500" : "text-gray-500",
            )}
          >
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Always online
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              AI-powered
            </span>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col w-[calc(100vw-32px)] sm:w-[360px] h-[calc(100vh-120px)] sm:h-[480px] max-h-[600px] rounded-2xl shadow-2xl transition-colors duration-300",
            theme === "light" ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-800",
          )}
        >
          {/* Header */}
          <div
            className={cn(
              "flex items-center justify-between p-4 border-b rounded-t-2xl transition-colors",
              theme === "light"
                ? "bg-gradient-to-r from-blue-50 to-purple-50 border-gray-200"
                : "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-800",
            )}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <TarsIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className={cn("font-semibold text-base", theme === "light" ? "text-gray-900" : "text-white")}>
                  TARS
                </h3>
                <p className={cn("text-xs", theme === "light" ? "text-gray-600" : "text-gray-400")}>
                  StackOrbit AI Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={cn("h-8 w-8 p-0", theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800")}
                aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              >
                {theme === "light" ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4 text-yellow-400" aria-hidden="true" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleOpen}
                className={cn("h-8 w-8 p-0", theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800")}
                aria-label="Close TARS chat"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Chat Body */}
          <div className={cn("flex-1 overflow-y-auto p-4 space-y-4", theme === "light" ? "bg-gray-50" : "bg-gray-950")}>
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                    <TarsIcon className="h-4 w-4 text-white" />
                  </div>
                )}
                <div className="flex flex-col gap-1 max-w-[75%]">
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap",
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                        : theme === "light"
                          ? "bg-white border border-gray-200 text-gray-900 rounded-bl-sm"
                          : "bg-gray-800 border border-gray-700 text-gray-100 rounded-bl-sm",
                    )}
                  >
                    {message.content}
                  </div>
                  <span
                    className={cn(
                      "text-xs px-2",
                      theme === "light" ? "text-gray-500" : "text-gray-600",
                      message.role === "user" ? "text-right" : "text-left",
                    )}
                  >
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className={cn("text-xs font-medium px-2", theme === "light" ? "text-gray-600" : "text-gray-400")}>
                  Quick questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      disabled={isLoading}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-full transition-all duration-200",
                        theme === "light"
                          ? "bg-white border border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50"
                          : "bg-gray-800 border border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-gray-700",
                        isLoading && "opacity-50 cursor-not-allowed",
                      )}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-2 items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
                  <TarsIcon className="h-4 w-4 text-white" />
                </div>
                <div
                  className={cn(
                    "rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1",
                    theme === "light" ? "bg-white border border-gray-200" : "bg-gray-800 border border-gray-700",
                  )}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-2 w-2 rounded-full animate-bounce",
                        theme === "light" ? "bg-gray-400" : "bg-gray-600",
                      )}
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            className={cn(
              "border-t p-3",
              theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800",
            )}
          >
            <form onSubmit={handleSubmit} className="flex gap-2" role="search" aria-label="Chat with TARS">
              <label htmlFor="tars-chat-input" className="sr-only">Message TARS</label>
              <input
                id="tars-chat-input"
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                placeholder="Ask TARS about StackOrbit…"
                className={cn(
                  "flex-1 px-3 py-2 rounded-lg text-sm border outline-none transition-colors",
                  theme === "light"
                    ? "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white"
                    : "bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-500 focus:bg-gray-900",
                  isLoading && "opacity-50 cursor-not-allowed",
                )}
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isLoading}
                className="px-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>

            {/* Footer Disclaimer */}
            <p
              className={cn(
                "text-xs mt-2 text-center leading-relaxed",
                theme === "light" ? "text-gray-500" : "text-gray-600",
              )}
            >
              By chatting, you agree to allow StackOrbit to process this conversation.
              <br />
              Avoid sharing sensitive information.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
