"use client"
import { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Save, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface SettingsState {
  general: {
    siteName: string
    siteDescription: string
    maintenanceMode: boolean
  }
  security: {
    twoFactorEnabled: boolean
    passwordExpiry: number
    loginAttempts: number
  }
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsState>({
    general: {
      siteName: 'World Trade Compliance Training',
      siteDescription: 'Global platform for international trade regulations and compliance training',
      maintenanceMode: false
    },
    security: {
      twoFactorEnabled: false,
      passwordExpiry: 90,
      loginAttempts: 3
    },
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  })
  
  const [loading, setLoading] = useState({
    general: false,
    security: false,
    notifications: false
  })

  const [hasChanges, setHasChanges] = useState({
    general: false,
    security: false,
    notifications: false
  })

  const [openSection, setOpenSection] = useState<string | null>("general")

  // Simulated API call
  const saveSettings = async (section: keyof typeof loading) => {
    setLoading(prev => ({ ...prev, [section]: true }))
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "Settings Updated",
        description: `${section.charAt(0).toUpperCase() + section.slice(1)} settings have been saved successfully.`,
      })
      
      setHasChanges(prev => ({ ...prev, [section]: false }))
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to save ${section} settings. Please try again.`,
        variant: "destructive",
      })
    } finally {
      setLoading(prev => ({ ...prev, [section]: false }))
    }
  }

  const updateSettings = (
    section: keyof SettingsState,
    key: string,
    value: any
  ) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
    setHasChanges(prev => ({ ...prev, [section]: true }))
  }

  const SettingSection = ({ 
    title, 
    section, 
    children 
  }: { 
    title: string
    section: string
    children: React.ReactNode 
  }) => (
    <Collapsible
      open={openSection === section}
      onOpenChange={() => setOpenSection(openSection === section ? null : section)}
      className="w-full"
    >
      <Card className="mb-4">
        <CollapsibleTrigger className="w-full">
          <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                openSection === section ? "transform rotate-180" : ""
              }`}
            />
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="p-4 md:p-6 pt-0">
            {children}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Admin Settings</h1>
      
      {/* General Settings */}
      <SettingSection title="General Settings" section="general">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName" className="text-sm md:text-base">Site Name</Label>
            <Input
              id="siteName"
              value={settings.general.siteName}
              onChange={(e) => updateSettings('general', 'siteName', e.target.value)}
              disabled={loading.general}
              className="text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteDescription" className="text-sm md:text-base">Site Description</Label>
            <Input
              id="siteDescription"
              value={settings.general.siteDescription}
              onChange={(e) => updateSettings('general', 'siteDescription', e.target.value)}
              disabled={loading.general}
              className="text-sm md:text-base"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <Label htmlFor="maintenanceMode" className="text-sm md:text-base">Maintenance Mode</Label>
              <p className="text-xs md:text-sm text-muted-foreground">
                Temporarily disable public access
              </p>
            </div>
            <Switch
              id="maintenanceMode"
              checked={settings.general.maintenanceMode}
              onCheckedChange={(checked) => updateSettings('general', 'maintenanceMode', checked)}
              disabled={loading.general}
            />
          </div>
          <Separator className="my-4" />
          <Button
            onClick={() => saveSettings('general')}
            disabled={loading.general || !hasChanges.general}
            className="w-full md:w-auto"
          >
            {loading.general ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </SettingSection>

      {/* Security Settings */}
      <SettingSection title="Security Settings" section="security">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <Label htmlFor="2fa" className="text-sm md:text-base">Two-Factor Authentication</Label>
              <p className="text-xs md:text-sm text-muted-foreground">
                Require 2FA for all admin accounts
              </p>
            </div>
            <Switch
              id="2fa"
              checked={settings.security.twoFactorEnabled}
              onCheckedChange={(checked) => updateSettings('security', 'twoFactorEnabled', checked)}
              disabled={loading.security}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordExpiry" className="text-sm md:text-base">Password Expiry (days)</Label>
            <Input
              id="passwordExpiry"
              type="number"
              value={settings.security.passwordExpiry}
              onChange={(e) => updateSettings('security', 'passwordExpiry', parseInt(e.target.value))}
              min={0}
              max={365}
              disabled={loading.security}
              className="text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loginAttempts" className="text-sm md:text-base">Max Login Attempts</Label>
            <Input
              id="loginAttempts"
              type="number"
              value={settings.security.loginAttempts}
              onChange={(e) => updateSettings('security', 'loginAttempts', parseInt(e.target.value))}
              min={1}
              max={10}
              disabled={loading.security}
              className="text-sm md:text-base"
            />
          </div>
          <Separator className="my-4" />
          <Button
            onClick={() => saveSettings('security')}
            disabled={loading.security || !hasChanges.security}
            className="w-full md:w-auto"
          >
            {loading.security ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </SettingSection>

      {/* Notification Settings */}
      <SettingSection title="Notification Settings" section="notifications">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <Label htmlFor="emailNotifications" className="text-sm md:text-base">Email Notifications</Label>
              <p className="text-xs md:text-sm text-muted-foreground">
                Send system notifications via email
              </p>
            </div>
            <Switch
              id="emailNotifications"
              checked={settings.notifications.email}
              onCheckedChange={(checked) => updateSettings('notifications', 'email', checked)}
              disabled={loading.notifications}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <Label htmlFor="pushNotifications" className="text-sm md:text-base">Push Notifications</Label>
              <p className="text-xs md:text-sm text-muted-foreground">
                Enable browser push notifications
              </p>
            </div>
            <Switch
              id="pushNotifications"
              checked={settings.notifications.push}
              onCheckedChange={(checked) => updateSettings('notifications', 'push', checked)}
              disabled={loading.notifications}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <Label htmlFor="smsNotifications" className="text-sm md:text-base">SMS Notifications</Label>
              <p className="text-xs md:text-sm text-muted-foreground">
                Send critical alerts via SMS
              </p>
            </div>
            <Switch
              id="smsNotifications"
              checked={settings.notifications.sms}
              onCheckedChange={(checked) => updateSettings('notifications', 'sms', checked)}
              disabled={loading.notifications}
            />
          </div>
          <Separator className="my-4" />
          <Button
            onClick={() => saveSettings('notifications')}
            disabled={loading.notifications || !hasChanges.notifications}
            className="w-full md:w-auto"
          >
            {loading.notifications ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </SettingSection>
    </div>
  )
} 