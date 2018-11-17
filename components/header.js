import Link from 'next/link'

const NavGlobal = () => (
    <header className="global-nav">
        <Link href="/"><a></a></Link>
        <nav>
            <ul>
                <li><Link href="/"><a>Padlet</a></Link></li>
                <li><Link href="/"><a>Termine</a></Link></li>
                <li><Link href="/"><a>Informationen</a></Link></li>
            </ul>
        </nav>
        <Link href="http://chemkoe.de" target="_blank"><a></a></Link>
    </header>
)

export default NavGlobal