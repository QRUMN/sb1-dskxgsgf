"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plus, Book, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function AdminCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "International Trade Basics",
      students: 234,
      duration: "8 weeks",
      status: "Active",
      lastUpdated: "2024-03-10"
    },
    {
      id: 2,
      title: "Export Documentation",
      students: 189,
      duration: "6 weeks",
      status: "Draft",
      lastUpdated: "2024-03-08"
    }
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Courses</h1>
        </div>
        <Button asChild>
          <Link href="/admin/courses/new">
            <Plus className="h-4 w-4 mr-2" />
            Create Course
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    course.status === 'Active' ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {course.status}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Updated {course.lastUpdated}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`/admin/courses/${course.id}`}>
                      Edit
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`/admin/courses/${course.id}/analytics`}>
                      Analytics
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 