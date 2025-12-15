// components/Header/Header.tsx

import css from './Header.module.css';
import Link from 'next/link';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href='/' aria-label='Home'>
        NoteHub
      </Link>
      <nav aria-label='Main Navigation'>
        <ul className={css.navigation}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
          <Link href='/notes/filter/all'>Notes</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <CategoriesMenu />
          <li>
            <Link href='/about'>About</Link>
          </li>
          <AuthNavigation /> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
