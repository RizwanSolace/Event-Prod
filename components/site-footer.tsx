'use client'

import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const services = [
  ['entertainment-gala-dinnershows', 'Entertainment & Shows'], ['eventplanung-management', 'Event Management'], ['messe-management', 'Exhibitions'], ['technische-produktion', 'Technical Production'], ['kommunikationsdesign', 'Creative Studio'],
]

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta"><div><span>HAVE A PROJECT IN MIND?</span><h2>Let’s make it<br/><em>unforgettable.</em></h2></div><Link href="/kontakt" className="pink-btn">Start a conversation <ArrowUpRight size={16}/></Link></div>
    <div className="footer-main">
      <div className="footer-brand"><BrandLogo/><p>International events.<br/>Thoughtfully produced.</p><div className="social"><a href="https://www.instagram.com/" aria-label="Instagram"><span>◎</span></a><a href="https://www.facebook.com/" aria-label="Facebook"><span>f</span></a><a href="mailto:office@eventprod.de" aria-label="Email"><Mail/></a></div></div>
      <div><h4>Explore</h4><Link href="/ueber-uns">About us</Link><Link href="/leistungen">All services</Link><Link href="/jobs-karriere">Careers</Link><Link href="/kontakt">Contact</Link></div>
      <div><h4>What we do</h4>{services.map(([slug, title]) => <Link key={slug} href={`/${slug}`}>{title}</Link>)}<Link href="/leistungen">View all services <ArrowUpRight size={12}/></Link></div>
      <div className="footer-contact"><h4>Say hello</h4><a href="tel:+4921192840345"><Phone/>+49 211 92840345</a><a href="mailto:office@eventprod.de"><Mail/>office@eventprod.de</a><p><MapPin/>Rheinpromenade 13<br/><span>40789 Monheim am Rhein</span></p><small>Daily · 09:00–20:00</small></div>
    </div>
    <div className="footer-bottom"><span>© 2012–2026 Event Productions by Rustam Tsodikov</span><div><Link href="/impressum">Imprint</Link><Link href="/kontakt">Contact</Link></div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp/></button></div>
  </footer>
}
