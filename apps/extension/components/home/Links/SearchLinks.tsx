import { Input } from "@/components/ui/input"

const SearchLinks = () => {
  return (
    <div className="space-y-2 mx-3">
  <Input
    className="rounded-[12px] font-bold px-3 py-2 text-lg text-white w-full placeholder-white placeholder-opacity-50 bg-transparent border-4 border-gray-500 focus:border-purple-500 focus:outline-none"
    placeholder="Search links"
  />
</div>


  )
}

export default SearchLinks