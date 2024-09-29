/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/rjrM71hNo4o
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function attendence() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const handleSearch = (e) => setSearch(e.target.value)
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }
  const students = useMemo(
    () =>
      [
        {
          name: "John Doe",
          attendance: 95,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Jane Smith",
          attendance: 85,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Michael Johnson",
          attendance: 92,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Emily Davis",
          attendance: 88,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "David Wilson",
          attendance: 90,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Sarah Lee",
          attendance: 82,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Christopher Brown",
          attendance: 93,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
        {
          name: "Olivia Taylor",
          attendance: 87,
          dates: ["2023-04-01", "2023-04-02", "2023-04-03", "2023-04-04", "2023-04-05"],
        },
      ]
        .filter((student) => student.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
          if (sort.order === "asc") {
            return a[sort.key] > b[sort.key] ? 1 : -1
          } else {
            return a[sort.key] < b[sort.key] ? 1 : -1
          }
        }),
    [search, sort],
  )
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Attendance Records</h1>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search students..."
            className="bg-white dark:bg-gray-950 px-4 py-2 rounded-md"
            value={search}
            onChange={handleSearch}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListOrderedIcon className="w-4 h-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuRadioGroup value={sort.key} onValueChange={handleSort}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="attendance">Attendance</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
              Name
              {sort.key === "name" && <span className="ml-2">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("attendance")}>
              Attendance
              {sort.key === "attendance" && <span className="ml-2">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead>Class Dates</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.name}>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${student.attendance}%` }} />
                  </div>
                  <span>{student.attendance}%</span>
                </div>
              </TableCell>
              <TableCell>
                {student.dates.map((date, index) => (
                  <span key={index} className="inline-block mr-2">
                    {date}
                  </span>
                ))}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <EyeIcon className="w-4 h-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}
