'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.about, .statement, .services, .stats, .cta, .content-details, .related-services, .contact-form-section, .career-stats, .career-intro, .career-roles article, .career-contact, .career-application, .about-story, .about-pillars, .about-locations, .footer-cta, .footer-main, .service-card',
    )
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    targets.forEach((target) => {
      target.classList.add('will-reveal')
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
