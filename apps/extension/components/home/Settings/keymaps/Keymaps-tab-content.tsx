import { Search, Link, ClipboardList, Settings } from "lucide-react"

type Shortcut = {
  icon: React.ElementType;
  label: string;
  keys: string[];
}

const shortcuts: Shortcut[] = [
  { icon: Search, label: "Open Searchbar", keys: ["CTRL", "CMD", "SHIFT", "K", "P"] },
  { icon: Link, label: "Open Links", keys: ["CTRL", "CMD", "SHIFT", "H"] },
  { icon: ClipboardList, label: "Open Todo", keys: ["CTRL", "CMD", "SHIFT", "M"] },
  { icon: Settings, label: "Open Settings", keys: ["CTRL", "CMD", "SHIFT", "J"] },
]

const KeyButton = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-gray-700 text-white rounded-full">
    {children}
  </span>
)

const ShortcutCard = ({ shortcut }: { shortcut: Shortcut }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <div className="flex items-center mb-2">
      <shortcut.icon className="w-5 h-5 mr-2 text-gray-400" />
      <span className="text-white">{shortcut.label}</span>
    </div>
    <div className="flex items-center space-x-1">
      {shortcut.keys.map((key, index) => (
        <div key={index}>
          <KeyButton>{key}</KeyButton>
          {index < shortcut.keys.length - 1 && index !== 2 && (
            <span className="text-gray-500">/</span>
          )}
          {index === 2 && <span className="text-gray-500 mx-1">+</span>}
        </div>
      ))}
    </div>
  </div>
)

export default function KeymapsTabContent() {
  return (
    <div className="bg-black text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-1">Keymaps</h2>
      <p className="text-gray-400 mb-6">keybindings to use shortcuts on the platform</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shortcuts.map((shortcut, index) => (
          <ShortcutCard key={index} shortcut={shortcut} />
        ))}
      </div>
    </div>
  )
}