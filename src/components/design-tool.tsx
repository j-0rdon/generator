'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Image, Type, Wand2 } from "lucide-react"

const templates = [
  { id: 1, name: "Fairy Tale", preview: "/placeholder.svg?height=100&width=80" },
  { id: 2, name: "Adventure", preview: "/placeholder.svg?height=100&width=80" },
  { id: 3, name: "Animal Friends", preview: "/placeholder.svg?height=100&width=80" },
]

export function DesignToolComponent() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [bookTitle, setBookTitle] = useState("")
  const [pageContent, setPageContent] = useState("")
  const [generatedImage, setGeneratedImage] = useState("")

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templates.find(t => t.id === parseInt(templateId)))
  }

  const handleGenerateImage = () => {
    // Simulating AI image generation
    setGeneratedImage("/placeholder.svg?height=300&width=400")
  }

  const handleSaveAndContinue = () => {
    // Implement save and navigation to the next step
    console.log("Saving design and continuing to Review & Print...")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold">StoryBook Designer</span>
        </div>
        <Button variant="secondary" size="sm">Save Progress</Button>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Design Your Book</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Template</CardTitle>
              <CardDescription>Select a starting point for your book design</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleTemplateSelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id.toString()}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedTemplate && (
                <div className="mt-4">
                  <img
                    src={selectedTemplate.preview}
                    alt={`${selectedTemplate.name} preview`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book Details</CardTitle>
              <CardDescription>Enter your book's title and content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="bookTitle" className="block text-sm font-medium text-muted-foreground mb-1">
                    Book Title
                  </label>
                  <Input
                    id="bookTitle"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    placeholder="Enter your book title"
                  />
                </div>
                <div>
                  <label htmlFor="pageContent" className="block text-sm font-medium text-muted-foreground mb-1">
                    Page Content
                  </label>
                  <Textarea
                    id="pageContent"
                    value={pageContent}
                    onChange={(e) => setPageContent(e.target.value)}
                    placeholder="Enter the content for this page"
                    rows={5}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>AI-Powered Illustration</CardTitle>
            <CardDescription>Generate illustrations based on your content</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="generate">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="generate">Generate</TabsTrigger>
                <TabsTrigger value="upload">Upload</TabsTrigger>
              </TabsList>
              <TabsContent value="generate">
                <div className="space-y-4">
                  <Button onClick={handleGenerateImage} className="w-full">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Illustration
                  </Button>
                  {generatedImage && (
                    <div className="border rounded-md p-2">
                      <img src={generatedImage} alt="Generated illustration" className="w-full h-auto" />
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="upload">
                <Input id="picture" type="file" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveAndContinue} size="lg">
            Save and Continue
          </Button>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground p-4 text-center">
        © 2023 StoryBook. All rights reserved.
      </footer>
    </div>
  )
}