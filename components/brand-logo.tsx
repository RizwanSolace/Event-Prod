import Link from 'next/link'

export function BrandLogo() {
  return <Link href="/" className="logo" aria-label="EventProd home">EVENT<span>PR<svg className="logo-o" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="31" fill="#f00068"/><circle cx="32" cy="32" r="10" fill="#171419"/><path d="M38.5 24 59 45a30 30 0 0 1-4 11L33 35z" fill="#171419"/></svg>D</span></Link>
}
