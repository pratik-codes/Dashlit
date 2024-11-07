import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Settings2, Trash } from 'lucide-react'
import { mutateDataHandler } from 'utils/demoapp.utils'
import {
  deleteUserTodoService,
  updateUserTodoService
} from '../../firebase/functions/TodoActions'
import { getTodoList } from '../../redux/Actions/User.actions'
import { Checkbox } from '@/components/ui/checkbox'

interface todo {
  todoId: string
  todoName: string
  checked: boolean
}

const TodoComponent: React.FC<todo> = ({ todoId, todoName, checked }) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [editTodo, setEditTodo] = React.useState(false)
  const [todoNameInput, setTodoNameInput] = React.useState(todoName)
  const [deleteAnimation, setDeleteAnimation] = useState(false)

  useEffect(() => {
    if (checked) setIsChecked(checked)
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch: any = useDispatch()

  const editHandler = () => {
    updateUserTodoService(todoId, todoNameInput, isChecked)
    dispatch(getTodoList())
    setEditTodo(false)
  }

  const deleteHandler = () => {
    setDeleteAnimation(true)
    setTimeout(() => {
      deleteUserTodoService(todoId)
      dispatch(getTodoList())
    }, 300)
  }

  useEffect(() => {
    if (editTodo && inputRef.current) {
      inputRef.current.focus()
    }
  }, [editTodo])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={deleteAnimation ? { opacity: 0, x: 300 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="group"
    >
      <div className="flex justify-between w-full items-center hover:bg-secondary/50 rounded-lg p-2">
        <div className="flex items-center flex-1 mr-2">
          <Checkbox
            className="mr-3"
            checked={isChecked}
            onCheckedChange={() => {
              setIsChecked(!isChecked)
              setEditTodo(false)
            }}
          />
          <div className="flex-1">
            {editTodo ? (
              <input
                ref={inputRef}
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 text-lg"
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
                  if (todoNameInput.trim() !== todoName) {
                    editHandler()
                  } else {
                    setEditTodo(false)
                    setTodoNameInput(todoName)
                  }
                }}
              />
            ) : (
              <div
                onClick={() => {
                  setIsChecked(!isChecked)
                  setEditTodo(false)
                }}
                className={`cursor-pointer text-lg ${isChecked ? 'line-through opacity-50' : ''}`}
                title={todoName}
              >
                {todoName.length > 25 ? todoName.substring(0, 25) + '...' : todoName}
              </div>
            )}
          </div>
        </div>

        <div className="focus:outline-none mx-1 mt-1 flex justify-center items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Settings2
            onClick={(e) => {
              e.stopPropagation()
              setEditTodo(true)
            }}
            className="h-6 w-6 hover:bg-secondary rounded-full p-1 cursor-pointer"
          />
          <Trash
            onClick={(e) => {
              e.stopPropagation()
              mutateDataHandler(deleteHandler)
            }}
            className="h-6 w-6 hover:bg-secondary rounded-full p-1 cursor-pointer text-destructive hover:text-destructive/90"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default TodoComponent