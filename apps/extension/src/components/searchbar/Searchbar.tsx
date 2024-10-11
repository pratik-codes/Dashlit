import { Select } from 'antd'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/Store'
import '../../styles/AntdStyles/searchbar.css'
import { getOptionsValue } from './searchbar.utils'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Badge } from '../ui/badge'
import { ChevronRight, CommandIcon } from 'lucide-react'
import BookmarkIcons from '../common/BookmarkIcons'

const SearchBar = ({ setOpenSearchBar }: any) => {
  const inputRef: any = useRef()

  const LinksDataRedux: any = useSelector(
    (state: RootStore) => state.userLinkData
  )

  const linksLocalStorageData: any = localStorage.getItem('links')
  const linksLocalStorage: any = JSON.parse(linksLocalStorageData)

  const LINKS = linksLocalStorage || LinksDataRedux

  const options = getOptionsValue(LINKS?.data)

  const selectOption = (e: any, select: boolean) => {
    const value = select ? e : e.target.value
    console.log({ value, select })
    if ((e.keyCode === 13 || select) && value.length > 0) {
      const selectedOption: any = options.find((data: any) =>
        data.value.toLowerCase().includes(value.toLowerCase())
      )
      if (!selectedOption) return
      clickHandler(selectedOption.link)
      setOpenSearchBar(false)
    }
  }

  const clickHandler = ({ type, links }: any) => {
    if (type === 'link') window.open(`https://${links[0].link}`, '_blank')
    else
      for (let i = 0; i < links.length; i++) {
        window.open(`https://${links[i].link}`, '_blank')
      }
  }

  useEffect(() => {
    setTimeout(() => {
      if (inputRef?.current?.focus) inputRef.current.focus()
    }, 100)
  }, [])

  return (
    <Command className='w-6/12 max-h-fit mx-auto my-auto mt-[8rem]'>
      <CommandInput
        ref={inputRef}
        placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Keybindings">
          <div className='flex space-x-1 ml-1 mb-2'>
            <Badge className='font-bold px-2 p-1 px-2'>
              <CommandIcon className='h-4 w-4' /> <span className='text-md'>
                + p {" - "} Open Searchbar
              </span>
            </Badge>
            <Badge className='font-bold px-2 py-1'>
              esc {" - "} Close
            </Badge>
          </div>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          {options.map((option: any, index: number) => (
            <CommandItem
              key={index}
              onClick={() => clickHandler(option.link)}
              className='flex items-center justify-between'>
              <span className='flex items-center space-x-2'>
                <span>{option.value}</span>
                <span className='text-md text-gray-400'>
                  {option.link.links.length} links
                </span>
              </span>
              <ChevronRight className='h-4 w-4' />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
    // <Select
    //   showSearch
    //   style={{
    //     position: 'absolute',
    //     top: '10%',
    //     left: '30%',
    //     width: '40%',
    //     boxShadow: '0 0 0 1600px rgba(0,0,0,0.65)',
    //     borderRadius: '14px'
    //   }}
    //   onChange={(e: any) => e.stopPropagation()}
    //   defaultOpen={true}
    //   placeholder="Search link here.."
    //   optionFilterProp="children"
    //   ref={inputRef}
    //   filterOption={(input: any, option: any) =>
    //     (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
    //   }
    //   filterSort={(optionA, optionB) =>
    //     (optionA?.value ?? '')
    //       .toLowerCase()
    //       .localeCompare((optionB?.value ?? '').toLowerCase())
    //   }
    //   onInputKeyDown={(e: any) => selectOption(e, false)}
    //   options={options}
    //   onSelect={(option: any) => selectOption(option, true)}
    // />
  )
}

export default SearchBar
