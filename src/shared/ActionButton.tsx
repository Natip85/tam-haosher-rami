import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage)=> void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="py-1 px-2 flex justify-between rounded-md border-solid border-2 border-black hover:bg-black bg-slate-50 hover:text-white"
      onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton