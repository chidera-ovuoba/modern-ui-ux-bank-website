import styles from '../styles';
import { logo } from '../assests/assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () =>(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-center items-center w-full lg:mr-10 mr-0'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] ' />
        <p className={`${styles.paragraph} mt-5 max-w-[310px] md:text-left text-center`}>A new way to make payments easy, reliable and secure.</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white '>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link,i) => (
                <li key={link.name} className={`font-poppins text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${i !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col  pt-6 border-t-[4px] border-t-[#3f3e45]'>
      <p className='font-poppins text-[18px] leading-[27px] text-white'>
       CopyRight &copy; 2022 HooBank. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((media,index) => (
          <img
            key={media.id}
            src={media.icon}
            alt={media.id}
            className={`w-[21px] h-[21px] cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6':'mr-0'}`}
          />
        ))}
      </div>
    </div>
    
  </section>
  )


export default Footer