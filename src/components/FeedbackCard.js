import { quotes } from "../assests/assets";

const FeedbackCard = ({content,title,img,name}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] min-w-[370px] md:mr-10 sm:mr-5 mr-3 my-5 feedback-card flex-[33.3%] ">
    <img src={quotes} alt="quotes" className="w-[42px] h-[27px]" />
    <p className="font-poppins font-normal text-white text-[18px] leading-[32px]
  flex-1 my-10">{content}</p>
    <div className="flex">
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
      <div className="grid ml-4">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[30px]" >{name}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
      </div>
    </div>
  </div>
  )


export default FeedbackCard