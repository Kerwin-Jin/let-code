import Navbar from '@/components/navbar'
import Workspace from '@/components/workspace'
import useProblemsData from '@/hooks/useProblemsData'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Problem() {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const { problemData } = useProblemsData()

  console.log('%c Line:8 🍉', 'color:#6ec1c2', params, problemData)
  return (
    <div className="w-screen h-screen bg-gray-900">
      <Navbar isProblemPage />
      <Workspace />
    </div>
  )
}
