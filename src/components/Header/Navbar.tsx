import { type FC } from 'react'
import NavOptions from './NavOptions'

const Navbar: FC = () => {
  return (
    <header className="p-2 bg-myblue">
      <nav className='bg-myblue border-blue-200 px-2 sm:px-4 py-2.5 dark:bg-grey-900'>
        <NavOptions />
      </nav>
    </header>
  )
}

export default Navbar