import Link from 'next/link';
import {RiFacebookLine, RiLinkedinLine}
from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.facebook.com/akos.haraga/'} className='hover:text-accent transition-all duration-300
      '>
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/akos-haraga-069b01259/'} className='hover:text-accent transition-all duration-300
      '>
        <RiLinkedinLine/>
      </Link>
    </div>
  )
}
export default Socials;
