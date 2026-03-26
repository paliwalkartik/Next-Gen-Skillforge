"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button" // Assuming you have shadcn button installed

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Button disabled>Loading...</Button>
  }

  // If the user is logged in, show their name and a Sign Out button
  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm">Signed in as {session.user?.name}</p>
        <Button onClick={() => signOut()} variant="destructive">
          Sign Out
        </Button>
      </div>
    )
  }

  // If the user is NOT logged in, show the Connect GitHub button
  return (
    <Button onClick={() => signIn("github")}>
      Connect with GitHub
    </Button>
  )
}