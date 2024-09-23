import {
    Clock,
    Calendar,
    Quote,
    Link,
    ClipboardList,
    Cloud,
    Search,
    Image,
    Mail,
    Zap
  } from "lucide-react"
  
export const settingsBackgroundData = [
    { id: "clock", icon: Clock, label: "Disable if you dont want to see clock on the home screen", enabled: true },
    { id: "date", icon: Calendar, label: "Disable if you dont want to see date on the home screen", enabled: true },
    { id: "quotes", icon: Quote, label: "Disable if you dont want to see quotes on the home screen", enabled: true },
    { id: "links", icon: Link, label: "Disable if you dont want to see links on the home screen", enabled: true },
    { id: "todo", icon: ClipboardList, label: "Disable if you dont want to see todo on the home screen", enabled: true },
    { id: "weather", icon: Cloud, label: "Disable if you dont want to see weather on the home screen", enabled: true },
    { id: "search", icon: Search, label: "Disable if you dont want to see search on the home screen", enabled: true },
    { id: "publicPicture", icon: Image, label: "Disable if you dont want to receive public picture on home", enabled: false },
    { id: "publicQuotes", icon: Quote, label: "Disable if you dont want to receive public quotes on home", enabled: true },
    { id: "calendar", icon: Calendar, label: "Disable if you dont want to see calendar on the home screen", enabled: true },
    { id: "emails", icon: Mail, label: "Disable if you dont want to see emails on the home screen", enabled: true },
    { id: "focus", icon: Zap, label: "Disable if you dont want to focus on home", enabled: true },
  ]

export const settingsTabHeaders = ["Preference", "Background", "Quotes", "Keymaps", "Contact Us"];  