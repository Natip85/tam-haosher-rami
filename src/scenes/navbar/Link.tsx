import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage)=> void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage
  
  return (
    <AnchorLink
    onClick={()=>setSelectedPage(lowerCasePage)}
    href={`#${lowerCasePage}`}
    className={`${selectedPage === lowerCasePage ? 'text-gray-20': ""}
    transition duration-500 hover:text-secondary-500 text-lg font-bold shadow-black
    `}
    >
      {page}
    </AnchorLink>
  )
}

export default Link