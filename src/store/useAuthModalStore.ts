import { create } from 'zustand'

export enum AuthModalType {
  Login = 'login',
  Register = 'register',
  Reset = 'reset',
}

interface IAuthModalStore {
  bears: { visible: boolean; type: AuthModalType }
  openModal: (type: AuthModalType) => void
  closeModal: () => void
}

const initAuthModalStoreValue = {
  type: AuthModalType.Login,
  visible: false,
}

const useAuthModalStore = create<IAuthModalStore>((set) => ({
  bears: initAuthModalStoreValue,
  openModal: (type: AuthModalType) => {
    set((pre) => {
      return {
        ...pre,
        bears: {
          visible: true,
          type,
        },
      }
    })
  },
  closeModal: () => {
    set((pre) => {
      return {
        ...pre,
        bears: {
          visible: false,
          type: AuthModalType.Login,
        },
      }
    })
  },
}))

export default useAuthModalStore
