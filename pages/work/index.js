import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '../../variants';
import ComputersCanvas from '../../components/Computers';

const Work = () => {
  return (   
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <ComputersCanvas></ComputersCanvas>
      <Circles/>
      <div className='containter mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left
          mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-8'>
              Projektjeim <span className='text-accent'>.</span>
            </motion.h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Excepteur sit incididunt officia aliqua elit non ex deserunt ut in ad. Id labore ut et incididunt. Fugiat non ullamco fugiat officia tempor adipisicing veniam fugiat aliquip amet exercitation labore. Cillum et consequat magna consequat.
            </p>
          </div>
          <div className='w-full xl:max-w-[65%]'>
          <ServiceSlider/>
          </div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
};

export default Work;
