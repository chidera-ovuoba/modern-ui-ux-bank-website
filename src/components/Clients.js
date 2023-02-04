import { clients } from '../constants';
import styles from '../styles';

const Clients = () =>  (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap gap-5 w-full`}>
      {
        clients.map((client) => (
          <div key={client.id} className={`${styles.flexCenter} py-20 flex-1 sm:min-w-[192px] min-w-[120px] sm:mb-0 mb-5`}>
          <img src={client.logo} alt="client" className='xs:w-[192px] w-[140px] object-contain' />
          </div>
        ))
      }
    </div>
  </section>
  )


export default Clients