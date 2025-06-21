'use client'

import GoogleEmailCapture from "@/components/google-btn";
import { useEffect, useState } from "react";

export default function page() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    console.log(email)
  }, [email])

  return (
    <div>
      <GoogleEmailCapture setUserEmail={setEmail}></GoogleEmailCapture>
    </div>
  )
}