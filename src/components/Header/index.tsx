import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-[1000] w-full">
      <div className="container mx-auto">
        <div className="hidden items-center justify-between py-4 lg:flex">
          <Link href="/">Logo do Casal</Link>
          <nav>
            <ul className="flex items-center space-x-10">
              <li>
                <Link href="/" className="text-xl">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xl">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/presents" className="text-xl">
                  Presentes
                </Link>
              </li>
              <li>
                <Link href="/rsvp" className="text-xl">
                  RSVP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
