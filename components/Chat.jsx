"use client"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, User, Bot, Send, Sparkles, Heart, Brain } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
})

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const chatRef = useRef(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  // Load existing chats when dialog opens
  useEffect(() => {
    if (isOpen) {
      loadChats()
    }
  }, [isOpen])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const loadChats = async () => {
    try {
      const response = await fetch("/api/questionaire")
      const data = await response.json()
      setMessages(data.chats || [])
    } catch (error) {
      console.error("Failed to load chats:", error)
    }
  }

  async function onSubmit(values) {
    if (isLoading) return

    setIsLoading(true)
    const userMessage = values.message
    
    try {
      // Get AI response
      const chatResponse = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userMessage }),
      })

      const chatData = await chatResponse.json()
      const aiAnswer = chatData.answer

      // Save to database
      const saveResponse = await fetch("/api/questionaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage,
          answer: aiAnswer,
        }),
      })

      if (saveResponse.ok) {
        // Add to local state immediately for better UX
        const newMessage = {
          id: Date.now().toString(),
          question: userMessage,
          answer: aiAnswer,
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, newMessage])
      }

      form.reset()
    } catch (error) {
      console.error("Error:", error)
      // Show error message to user
      const errorMessage = {
        id: Date.now().toString(),
        question: userMessage,
        answer: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="group flex items-center bg-cherry hover:bg-red-900 gap-2 border-0 rounded-full px-5 py-5 font-semibold shadow-lg hover:shadow-xl transform scale-110 transition-all duration-500 cursor-pointer z-20">
            <MessageCircle />
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 overflow-hidden whitespace-nowrap">
              Chat with Sahaj
            </span>
          </Button>

        </DialogTrigger>
        <DialogContent className="h-[85vh] max-h-[700px] w-full max-w-3xl flex flex-col p-0 bg-gradient-to-br from-oat via-pearl to-butter border-0 rounded-3xl shadow-2xl">
          <DialogHeader className="px-8 py-6 bg-white/80 backdrop-blur-sm rounded-t-3xl border-b border-purple-100">
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold">
              <div className="w-12 h-12 bg-gradient-to-br from-turmeric to-cherry rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="bg-cherry bg-clip-text text-transparent">
                  SAHAJ AI Assistant
                </span>
                <p className="text-sm font-normal text-radiate mt-1">Your mental wellness companion</p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-white/50 to-purple-50/30 backdrop-blur-sm"
          >
            {messages.length > 0 ? (
              messages.map((chat, index) => (
                <div key={chat.id} className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl rounded-tr-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <p className="text-sm leading-relaxed">{chat.question}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mt-1 shadow-md">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mt-1 shadow-md">
                        <Bot className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{chat.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-gradient-to-br from-turmeric to-cherry rounded-full flex items-center justify-center mb-6 animate-bounce shadow-xl">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cherry bg-clip-text mb-4">
                  Welcome to SAHAJ AI
                </h3>
                <p className="text-gray-600 max-w-md leading-relaxed mb-6">
                  Your compassionate AI companion is here to listen, support, and guide you through your mental wellness journey. Start a conversation and discover personalized insights.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-radiate" />
                    <span>Empathetic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-radicchio" />
                    <span>Intelligent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-turmeric" />
                    <span>Supportive</span>
                  </div>
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-left duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-md">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl rounded-tl-sm shadow-lg border border-purple-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      <span className="text-sm text-gray-600 ml-2">SAHAJ is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator className="bg-gradient-to-r from-orange-300 to-orange-500" />
          
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-b-3xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-3"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Share what's on your mind with SAHAJ..."
                          className="min-h-12 border-2 border-orange-300 rounded-2xl px-4 py-3 text-gray-800 placeholder:text-gray-500 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-pink-600" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  size="default" 
                  disabled={isLoading}
                  className="bg-cherry hover:bg-red-900 text-white border-0 rounded-2xl px-6 py-3 font-semibold shadow-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}