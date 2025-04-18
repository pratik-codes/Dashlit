import React, { ReactNode } from 'react'

interface SettingsItemProps {
     icon: ReactNode
     label: string
     description?: string
     children: ReactNode
}

const SettingsItem: React.FC<SettingsItemProps> = ({
     icon,
     label,
     description,
     children
}) => {
     return (
          <div className="flex items-center justify-between py-2 px-1">
               <div className="flex items-center gap-3">
                    <div className="text-gray-800 dark:text-gray-200">
                         {icon}
                    </div>
                    <div>
                         <p className="font-medium text-gray-800 dark:text-gray-200">
                              {label}
                         </p>
                         {description && (
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                   {description}
                              </p>
                         )}
                    </div>
               </div>
               <div>
                    {children}
               </div>
          </div>
     )
}

export default SettingsItem 
