// eslint-disable-next-line react/prop-types
export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

