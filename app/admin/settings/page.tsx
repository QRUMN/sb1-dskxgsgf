"use client"
import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function SettingsPage() {
  // General Settings State
  const [siteName, setSiteName] = useState('World Trade Compliance Training')
  const [siteDescription, setSiteDescription] = useState('Global platform for international trade regulations and compliance training')
  const [isGeneralSaving, setIsGeneralSaving] = useState(false)
  
  // Security Settings State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [passwordExpiry, setPasswordExpiry] = useState(90)
  const [isSecuritySaving, setIsSecuritySaving] = useState(false)
  
  // Notification Settings State
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [isNotificationSaving, setIsNotificationSaving] = useState(false)

  // Save handlers with simulated API calls
  const saveGeneralSettings = async () => {
    setIsGeneralSaving(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Settings Saved",
        description: "General settings have been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save general settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGeneralSaving(false)
    }
  }

  const saveSecuritySettings = async () => {
    setIsSecuritySaving(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Security Settings Updated",
        description: "Your security preferences have been saved.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save security settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSecuritySaving(false)
    }
  }

  const saveNotificationSettings = async () => {
    setIsNotificationSaving(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Notification Preferences Saved",
        description: "Your notification settings have been updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save notification settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsNotificationSaving(false)
    }
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
                  disabled={isGeneralSaving}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  placeholder="Enter site description"
                  disabled={isGeneralSaving}
                />
              </div>
              <Button 
                onClick={saveGeneralSettings} 
                disabled={isGeneralSaving}
              >
                {isGeneralSaving && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save General Settings
              </Button>
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
                  disabled={isSecuritySaving}
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
                  disabled={isSecuritySaving}
                />
              </div>
              <Button 
                onClick={saveSecuritySettings} 
                disabled={isSecuritySaving}
              >
                {isSecuritySaving && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save Security Settings
              </Button>
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
                  disabled={isNotificationSaving}
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
                  disabled={isNotificationSaving}
                />
              </div>
              <Button 
                onClick={saveNotificationSettings} 
                disabled={isNotificationSaving}
              >
                {isNotificationSaving && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save Notification Settings
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 