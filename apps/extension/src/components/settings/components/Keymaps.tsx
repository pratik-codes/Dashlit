import Svg from 'components/common/Svg'

const SwitchPill = ({ text, sign }: { text: string; sign: string }) => {
  return (
    <>
      <span className="mx-2 text-md font-bold p-2 border border-white rounded-md">
        {text}
      </span>
      <span className="text-white mx-1 font-bold">{sign}</span>
    </>
  )
}

const SingleKeyMap = ({
  keyMapName,
  metaKeys,
  triggerKeys,
  icon,
  desc
}: {
  desc: string
  icon: string
  keyMapName: string
  metaKeys: Array<{ name: string; sign: string }>
  triggerKeys: Array<{ name: string; sign: string }>
}) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-full space-y-8  px-4 py-6 m-2 rounded-xl bg-transparent-white">
        <div className="flex space-x-2 items-center">
          <div className="flex justify-center mt-1 rounded-full p-3 border border-grey1">
            <Svg type={icon} />
          </div>
          <div>
            <div className="text-xl font-bold">{keyMapName}</div>
            <div className="text-whtie">{desc}</div>
          </div>
        </div>
        <div className="space-y-4 mb-4 pb-4">
          {metaKeys.map((metaKey) => (
            <SwitchPill text={metaKey.name} sign={metaKey.sign} />
          ))}
          <span className="mr-2 font-bold">+</span>
          {triggerKeys.map((triggerKey) => (
            <SwitchPill text={triggerKey.name} sign={triggerKey.sign} />
          ))}
        </div>
      </div>
    </div>
  )
}

const KeymapsData = [
  {
    name: 'Open Searchbar',
    desc: 'Open the searchbar to search for your bookmarks.',
    icon: 'search',
    metaKeys: [
      { name: 'CTRL', sign: '/' },
      { name: 'CMD', sign: '/' },
      { name: 'SHIFT', sign: '' }
    ],
    triggerKeys: [
      { name: 'K', sign: '/' },
      { name: 'P', sign: '' }
    ]
  },
  {
    name: 'Open Links',
    desc: "Open the links you've saved.",
    icon: 'link',
    metaKeys: [
      { name: 'CTRL', sign: '/' },
      { name: 'CMD', sign: '/' },
      { name: 'SHIFT', sign: '' }
    ],
    triggerKeys: [{ name: 'H', sign: '' }]
  },
  {
    name: 'Open Todo',
    desc: 'Open the todo list.',
    icon: 'todo',
    metaKeys: [
      { name: 'CTRL', sign: '/' },
      { name: 'CMD', sign: '/' },
      { name: 'SHIFT', sign: '' }
    ],
    triggerKeys: [{ name: 'M', sign: '' }]
  },
  {
    name: 'Open Settings',
    desc: 'Open the settings panel.',
    icon: 'settings',
    metaKeys: [
      { name: 'CTRL', sign: '/' },
      { name: 'CMD', sign: '/' },
      { name: 'SHIFT', sign: '' }
    ],
    triggerKeys: [{ name: 'J', sign: '' }]
  }
]

const Keymaps = () => {
  return (
    <div className="text-white text-start w-full">
      <h1 className="font-bold text-2xl text-white">Keymaps</h1>
      <p className="font-medium text-grey">
        keybindings to use shortcuts on the platform
      </p>

      <div className="grid grid-cols-2 gap-2 w-full mt-4">
        {KeymapsData.map((keymap) => (
          <SingleKeyMap
            desc={keymap.desc}
            icon={keymap.icon}
            keyMapName={keymap.name}
            metaKeys={keymap.metaKeys}
            triggerKeys={keymap.triggerKeys}
          />
        ))}
      </div>
    </div>
  )
}

export default Keymaps
