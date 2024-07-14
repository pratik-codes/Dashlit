import React, { useState } from 'react'
import flames from '../assets/images/flames.jpg'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import logo from '../../public/d-white.png'

const Auth: React.FC = () => {
  const [activeView, setActiveView] = useState('singin')

  return (
    <div className="h-screen flex justify-center flex-wrap content-center">
      <div
        style={{ borderRadius: '25px', background: '#202029' }}
        className="flex m-4 shadow-2xl w-10/12 p-6 bg-charcol-gray border hover:border-purple border-2 my-auto aspect-[16/8]"
      >
        <div className="w-5/12 my-auto">
          <div className="w-8/12 mx-auto">
            <div className="flex align-center space-x-2 items-center">
              <img className="rounded-lg" src={logo} height={25} width={25} />
              <h1 className="text-2xl text-white font-mono font-bold">
                Dashlit
              </h1>
            </div>
            <br />
            {activeView === 'signup' ? (
              <SignUp setActiveView={setActiveView} />
            ) : (
              <SignIn setActiveView={setActiveView} />
            )}
          </div>
        </div>

        <div className="w-7/12">
          <img
            style={{ borderRadius: '30px' }}
            src={flames}
            className="w-full h-full"
            alt="flames picture"
          />
        </div>
      </div>
    </div>
  )
}

export default Auth
