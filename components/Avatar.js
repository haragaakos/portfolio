import Image from 'next/image';

const Avatar = () => {
  return ( 
  <div classname='hidden xl:flex xl:max-w-none'>
    <Image
      src={'/profilePicture.jpg'}
      width={737}
      height={678}
      alt=''
      className='translate-z-0 w-full h-full'
    />
  </div>
)};

export default Avatar;
