import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
      <Link href="/player">As player</Link>
      <Link href="/player">As computer</Link>
    </>
  )
}