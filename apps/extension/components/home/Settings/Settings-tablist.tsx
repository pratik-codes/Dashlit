"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {settingsTabHeaders } from "@/utils/commonData"
import BackgroundTabs from "./Background/Background-tab-content"
import {PreferenceTabContent} from "./Preference/Preference-tab-content"
import QuotesTabs from "./Quotes/Quotes-tab-content"
import KeymapsTabContent from "./keymaps/Keymaps-tab-content"
import Contact from "./Contact/Contact"

export default function SettingsTablist() {
  const [activeTab, setActiveTab] = useState("preference");
  return (
    <div className="w-full max-w-3xl mx-auto bg-black text-white p-6 rounded-lg">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-900 rounded-full p-1">
          {settingsTabHeaders.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase()}
              className={`rounded-full ${
                activeTab === tab.toLowerCase() ? "bg-white text-black" : "text-white"
              }`}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="preference" className="mt-6">
          <PreferenceTabContent/>
        </TabsContent>
        <TabsContent value="background" className="mt-6">
          <BackgroundTabs/>
        </TabsContent>
        <TabsContent value="quotes" className="mt-6">
          <QuotesTabs/>
        </TabsContent>
        <TabsContent value="keymaps" className="mt-6">
          <KeymapsTabContent/>
        </TabsContent>
        <TabsContent value="contact us" className="mt-6">
          <Contact/>
        </TabsContent>
      </Tabs>
    </div>
  )
}