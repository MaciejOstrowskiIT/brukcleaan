"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const STORAGE_KEY = "brukclean-cookies-accepted"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg lg:bottom-4 lg:left-4 lg:right-auto lg:max-w-md lg:rounded-xl lg:border">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            Ta strona korzysta z plików cookies w celu zapewnienia prawidłowego
            działania serwisu.{" "}
            <a href="#" className="text-foreground underline">
              Więcej informacji
            </a>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="sm"
            onClick={accept}
            className="bg-lime text-lime-foreground hover:bg-lime/90 text-xs font-semibold"
          >
            Akceptuję
          </Button>
          <button
            onClick={accept}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
