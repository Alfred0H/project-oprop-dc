import { StatusNotification } from '@/interfaces'

interface Props {
  status: StatusNotification
  msj: string | null
}

export const Notification = ({ status, msj }: Props) => {
  return (
    <div 
    className={`fixed bottom-0 right-0 mb-4 z-50 flex items-center animation-start-${status} h-12 px-4 transition-all duration-300 border border-gray-300 rounded-l-md`}
  >
    <p>{msj}</p>
  </div>
  )
}
