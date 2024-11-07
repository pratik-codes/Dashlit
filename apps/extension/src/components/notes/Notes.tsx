const Notes = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Notes</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-black rounded">
          <p className="font-semibold text-white">Meeting Notes</p>
          <p className="text-sm text-gray-300">Discuss project timeline and deliverables</p>
        </li>
        <li className="p-2 bg-black rounded">
          <p className="font-semibold text-white">Ideas</p>
          <p className="text-sm text-gray-300">New feature: user authentication system</p>
        </li>
      </ul>
    </div>
  )

  export default Notes;