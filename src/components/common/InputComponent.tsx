const InputComponent = (props: any) => {
  const { inputType = 'primary', enterClickHandler } = props

  return (
    <input
      onKeyDown={(e) => {
        e.code === 'Enter' && enterClickHandler && enterClickHandler()
      }}
      {...props}
      className={`rounded-[15px] flex focus:outline-none font-bold my-2 placeholder-white placeholder-opacity-50 px-3 py-2 relative text-gray-100 text-lg text-white w-full border-4 border-grey focus:border-4 focus:ring-border-purple focus:border-purple ${
        inputType == 'primary' ? 'bg-grey2' : 'bg-grey1'
      }`}
    />
  )
}

export default InputComponent
