"use client"
import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  // General Settings State
  const [siteName, setSiteName] = useState('World Trade Compliance Training')
  const [siteDescription, setSiteDescription] = useState('Global platform for international trade regulations and compliance training')
  
  // Security Settings State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [passwordExpiry, setPasswordExpiry] = useState(90)
  
  // Notification Settings State
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  // Save handlers
  const saveGeneralSettings = () => {
    toast({
      title: "Settings Saved",
      description: "General settings have been updated successfully.",
    })
  }

  const saveSecuritySettings = () => {
    toast({
      title: "Security Settings Updated",
      description: "Your security preferences have been saved.",
    })
  }

  const saveNotificationSettings = () => {
    toast({
      title: "Notification Preferences Saved",
      description: "Your notification settings have been updated.",
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-card rounded-lg p-4">
        <div className="space-y-8">
          {/* General Settings */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">General Settings</h2>
            <div className="bg-background p-6 rounded-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="Enter site name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  placeholder="Enter site description"
                />
              </div>
              <Button onClick={saveGeneralSettings}>Save General Settings</Button>
            </div>
          </section>

          {/* Security Settings */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Security</h2>
            <div className="bg-background p-6 rounded-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="2fa">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  id="2fa"
                  checked={twoFactorEnabled}
                  onCheckedChange={setTwoFactorEnabled}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                <Input
                  id="passwordExpiry"
                  type="number"
                  value={passwordExpiry}
                  onChange={(e) => setPasswordExpiry(Number(e.target.value))}
                  min={0}
                  max={365}
                />
              </div>
              <Button onClick={saveSecuritySettings}>Save Security Settings</Button>
            </div>
          </section>

          {/* Notification Settings */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <div className="bg-background p-6 rounded-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pushNotifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications in browser
                  </p>
                </div>
                <Switch
                  id="pushNotifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <Button onClick={saveNotificationSettings}>Save Notification Settings</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 