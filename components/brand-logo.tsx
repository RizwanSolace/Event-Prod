import Image from 'next/image'
import Link from 'next/link'

export function BrandLogo() {
  return <Link href="/" className="brand-logo-link" aria-label="EventProd home"><Image src="/eventprod-logo-white.png" alt="EventProd by Rustam Tsodikov" width={889} height={447} priority className="brand-logo-image"/></Link>
}
