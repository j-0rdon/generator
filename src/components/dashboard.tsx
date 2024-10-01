'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { BookOpen, ShoppingCart, User } from "lucide-react"

interface Story {
  id: number
  title: string
  status: string
  lastEdited: string
}

export function DashboardComponent() {
  const [stories, setStories] = useState<Story[]>([
    { id: 1, title: "The Magic Forest", status: "In Progress", lastEdited: "2023-09-15" },
    { id: 2, title: "Space Adventures", status: "Completed", lastEdited: "2023-08-30" },
    { id: 3, title: "My Pet Dragon", status: "Draft", lastEdited: "2023-09-10" },
  ])

  const handleNewStory = () => {
    // Implement navigation to the design tool page
    console.log("Navigating to design tool...")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">StoryBook</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">Templates</a></li>
            <li><a href="#" className="hover:underline">AI Tools</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ShoppingCart className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">My Stories</h1>
        <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Edited</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stories.map((story) => (
                <TableRow key={story.id}>
                  <TableCell>{story.title}</TableCell>
                  <TableCell>{story.status}</TableCell>
                  <TableCell>{story.lastEdited}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 flex justify-center">
          <Button onClick={handleNewStory} size="lg">
            NEW
          </Button>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground p-4 text-center">
        © 2023 StoryBook. All rights reserved.
      </footer>
    </div>
  )
}