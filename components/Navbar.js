import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">Blakskær</Link>
      </div>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
  );
}
 
export default Navbar;