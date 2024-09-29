/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/A3GXOovbdKw
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

export default function footer() {
  return (
    <footer className="bg-background text-foreground py-8 sm:py-12 px-12 md:mx-24 lg:mx-32 xl:mx-48">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Social Media</h4>
            <nav className="flex flex-col gap-1">
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Facebook
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Twitter
              </Link>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Instagram
              </Link>
            </nav>
          </div>
          <div className="space-y-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-medium">About</h4>
            <p className="text-sm text-muted-foreground">Attendance Management System for Colleges and Universities.</p>
          </div>
          <div className="space-y-2 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-medium">Contact</h4>
            <p className="text-sm text-muted-foreground">
              123 Main Street, Anytown USA
              <br />
              support@attendance.com
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; 2024 Attendance Management. All rights reserved.
        </div>
      </div>
    </footer>
  )
}