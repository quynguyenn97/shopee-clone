import { type } from 'os'
import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  autoComplete,
  name,
  register,
  rules,
  autoComplete
}: Props) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3  outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rules)}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage} </div>
    </div>
  )
}
