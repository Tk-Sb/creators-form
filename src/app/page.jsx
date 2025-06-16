'use client'

import { useState } from "react";

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

    console.log(formData)
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      // Redirect after successful submission
      // window.location.href = '/' // Your custom success page
    } catch (error) {
      console.error('Error:', error)
      // Handle error case
    }
  }

  return (
    <>
      <div className="w-full h-fit flex ">
        <div className="hidden lg:block " >
          <svg width="479" height="862" viewBox="0 0 479 862" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M457.971 0L463.209 43.3C468.334 86.7 478.809 173.3 478.586 260C478.363 346.7 467.666 433.3 465.214 520C462.763 606.7 468.78 693.3 460.534 780C452.4 866.7 430.114 953.3 421.2 1040C412.286 1126.7 416.743 1213.3 418.971 1256.7L421.2 1300H0V1256.7C0 1213.3 0 1126.7 0 1040C0 953.3 0 866.7 0 780C0 693.3 0 606.7 0 520C0 433.3 0 346.7 0 260C0 173.3 0 86.7 0 43.3V0H457.971Z" fill="#A78BF5"/>
            <path d="M312 0L309.549 43.3C307.209 86.7 302.306 173.3 305.871 260C309.437 346.7 321.249 433.3 319.02 520C316.791 606.7 300.523 693.3 289.38 780C278.237 866.7 272.22 953.3 266.649 1040C261.077 1126.7 255.951 1213.3 253.277 1256.7L250.714 1300H0V1256.7C0 1213.3 0 1126.7 0 1040C0 953.3 0 866.7 0 780C0 693.3 0 606.7 0 520C0 433.3 0 346.7 0 260C0 173.3 0 86.7 0 43.3V0H312Z" fill="#6F54B5"/>
            <path d="M158.229 0L161.906 43.3C165.694 86.7 173.049 173.3 168.257 260C163.466 346.7 146.306 433.3 150.094 520C153.771 606.7 178.286 693.3 176.614 780C174.943 866.7 147.086 953.3 133.491 1040C120.009 1126.7 120.677 1213.3 121.123 1256.7L121.457 1300H0V1256.7C0 1213.3 0 1126.7 0 1040C0 953.3 0 866.7 0 780C0 693.3 0 606.7 0 520C0 433.3 0 346.7 0 260C0 173.3 0 86.7 0 43.3V0H158.229Z" fill="#392178"/>
          </svg>
        </div>
        <div className="w-full py-12 px-8 flex flex-col gap-7 ">
          <div className="w-full h-fit flex flex-col gap-2 ">
            <div className="w-full h-fit font-retro leading-[1.2] text-4xl ">
              FROM
                <br />
              NOTHING
                <br />
              COURSES
            </div>
            <div className="w-full h-fit text-right leading-[1.2] font-rubik text-2xl font-medium ">
              كورسات
              <br />
              للهروب من حياة ما بتمثلك
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-7 ">
            <div className="w-full h-fit flex gap-3">
              <div className={`w-12 h-3 bg-[#A78BF5] rounded `} />
              <div className={`w-12 h-3 ${step === "2" || step === "3" ? 'bg-[#A78BF5]' : 'bg-[#D9D9D9]'} rounded `} />
              <div className={`w-12 h-3 ${step === "3" ? 'bg-[#A78BF5]' : 'bg-[#D9D9D9]'} rounded `} />
            </div>
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
                  <label className={`w-full h-fit py-2 px-3 flex flex-col justify-between items-center gap-8 border-2 ${selectedOption === 'computer' ? ' border-[#A78BF5] ' : 'border-[#D9D9D9] border-2 '} transition-colors  rounded-lg `} >
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
                  <label className={`w-full h-fit py-2 px-3 flex flex-col justify-between items-center gap-8 border-2  ${selectedOption === 'mobile' ? ' border-[#A78BF5] ' : 'border-[#D9D9D9] '} transition-colors rounded-lg `} >
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
                <div onClick={() => (username !== '' && phoneNumber !== '' && selectedOption !== '') ? setStep('2') : setStep('1')} className="w-full h-11 flex justify-center items-center font-medium  text-white font-rubik bg-[#A78BF5] rounded-lg ">
                  التالي
                </div>
                :
                <button onClick={() => (username !== '' && phoneNumber !== '' && selectedOption !== '' && email !== '') ? setStep('3') : setStep('1')}  type="submit" className="w-full h-11 flex justify-center items-center font-medium  text-white font-rubik bg-[#A78BF5] rounded-lg ">
                  تسجيل دخول
                </button>
              }
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
