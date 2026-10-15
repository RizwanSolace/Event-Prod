'use client'

import { type FormEvent, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export function CareerForm() {
  const [ready, setReady] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const area = String(data.get('area') || '')
    const portfolio = String(data.get('portfolio') || 'Not provided')
    const note = String(data.get('note') || '')
    const subject = encodeURIComponent(`Career enquiry — ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nArea of interest: ${area}\nPortfolio / LinkedIn: ${portfolio}\n\n${note}\n\nI will attach my CV to this email.`)
    setReady(true)
    window.location.href = `mailto:casting@eventprod.de?subject=${subject}&body=${body}`
  }

  return <form className="career-form" onSubmit={handleSubmit}>
    <div className="career-form-heading"><span>CAREER ENQUIRY</span><h3>Start with an<br/><em>introduction.</em></h3><p>Tell us where your strengths lie. You can attach your CV when your email draft opens.</p></div>
    <div className="career-form-grid">
      <label>Your name<input name="name" autoComplete="name" placeholder="Your full name" required/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
      <label>Area of interest<select name="area" defaultValue="" required><option value="" disabled>Choose an area</option><option>Event & production management</option><option>Creative & communications</option><option>Talent & guest experience</option><option>Project crew & operations</option><option>Other / freelance collaboration</option></select></label>
      <label>Portfolio or LinkedIn <span>OPTIONAL</span><input name="portfolio" type="url" placeholder="https://"/></label>
      <label className="career-note">A little about you<textarea name="note" rows={4} placeholder="What do you enjoy doing, and what kind of projects interest you?" required/></label>
    </div>
    <button className="pink-btn" type="submit">Send your introduction <ArrowUpRight size={16}/></button>
    {ready && <p className="career-form-status" role="status"><Check size={16}/> Your email app should open with your introduction ready. If it doesn’t, write to <a href="mailto:casting@eventprod.de">casting@eventprod.de</a>.</p>}
  </form>
}
