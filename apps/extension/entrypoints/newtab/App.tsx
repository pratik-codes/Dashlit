import { Button } from "@/components/shad/button";

function App() {
  return (
    <div className="flex space-x-4 w-full h-screen items-center justify-center">
      <h1 className="text-indigo-800 text-2xl font-bold">DASHLIT</h1>
      <Button onClick={() => alert("clicked bhai all good")}>Click me</Button>
    </div>
  );
}

export default App;
