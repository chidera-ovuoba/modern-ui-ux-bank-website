import { feedback } from '../constants';
import styles from '../styles';
import FeedbackCard from './FeedbackCard';

const Testimonial = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[2]'>
        <h1 className={`${styles.heading2} md:text-left text-center`}>What people are <br />saying about us.</h1>
        <p className={`${styles.paragraph} max-w-[450px]`}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolor fugit rerum placeat amet earum.
        </p>
      </div>
    </section>
  )
}

export default Testimonial