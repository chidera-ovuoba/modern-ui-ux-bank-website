import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from './FeedbackCard';

const Testimonial = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute w-[80%] h-[70%] -right-1/4 rounded-full blue__gradient' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2} md:text-left text-center`}>What people are <br />saying about us.</h1>
        <p className={`${styles.paragraph} max-w-[450px]`}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolor fugit rerum placeat amet earum.
        </p>
      </div>
      <div className='flex-wrap flex sm:justify-start justify-center w-full relative z-[1] feedack-container'>
        <div className='flex w-4/4 overflow-x-auto'>
        {feedback.map((card) => (
          <FeedbackCard key={card} {...card} />
        ))}
          </div>
      </div>
    </section>
  )
}

export default Testimonial