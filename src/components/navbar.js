import { LinkItem } from './link-item';

export default function Navbar() {
  return (
    <div className="page-header">
			<LinkItem href="/dashboard" label="Dashboard"/>
			<LinkItem href="/about" label="About"/>
			<LinkItem href="/player" label="As player"/>
			<LinkItem href="/computer" label="As computer"/>
    </div>
  )
}