import { motion } from 'framer-motion'
import { useState } from 'react'

const TabsComponent = ({
  tabs,
  onClick
}: {
  tabs: Array<{ id: string; label: string }>
  onClick: (id: string) => void
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id)
            onClick(tab.id)
          }}
          className={`${activeTab === tab.id ? '' : 'hover:text-black'
            } relative rounded-full px-3 py-1.5 text-sm font-medium outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent'
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 60 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="font-bold text-md">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
export default TabsComponent
