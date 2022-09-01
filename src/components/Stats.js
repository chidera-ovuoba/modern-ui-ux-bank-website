import { stats } from '../constants';
import styles from '../styles';
const Stats = () => {
  return (
    <section className={` flex justify-between flex-wrap sm:mb-20 mb-6 xs:flex-row flex-col xs:gap-0 gap-2`}> 
      {
        stats.map((stat, i) => (
          <div key={stat.id} className={`${styles.flexCenter} justify-around ${i === stats.length - 1 ?'flex-[1.7_1.5_0%]':'flex-[2_2_0%]'}`}>
            <div className={`${styles.flexCenter}`}>
            <h4 className='font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[43px] leading-[33px] text-white'>{stat.value}</h4>

              <p className='font-poppins xs:text-[15px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase'>{stat.title}</p>
            </div>
             {i !== stats.length - 1 && 
              <span className={`text-gradient md:mx-0 mx-5 xs:flex hidden `}> | </span>
               }
            
          </div>
        ))
      }
   
        
    </section>
  )
}

export default Stats