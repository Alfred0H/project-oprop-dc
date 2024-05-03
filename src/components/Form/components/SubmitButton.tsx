import { Loader } from '@/components/Loader'


interface SubmitButtonProps {
  buttonText: string
  isLoading?: boolean
}

export function SubmitButton ({ buttonText, isLoading }: SubmitButtonProps) {
  return (
    <button
      className="mt-4 w-full bg-black text-white text-center rounded-md py-2 transition-all duration-300 border border-transparent flex items-center justify-center"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : buttonText}
    </button>

  )
}
