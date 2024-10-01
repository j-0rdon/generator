'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const routes = [
  { path: '/test', name: 'Test' },
  // Add more routes as needed
]

export default function DashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quick Navigation</CardTitle>
          <CardDescription>Access different parts of the application</CardDescription>
        </CardHeader>
        <CardContent>
          <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {routes.map((route) => (
              <Button key={route.path} variant="outline" asChild>
                <Link href={route.path}>
                  {route.name}
                </Link>
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Your Dashboard</CardTitle>
          <CardDescription>This is where you can add your main dashboard content and features.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your dashboard content goes here. You can add charts, statistics, or any other relevant information for the user.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}