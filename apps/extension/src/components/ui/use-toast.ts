// Copied from https://ui.shadcn.com/docs/components/toast
import { useEffect, useState } from "react"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToastActionElement = React.ReactElement

export type Toast = {
     id: string
     title?: React.ReactNode
     description?: React.ReactNode
     action?: ToastActionElement
     variant?: "default" | "destructive"
}

const actionTypes = {
     ADD_TOAST: "ADD_TOAST",
     UPDATE_TOAST: "UPDATE_TOAST",
     DISMISS_TOAST: "DISMISS_TOAST",
     REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function generateId() {
     return `${count++}`
}

export type ToasterToast = Toast & {
     id: string
     title?: React.ReactNode
     description?: React.ReactNode
     action?: ToastActionElement
}

type Action =
     | {
          type: typeof actionTypes.ADD_TOAST
          toast: ToasterToast
     }
     | {
          type: typeof actionTypes.UPDATE_TOAST
          toast: Partial<ToasterToast> & { id: string }
     }
     | {
          type: typeof actionTypes.DISMISS_TOAST
          toastId?: string
     }
     | {
          type: typeof actionTypes.REMOVE_TOAST
          toastId?: string
     }

interface State {
     toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
     switch (action.type) {
          case actionTypes.ADD_TOAST:
               return {
                    ...state,
                    toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
               }

          case actionTypes.UPDATE_TOAST:
               return {
                    ...state,
                    toasts: state.toasts.map((t) =>
                         t.id === action.toast.id ? { ...t, ...action.toast } : t
                    ),
               }

          case actionTypes.DISMISS_TOAST: {
               const { toastId } = action

               if (toastId) {
                    toastTimeouts.forEach((_, key) => {
                         if (key === toastId) {
                              toastTimeouts.delete(key)
                         }
                    })
               } else {
                    toastTimeouts.forEach((_, key) => {
                         toastTimeouts.delete(key)
                    })
               }

               return {
                    ...state,
                    toasts: state.toasts.map((t) =>
                         t.id === toastId || toastId === undefined
                              ? {
                                   ...t,
                                   open: false,
                              }
                              : t
                    ),
               }
          }
          case actionTypes.REMOVE_TOAST:
               if (action.toastId === undefined) {
                    return {
                         ...state,
                         toasts: [],
                    }
               }
               return {
                    ...state,
                    toasts: state.toasts.filter((t) => t.id !== action.toastId),
               }
     }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
     memoryState = reducer(memoryState, action)
     listeners.forEach((listener) => {
          listener(memoryState)
     })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
     const id = generateId()

     const update = (props: ToasterToast) =>
          dispatch({
               type: actionTypes.UPDATE_TOAST,
               toast: { ...props, id },
          })
     const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

     dispatch({
          type: actionTypes.ADD_TOAST,
          toast: {
               ...props,
               id,
               open: true,
               onOpenChange: (open: boolean) => {
                    if (!open) dismiss()
               },
          },
     })

     return {
          id,
          dismiss,
          update,
     }
}

function useToast() {
     const [state, setState] = useState<State>(memoryState)

     useEffect(() => {
          listeners.push(setState)
          return () => {
               const index = listeners.indexOf(setState)
               if (index > -1) {
                    listeners.splice(index, 1)
               }
          }
     }, [state])

     return {
          ...state,
          toast,
          dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
     }
}

export { toast, useToast } 
