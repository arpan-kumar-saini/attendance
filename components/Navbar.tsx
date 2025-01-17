/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9HHICQhK9sE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-background shadow-sm sm:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <UniversityIcon className="w-6 h-6" />
        <span className="text-lg font-semibold">College Attendance</span>
      </Link>
      <nav className="hidden gap-4 sm:flex">
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          Dashboard
        </Link>
        <Link
          href="/classes"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          Classes
        </Link>
        <Link
          href="/attendance"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          Attendance
        </Link>
        <Link
          href="/profile"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          Profile
        </Link>
        <Link
          href="/reports"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
         Reports
        </Link>
        <Link
          href="/scheduler"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
         Scheduler
        </Link>
        <Link
          href="/support"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
         Support
        </Link>
        <Link
          href="/notifications"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
         Notifications
        </Link>
        <Link
          href="/signin"
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
          prefetch={false}
        >
          LogIn
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64 bg-background shadow-lg">
          <div className="p-4 space-y-2">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="/classes"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Classes
            </Link>
            <Link
              href="/attendance"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Attendance
            </Link>
            <Link
             href="/profile"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Profile
            </Link>
            <Link
             href="/reports"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Reports
            </Link>
            <Link
             href="/scheduler"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Scheduler
            </Link>
            <Link
             href="/support"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Support
            </Link>
            <Link
            href="/notifications"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Notifications
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-background hover:bg-muted hover:shadow-md transition-colors"
              prefetch={false}
            >
              Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UniversityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  )
}
