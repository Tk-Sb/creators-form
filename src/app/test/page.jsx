'use client'

import GoogleEmailCapture from "@/components/google-btn";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <GoogleEmailCapture setUserEmail={setEmail}></GoogleEmailCapture>
    </div>
  )
}