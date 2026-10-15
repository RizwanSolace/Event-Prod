'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export function ContactForm() {
  const [ready, setReady] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const company = String(data.get('company') || 'Not provided')
    const service = String(data.get('service') || 'Not selected')
    const date = String(data.get('date') || 'Not decided')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Event enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nEvent date: ${date}\n\n${message}`)
    setReady(true)
    window.location.href = `mailto:office@eventprod.de?subject=${subject}&body=${body}`
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}>
    <div className="form-heading"><div><span>PROJECT ENQUIRY</span><h2>Tell us what<br/><em>you have in mind.</em></h2></div><p>Share a few details and our team will be ready to pick up the conversation.</p></div>
    <div className="form-grid">
      <label>Your name<input name="name" autoComplete="name" placeholder="Jane Smith" required/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required/></label>
      <label>Company <span className="optional">OPTIONAL</span><input name="company" autoComplete="organization" placeholder="Company name"/></label>
      <label>What are you planning?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Corporate event</option><option>Gala or dinner show</option><option>Exhibition or trade fair</option><option>Brand activation or campaign</option><option>Other / not sure yet</option></select></label>
      <label>Event date <span className="optional">IF KNOWN</span><input name="date" type="date"/></label>
      <label className="message-field">Tell us a little about your project<textarea name="message" rows={4} placeholder="Location, audience, goals, or anything else that would help us understand your idea…" required/></label>
    </div>
    <div className="form-submit-row"><button type="submit" className="pink-btn">Send enquiry <ArrowUpRight size={16}/></button><small>We’ll only use your details to respond to this enquiry.</small></div>
    {ready && <p className="form-confirmation" role="status"><Check size={16}/> Your email app should open with the enquiry ready to send. If it doesn’t, email <a href="mailto:office@eventprod.de">office@eventprod.de</a>.</p>}
  </form>
}
