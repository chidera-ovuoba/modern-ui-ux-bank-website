import { apple, bill, google } from '../assests/assets';
import styles, { layout } from '../styles';

const Billings = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] z-[5]' />
      <div className="absolute z-[3] -left-1/4 top-0 rounded-full w-[70%] h-[60%] white__gradient"></div>
      <div className="absolute z-[5] -left-1/4 bottom-0 rounded-full w-[70%] h-[60%] pink__gradient"></div>
    </div>
    <div className={`${layout.sectionInfo} text-center md:text-left`}>
      <h2 className={styles.heading2}>Easily control your<br /> billing & Invoice.</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum fugiat maxime error illo natus accusantium architecto sunt asperiores neque!
      </p>
      <div className='flex flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt='apple_store' className='w-[128px] h-[42px]  mr-5 cursor-pointer' />
        <img src={google} alt='google_store' className='w-[128px] h-[42px] cursor-pointer' />
      </div>
    </div>
  </section>
  )


export default Billings