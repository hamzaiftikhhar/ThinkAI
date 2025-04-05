import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to <span className="text-gradient">ChatAI</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Experience the power of AI conversation with our state-of-the-art language model
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/chat">
            <Button size="lg" className="w-full sm:w-auto">
              Start Chatting
            </Button>
          </Link>
          <Link href="/auth">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Sign Up
            </Button>
          </Link>
        </div>
        <div className="pt-10 text-sm text-gray-500">Powered by Next.js and AI technology</div>
      </div>
    </div>
  )
}

