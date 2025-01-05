import { useEffect, useState } from 'react'

import { loginDemoUser } from 'utils/demoapp.utils'
import Auth from './pages/Auth'
import Home from './pages/Home'

import 'antd/dist/antd.css'
import './styles/AntdStyles/Common.css'
import './styles/index.css'

const App = () => {
  const user_uid = localStorage.getItem('user_uid')
  const isDemoApp = import.meta.env.VITE_DEMO_APP === 'true'

  useEffect(() => {
    if (isDemoApp) loginDemoUser()
  }, [])

  useEffect(() => {
    if (!user_uid && isDemoApp) window.location.reload()
  }, [user_uid])

  if (isDemoApp) return <div className="App">{<Home />}</div>
  return <div className="App">{user_uid === null ? <Auth /> : <Home />}</div>
}

export default App
