import React, { ReactNode } from 'react'

interface SettingsGroupProps {
     title: string
     icon: ReactNode
     children: ReactNode
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({
     title,
     icon,
     children
}) => {
     return (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-5">
               <div className="flex items-center gap-2 mb-4">
                    <div className="text-gray-800 dark:text-gray-200">
                         {icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                         {title}
                    </h3>
               </div>
               <div className="space-y-3">
                    {children}
               </div>
          </div>
     )
}

export default SettingsGroup 
