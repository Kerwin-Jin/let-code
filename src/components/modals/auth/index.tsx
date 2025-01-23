import { IoClose } from 'react-icons/io5'
import SignIn from '../sign-in'
import useAuthModalStore, { AuthModalType } from '@/store/useAuthModalStore'
import SignUp from '../sign-up'
import ResetPassword from '../reset-password'

const formMap = {
  [AuthModalType.Login]: <SignIn />,
  [AuthModalType.Register]: <SignUp />,
  [AuthModalType.Reset]: <ResetPassword />,
}

export default function AuthModal() {
  const state = useAuthModalStore((state) => ({ ...state }))

  const handleClose = () => {
    state.closeModal()
  }

  const renderForm = () => {
    return formMap[state.bears.type]
  }

  return (
    <>
      <div
        className={`absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 ${state.bears.visible ? '' : 'hidden'}`}
      >
        <div className="px-6 pb-4 bg-gradient-to-b from-brand-orange to-slate-900 rounded-lg py-2.5 z-[3] sm:w-[450px] w-[450px]">
          <div className="flex justify-end text-white">
            <IoClose size={24} className="cursor-pointer" onClick={handleClose} />
          </div>
          {renderForm()}
        </div>
      </div>
    </>
  )
}
