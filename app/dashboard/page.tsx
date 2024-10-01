'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

interface Story {
  id: number
  title: string
  status: string
  lastEdited: string
}

export default function Dashboard() {
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
    <div className="p-6">
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
        <Button asChild size="lg">
          <Link href="/design">
            NEW
          </Link>
        </Button>
      </div>
    </div>
  )
}