import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import SvgButton from '../common/button/SvgButton'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Preference from '../settings/preferences/Preference'
import Background from '../settings/background/Background'
import Quotes from '../settings/quotes/Quotes'
import Keymaps from '../settings/components/Keymaps'

const tabs = [
     {
          id: '1',
          label: 'Preference'
     },
     {
          id: '2',
          label: 'Background'
     },
     {
          id: '3',
          label: 'Quotes'
     },
     {
          id: '4',
          label: 'Keymaps'
     },
     {
          id: '5',
          label: 'Contact us'
     }
]


export default function MainHomeModal() {
     const [open, setOpen] = useState(false)
     const [activeView, setActiveView] = useState('1')

     const renderGeneralView = () => (
          <div className="overflow-y-auto w-full">
               <Preference />
          </div>
     )

     return (
          <div>
               <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                         <div>
                              <SvgButton
                                   cta="Home"
                                   type="home"
                                   position={true ? 'bottom-0 left-0' : 'bottom-0 left-0'}
                              />
                         </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[70%] max-h-[95vh] overflow-y-none rounded-4xl overflow-hidden">
                         <main className="flex min-h-[90vh] flex-1 flex-col gap-4 bg-muted/40 dark:bg-black px-4 md:gap-8 md:px-10 py-2 overflow-y-none">
                              <div className="grid w-full max-w-6xl gap-1">
                                   <h1 className="text-3xl font-bold flex space-x-4 items-center mt-2">
                                        {/* <Home size={30} className='mr-1 mt-[3px]' /> */}
                                        Home
                                   </h1>
                                   <p className="text-lg text-gray-700 dark:text-gray-300 ">
                                        Personalize your home page with widgets and settings
                                   </p>
                              </div>
                              <hr className="border-t border-gray-300 dark:border-gray-700" />
                              <div className="grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] mt-4">
                                   <nav className="grid gap-4 text-sm">
                                        {tabs.map((tab) =>
                                             <Button
                                                  variant={activeView === tab.id ? 'default' : 'ghost'}
                                                  className="justify-start font-bold py-6 text-md hover:underline"
                                                  onClick={() => setActiveView(tab.id)}
                                             >
                                                  {tab.label}
                                             </Button>
                                        )}
                                   </nav>
                                   <ScrollArea>
                                        {activeView === '1' && renderGeneralView()}
                                        {activeView === '2' && <Background />}
                                        {activeView === '3' && <Quotes />}
                                        {activeView === '4' && <Keymaps />}
                                   </ScrollArea>
                              </div>
                         </main>
                    </DialogContent>
               </Dialog>
          </div>
     )
}
