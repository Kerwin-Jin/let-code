import React, { useEffect, useState } from 'react'
import { BiRefresh } from 'react-icons/bi'
import { FcClock, FcRefresh } from 'react-icons/fc'
import { FiRefreshCcw } from 'react-icons/fi'
import { FaRegClock } from 'react-icons/fa6'

export default function Timer() {
  const [showTimer, setShowTimer] = useState(false)
  const [second, setSecond] = useState(0)

  useEffect(() => {
    let intervalId: any = null
    if (showTimer) {
      intervalId = setInterval(() => {
        setSecond((s) => s + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [showTimer])

  const fmtTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  return (
    <div className="flex items-center text-gray-300 mr-3">
      {!showTimer ? (
        <div
          onClick={() => {
            setShowTimer(true)
          }}
        >
          <FaRegClock size={24} color="#fff" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="">{fmtTime(second)}</div>
          <div className="cursor-pointer">
            <FiRefreshCcw
              onClick={() => {
                setShowTimer(false)
                setSecond(0)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
