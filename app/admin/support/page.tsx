"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Search, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const tickets = [
    {
      id: 1,
      user: "John Doe",
      subject: "Course Access Issue",
      status: "Open",
      priority: "High",
      created: "2024-03-10",
      lastUpdate: "2024-03-11"
    },
    {
      id: 2,
      user: "Jane Smith",
      subject: "Payment Problem",
      status: "In Progress",
      priority: "Medium",
      created: "2024-03-09",
      lastUpdate: "2024-03-10"
    },
    {
      id: 3,
      user: "Mike Johnson",
      subject: "Certificate Not Received",
      status: "Resolved",
      priority: "Low",
      created: "2024-03-08",
      lastUpdate: "2024-03-09"
    }
  ]

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/admin/dashboard">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold">Support Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tickets..." className="pl-8" />
              </div>

              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{ticket.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        From: {ticket.user}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Created: {ticket.created}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        ticket.status === 'Open' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : ticket.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last update: {ticket.lastUpdate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                New Ticket
              </Button>
              <Button className="w-full" variant="outline">
                <HelpCircle className="h-4 w-4 mr-2" />
                Knowledge Base
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Open Tickets</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg Response Time</span>
                <span className="font-medium">2.5 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Resolved Today</span>
                <span className="font-medium">8</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 