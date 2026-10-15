'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight, CalendarDays, Globe2, MapPin, Mic2, MoveRight, Star, Truck, Utensils, Volume2, VolumeX } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const services = [
  { slug: 'entertainment-gala-dinnershows', title: 'Entertainment, Dinner Shows & Circus Productions', short: 'Premium Entertainment, Galaformate und Dinner Shows mit internationalem Show-Cast.', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85', icon: Star },
  { slug: 'eventplanung-management', title: 'Eventplanung & Event Management', short: 'Full-Service Planung für Corporate Events, Galas und Special Events.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85', icon: CalendarDays },
  { slug: 'messe-management', title: 'Messe- & Exhibition Management', short: 'Strategische Planung und Umsetzung nationaler und internationaler Messeauftritte.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', icon: Globe2 },
  { slug: 'marketing-media', title: 'Marketing & Media Strategy', short: 'OOH, DOOH, Transport und digitale Kampagnen für starke Marken.', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85', icon: Mic2 },
  { slug: 'logistik-personal', title: 'Logistik & Eventpersonal', short: 'Internationale Event- und Produktionslogistik inklusive Crew-Betreuung.', image: '/event-logistics.svg', icon: Truck },
  { slug: 'catering', title: 'Catering & Hospitality', short: 'Individuelle Food- und Beverage-Konzepte für Events und Dinner Shows.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85', icon: Utensils },
  { slug: 'locationrecherche', title: 'Locationrecherche', short: 'Recherche und Auswahl außergewöhnlicher Locations für Produktionen.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', icon: MapPin },
  { slug: 'technische-produktion', title: 'Technische Produktion', short: 'Licht-, Ton- und Bühnentechnik für Events, Shows und Messen.', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85', icon: Volume2 },
  { slug: 'kommunikationsdesign', title: 'Creative Studio & Communication Design', short: 'Branding, visuelle Identitäten, Eventdesign und kreative Konzepte.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85', icon: ArrowDownRight },
  { slug: 'djs-music-producers', title: 'DJs & Music Producers', short: 'International talent booking, music programming and live performances.', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85', icon: Mic2 },
  { slug: 'promotion', title: 'Promotion & Brand Activation', short: 'Memorable live encounters and teams that bring brands closer to people.', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85', icon: Star },
  { slug: 'firmenevents', title: 'Corporate Events', short: 'Conferences, celebrations and leadership events made personal.', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85', icon: CalendarDays },
  { slug: 'medien-dienstleistung', title: 'Media Services & OOH / DOOH', short: 'Campaign planning and media concepts that put brands in the right places.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85', icon: Globe2 },
]

function SectionTitle({ eyebrow, title, dark=false }: { eyebrow?: string; title: string; dark?: boolean }) { return <div className={'section-title '+(dark?'light':'')}><span>{eyebrow}</span><h2>{title}</h2><i/></div> }

export default function Page() {
  const [muted, setMuted] = useState(true)
  const heroVideo = useRef<HTMLVideoElement>(null)
  return <main>
    <SiteHeader/>
    <section className="hero"><video ref={heroVideo} className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2200&q=90" aria-hidden="true"><source src="https://videos.pexels.com/video-files/12695733/12695733-hd_1920_1080_24fps.mp4" type="video/mp4"/></video><div className="hero-overlay"/><div className="hero-content"><p className="eyebrow">KREATIV · GLOBAL · INNOVATIV</p><h1>Wir sind <em>Event Productions</em><br/>by <em>Rustam Tsodikov</em></h1><div className="hero-buttons"><a href="#about" className="pink-btn">Willkommen <ArrowDownRight size={16}/></a><Link href="/kontakt" className="ghost-btn">Kontakt</Link></div></div><button className="sound-btn" onClick={()=>{if(heroVideo.current){heroVideo.current.muted=!muted;setMuted(!muted)}}} aria-label={muted?'Ton einschalten':'Ton ausschalten'}>{muted?<VolumeX/>:<Volume2/>}</button><div className="scroll-hint">SCROLL <span/></div></section>
    <section id="about" className="about section"><SectionTitle eyebrow="EVENTPROD" title="Event Productions by Rustam Tsodikov"/><p className="lead">Internationale Event-, Marketing- und Kreativagentur für hochwertige Erlebnisse, starke Markenauftritte und Messen weltweit.</p><div className="feature-grid">{[['PRODUCTION BOUTIQUE','Internationale Production Boutique für Premium Events, Shows und Brand Experiences.',Star],['EVENT & SHOW PRODUCTION','Konzeption, Planung und Umsetzung für Messen und Corporate Formate.',CalendarDays],['MEDIA & CREATIVE','OOH und DOOH Strategien, Creative Direction und Media Konzepte für Marken.',Mic2],['INTERNATIONAL','Standorte in Düsseldorf und Porto Cervo. Internationale Kunden und Marken.',Globe2]].map(([t,d,I])=><div className="feature" key={t as string}><I className="pink-icon"/><h3>{t as string}</h3><p>{d as string}</p></div>)}</div></section>
    <section className="statement"><div><p>OUR SIGNATURE</p><h2>Transforming events<br/><i>into experiences.</i></h2><Link href="/ueber-uns">Mehr über uns <MoveRight size={16}/></Link></div></section>
    <section id="services" className="services section"><SectionTitle eyebrow="WAS WIR TUN" title="Unsere Leistungen"/><div className="service-grid">{services.map(s=>{const I=s.icon; return <Link href={'/'+s.slug} className="service-card" key={s.slug}><img src={s.image} alt={s.title}/><div className="service-shade"/><div className="service-copy"><I/><h3>{s.title}</h3><p>{s.short}</p><span>Entdecken <MoveRight size={15}/></span></div></Link>})}</div></section>
    <section className="stats"><div><strong>12+</strong><span>Jahre Erfahrung</span></div><div><strong>30+</strong><span>Länder weltweit</span></div><div><strong>180</strong><span>Events realisiert</span></div><div><strong>24/7</strong><span>Leidenschaft</span></div></section>
    <section className="cta"><p className="eyebrow">BEREIT FÜR DEN NÄCHSTEN SCHRITT?</p><h2>Lassen Sie uns Ihr Event<br/><em>gestalten.</em></h2><Link href="/kontakt" className="pink-btn">Anfrage senden <MoveRight size={16}/></Link></section>
    <SiteFooter/>
  </main>
}

export { services }
