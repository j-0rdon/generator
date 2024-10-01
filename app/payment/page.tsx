'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, CheckCircle, Home } from "lucide-react"
import Link from 'next/link'
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setWindowDimensions({ width, height })

    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePayment = () => {
    setIsLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setIsPaymentComplete(true)
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="min-h-screen bg-background flex flex-col items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {isPaymentComplete && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}
      <Card className="w-full max-w-md">
        <CardHeader>
          <motion.div variants={childVariants}>
            <CardTitle>{isPaymentComplete ? "Payment Successful" : "Complete Your Payment"}</CardTitle>
            <CardDescription>
              {isPaymentComplete 
                ? "Your book will be printed and shipped soon" 
                : "Enter your payment details to complete your order"}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isPaymentComplete ? (
            <motion.div variants={childVariants}>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center space-y-2"
              variants={childVariants}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <p className="text-xl font-semibold">Thank you for your purchase!</p>
            </motion.div>
          )}
        </CardContent>
        <CardFooter>
          <motion.div className="w-full" variants={childVariants}>
            {!isPaymentComplete ? (
              <Button 
                onClick={handlePayment} 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay Now
                  </>
                )}
              </Button>
            ) : (
              <Button asChild className="w-full">
                <Link href="/dashboard">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Link>
              </Button>
            )}
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}