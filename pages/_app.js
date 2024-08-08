import Layout from '../components/Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import {AnimatePresence, motion} from 'framer-motion';
import Transition from '../components/Transition';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <ChakraProvider theme={theme}> 
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
        <Transition/>
        <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      </ChakraProvider>
    </Layout>
    
  );
}

export default MyApp;
