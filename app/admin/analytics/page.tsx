"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Users, BookOpen, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("week")

  const stats = {
    totalUsers: "2,847",
    activeUsers: "1,923",
    completionRate: "78%",
    revenue: "$12,847"
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Analytics</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant={timeframe === "week" ? "default" : "outline"}
              onClick={() => setTimeframe("week")}
              className="text-sm"
            >
              Week
            </Button>
            <Button
              variant={timeframe === "month" ? "default" : "outline"}
              onClick={() => setTimeframe("month")}
              className="text-sm"
            >
              Month
            </Button>
            <Button
              variant={timeframe === "year" ? "default" : "outline"}
              onClick={() => setTimeframe("year")}
              className="text-sm"
            >
              Year
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last {timeframe}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">
                +15.2% from last {timeframe}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completionRate}</div>
              <p className="text-xs text-muted-foreground">
                +7.3% from last {timeframe}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.revenue}</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last {timeframe}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] md:h-[400px] flex items-center justify-center text-muted-foreground">
              Chart placeholder - Add your preferred chart library
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 