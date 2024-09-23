import { Button } from '@/components/ui/button';
import {CircleUserRound} from 'lucide-react';
const Contact = () => {
  return (
    <div className='absolute flex flex-col w-full items-center h-full top-1/3'>
        <CircleUserRound size={200} />
        <div className='flex flex-col justify-center items-center mx-5 my-5'>
            <h3 className='text-white text-lg'>Contact Us</h3>
            <p className='text-white text-md'>In case of any bug reporting, suggestions, feature request get in touch with us here</p>
            <Button className='mt-5 bg-purple-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-purple-400' onClick={() =>window.open('mailto:info.dashlitV2@gmail.com', '__blank')
          }>Contact</Button>
        </div>
    </div>
  )
}

export default Contact