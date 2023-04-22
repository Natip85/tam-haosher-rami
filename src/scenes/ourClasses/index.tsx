import HText from '@/shared/HText'
import { SelectedPage, ClassType } from '@/shared/types'
import { motion } from 'framer-motion'
import Class from './Class'
import ApplesPic from "@/assets/ApplesPic.jpeg"
import GiftBasketPic from "@/assets/GiftBasketPic.jpeg"
import BottledWaterPic from "@/assets/BottledWaterPic.jpeg"
import GrapesPic from "@/assets/GrapesPic.jpeg"
import StrawberriesPic from "@/assets/StrawberriesPic.jpeg"
import FigsPic from "@/assets/FigsPic.jpeg"
import AvacadosPic from "@/assets/AvacadosPic.jpeg"


const classes: Array<ClassType> = [
  {
    name: "Weiaght training classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: AvacadosPic
  },
  {
    name: "Yoga classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: GiftBasketPic
  },
  {
    name: "Abb core classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: BottledWaterPic
  },
  {
    name: "WAdventure classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: GrapesPic
  },
  {
    name: "Fitness classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: StrawberriesPic
  },
  {
    name: "Training classes",
    description: "lorefdfhdifejfjeo fiedjfeifh ufhei feuf eifheifueh f",
    image: FigsPic
  }
]
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-secondary-400 py-20'>
      <motion.div
      onViewportEnter={()=> setSelectedPage(SelectedPage.SocialMedia)}
      >

        <motion.div 
        className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: -50},
            visible: {opacity: 1, x:0}
          }}
        >
            <div className='md:w-3/5'>
              <HText>
                גלריית תמונות
              </HText>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat repellendus ducimus deserunt. Nulla quas facilis dolorum corrupti iste similique officia, nihil repellat ad consectetur natus minus quos. Minus, corrupti.</p>
            </div>
        </motion.div>
        <div>
          <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
              {classes.map((item: ClassType, index)=>(
                  <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  />
              ))}
            </ul>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default OurClasses