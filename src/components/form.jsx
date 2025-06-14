'use client'

import { useState } from "react"

export default function Form ({ children, step }) {
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const data = {
      username: username
    }
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
      <form onSubmit={handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSd057zq5_tY0D7xCrtiKeJZGQC1DBn4zTjOAxPWyFM-pDnGqA/formResponse" className="w-full h-fit flex flex-col gap-4 ">
        <div className="w-full h-fit flex flex-col gap-2 ">
          <label htmlFor="username" className="w-full h-fit font-rubik font-medium text-right ">
            الاسم
          </label>
          <input 
            type="text"
            id="username"
            placeholder={'اسم المستخدم'}
            value={username}
            className={`w-full h-11 font-rubik font-normal text-right px-3 border-2 border-[#D9D9D9] rounded-lg `}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2 ">
          <label htmlFor="phone-number" className="w-full h-fit font-rubik font-medium text-right ">
            رقم واتساب للتواصل
          </label>
          <input
            type="text"
            id="phone-number"
            placeholder={`+963-123-456-789`}
            value={phoneNumber}
            className="w-full h-11 font-rubik font-normal text-left px-3 border-2 border-[#D9D9D9] rounded-lg " 
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2 ">
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
        {children}
      </form>
    </>
  )
}