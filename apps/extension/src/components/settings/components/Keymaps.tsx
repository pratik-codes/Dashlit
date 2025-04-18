import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Link2, Search, Settings, ListTodo } from "lucide-react"

const SwitchPill = ({ text, sign }: { text: string; sign: string }) => {
     return (
          <>
               <Badge variant="outline" className="mx-1 px-2 py-1 font-mono text-sm dark:border-gray-700 dark:text-gray-200">
                    {text}
               </Badge>
               {sign && <span className="text-foreground mx-1 font-bold dark:text-gray-300">{sign}</span>}
          </>
     )
}

const SingleKeyMap = ({
     keyMapName,
     metaKeys,
     triggerKeys,
     icon,
     desc
}: {
     desc: string
     icon: string
     keyMapName: string
     metaKeys: Array<{ name: string; sign: string }>
     triggerKeys: Array<{ name: string; sign: string }>
}) => {
     const IconComponent = () => {
          switch (icon) {
               case 'search': return <Search className="h-5 w-5 text-primary dark:text-gray-300" />;
               case 'link': return <Link2 className="h-5 w-5 text-primary dark:text-gray-300" />;
               case 'todo': return <ListTodo className="h-5 w-5 text-primary dark:text-gray-300" />;
               case 'settings': return <Settings className="h-5 w-5 text-primary dark:text-gray-300" />;
               default: return <Home className="h-5 w-5 text-primary dark:text-gray-300" />;
          }
     }

     return (
          <Card className="w-full h-full dark:bg-gray-800 dark:border-gray-700">
               <CardContent className="p-6">
                    <div className="flex space-x-4 items-start mb-4">
                         <div className="flex justify-center rounded-full p-2 bg-primary/10 dark:bg-gray-700">
                              <IconComponent />
                         </div>
                         <div>
                              <CardTitle className="text-lg dark:text-gray-200">{keyMapName}</CardTitle>
                              <CardDescription className="dark:text-gray-400">{desc}</CardDescription>
                         </div>
                    </div>
                    <div className="flex flex-wrap items-center mt-4">
                         {metaKeys.map((metaKey, idx) => (
                              <SwitchPill key={`meta-${idx}`} text={metaKey.name} sign={metaKey.sign} />
                         ))}
                         <span className="mx-2 font-bold text-foreground dark:text-gray-300">+</span>
                         {triggerKeys.map((triggerKey, idx) => (
                              <SwitchPill key={`trigger-${idx}`} text={triggerKey.name} sign={triggerKey.sign} />
                         ))}
                    </div>
               </CardContent>
          </Card>
     )
}

const KeymapsData = [
     {
          name: 'Open Searchbar',
          desc: 'Open the searchbar to search for your bookmarks.',
          icon: 'search',
          metaKeys: [
               { name: 'CTRL', sign: '/' },
               { name: 'CMD', sign: '/' },
               { name: 'SHIFT', sign: '' }
          ],
          triggerKeys: [
               { name: 'K', sign: '/' },
               { name: 'P', sign: '' }
          ]
     },
     {
          name: 'Open Links',
          desc: "Open the links you've saved.",
          icon: 'link',
          metaKeys: [
               { name: 'CTRL', sign: '/' },
               { name: 'CMD', sign: '/' },
               { name: 'SHIFT', sign: '' }
          ],
          triggerKeys: [{ name: 'H', sign: '' }]
     },
     {
          name: 'Open Todo',
          desc: 'Open the todo list.',
          icon: 'todo',
          metaKeys: [
               { name: 'CTRL', sign: '/' },
               { name: 'CMD', sign: '/' },
               { name: 'SHIFT', sign: '' }
          ],
          triggerKeys: [{ name: 'M', sign: '' }]
     },
     {
          name: 'Open Settings',
          desc: 'Open the settings panel.',
          icon: 'settings',
          metaKeys: [
               { name: 'CTRL', sign: '/' },
               { name: 'CMD', sign: '/' },
               { name: 'SHIFT', sign: '' }
          ],
          triggerKeys: [{ name: 'J', sign: '' }]
     }
]

const Keymaps = () => {
     return (
          <Card className="w-full h-full rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
               <CardHeader className="px-0">
                    <CardTitle className="text-2xl font-bold dark:text-gray-100">Keymaps</CardTitle>
                    <CardDescription className="dark:text-gray-400">
                         Keyboard shortcuts to navigate the platform
                    </CardDescription>
               </CardHeader>
               <CardContent className="px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                         {KeymapsData.map((keymap, index) => (
                              <SingleKeyMap
                                   key={index}
                                   desc={keymap.desc}
                                   icon={keymap.icon}
                                   keyMapName={keymap.name}
                                   metaKeys={keymap.metaKeys}
                                   triggerKeys={keymap.triggerKeys}
                              />
                         ))}
                    </div>
               </CardContent>
          </Card>
     )
}

export default Keymaps
