'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { CheckSquare, FileText, Menu, Send, Plus } from 'lucide-react'
import { mutateDataHandler } from 'utils/demoapp.utils'
import { addTodoService } from '../../firebase/functions/TodoActions'
import { getTodoList } from '../../redux/Actions/User.actions'
import { RootStore } from '../../redux/Store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
     Dialog,
     DialogContent,
     DialogTrigger,
} from '@/components/ui/dialog'
import SvgButton from '../common/button/SvgButton';
import TodoComponent from './TodoComponent'

type SidebarOption = 'TODOS' | 'Notes'

const TodoDropdown = () => {
     const [isOpen, setIsOpen] = React.useState(false)
     const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false)
     const [selectedOption, setSelectedOption] = React.useState<SidebarOption>('TODOS')
     const [inputValue, setInputValue] = React.useState('')
     const inputRef = React.useRef<HTMLInputElement>(null)

     const TodoDataRedux: any = useSelector((state: RootStore) => state.userTodoData)
     const TODO_DATA = TodoDataRedux || { loading: false, data: [] }

     const dispatch: any = useDispatch()

     const addItemHandler = React.useCallback(() => {
          if (selectedOption === 'TODOS' && inputValue.trim()) {
               mutateDataHandler(() => {
                    addTodoService(inputValue)
                    dispatch(getTodoList())
               })
               setInputValue('')
          } else if (selectedOption === 'Notes') {
               console.log('Adding note:', inputValue)
               setInputValue('')
          }
     }, [selectedOption, inputValue, dispatch])

     React.useEffect(() => {
          if (isOpen) {
               dispatch(getTodoList())
          }
     }, [isOpen, dispatch])

     const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded)

     return (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
               <DialogTrigger asChild>
                    <div>
                         {/* <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                         > */}
                         <SvgButton type="todo" position="bottom-0 right-0" cta="Todos" />
                         {/* </motion.div> */}
                    </div>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[1000px] h-[80vh] p-0 overflow-hidden rounded-xl border-0 shadow-[0_0_40px_rgba(0,0,0,0.1)]">
                    <motion.div
                         className="flex h-full"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3 }}
                    >
                         <motion.div
                              className={`bg-black/5 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isSidebarExpanded ? 'w-64' : 'w-20'
                                   }`}
                              layout
                         >
                              <div className="flex flex-col h-full p-2">
                                   <motion.div
                                        whileHover={{ rotate: isSidebarExpanded ? -180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="self-start"
                                   >
                                        <Button
                                             variant="ghost"
                                             size="icon"
                                             className="mb-6 mt-3 h-10 w-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                                             onClick={toggleSidebar}
                                        >
                                             <Menu className="h-8 w-8" />
                                        </Button>
                                   </motion.div>

                                   <motion.div className="space-y-2">
                                        <motion.div
                                             whileHover={{ scale: 1.03, x: 3 }}
                                             whileTap={{ scale: 0.97 }}
                                             transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        >
                                             <Button
                                                  variant="ghost"
                                                  className={`w-full justify-start rounded-lg py-6 transition-all ${selectedOption === 'TODOS'
                                                       ? 'bg-primary/90 text-primary-foreground shadow-md'
                                                       : 'hover:bg-black/5 dark:hover:bg-white/5'
                                                       }`}
                                                  onClick={() => setSelectedOption('TODOS')}
                                             >
                                                  <CheckSquare
                                                       className={`transition-all duration-200 ${isSidebarExpanded ? 'mr-3 h-5 w-5' : 'mx-auto h-6 w-6'
                                                            }`}
                                                  />
                                                  {isSidebarExpanded && (
                                                       <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                       >
                                                            TODOS
                                                       </motion.span>
                                                  )}
                                             </Button>
                                        </motion.div>

                                        <motion.div
                                             whileHover={{ scale: 1.03, x: 3 }}
                                             whileTap={{ scale: 0.97 }}
                                             transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                        >
                                             <Button
                                                  variant="ghost"
                                                  className={`w-full justify-start rounded-lg py-6 transition-all ${selectedOption === 'Notes'
                                                       ? 'bg-primary/90 text-primary-foreground shadow-md'
                                                       : 'hover:bg-black/5 dark:hover:bg-white/5'
                                                       }`}
                                                  onClick={() => setSelectedOption('Notes')}
                                             >
                                                  <FileText
                                                       className={`transition-all duration-200 ${isSidebarExpanded ? 'mr-3 h-5 w-5' : 'mx-auto h-6 w-6'
                                                            }`}
                                                  />
                                                  {isSidebarExpanded && (
                                                       <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                       >
                                                            Notes
                                                       </motion.span>
                                                  )}
                                             </Button>
                                        </motion.div>
                                   </motion.div>
                              </div>
                         </motion.div>

                         <div className="flex-1 flex flex-col h-full bg-white dark:bg-gray-950">
                              <motion.div
                                   className="flex-shrink-0 px-8 py-6 border-b border-gray-100 dark:border-gray-800"
                                   initial={{ opacity: 0, y: -10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.1 }}
                              >
                                   <h2 className="text-3xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        {selectedOption === 'TODOS' ? "Tasks" : 'Notes'}
                                   </h2>
                              </motion.div>

                              <motion.div
                                   className="flex-1 overflow-hidden"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ delay: 0.2 }}
                              >
                                   <ScrollArea className="h-full">
                                        <div className="p-8 space-y-4">
                                             {selectedOption === 'TODOS' ? (
                                                  TODO_DATA.loading ? (
                                                       <motion.div
                                                            className="flex items-center justify-center h-32"
                                                            animate={{ rotate: 360 }}
                                                            transition={{
                                                                 repeat: Infinity,
                                                                 duration: 1.5,
                                                                 ease: "linear"
                                                            }}
                                                       >
                                                            <span className="loading loading-spinner loading-lg text-primary"></span>
                                                       </motion.div>
                                                  ) : TODO_DATA.data && TODO_DATA.data.length > 0 ? (
                                                       <AnimatePresence mode="popLayout">
                                                            {TODO_DATA.data.map((todo: any, index: number) => (
                                                                 <motion.div
                                                                      key={todo.id}
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      animate={{ opacity: 1, y: 0 }}
                                                                      exit={{ opacity: 0, x: -50 }}
                                                                      transition={{
                                                                           type: 'spring',
                                                                           stiffness: 350,
                                                                           damping: 25,
                                                                           delay: index * 0.05
                                                                      }}
                                                                      className="mb-3"
                                                                 >
                                                                      <TodoComponent
                                                                           todoId={todo.id}
                                                                           todoName={todo.data.todoName}
                                                                           checked={todo.data.checked}
                                                                      />
                                                                 </motion.div>
                                                            ))}
                                                       </AnimatePresence>
                                                  ) : (
                                                       <motion.div
                                                            className="text-center py-12 px-4"
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                       >
                                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                                                 <Plus className="h-8 w-8 text-primary" />
                                                            </div>
                                                            <p className="text-lg text-gray-500 dark:text-gray-400">
                                                                 No tasks found. Add a new task below!
                                                            </p>
                                                       </motion.div>
                                                  )
                                             ) : (
                                                  <motion.div
                                                       initial={{ opacity: 0, y: 20 }}
                                                       animate={{ opacity: 1, y: 0 }}
                                                       className="text-center py-12 px-4"
                                                  >
                                                       <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                                            <FileText className="h-8 w-8 text-primary" />
                                                       </div>
                                                       <p className="text-lg text-gray-500 dark:text-gray-400">
                                                            Notes feature coming soon. Stay tuned!
                                                       </p>
                                                  </motion.div>
                                             )}
                                        </div>
                                   </ScrollArea>
                              </motion.div>

                              <motion.div
                                   className="flex-shrink-0 p-6 border-t border-gray-100 dark:border-gray-800"
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.3 }}
                              >
                                   <motion.div
                                        className="relative"
                                        whileHover={{ y: -2 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                   >
                                        <Input
                                             ref={inputRef}
                                             className="pr-12 py-7 text-base rounded-xl bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
                                             placeholder={`Add new ${selectedOption === 'TODOS' ? 'todo' : 'note'}...`}
                                             value={inputValue}
                                             onChange={(e) => setInputValue(e.target.value)}
                                             onKeyDown={(e) => {
                                                  if (e.key === 'Enter') {
                                                       e.preventDefault()
                                                       addItemHandler()
                                                  }
                                             }}
                                        />
                                        <motion.div
                                             className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                             whileHover={{ scale: 1.1, rotate: 5 }}
                                             whileTap={{ scale: 0.9 }}
                                        >
                                             <Button
                                                  size="icon"
                                                  className={`h-10 w-10 rounded-full ${inputValue.trim()
                                                       ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                                       : 'bg-gray-200 dark:bg-gray-800 text-gray-400'
                                                       } transition-colors duration-200`}
                                                  onClick={addItemHandler}
                                                  disabled={!inputValue.trim()}
                                             >
                                                  <Send className="h-5 w-5" />
                                             </Button>
                                        </motion.div>
                                   </motion.div>
                              </motion.div>
                         </div>
                    </motion.div>
               </DialogContent>
          </Dialog>
     )
}

export default TodoDropdown
