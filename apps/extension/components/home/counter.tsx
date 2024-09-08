import { useCounterStore } from '../../store/store';

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="absolute p-6 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button 
          onClick={reset} 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
