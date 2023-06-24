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

const Keymaps = () => {
  return (
    <div className="text-white text-start">
      <h1 className="font-bold text-3xl text-white">Keymaps</h1>
      <p className="font-bold">keybindings to use shortcuts on the platform</p>

      <div className="mt-8">
        <SwitchPill text="CTRL" sign="/" />
        <SwitchPill text="CMD" sign="/" />
        <SwitchPill text="SHIFT" sign="" />
        <span className="mr-2 font-bold">+</span>
        <SwitchPill text="K" sign="/" />
        <SwitchPill text="P" sign="" />

        <span className="text-3xl font-bold mx-4">→</span>
        <span className="font-bold text-xl ml-8">Open searchbar</span>
      </div>

      <div className="mt-4">
        <SwitchPill text="CTRL" sign="/" />
        <SwitchPill text="CMD" sign="/" />
        <SwitchPill text="SHIFT" sign="" />
        <span className="mr-2 font-bold">+</span>
        <SwitchPill text="H" sign="/" />

        <span className="text-3xl font-bold mx-4">→</span>
        <span className="font-bold text-xl ml-8">Open links</span>
      </div>

      <div className="mt-4">
        <SwitchPill text="CTRL" sign="/" />
        <SwitchPill text="CMD" sign="/" />
        <SwitchPill text="SHIFT" sign="" />
        <span className="mr-2 font-bold">+</span>
        <SwitchPill text="M" sign="/" />

        <span className="text-3xl font-bold mx-4">→</span>
        <span className="font-bold text-xl ml-8">Open todo</span>
      </div>

      <div className="mt-4">
        <SwitchPill text="CTRL" sign="/" />
        <SwitchPill text="CMD" sign="/" />
        <SwitchPill text="SHIFT" sign="" />
        <span className="mr-2 font-bold">+</span>
        <SwitchPill text="J" sign="/" />

        <span className="text-3xl font-bold mx-4">→</span>
        <span className="font-bold text-xl ml-8">Open settings</span>
      </div>
    </div>
  )
}

export default Keymaps
