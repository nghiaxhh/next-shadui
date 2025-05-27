'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './animations.css'
import LoginForm from './components/login-form'
import RegisterForm from './components/register-form'

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-br from-indigo-400 via-blue-200 to-pink-200">
      <div className="backdrop-blur-xl bg-white/60 shadow-2xl rounded-2xl p-10 border border-white/40 fade-in">
        <div className="w-[600px] flex gap-10 overflow-hidden">
          {!isSignUp ? (
            <div className={`w-1/2 h-full slide-in-right `}>
              <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-gray-500 text-sm mb-6">
                  Sign in to continue your journey with us
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-sm border border-gray-100"
                  >
                    <i className="fa-brands fa-google text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    <i className="fa-brands fa-facebook-f text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                </div>
                <div className="relative w-full mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 relative before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-gray-600 after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-gray-600">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
              <LoginForm />
            </div>
          ) : (
            <div className="w-1/2 h-full" />
          )}
          {isSignUp ? (
            <div className={`w-1/2 h-full slide-in-left`}>
              <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Create Account
                </h1>
                <p className="text-gray-500 text-sm mb-2 text-center max-w-[280px]">
                  Join our community and start your journey with us. We&apos;re excited to have you
                  on board!
                </p>
              </div>
              <RegisterForm />
            </div>
          ) : (
            <div className="w-1/2 h-full" />
          )}

          <div
            className={`w-1/2 h-full z-10 absolute top-0 right-0 ${
              isSignUp ? 'right-to-left' : 'left-to-right'
            } h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 p-8`}
          >
            <div className="text-center mb-8">
              <Image
                src="https://ijs.gallerycdn.vsassets.io/extensions/ijs/reactnextjssnippets/1.6.0/1604011628777/Microsoft.VisualStudio.Services.Icons.Default"
                alt="Logo"
                width={100}
                height={100}
                className="mb-6 drop-shadow-lg scale-in mx-auto"
              />
              <h2 className="text-3xl font-bold text-white mb-4">
                {isSignUp ? 'Welcome Back!' : 'Join Us Today'}
              </h2>
              <p className="text-white/80 text-sm mb-8">
                {isSignUp
                  ? 'Sign in to access your account and continue your journey'
                  : 'Create an account to get started with our amazing features'}
              </p>
            </div>
            <Button
              onClick={() => setIsSignUp(!isSignUp)}
              className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
