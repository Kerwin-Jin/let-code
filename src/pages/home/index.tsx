import Navbar from '@/components/navbar'
import ReactBilibili from '@/components/react-bilibili'
import ShowElement from '@/components/show-element'
import useDownloadPdf from '@/hooks/useDownloadPdf'
import useProblemsData, { DifficultyColorMap, DifficultyType } from '@/hooks/useProblemsData'
import { useState } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'

export default function Home() {
  const { problemData } = useProblemsData()

  const data = cloneDeep(problemData)
  console.log('%c Line:16 🍌 data', 'color:#ffdd4d', data)

  const [visible, setVisible] = useState(false)
  const [bid, setBid] = useState('')
  const navigate = useNavigate()

  const { ref, downloadPdf } = useDownloadPdf()

  const viewDetail = (id: string) => {
    navigate(`/problem/${id}`)
    // toast.success('Woo, success', { position: 'top-center', autoClose: 2000, theme: 'dark' })
  }
  return (
    <div className="w-screen h-screen bg-gray-900">
      <Navbar />
      <div className="max-w-7xl m-auto bg-gray-900" ref={ref}>
        <h1 className="text-2xl text-center text-[#aaabb3] font-medium uppercase mb-5">
          &ldquo; Quality Over Quantity &rdquo; 👇
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-sm text-left text-gray-500 w-full max-w-[1200px] mx-auto px-2">
            <thead className="text-base text-gray-700 uppercase border-b ">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  状态
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  题目
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  等级
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  分类
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  解法
                </th>
              </tr>
            </thead>

            <tbody>
              {problemData.map((problem) => {
                return (
                  <tr key={problem.title} className="h-10 py-4 text-base hover:bg-gray-700">
                    <td className="text-green-500 px-2 py-4">
                      <BsCheckCircle />
                    </td>
                    <td className="cursor-pointer hover:text-blue-300" onClick={() => viewDetail(problem.id)}>
                      {problem.order + '.' + problem.title}
                    </td>
                    <td className={`${DifficultyColorMap[problem.difficulty as DifficultyType]}`}>
                      {DifficultyType[problem.difficulty]}
                    </td>
                    <td>{problem.category}</td>
                    <td>
                      <ShowElement when={Boolean(problem.videoId)} fallback={'敬请期待'}>
                        <AiFillYoutube
                          size={24}
                          className="cursor-pointer text-white hover:text-[#c2332b]"
                          onClick={() => {
                            setBid(problem.videoId)
                            setVisible(true)
                          }}
                        />
                      </ShowElement>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ReactBilibili
        bid={bid}
        visible={visible}
        onCancel={() => {
          setBid('')
          setVisible(false)
        }}
      />
    </div>
  )
}
