import Button from 'components/common/button/button'

interface Props {
  name: string
  setView: any
  view: string
}

const CategoryButtons: React.FC<Props> = ({ name, setView, view }) => {
  return (
    <div className="mt-3">
      <Button
        type="secondary"
        className={view === name ? 'text-purple' : 'text-white'}
        onClick={() => setView(name)}
      >
        <span>{name}</span>
      </Button>
    </div>
  )
}

export default CategoryButtons
