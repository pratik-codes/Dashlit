import Button from 'components/common/button/button'
import { animate, motion, stagger } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mutateDataHandler } from 'utils/demoapp.utils'
import { addTodoService } from '../../firebase/functions/TodoActions'
import { getTodoList } from '../../redux/Actions/User.actions'
import { RootStore } from '../../redux/Store'
import Loader from '../common/Loader'
import SvgButton from '../common/button/SvgButton'
import TodoComponent from './TodoComponent'

const TodoDropdown = ({
  openTasks,
  setOpenTasks
}: {
  openTasks: boolean
  setOpenTasks: any
}) => {
  const [addTodoValue, setAddTodoValue] = useState('')
  const [addTodo, setAddTodo] = useState(false)

  const TodoDataLocalStorage = localStorage.getItem('TodoData')
  const TodoDataRedux: any = useSelector(
    (state: RootStore) => state.userTodoData
  )

  const TODO_DATA =
    { loading: false, data: JSON.parse(TodoDataLocalStorage || '{}') } ||
    TodoDataRedux

  const dispatch = useDispatch()

  const addTodoHandler = () => {
    addTodoService(addTodoValue)
    setAddTodoValue('')
    dispatch(getTodoList())
  }

  const inputRef: any = useRef()
  useEffect(() => {
    if (openTasks) {
      animate(
        '.todo-card',
        { y: -10, fillOpacity: 1 },
        { delay: stagger(0.1), type: 'spring', damping: 15, stiffness: 500 }
      )
    }
  }, [openTasks])

  return (
    <div>
      <div onClick={() => setOpenTasks(!openTasks)}>
        <SvgButton type="todo" position="bottom-0 right-0" cta="Todo" />
      </div>
      {openTasks && (
        <div
          className={`text-gray-700 pt-4 absolute bottom-0 right-0 mb-16 mr-6 todo-card`}
        >
          <ul className="bg-black rounded-[18px] h-full w-full">
            <div
              style={{
                minWidth: '25rem',
                maxWidth: '25rem',
                minHeight: '20rem',
                maxHeight: '25rem',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
              className="w-full p-2"
            >
              <div className="flex my-auto">
                <h1 className="font-bold m-2 text-white  text-lg">Today</h1>
                {/* <div className="div my-auto">
                <Svg type="dropdown" />
              </div> */}
              </div>
              <div className="h-full w-full">
                <div>
                  {TODO_DATA.data ? (
                    TODO_DATA.data.map((link: any) => {
                      return (
                        <motion.li
                          className="w-full"
                          key={link.id}
                          initial={{ y: 0, opacity: 0, x: 120 }}
                          animate={{ y: 0, opacity: 1, x: -5 }}
                          exit={{ y: 10, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <TodoComponent
                            todoId={link.id}
                            todoName={link.data.todoName}
                            checked={link.data.checked}
                          />
                        </motion.li>
                      )
                    })
                  ) : (
                    <Loader />
                  )}
                </div>
                {TODO_DATA.loading === false && TODO_DATA.data.length === 0 && (
                  <div className="absolute flex h-full inset-0 items-center justify-center w-full">
                    <h1 className="my-auto text-white  text-sm">
                      No Todo found.
                    </h1>
                    <Button
                      type="secondary"
                      onClick={() => {
                        setAddTodo(true)
                        setTimeout(() => {
                          inputRef.current.focus()
                        }, 500)
                      }}
                      className="focus:outline-none font-bold ml-2 p-1 px-2 rounded-full text-sm text-white hover:underline"
                    >
                      Add todo
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div>
              {(addTodo || TODO_DATA?.data?.length > 0) && (
                <input
                  className="bg-transparent border-none focus:outline-none m-1 p-1 text-white w-full ml-2"
                  placeholder="Add todo here..."
                  ref={inputRef}
                  value={addTodoValue}
                  onChange={(e) => setAddTodoValue(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' &&
                    mutateDataHandler(() => addTodoHandler())
                  }
                />
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default TodoDropdown
