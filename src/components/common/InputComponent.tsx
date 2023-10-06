const InputComponent = (props: any) => {
  const TypeMap: any = {
    primary: 'bg-grey2 border-4',
    secondary: 'bg-grey1 border-4',
    trasparent: 'bg-transparent border-4',
    ghost: 'bg-transparent border-0'
  }

  const { inputType = 'primary', enterClickHandler, ref } = props

  return (
    <input
      onKeyDown={(e) => {
        e.code === 'Enter' && enterClickHandler && enterClickHandler()
      }}
      ref={ref}
      {...props}
      className={`rounded-[15px] flex focus:outline-none font-bold my-2 placeholder-white placeholder-opacity-50 px-3 py-2 relative text-gray-100 text-lg text-white w-full border-grey focus:border-4 focus:ring-border-purple focus:border-purple ${TypeMap[inputType]}`}
    />
  )
}

export default InputComponent
