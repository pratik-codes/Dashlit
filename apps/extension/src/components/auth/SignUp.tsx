import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Button from 'components/common/button/button'
import InputComponent from 'components/common/InputComponent'

import {
  signInHandler,
  signUpHandler
} from '../../firebase/functions/AuthActions'
import triggerMessage from '../common/SnackBar'
import { googleAuthHandler } from './utils'
export interface signUpProps {
  setActiveView: any
}

const SignUp: React.FC<signUpProps> = ({ setActiveView }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const clickHandler = async () => {
    const res = await signUpHandler(email, password, confirmPassword)
    if (res.success) {
      triggerMessage('Sign Up Successful', 'success')
      signInHandler(email, password)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else {
      triggerMessage(res.error, 'fail')
    }
  }

  return (
    <>
      <div className="w-full">
        <form className="pt-6  mb-4">
          <h1 className="font-bold text-white text-2xl">Hi, Welcome!</h1>
          <p className="text-sm text-white text-opacity-60	">
            We are happy to have you here...
          </p>
          <br />
          <div className="mb-3">
            <InputComponent
              inputType="secondary"
              id="Email"
              type="text"
              onChange={(e: any) => setEmail(e.target.value)}
              enterClickHandler={clickHandler}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <InputComponent
              inputType="secondary"
              id="password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              enterClickHandler={clickHandler}
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <InputComponent
              inputType="secondary"
              id="confirmPassword"
              type="password"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              enterClickHandler={clickHandler}
            />
          </div>
          <br />
          <div className="flex flex-col">
            <Button onClick={clickHandler}>Sign Up</Button>
            <Button
              onClick={googleAuthHandler}
              type="secondary"
              className="my-4"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </Button>
            <p className="text-center text-white text-xs mt-4 flex justify-center">
              Already have a account?{' '}
              <div onClick={() => setActiveView('signin')}>
                <a className="text-indigo font-bold ml-2">Sign in</a>
              </div>
            </p>
          </div>
          <br />
          <p className="text-center text-white text-xs mt-8">
            &copy;2020 Dashlit. All rights reserved.
          </p>
        </form>
      </div>
    </>
  )
}

export default SignUp

SignUp.propTypes = {
  setActiveView: PropTypes.string.isRequired
}
