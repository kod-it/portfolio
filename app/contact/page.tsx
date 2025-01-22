'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Send email using EmailJS
    emailjs
      .send(
        'service_bpz4wit', // Your EmailJS service ID
        'template_wuekaqc', // Your EmailJS template ID
        formData,
        'awdhP4l00NWCq1C_A' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response)
          setStatus('Message sent successfully!')
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error('Failed to send email:', error)
          setStatus('Failed to send message, please try again.')
        }
      )
  }

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-8 ">
      {/* Left Section - Button to schedule a meeting */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="mb-4">Hey There,

I’d love to connect with you!</p> 
       <a
          target="_blank"
          href="https://calendar.app.google/bxGBsNbRCixm4LaC6" // Make sure this link leads to your scheduling page
          className="py-3 px-6 bg-[rgba(255,87,51,1)] text-lg rounded-lg hover:bg-[rgba(255,87,51,0.8)] focus:outline-none focus:ring-2 focus:ring-[rgba(255,87,51,1)]"
        >
          Schedule a Meeting
        </a>
      </div>

      {/* Right Section - Contact Form */}
      <div className="p-8 rounded-lg  w-full md:w-2/3 max-w-md">
        <h1 className="text-center text-3xl font-semibold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-[rgba(255,87,51,1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(255,87,51,1)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-[rgba(255,87,51,1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(255,87,51,1)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium ">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-[rgba(255,87,51,1)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(255,87,51,1)]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[rgba(255,87,51,1)]  text-lg rounded-lg hover:bg-[rgba(255,87,51,0.8)] focus:outline-none focus:ring-2 focus:ring-[rgba(255,87,51,1)]"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-sm ">
            {status === 'Sending...' ? (
              <span>Sending...</span>
            ) : (
              <span className="">{status}</span>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
