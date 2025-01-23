import useProblemsData from '@/hooks/useProblemsData'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginButton() {
  const nav = useNavigate()

  const toAuth = () => {
    nav('/auth')
  }
  return (
    <button
      onClick={toAuth}
      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      去登录
    </button>
  )
}
