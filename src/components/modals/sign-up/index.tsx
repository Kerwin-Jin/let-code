import useAuthModalStore, { AuthModalType } from '@/store/useAuthModalStore'
import { ChangeEvent, useState } from 'react'

export default function SignUp() {
  const [formValue, setFormValue] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const { openModal } = useAuthModalStore((state) => ({ openModal: state.openModal }))

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
      <div>
        <label htmlFor="username" className="text-sm font-medium block mb-2 text-gray-300">
          用户名
        </label>
        <input
          type="input"
          placeholder="请输入用户名"
          id="username"
          name="username"
          onChange={handleFormChange}
          className="border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
          密码
        </label>
        <input
          type="password"
          placeholder="*******"
          id="password"
          name="password"
          onChange={handleFormChange}
          className="border-2 outline-none sm:text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full text-white font-medium rounded-lg px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s transition"
      >
        注册
      </button>
      <div className="text-sm font-medium text-gray-500">
        已有账号？
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => {
            openModal(AuthModalType.Login)
          }}
        >
          去登录
        </a>
      </div>
    </div>
  )
}
