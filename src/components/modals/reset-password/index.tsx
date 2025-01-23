import React, { ChangeEvent, useState } from 'react'

export default function ResetPassword() {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = () => {
    if (formValue.email === '' || formValue.password === '') {
      alert('请输入邮箱和密码')
      return
    }
    console.log(formValue)
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
          邮箱
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="请输入邮箱地址"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          onChange={handleFormChange}
        />
      </div>

      <div className="flex justify-between items-end">
        <div className="flex-1">
          <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
            验证码
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="请输入邮箱地址"
            className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            onChange={handleFormChange}
          />
        </div>
        <a href="#" className="w-25 ml-10 text-brand-orange hover:underline">
          发送验证码
        </a>
      </div>

      <button
        onClick={handleLogin}
        className="w-full text-white font-medium rounded-lg px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s transition"
      >
        重置密码
      </button>
    </div>
  )
}
