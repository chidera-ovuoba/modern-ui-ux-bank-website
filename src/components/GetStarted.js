import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assests/assets'
const GetStarted = () => (
     <div className={`w-[140px] h-[140px] ${styles.flexCenter} rounded-full cursor-pointer bg-blue-gradient p-[2px] `}>
    <div className={`flex-col ${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`flex-row ${styles.flexStart}`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2">Get</p>
        <img src={arrowUp} alt='arrowUp' className='w-[23px] h-[23px]' />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2">Started</p>
    </div>  
  </div>
  )


export default GetStarted