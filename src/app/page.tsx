"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="flex h-14 items-center border-b border-border px-4 sm:px-6">
        <span className="text-lg font-bold tracking-tight">Buildt</span>
      </header>

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="flex flex-col items-center justify-center pt-24 text-center">
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl">
                What will you <span className="text-primary">build?</span>
              </h1>
              <p className="mt-3 text-muted-foreground sm:text-lg">
                Describe what you want to create.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-4 py-4 sm:px-6">
          <div className="mx-auto flex max-w-3xl gap-2">
            <textarea
              placeholder="Describe what you want to build..."
              rows={1}
              className="flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            />
            <Button type="button" size="icon">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
