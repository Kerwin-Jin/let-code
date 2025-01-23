import { JSX } from 'react'

interface IShowElementProps {
  when: boolean
  fallback?: JSX.Element | string
  children: JSX.Element
}

export default function ShowElement(props: IShowElementProps) {
  const { when, fallback = null, children } = props
  return when ? children : fallback
}
