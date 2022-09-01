import { card } from '../assests/assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} text-center md:text-left`}>
      <h2 className={styles.heading2}>
        Find a better card <br />deal in a few easy steps
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi reiciendis quia voluptatum blanditiis eligendi.
      </p>
      <Button/>
    </div>
    <div className={layout.sectionImg}>
    <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )


export default CardDeal