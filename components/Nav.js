import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import NavBtn from './NavBtn';

const Nav = ({ query, handleQuery, handleSubmit }) => {
  return (
    <nav className={`${navStyles.nav} shadow-2`}>
      <div className="container flex-vertical-center">
        <Link href="/">
          <a className={navStyles.logo}>
            <Image
              src="/logo.png"
              alt="NEW・LE・KA Logo"
              width={127}
              height={32}
              layout="fixed"
            />
          </a>
        </Link>
        <Search
          query={query}
          handleQuery={handleQuery}
          handleSubmit={handleSubmit}
        />
        <div className={`flex-vertical-center ${navStyles.navBtns}`}>
          <NavBtn content="커피한잔" name="donation" />
          <NavBtn content="제보하기" name="suggest" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
