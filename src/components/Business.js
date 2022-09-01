import { features } from "../constants"
import styles, { layout } from "../styles"
import Button from './Button';

const FeatureCard = ({icon,title,content,index}) => (
  <div className={`flex p-6 rounded-[20px] justify-self-start ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className="flex-1 flex flex-col ml-3 max-w-[550px]">
      <h4 className='font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]'>{title}</h4>
      <p className='font-poppins text-dimWhite text-[16px] mb-1 leading-[24px]'>{content}</p>
    </div>
  </div>
)

const Business = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} md:text-left text-center`}>You do the business,<br  />we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <Button/>
    </div>
    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature, i) => (
        <FeatureCard key={feature.id} {...feature} index={i} />
      ))}
    </div>
  </section>
  )


export default Business