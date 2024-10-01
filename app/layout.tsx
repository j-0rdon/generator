import './globals.css'
import Layout from './components/Layout'

export const metadata = {
  title: 'StoryBook',
  description: 'Create and manage your stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
