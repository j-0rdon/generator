import { BackToHome } from '../components/BackToHome'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackToHome />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">This is the test page content. You can add various UI components and interactions here to test functionality.</p>
          <div className="space-y-2">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}