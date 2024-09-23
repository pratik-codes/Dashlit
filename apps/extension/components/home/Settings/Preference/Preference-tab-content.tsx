import React,{useState} from 'react'
import { Switch } from "@/components/ui/switch"
import { settingsBackgroundData} from "@/utils/commonData"

type Toggle = {
    id: string;
    icon: React.ElementType;
    label: string;
    enabled: boolean;
  }

export const PreferenceTabContent = () => {
  const [toggles, setToggles] = useState<Toggle[]>(settingsBackgroundData);
  const handleToggle = (id: string) => {
    setToggles(toggles.map(toggle => 
      toggle.id === id ? { ...toggle, enabled: !toggle.enabled } : toggle
    ))
  }
  return (
    <div className="grid grid-cols-2 gap-4">
            {toggles.map((toggle) => (
              <div key={toggle.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mx-2">
                  <toggle.icon className="text-gray-400" />
                  <span className="text-sm">{toggle.label}</span>
                </div>
                <Switch 
                  checked={toggle.enabled}
                  onCheckedChange={() => handleToggle(toggle.id)}
                />
              </div>
            ))}
          </div>
  )
}
