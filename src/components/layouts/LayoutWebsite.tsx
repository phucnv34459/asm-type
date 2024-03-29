import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import css from './LayoutWebsite.module.scss'
const LayoutWebsite: React.FC = () => {
  return (
    <div className={css.body}>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default LayoutWebsite