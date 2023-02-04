import React from 'react'
import styles from './styles'

import {Navbar,Hero,Stats ,Business ,Billings ,CardDeal ,Testimonial ,Clients ,CTA ,Footer} from './components'
const App = () =>  (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.widthFull}`}>
        <Navbar/>
    </div>
    </div>

    <div className={`bg-primary pt-20 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero/>
    </div>
    </div>
     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billings/>
        <CardDeal/>
        <Testimonial/>
        <Clients/>
        <CTA/>
        <Footer/>
      
      </div>
    </div>
    </div>
  )


export default App