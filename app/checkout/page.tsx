'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CreditCard, Truck, Package } from "lucide-react"
import Link from 'next/link'
import { motion } from "framer-motion"

export default function ReviewAndPrint() {
  const [coverType, setCoverType] = useState('softcover')
  const [paperQuality, setPaperQuality] = useState('standard')
  const [quantity, setQuantity] = useState('1')
  const [includeStickers, setIncludeStickers] = useState(false)

  const handleCheckout = () => {
    // Implement Stripe checkout process
    console.log("Proceeding to Stripe checkout...")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="min-h-screen bg-background flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <motion.div className="flex items-center" variants={childVariants}>
          <BookOpen className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold">StoryBook Checkout</span>
        </motion.div>
      </header>

      <main className="flex-grow p-6">
        <motion.h1 className="text-3xl font-bold mb-6" variants={childVariants}>Review & Print Your Book</motion.h1>

        <motion.div className="grid gap-6 md:grid-cols-2" variants={childVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Book Preview</CardTitle>
              <CardDescription>Review your book before printing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] bg-muted rounded-md flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-muted-foreground" />
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">View Full Preview</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Print Options</CardTitle>
              <CardDescription>Customize your book's printing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Cover Type</Label>
                <RadioGroup defaultValue="softcover" onValueChange={setCoverType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="softcover" id="softcover" />
                    <Label htmlFor="softcover">Softcover</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hardcover" id="hardcover" />
                    <Label htmlFor="hardcover">Hardcover (+$5.00)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Paper Quality</Label>
                <Select defaultValue="standard" onValueChange={setPaperQuality}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select paper quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium (+$3.00)</SelectItem>
                    <SelectItem value="eco">Eco-Friendly (+$2.00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Quantity</Label>
                <Select defaultValue="1" onValueChange={setQuantity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={childVariants}>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recommended Add-on</CardTitle>
              <CardDescription>Enhance your purchase with custom stickers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Package className="w-12 h-12 text-primary" />
                  <div>
                    <h3 className="font-semibold">Custom Sticker Pack</h3>
                    <p className="text-sm text-muted-foreground">10 stickers featuring characters from your book</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="sticker-pack"
                    checked={includeStickers}
                    onCheckedChange={setIncludeStickers}
                  />
                  <Label htmlFor="sticker-pack">Add for $4.99</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={childVariants}>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Book Price:</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Cover Type ({coverType}):</span>
                  <span>{coverType === 'hardcover' ? '+$5.00' : '$0.00'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Paper Quality ({paperQuality}):</span>
                  <span>
                    {paperQuality === 'premium' ? '+$3.00' : paperQuality === 'eco' ? '+$2.00' : '$0.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>x{quantity}</span>
                </div>
                {includeStickers && (
                  <div className="flex justify-between">
                    <span>Custom Sticker Pack:</span>
                    <span>$4.99</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>
                    $
                    {(19.99 +
                      (coverType === 'hardcover' ? 5 : 0) +
                      (paperQuality === 'premium' ? 3 : paperQuality === 'eco' ? 2 : 0) +
                      (includeStickers ? 4.99 : 0)) *
                      parseInt(quantity, 10)}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/payment">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceed to Checkout
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div className="mt-6 text-center text-sm text-muted-foreground" variants={childVariants}>
          <Truck className="w-4 h-4 inline-block mr-1" />
          Estimated delivery: 5-7 business days
        </motion.div>
      </main>
    </motion.div>
  )
}