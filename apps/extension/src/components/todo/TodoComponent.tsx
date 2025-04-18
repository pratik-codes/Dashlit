import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Pencil, Trash2 } from 'lucide-react'
import { mutateDataHandler } from 'utils/demoapp.utils'
import {
     deleteUserTodoService,
     updateUserTodoService
} from '../../firebase/functions/TodoActions'
import { getTodoList } from '../../redux/Actions/User.actions'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TodoProps {
     todoId: string
     todoName: string
     checked: boolean
}

const TodoComponent: React.FC<TodoProps> = ({ todoId, todoName, checked }) => {
     const [isChecked, setIsChecked] = useState(checked)
     const [editTodo, setEditTodo] = useState(false)
     const [todoNameInput, setTodoNameInput] = useState(todoName)
     const [deleteAnimation, setDeleteAnimation] = useState(false)

     const inputRef = useRef<HTMLInputElement>(null)
     const dispatch: any = useDispatch()

     const editHandler = () => {
          if (todoNameInput.trim() !== '') {
               updateUserTodoService(todoId, todoNameInput, isChecked)
               dispatch(getTodoList())
               setEditTodo(false)
          }
     }

     const deleteHandler = () => {
          setDeleteAnimation(true)
          setTimeout(() => {
               deleteUserTodoService(todoId)
               dispatch(getTodoList())
          }, 300)
     }

     const handleCheckChange = (checked: boolean) => {
          setIsChecked(checked)
          updateUserTodoService(todoId, todoName, checked)
          dispatch(getTodoList())
     }

     useEffect(() => {
          if (editTodo && inputRef.current) {
               inputRef.current.focus()
          }
     }, [editTodo])

     return (
          <motion.div
               initial={{ opacity: 1, y: 0 }}
               animate={deleteAnimation
                    ? { opacity: 0, x: 300 }
                    : { opacity: 1, x: 0 }
               }
               transition={{ duration: 0.3, ease: 'easeInOut' }}
               className="group"
          >
               <div className={cn(
                    "flex justify-between w-full items-center rounded-lg p-3 border transition-colors",
                    "hover:bg-secondary/20 dark:hover:bg-gray-800/70 dark:border-gray-700",
                    editTodo && "bg-secondary/20 dark:bg-gray-800/70"
               )}>
                    <div className="flex items-center flex-1 mr-2">
                         <Checkbox
                              className="h-5 w-5 mr-4"
                              checked={isChecked}
                              onCheckedChange={handleCheckChange}
                         />
                         <div className="flex-1">
                              {editTodo ? (
                                   <Input
                                        ref={inputRef}
                                        className="border-0 shadow-none focus-visible:ring-1 bg-transparent p-0 h-auto text-base dark:text-gray-200"
                                        value={todoNameInput}
                                        onChange={(e) => setTodoNameInput(e.target.value)}
                                        onKeyDown={(e) => {
                                             if (e.key === 'Enter') {
                                                  editHandler()
                                             } else if (e.key === 'Escape') {
                                                  setEditTodo(false)
                                                  setTodoNameInput(todoName)
                                             }
                                        }}
                                        onBlur={() => {
                                             if (todoNameInput.trim() !== '' && todoNameInput.trim() !== todoName) {
                                                  editHandler()
                                             } else {
                                                  setEditTodo(false)
                                                  setTodoNameInput(todoName)
                                             }
                                        }}
                                   />
                              ) : (
                                   <div
                                        onClick={() => setEditTodo(true)}
                                        className={cn(
                                             "cursor-pointer text-base select-none",
                                             isChecked && "line-through opacity-60 dark:text-gray-400",
                                             !isChecked && "dark:text-gray-200"
                                        )}
                                        title={todoName}
                                   >
                                        {todoName}
                                   </div>
                              )}
                         </div>
                    </div>

                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                              onClick={() => setEditTodo(true)}
                         >
                              <Pencil className="h-4 w-4" />
                         </Button>
                         <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full text-destructive hover:text-destructive/90 dark:hover:bg-gray-700"
                              onClick={() => mutateDataHandler(deleteHandler)}
                         >
                              <Trash2 className="h-4 w-4" />
                         </Button>
                    </div>
               </div>
          </motion.div>
     )
}

export default TodoComponent
