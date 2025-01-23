import useAuthModalStore, { AuthModalType } from '@/store/useAuthModalStore'
import { ChangeEvent, useState } from 'react'

export default function SignIn() {
  const { openModal } = useAuthModalStore((state) => ({ ...state }))
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

  const openCreateModal = () => {
    openModal(AuthModalType.Register)
  }

  const openResetModal = () => {
    openModal(AuthModalType.Reset)
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
        登录
      </button>
      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
          onClick={openResetModal}
        >
          忘了密码？
        </a>
      </button>
      <div className="text-sm font-medium text-gray-500">
        没有账号？
        <a href="#" className="text-blue-700 hover:underline" onClick={openCreateModal}>
          立即创建
        </a>
      </div>
    </div>
  )
}
