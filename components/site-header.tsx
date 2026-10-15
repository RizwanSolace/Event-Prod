'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, MoveRight } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const services = [
  ['entertainment-gala-dinnershows', 'Entertainment & Dinner Shows'], ['djs-music-producers', 'DJs & Music Producers'], ['eventplanung-management', 'Event Planning & Management'], ['messe-management', 'Exhibitions & Trade Fairs'], ['catering', 'Catering & Hospitality'], ['technische-produktion', 'Technical Production'], ['promotion', 'Promotion & Brand Activation'], ['firmenevents', 'Corporate Events'], ['logistik-personal', 'Event Logistics & Staffing'], ['locationrecherche', 'Venue Finding'], ['medien-dienstleistung', 'Media Services & OOH / DOOH'], ['marketing-media', 'Marketing & Media Strategy'], ['kommunikationsdesign', 'Creative Studio & Design'],
]

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  return <header className={`site-header${solid ? ' page-header' : ''}`}>
    <BrandLogo/>
    <nav className="desktop-nav" aria-label="Main navigation">
      <Link href="/">Home</Link><Link href="/ueber-uns">About</Link>
      <div className="nav-drop"><Link href="/leistungen">Services <ChevronDown size={12}/></Link><div className="drop-menu">{services.map(([slug, title]) => <Link key={slug} href={`/${slug}`}>{title}</Link>)}<Link className="all-services" href="/leistungen">Explore all services <MoveRight size={14}/></Link></div></div>
      <Link href="/jobs-karriere">Careers</Link><Link href="/kontakt">Contact</Link>
    </nav>
    <div className="header-actions"><Link href="/kontakt" className="outline-btn">Let’s talk <MoveRight size={14}/></Link><button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button></div>
    {open && <nav className="mobile-menu" aria-label="Mobile navigation"><Link href="/" onClick={() => setOpen(false)}>Home</Link><Link href="/ueber-uns" onClick={() => setOpen(false)}>About</Link><Link href="/leistungen" onClick={() => setOpen(false)}>Services</Link><div className="mobile-services">{services.map(([slug, title]) => <Link key={slug} href={`/${slug}`} onClick={() => setOpen(false)}>{title}</Link>)}</div><Link href="/jobs-karriere" onClick={() => setOpen(false)}>Careers</Link><Link href="/kontakt" onClick={() => setOpen(false)}>Contact</Link></nav>}
  </header>
}
