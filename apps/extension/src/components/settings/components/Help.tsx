import Button from 'components/common/button/button'

const Help = () => {
  return (
    <div className="absolute inset-0 top-1/3">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-white w-60 h-60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="text-white text-center text-2xl font-bold">
        Contact us
      </div>
      <div className="text-white text-center mt-1 text-md font-medium">
        In case of any bug reporting, suggestions, feature request get in touch
        with us here
      </div>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() =>
            window.open('mailto:pratiktiwari1212@gmail.com', '__blank')
          }
        >
          contact
        </Button>
      </div>
    </div>
  )
}

export default Help
