import { Alert } from 'antd'
import Button from 'components/common/button/button'

const Help = () => {
  return (
    <div className="w-full">
      <Alert
        showIcon
        message={
          <span className="font-bold text-lg">
            In case of any issues, queries, bugs or feedback Please contact us
          </span>
        }
        action={
          <Button
            className="ml-1 mb-[-2px]"
            type="primary"
            href="mailto:pratiktiwari1212@gmail.com"
          >
            here
          </Button>
        }
      />
    </div>
  )
}

export default Help
