"use client"

import { Phone } from "lucide-react"

const PHONE_HREF = "tel:+48726628743"

export function FloatingCallButton() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:scale-110 active:scale-95 lg:hidden"
      aria-label="Zadzwoń teraz"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
