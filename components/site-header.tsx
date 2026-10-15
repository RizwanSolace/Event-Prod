'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, MoveRight } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const services = [
  ['entertainment-gala-dinnershows', 'Entertainment & Dinner Shows'], ['djs-music-producers', 'DJs & Music Producers'], ['eventplanung-management', 'Event Planning & Management'], ['messe-management', 'Exhibitions & Trade Fairs'], ['catering', 'Catering & Hospitality'], ['technische-produktion', 'Technical Production'], ['promotion', 'Promotion & Brand Activation'], ['firmenevents', 'Corporate Events'], ['logistik-personal', 'Event Logistics & Staffing'], ['locationrecherche', 'Venue Finding'], ['medien-dienstleistung', 'Media Services & OOH / DOOH'], ['marketing-media', 'Marketing & Media Strategy'], ['kommunikationsdesign', 'Creative Studio & Design'],
]

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() ?? '/'
  const onServicePage = services.some(([slug]) => pathname === `/${slug}`)
  const servicesActive = onServicePage || pathname === '/leistungen'
  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 48)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [pathname])

  return <header className={`site-header${solid ? ' page-header' : ''}${scrolled ? ' is-scrolled' : ''}`}>
    <BrandLogo/>
    <nav className="desktop-nav" aria-label="Main navigation">
      <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link><Link href="/ueber-uns" aria-current={pathname === '/ueber-uns' ? 'page' : undefined}>About</Link>
      <div className={`nav-drop${servicesActive ? ' is-active' : ''}${servicesOpen ? ' is-open' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onFocusCapture={() => setServicesOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false) }} onKeyDown={(event) => { if (event.key === 'Escape') setServicesOpen(false) }}><Link href="/leistungen" aria-current={pathname === '/leistungen' ? 'page' : undefined} onClick={() => setServicesOpen(false)}>Services</Link><button className="services-toggle" type="button" aria-label={servicesOpen ? 'Close services menu' : 'Open services menu'} aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown size={13}/></button><div id="services-menu" className="drop-menu">{services.map(([slug, title]) => <Link key={slug} href={`/${slug}`} aria-current={pathname === `/${slug}` ? 'page' : undefined} onClick={() => setServicesOpen(false)}>{title}</Link>)}<Link className="all-services" href="/leistungen" aria-current={pathname === '/leistungen' ? 'page' : undefined} onClick={() => setServicesOpen(false)}>Explore all services <MoveRight size={14}/></Link></div></div>
      <Link href="/jobs-karriere" aria-current={pathname === '/jobs-karriere' ? 'page' : undefined}>Careers</Link><Link href="/kontakt" aria-current={pathname === '/kontakt' ? 'page' : undefined}>Contact</Link>
    </nav>
    <div className="header-actions"><Link href="/kontakt" className="outline-btn">Let’s talk <MoveRight size={14}/></Link><button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button></div>
    {open && <nav className="mobile-menu" aria-label="Mobile navigation"><Link href="/" aria-current={pathname === '/' ? 'page' : undefined} onClick={() => setOpen(false)}>Home</Link><Link href="/ueber-uns" aria-current={pathname === '/ueber-uns' ? 'page' : undefined} onClick={() => setOpen(false)}>About</Link><Link href="/leistungen" className={servicesActive ? 'is-current' : undefined} aria-current={pathname === '/leistungen' ? 'page' : undefined} onClick={() => setOpen(false)}>Services</Link><div className="mobile-services">{services.map(([slug, title]) => <Link key={slug} href={`/${slug}`} className={pathname === `/${slug}` ? 'is-current' : undefined} aria-current={pathname === `/${slug}` ? 'page' : undefined} onClick={() => setOpen(false)}>{title}</Link>)}</div><Link href="/jobs-karriere" aria-current={pathname === '/jobs-karriere' ? 'page' : undefined} onClick={() => setOpen(false)}>Careers</Link><Link href="/kontakt" aria-current={pathname === '/kontakt' ? 'page' : undefined} onClick={() => setOpen(false)}>Contact</Link></nav>}
  </header>
}
