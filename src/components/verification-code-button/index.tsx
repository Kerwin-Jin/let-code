import React, { useState, useEffect } from 'react'

interface VerificationCodeButtonProps {
  onSendCode: () => Promise<boolean> // 发送验证码的函数，返回一个Promise表示是否发送成功
  countdownSeconds?: number // 倒计时的秒数，默认为60秒
}

const VerificationCodeButton: React.FC<VerificationCodeButtonProps> = ({ onSendCode, countdownSeconds = 60 }) => {
  const [countdown, setCountdown] = useState<number>(0)
  const [isCounting, setIsCounting] = useState<boolean>(false)

  useEffect(() => {
    if (isCounting && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      setIsCounting(false)
    }
  }, [isCounting, countdown])

  const handleSendCode = async () => {
    const success = await onSendCode()
    if (success) {
      setCountdown(countdownSeconds)
      setIsCounting(true)
    }
  }

  return (
    <button
      onClick={handleSendCode}
      disabled={isCounting}
      style={{ cursor: isCounting ? 'not-allowed' : 'pointer' }}
      className="border rounded p-2 text-white"
    >
      {isCounting ? `${countdown}秒后重新发送` : '发送验证码'}
    </button>
  )
}

export default VerificationCodeButton
