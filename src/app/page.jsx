'use client'

import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


export default function Home() {
  const [step, setStep] = useState('1')

  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    console.log("ass",formData)

    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setStep("3")
      // Redirect after successful submission
      // window.location.href = '/' // Your custom success page
    } catch (error) {
      console.error('Error:', error)
      // Handle error case
    }
  }

  const carouselImages = [
    { id: 1, url: "./images/Artboard 1.webp" },
    { id: 2, url: "./images/Artboard 2.jpg" },
    { id: 3, url: "./images/Artboard 3.jpg" },
    { id: 4, url: "./images/Artboard 4.jpg" },
    { id: 5, url: "./images/Artboard 5.jpg" },
  ]

  return (
    <>
      <div className="hidden lg:block fixed " >
        <svg width="479" height="862" viewBox="0 0 479 862" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M457.971 0L463.209 92.0625C468.334 184.338 478.809 368.462 478.586 552.8C478.363 737.138 467.666 921.263 465.214 1105.6C462.763 1289.94 468.78 1474.06 460.534 1658.4C452.4 1842.74 430.114 2026.86 421.2 2211.2C412.286 2395.54 416.743 2579.66 418.971 2671.94L421.2 2764H0V2671.94C0 2579.66 0 2395.54 0 2211.2C0 2026.86 0 1842.74 0 1658.4C0 1474.06 0 1289.94 0 1105.6C0 921.263 0 737.138 0 552.8C0 368.462 0 184.338 0 92.0625V0H457.971Z" fill="#A78BF5"/>
          <path d="M312 0L309.549 92.0625C307.209 184.338 302.306 368.462 305.871 552.8C309.437 737.138 321.249 921.263 319.02 1105.6C316.791 1289.94 300.523 1474.06 289.38 1658.4C278.237 1842.74 272.22 2026.86 266.649 2211.2C261.077 2395.54 255.951 2579.66 253.277 2671.94L250.714 2764H0V2671.94C0 2579.66 0 2395.54 0 2211.2C0 2026.86 0 1842.74 0 1658.4C0 1474.06 0 1289.94 0 1105.6C0 921.263 0 737.138 0 552.8C0 368.462 0 184.338 0 92.0625V0H312Z" fill="#6F54B5"/>
          <path d="M158.229 0L161.906 92.0625C165.694 184.338 173.049 368.462 168.257 552.8C163.466 737.138 146.306 921.263 150.094 1105.6C153.771 1289.94 178.286 1474.06 176.614 1658.4C174.943 1842.74 147.086 2026.86 133.491 2211.2C120.009 2395.54 120.677 2579.66 121.123 2671.94L121.457 2764H0V2671.94C0 2579.66 0 2395.54 0 2211.2C0 2026.86 0 1842.74 0 1658.4C0 1474.06 0 1289.94 0 1105.6C0 921.263 0 737.138 0 552.8C0 368.462 0 184.338 0 92.0625V0H158.229Z" fill="#392178"/>
        </svg>
      </div>
      <div className="w-full h-fit flex lg:pl-[479px] ">
        <div className="w-full py-12 px-8 lg:px-16 flex flex-col gap-7 ">
          <div className="w-full h-fit flex flex-col gap-2 lg:gap-0 ">
            <div className="w-full h-fit font-retro leading-[1.2] text-4xl lg:text-5xl">
              FROM
                <br />
              NOTHING
                <br />
              COURSES
            </div>
            <div className="w-full h-fit text-right lg:leading-[1.2] font-rubik text-2xl lg:text-4xl font-medium ">
              {step === '1' &&
                <>
                  كورسات
                  <br />
                  للهروب من حياة ما بتمثلك
                </>
              }
              {step === '2' &&
                <>
                  كيف لح نساعدك
                  <br />
                  تغير حياتك
                </>
              }
              {step === '3' &&
                <>
                  شكرا لتسجيلك
                </>
              }
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-7 ">
            <div className="w-full h-fit flex gap-3">
              <div className={`w-12 h-3 bg-[#A78BF5] rounded `} />
              <div className={`w-12 h-3 ${step === "2" || step === "3" ? 'bg-[#A78BF5]' : 'bg-[#D9D9D9]'} rounded `} />
              <div className={`w-12 h-3 ${step === "3" ? 'bg-[#A78BF5]' : 'bg-[#D9D9D9]'} rounded `} />
            </div>
            {step === '2' &&
              <>
                {selectedOption === 'computer' ? 
                  <div className="w-full h-fit flex flex-col lg:flex-row-reverse justify-center items-center gap-7 ">
                    <Carousel plugins={[Autoplay({delay: 5000,}),]} className="w-full cursor-grab ">
                      <CarouselContent>
                        {carouselImages.map((image) => (
                          <CarouselItem key={image.id}>
                            <img className="w-full aspect-[200/250] rounded-lg " src={image.url} alt={`Artboard ${image.id}`} />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                    <div className="w-full h-fit text-base font-rubik font-medium text-center ">
                      استغل ضمان ال 7 أيام استرداد كامل المبلغ… إذا طبّقت وما استفدت،  + خصم ال 30% يلي ما لح تكرر !
                    </div>
                  </div>
                    :
                  <div className="w-full h-fit flex flex-col lg:flex-row-reverse justify-center items-center gap-7 ">
                    <img className="w-full max-w-[400px] aspect-[200/250] rounded-lg " src="./images/Artboard 6.jpg" alt={`Artboard 6`} />
                    <div className="w-full h-fit text-base font-rubik font-medium text-center ">
                      استغل ضمان ال 7 أيام استرداد كامل المبلغ… إذا طبّقت وما استفدت،  + خصم ال 30% يلي ما لح تكرر !
                    </div>
                  </div>
                }
              </>
            }
            {step === '3' &&
              <>
                <div className="w-full h-fit flex flex-col lg:flex-row-reverse justify-center items-center gap-7 ">
                  {selectedOption === 'computer' ?
                    <img className="w-full max-w-[400px] aspect-[200/250] rounded-lg " src="./images/Artboard 8.jpg" alt={`Artboard 8`} />
                      :
                    <img className="w-full max-w-[400px] aspect-[200/250] rounded-lg " src="./images/Artboard 7.jpg" alt={`Artboard 7`} />
                  }
                  <div className="w-full h-fit text-base font-rubik font-medium text-center ">
                    سنقوم بالتواصل معك خلال 24 ساعة 
                    <br />
                    أو يمكنك التواصل معنا مباشرة عبر الواتساب
                  </div>
                </div>
                <a 
                  className="w-full h-11 flex justify-center items-center gap-2 font-medium  text-white font-rubik bg-[#25D366] rounded-lg cursor-pointer "
                  href={`https://wa.me/${+905064486099}`}
                >
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1344 4.5355C18.1654 2.56425 15.5469 1.47819 12.7571 1.47705C7.00889 1.47705 2.33043 6.15513 2.32818 11.9051C2.32738 13.7432 2.80761 15.5373 3.72027 17.1189L2.24072 22.523L7.76924 21.0728C9.29247 21.9036 11.0075 22.3416 12.753 22.3421H12.7572C12.7569 22.3421 12.7575 22.3421 12.7572 22.3421C18.5048 22.3421 23.1837 17.6636 23.1861 11.9135C23.1871 9.12684 22.1033 6.50667 20.1344 4.5355ZM12.7572 20.5809H12.7536C11.1983 20.5803 9.67275 20.1624 8.34188 19.3726L8.02539 19.1848L4.74469 20.0454L5.6204 16.8467L5.41428 16.5187C4.54662 15.1387 4.08836 13.5436 4.08904 11.9057C4.0909 7.12655 7.97946 3.23841 12.7607 3.23841C15.0759 3.23913 17.2523 4.14197 18.8888 5.7804C20.5254 7.41882 21.4261 9.59666 21.4252 11.9128C21.4232 16.6923 17.5348 20.5809 12.7572 20.5809Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.5118 14.0889C17.2512 13.9585 15.97 13.3282 15.7312 13.2412C15.4924 13.1542 15.3186 13.1107 15.1449 13.3716C14.9712 13.6324 14.4718 14.2194 14.3198 14.3933C14.1678 14.5672 14.0158 14.589 13.7553 14.4585C13.4947 14.3281 12.6551 14.0529 11.6598 13.1652C10.8851 12.4742 10.3621 11.6209 10.2101 11.3599C10.0581 11.0991 10.1939 10.9581 10.3244 10.8282C10.4416 10.7114 10.585 10.5238 10.7153 10.3716C10.8455 10.2195 10.8889 10.1107 10.9758 9.93695C11.0627 9.76301 11.0193 9.61082 10.9541 9.48043C10.8889 9.35 10.3678 8.06739 10.1507 7.54555C9.93912 7.03751 9.72432 7.10634 9.56434 7.09825C9.41258 7.09068 9.23863 7.08911 9.06494 7.08911C8.89124 7.08911 8.60888 7.15435 8.37008 7.41516C8.13123 7.67606 7.45801 8.30653 7.45801 9.58902C7.45801 10.8717 8.39175 12.1108 8.52205 12.2846C8.65231 12.4586 10.3595 15.0906 12.9735 16.2193C13.5952 16.4878 14.0806 16.6481 14.459 16.7682C15.0833 16.9666 15.6514 16.9385 16.1003 16.8714C16.601 16.7966 17.6421 16.2411 17.8592 15.6325C18.0764 15.0237 18.0764 14.5019 18.0112 14.3933C17.9461 14.2846 17.7723 14.2194 17.5118 14.0889Z" fill="white"/>
                  </svg>
                  WhatsApp
                </a>
              </>
            }
            {step !== '3' && 
              <>
                <form onSubmit={handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSd057zq5_tY0D7xCrtiKeJZGQC1DBn4zTjOAxPWyFM-pDnGqA/formResponse" className="w-full h-fit flex flex-col gap-4 ">
                  <div className={`w-full h-fit flex flex-col gap-2 ${step === '2' ? 'hidden' : 'visible'} `}>
                    <label htmlFor="username" className="w-full h-fit font-rubik font-medium text-right ">
                      الاسم
                    </label>
                    <input 
                      type="text"
                      id="username"
                      name="entry.2123345968"
                      placeholder={'اسم المستخدم'}
                      value={username}
                      className={`w-full h-11 font-rubik font-normal text-right px-3 border-2 border-[#D9D9D9] rounded-lg `}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className={`w-full h-fit flex flex-col gap-2 ${step === '2' ? 'hidden' : 'visible'} `}>
                    <label htmlFor="phone-number" className="w-full h-fit font-rubik font-medium text-right ">
                      رقم واتساب للتواصل
                    </label>
                    <input
                      type="text"
                      id="phone-number"
                      name="entry.1694561439"
                      placeholder={`+963-123-456-789`}
                      value={phoneNumber}
                      className="w-full h-11 font-rubik font-normal text-left px-3 border-2 border-[#D9D9D9] rounded-lg " 
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className={`w-full h-fit flex flex-col gap-2 ${step === '2' ? 'hidden' : 'visible'} `}>
                    <label htmlFor="method" className="w-full h-fit font-rubik font-medium text-right ">
                      هل تريد تغيير حياتك باستخدام
                    </label>
                    <div className="w-full h-fit flex gap-4 ">
                      <label className={`w-full h-fit py-2 px-3 flex flex-col justify-between items-center gap-8 border-2 cursor-pointer ${selectedOption === 'computer' ? ' border-[#A78BF5] ' : 'border-[#D9D9D9] border-2 '} transition-colors  rounded-lg `} >
                        <div className="w-full h-fit flex justify-between items-center ">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_174_170)">
                              <path d="M20 18C21.105 18 21.99 17.105 21.99 16L22 5C22 3.895 21.105 3 20 3H4C2.895 3 2 3.895 2 5V16C2 17.105 2.895 18 4 18H0C0 19.105 0.895 20 2 20H22C23.105 20 24 19.105 24 18H20ZM4 5H20V16H4V5ZM12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_174_170">
                              <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                          </svg>
                          <div className={`w-2 h-2 rounded-full ${selectedOption === 'computer' ? ' bg-[#A78BF5] ' : 'bg-[#D9D9D9] '} transition-colors `}>
                            <input
                              type="radio"
                              value="computer"
                              name="entry.2068790798"
                              checked={selectedOption === 'computer'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                              className={`hidden `}
                              />
                          </div>
                        </div>
                        <div className="w-full h-fit font-rubik font-normal text-right text-base ">
                          PC ,اللابتوب 
                        </div>
                      </label>
                      <label className={`w-full h-fit py-2 px-3 flex flex-col justify-between items-center gap-8 border-2 cursor-pointer  ${selectedOption === 'mobile' ? ' border-[#A78BF5] ' : 'border-[#D9D9D9] '} transition-colors rounded-lg `} >
                        <div className="w-full h-fit flex justify-between items-center ">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2H9C6.8 2 5 3.8 5 6V18C5 20.2 6.8 22 9 22H15C17.2 22 19 20.2 19 18V6C19 3.8 17.2 2 15 2ZM17 18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V6C7 4.9 7.9 4 9 4H15C16.1 4 17 4.9 17 6V18Z" fill="black"/>
                            <path d="M13 5H11C10.4 5 10 5.4 10 6C10 6.6 10.4 7 11 7H13C13.6 7 14 6.6 14 6C14 5.4 13.6 5 13 5Z" fill="black"/>
                          </svg>
                          <div className={`w-2 h-2 rounded-full ${selectedOption === 'mobile' ? ' bg-[#A78BF5] ' : 'bg-[#D9D9D9] '} transition-colors  `}>
                            <input
                              type="radio"
                              value="mobile"
                              name="entry.2068790798"
                              checked={selectedOption === 'mobile'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                              className={`hidden `}
                              />
                          </div>
                        </div>
                        <div className="w-full h-fit font-rubik font-normal text-right text-base ">
                          الموبايل
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={`w-full h-fit flex flex-col gap-2 ${step === '1' ? 'hidden' : 'visible'} `}>
                    <label htmlFor="email" className="w-full h-fit font-rubik font-medium text-right ">
                      البريد الإلكتروني
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="entry.1312988306"
                      placeholder={'you@gmail.com'}
                      value={email}
                      className={`w-full h-11 font-rubik font-normal text-right px-3 border-2 border-[#D9D9D9] rounded-lg `}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  {step === '1' ? 
                    <div onClick={() => (username !== '' && phoneNumber !== '' && selectedOption !== '') ? setStep('2') : setStep('1')} className="w-full h-11 flex justify-center items-center font-medium  text-white font-rubik bg-[#A78BF5] rounded-lg cursor-pointer ">
                      التالي
                    </div>
                    :
                    <button type="submit" className="w-full h-11 flex justify-center items-center font-medium  text-white font-rubik bg-[#A78BF5] rounded-lg ">
                      تسجيل دخول
                    </button>
                  }
                </form>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}
