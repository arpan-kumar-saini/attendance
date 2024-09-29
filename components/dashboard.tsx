/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jfBcAodVfgD
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
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { LineChart } from "recharts"

export default function dashboard() {
  const [activeTab, setActiveTab] = useState("faculty")
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  const facultySchedule = [
    {
      id: 1,
      time: "9:00 AM - 10:30 AM",
      subject: "Introduction to Computer Science",
      location: "Classroom A",
      students: 25,
      attendance: 22,
    },
    {
      id: 2,
      time: "11:00 AM - 12:30 PM",
      subject: "Calculus I",
      location: "Lecture Hall B",
      students: 35,
      attendance: 30,
    },
    {
      id: 3,
      time: "2:00 PM - 3:30 PM",
      subject: "English Composition",
      location: "Classroom C",
      students: 20,
      attendance: 18,
    },
  ]
  const studentSchedule = [
    {
      id: 1,
      time: "9:00 AM - 10:30 AM",
      subject: "Introduction to Computer Science",
      location: "Classroom A",
      attendance: "Present",
    },
    {
      id: 2,
      time: "11:00 AM - 12:30 PM",
      subject: "Calculus I",
      location: "Lecture Hall B",
      attendance: "Present",
    },
    {
      id: 3,
      time: "2:00 PM - 3:30 PM",
      subject: "English Composition",
      location: "Classroom C",
      attendance: "Absent",
    },
  ]
  const attendanceHistory = [
    { date: "2023-04-01", attendance: 95 },
    { date: "2023-04-02", attendance: 92 },
    { date: "2023-04-03", attendance: 90 },
    { date: "2023-04-04", attendance: 93 },
    { date: "2023-04-05", attendance: 94 },
    { date: "2023-04-06", attendance: 91 },
    { date: "2023-04-07", attendance: 92 },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 bg-muted/40 p-6">
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <Button
                variant={activeTab === "faculty" ? "primary" : "outline"}
                onClick={() => handleTabChange("faculty")}
              >
                Faculty
              </Button>
              <Button
                variant={activeTab === "student" ? "primary" : "outline"}
                onClick={() => handleTabChange("student")}
              >
                Student
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoveHorizontalIcon className="w-4 h-4 mr-2" />
                  Options
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Export Data</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {activeTab === "faculty" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facultySchedule.map((class_) => (
                    <TableRow key={class_.id}>
                      <TableCell>{class_.time}</TableCell>
                      <TableCell>{class_.subject}</TableCell>
                      <TableCell>{class_.location}</TableCell>
                      <TableCell>{class_.students}</TableCell>
                      <TableCell>
                        <Badge variant={class_.attendance === class_.students ? "secondary" : "outline"}>
                          {class_.attendance}/{class_.students}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          {activeTab === "student" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Your Schedule</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Attendance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentSchedule.map((class_) => (
                    <TableRow key={class_.id}>
                      <TableCell>{class_.time}</TableCell>
                      <TableCell>{class_.subject}</TableCell>
                      <TableCell>{class_.location}</TableCell>
                      <TableCell>
                        <Badge variant={class_.attendance === "Present" ? "secondary" : "outline"}>
                          {class_.attendance}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Attendance History</h2>
                <LineChart data={attendanceHistory} xDataKey="date" yDataKey="attendance" height={300} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}
