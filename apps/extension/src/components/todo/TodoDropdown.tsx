'use client'

import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { ListTodo, CheckSquare, FileText, Menu, Send } from 'lucide-react'
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
import TodoComponent from './TodoComponent'

type SidebarOption = 'TODOS' | 'Notes'

const TodoDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true)
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
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <ListTodo className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] h-[80vh] p-0 overflow-hidden">
        <div className="flex h-full">
          <div
            className={`bg-secondary transition-all duration-300 ease-in-out ${
              isSidebarExpanded ? 'w-72' : 'w-20'
            }`}
          >
            <div className="flex flex-col h-full">
              <Button
                variant="ghost"
                size="icon"
                className={`mt-5 mb-4 justify-center items-center ${isSidebarExpanded ? "ml-[4%]" : "ml-[30%]"} `}
                onClick={toggleSidebar}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                className={`flex w-full mb-4 justify-start items-center transition-colors duration-150 ${
                  selectedOption === 'TODOS' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setSelectedOption('TODOS')}
              >
                <CheckSquare
                  className={`h-6 w-6 transition-all duration-200 ${
                    isSidebarExpanded ? 'mr-3' : 'mx-auto'
                  }`}
                />
                {isSidebarExpanded && 'TODOS'}
              </Button>
              <Button
                variant="ghost"
                className={`flex w-full mb-4 justify-start items-center transition-colors duration-150 ${
                  selectedOption === 'Notes' ? 'bg-primary text-primary-foreground' : ''
                }`}
                onClick={() => setSelectedOption('Notes')}
              >
                <FileText
                  className={`h-6 w-6 transition-all duration-200 ${
                    isSidebarExpanded ? 'mr-3' : 'mx-auto'
                  }`}
                />
                {isSidebarExpanded && 'Notes'}
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <div className="flex-shrink-0 p-8 pb-4 border-b bg-background">
              <h2 className="text-3xl font-bold">
                {selectedOption === 'TODOS' ? "Today's Tasks" : 'Notes'}
              </h2>
            </div>
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-8 space-y-6">
                  {selectedOption === 'TODOS' ? (
                    TODO_DATA.loading ? (
                      <div className="flex items-center justify-center h-32">
                        <span className="loading loading-spinner loading-lg"></span>
                      </div>
                    ) : TODO_DATA.data && TODO_DATA.data.length > 0 ? (
                      <AnimatePresence>
                        {TODO_DATA.data.map((todo: any) => (
                          <TodoComponent
                            key={todo.id}
                            todoId={todo.id}
                            todoName={todo.data.todoName}
                            checked={todo.data.checked}
                          />
                        ))}
                      </AnimatePresence>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-lg text-muted-foreground">No tasks found. Add a new task below!</p>
                      </div>
                    )
                  ) : (
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground">Notes feature coming soon. Stay tuned!</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
            <div className="flex-shrink-0 p-8 border-t bg-background">
              <div className="relative">
                <Input
                  ref={inputRef}
                  className="pr-12 py-6 text-lg bg-secondary/50 border-2 border-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10"
                  onClick={addItemHandler}
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TodoDropdown