import { v4 as uuidv4 } from 'uuid'
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase-config'

// global data used in the services
const userId = localStorage.getItem('user_uid')
// goinig inside userData and inside links
let TodoColRef: any
let userDataRef: any
if (userId) {
  userDataRef = doc(collection(db, 'userData'), userId)
  TodoColRef = collection(userDataRef, 'todo')
} else {
  console.error('userId is not defined')
}

// ====================== create a todo ==============================

// basic post function
// function to add links to the database
export const addTodoService = async (todoName: string): Promise<any> => {
  try {
    if (userId) {
      await addDoc(TodoColRef, {
        todoName: todoName,
        checked: false
      })
      return { success: true }
    }
  } catch (error: any) {
    return { error: error.message }
  }
}

// ====================== get user todo ==============================

// basic get function to get all user todos
export const getUserTodoService = async (): Promise<any> => {
  try {
    const querySnapshot = await getDocs(TodoColRef)
    const resData: any = []
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        data: doc.data()
      }
      resData.push(data)
    })
    return { success: true, data: resData }
  } catch (error: any) {
    return { error: error.message }
  }
}

// ====================== update user todo ==============================

// basic patch api to update user todo
export const updateUserTodoService = async (
  id: string,
  todoName: string,
  checked: boolean
): Promise<any> => {
  try {
    const todoDocRef = doc(TodoColRef, id)
    await updateDoc(todoDocRef, {
      todoName: todoName,
      checked: checked
    })
    return { success: true }
  } catch (err: any) {
    return { error: err.message }
  }
}

// ====================== delete user todo ==============================

// basic delete api to delete user link or folder
export const deleteUserTodoService = async (id: string): Promise<any> => {
  if (!id) {
    console.log('user not found while deleteing link')
  }
  try {
    const linksDocRef = doc(TodoColRef, id)
    await deleteDoc(linksDocRef)
    return { success: true }
  } catch (err: any) {
    return { error: err.message }
  }
}
