import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import { useState } from "react"
import Logo from '@/assets/Logo.webp'
import Link from "./Link"
import ActionButton from "@/shared/ActionButton"
import { Bars3Icon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/solid'


type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage)=>void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : 'bg-primary-300 drop-shadow'

  return (
   <nav>
    <div
    className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
           <span className={`${flexBetween}`}>טעם האושר <img className="w-12" src={Logo} alt="logo" /></span>

           {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                page="עמוד הבית" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="מבחר שלנו" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="מדיה חברתית" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                />
                <Link 
                page="צור קשר" 
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton
                setSelectedPage={setSelectedPage}
                >
                  <EnvelopeIcon 
                  className="w-5 mr-2"
                  />
                  שלח לנו הודעה
                </ActionButton>
              </div>
            </div>
           ): (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={()=> setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
           )}
          
        </div>
      </div>
    </div>

    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-500 drop-shadow-xl">
          {/* ~CLOSE ICON*/}
          <div className="flex justify-end p-12">
            <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          {/* ~MENU ITEMS*/}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
               <Link 
               page="עמוד הבית" 
               selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage} 
               />
               <Link 
               page="מבחר שלנו" 
               selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage}
               />
               <Link
               page="מדיה חברתית" 
               selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage}
               />
               <Link 
               page="צור קשר" 
               selectedPage={selectedPage} 
               setSelectedPage={setSelectedPage}
               />
              </div>
        </div>
      )}

   </nav>
  )
}

export default Navbar