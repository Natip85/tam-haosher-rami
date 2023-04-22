import { BenefitType, SelectedPage } from '@/shared/types'
import { CheckBadgeIcon, ClipboardDocumentListIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from "@/assets/HomePageGraphic.jpeg"
import HText from '@/shared/HText'

const benefits: Array<BenefitType> = [
  {
  icon: <CheckBadgeIcon className="h-6 w-6" />,
  title: "פירות הכי טריות במרכז",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, at a, quos tempora iste qui quas quod facere cum quae officiis molestiae deleniti voluptates error perspiciatis animi quo, delectus iusto."
  },
  {
  icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
  title: "מבחר של מאות סוגים שונים של פירות וירקות",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, at a, quos tempora iste qui quas quod facere cum quae officiis molestiae deleniti voluptates error perspiciatis animi quo, delecturor perspiciatis animi quo, deror perspiciatis animi quo, deror perspiciatis animi quo, des iusto."
  },
  {
  icon: <FaceSmileIcon className="h-6 w-6" />,
  title: "שירות מדלת לדלת",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, at a, quos tempora iste qui quas quod facere cum quae officiis molestiae deleniti voluptates error perspicia."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggeredChildren: 0.2}
  }
}
type Props = {
  setSelectedPage: (value: SelectedPage)=>void
}

function Benefits({setSelectedPage}: Props) {
  
  return (
    <section
      id="מבחרשלנו"
      className="mx-auto min-h-full w-5/6 my-16 py-10"
      >
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurSelection)}
        >
          <motion.div 
           initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: -50},
            visible: {opacity: 1, x:0}
          }}
          className="md:mt-96 md:w-3/5"
          >
           <HText>!יותר מרק פירות וירקות</HText>
           <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut tempora expedita numquam a vero magnam debitis, ipsam ab sint quisquam exercitationem dignissimos sequi deleniti autem molestias amet fugit? Ipsum.
           </p>
          </motion.div>
    <motion.div 
    className="md:flex items-center justify-between gap-8 mt-5"
    initial="hidden"
    whileInView='visible'
    viewport={{once: true, amount: 0.5}}
    variants={container}
    >
      {benefits.map((benefit: BenefitType)=>(
        <Benefit 
        key={benefit.title}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
        setSelectedPage={setSelectedPage}
        />
      ))}
    </motion.div>
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      <img className="mx-auto w-96 rounded-xl" src={HomePageGraphic} alt="benefits-page-graphic" />
      <div>
       
          <div className="my-16 ">
            <motion.div
            initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: 50},
            visible: {opacity: 1, x:0}
          }}
            >
              <HText>
                !אלפי לקוחות מרוצים
              </HText>
            </motion.div>
          </div>
        <motion.div
        initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0 , x: 50},
            visible: {opacity: 1, x:0}
          }}
        >
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus eius doloribus laudantium, incidunt voluptatibus perspiciatis illo doloremque quis exercitationem perferendis, odio voluptercitationem perferendis, odio voluptatemercitationem perferendis, odio voluptatemercitationem perferendis, odio voluptatemercitationem perferendis, odio voluptatematem minima fuga nemo nulla suscipit possimus nesciunt!</p>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.ercitationem perferendis, odio voluptatem Illo omnis libero saepe tenetur sint, ab suscipit qui non aperiam cum, unde accusamus pariatur incidunt, nisi accusantium blanditiis quod quia molestias?</p>
        </motion.div>
          <div className="w-20">
            <ActionButton 
            setSelectedPage={setSelectedPage}>
              צור קשר
            </ActionButton>
        </div>
      </div>
      </div>
    </motion.div>
    </section>
  )
}

export default Benefits