"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, User, Bell, Shield, Upload } from "lucide-react"
import Link from "next/link"

export default function ProfileSettings() {
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    avatar: "/placeholder-avatar.jpg",
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30
    }
  })

  const handleSave = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold">Profile Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Change Avatar
                </Button>
              </div>
              
              <Separator />

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      name: e.target.value
                    })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      email: e.target.value
                    })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      phone: e.target.value
                    })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      {profileData.notifications.email ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                  <Switch
                    checked={profileData.notifications.email}
                    onCheckedChange={(value) => setProfileData({
                      ...profileData,
                      notifications: {
                        ...profileData.notifications,
                        email: value
                      }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      {profileData.notifications.push ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                  <Switch
                    checked={profileData.notifications.push}
                    onCheckedChange={(value) => setProfileData({
                      ...profileData,
                      notifications: {
                        ...profileData.notifications,
                        push: value
                      }
                    })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      {profileData.notifications.sms ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                  <Switch
                    checked={profileData.notifications.sms}
                    onCheckedChange={(value) => setProfileData({
                      ...profileData,
                      notifications: {
                        ...profileData.notifications,
                        sms: value
                      }
                    })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    {profileData.security.twoFactor ? "Enabled" : "Disabled"}
                  </p>
                </div>
                <Switch
                  checked={profileData.security.twoFactor}
                  onCheckedChange={(value) => setProfileData({
                    ...profileData,
                    security: {
                      ...profileData.security,
                      twoFactor: value
                    }
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    {profileData.security.sessionTimeout} minutes
                  </p>
                </div>
                <Input
                  type="number"
                  value={profileData.security.sessionTimeout}
                  onChange={(e) => setProfileData({
                    ...profileData,
                    security: {
                      ...profileData.security,
                      sessionTimeout: parseInt(e.target.value)
                    }
                  })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 