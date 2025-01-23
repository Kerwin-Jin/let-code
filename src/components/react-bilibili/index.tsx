import { AiFillCloseCircle } from 'react-icons/ai'
import React, { useEffect } from 'react'

interface IReactBilibiliProps {
  bid: string
  visible: boolean
  onCancel: () => void
}

export default function ReactBilibili({ bid, visible, onCancel }: IReactBilibiliProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleEsc)
  }, [])

  return (
    <div
      id="default-modal"
      className={`${visible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">题目讲解</h3>
            <AiFillCloseCircle onClick={onCancel} className="cursor-pointer" />
          </div>
          <div className="h-[400px] w-[600px] flex items-center justify-center">
            <video src="https://www.bilibili.com/video/BV16Q4y1m7Ew"></video>
          </div>
        </div>
      </div>
    </div>
  )
}
