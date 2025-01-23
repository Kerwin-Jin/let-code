import useAuthModalStore, { AuthModalType } from '@/store/useAuthModalStore'
import { useNavigate } from 'react-router-dom'
import Logo from '@/assets/logo.png'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'
import { CiClock1 } from 'react-icons/ci'
import Timer from '../timer'
import { CgProfile } from 'react-icons/cg'

interface INavbarProps {
  isProblemPage?: boolean
}
export default function Navbar({ isProblemPage }: INavbarProps) {
  const { openModal } = useAuthModalStore((state) => ({ openModal: state.openModal }))

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/auth')
    openModal(AuthModalType.Login)
  }

  const renderCenterControl = () => {
    if (!isProblemPage) {
      return null
    }

    return (
      <div className="text-white flex items-center gap-3 text-2xl">
        <div className="flex justify-center items-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="flex gap-2 items-center">
          <BsList />
          <span>Problem</span>
        </div>
        <div className="flex justify-center items-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
          <FaChevronRight />
        </div>
      </div>
    )
  }

  return (
    <div className={`${isProblemPage ? '' : 'max-w-7xl mx-auto'} flex justify-between items-center py-3 px-3`}>
      <div className="font-bold flex items-center text-white cursor-pointer" onClick={() => navigate('/home')}>
        <img className="w-8" src={Logo} alt="" />
        LetCode
      </div>

      {renderCenterControl()}

      <div className="flex justify-end items-center gap-2">
        <Timer />
        <CgProfile size={28} color="#fff" />
        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-brand-orange hover:bg-brand-orange-s font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          登录
        </button>
      </div>
    </div>
  )
}
