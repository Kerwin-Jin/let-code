import AuthModal from '@/components/modals/auth'
import Navbar from '@/components/navbar'
import VerificationCodeButton from '@/components/verification-code-button'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const nav = useNavigate()

  const handleClick = () => {
    nav('/')
  }

  const handleSendCode = async () => {
    // 模拟发送验证码的异步操作
    console.log('验证码已发送')
    return true // 返回true表示发送成功
  }

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl m-auto">
        <Navbar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white text-center flex gap-3 mb-2">
            <div className="text-4xl font-bold">欢迎来到LetCode</div>
            <button
              type="button"
              onClick={handleClick}
              className="text-white bg-brand-orange hover:bg-brand-orange-s font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              开始做题
            </button>
          </div>
          <VerificationCodeButton onSendCode={handleSendCode} countdownSeconds={5} />
        </div>
        <AuthModal />
      </div>
    </div>
  )
}
