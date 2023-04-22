import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HomePageText from "@/assets/HomePageText.png"

import AllNaturalGraphic from "@/assets/AllNaturalGraphic.jpg"
import ApplesPic from "@/assets/ApplesPic.jpeg"
import DatesPic from "@/assets/DatesPic.jpg"
import OnionsPic from "@/assets/OnionsPic.jpg"
import FruitPlatterPic from "@/assets/FruitPlatterPic.jpg"
import ActionButton from '@/shared/ActionButton'
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  
  return (
    <section
    id='home'
    className='md:pt-96 gap-16 py-16 h-full md:h-full bg-mobile-home bg-no-repeat md:bg-top bg-top-right'
    >
      {/* <div className='md:flex'> */}
      <motion.div
      className='md:flex mx-auto w-5/6 items-center justify-end '
      onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
      >
        <div className='my-16 z-10 mt-32 flex flex-col items-end '>
          <motion.div 
          
          className='md:-mt-20 '
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: -50},
            visible: {opacity: 1, x:0}
          }}
          >
            {/* <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div> */}
            <div className='relative text-5xl'>
              <h1 className='text-9xl font-bold text-right min-w-fit'>טעם האושר<br></br><span>פירות וירקות</span> </h1>
            <div className=' absolute -top-40 right-40 z-[-1] md:before:content md:before:content-howgoodtext'>
            </div>
            </div>

            <p className='mt-8 text-md text-right'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem, necessitatibus obcaecati molestias illum perspiciatis aliquam veritatis alias tempora iure odit dolorem, eius ratione dolore doloremque fugit nemo. Iusto, corrupti?
            </p>
          </motion.div>

          <motion.div 
            className="mt-8 flex items-center gap-8"
              initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: -50},
            visible: {opacity: 1, x:0}
          }}
          >
              <ActionButton setSelectedPage={setSelectedPage}>
                
                !{" "}להזמנות
              </ActionButton>
              {/* <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>

              </AnchorLink> */}
            </motion.div>
        </div>
        {/* <div className=' mt-20 md:z-10 md:ml-40 md:mt-80 rounded-xl'>
         <img className='rounded-3xl w-80' src={HomePageGraphic} alt="home-pageGraphic" />
        </div> */}
      </motion.div>
 {/* </div> */}
      {isAboveMediumScreens && (
        <div className='flex justify-center h-[500px] w-full bg-primary-100 py-10'>
          <div className=' flex justify-center items-center'>
            <div className='w-6/12 flex justify-end items-center'>
              <img className='w-96 h-96' src={AllNaturalGraphic} alt="all-natural" />
              </div>
              <div className='w-6/12 flex flex-wrap py-1 justify-center items-center'>
                <div className='m-5'><img className='w-40 h-40' src={ApplesPic} alt="apple-pic" /></div>
                <div><img className='w-40 h-40' src={DatesPic} alt="apple-pic" /></div>
                <div className='m-5'><img className='w-40 h-40' src={OnionsPic} alt="apple-pic" /></div>
                <div><img className='w-40 h-40' src={FruitPlatterPic} alt="apple-pic" /></div>
              </div>
          </div>
        </div>
      )}
     
    </section>
  )
}

export default Home