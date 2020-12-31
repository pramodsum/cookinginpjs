import React from 'react';
import Link from './Link';

type NavItem = {
  url: string;
  label: string;
};

type NavigationProps = {
  data: NavItem[];
  navClass?: string;
};

const Navigation: React.FC<NavigationProps> = ({ data, navClass = 'site-nav-item' }) => (
  <>
    {data.map((navItem, i) => {
      if (navItem.url.match(/^\s?http(s?)/gi)) {
        return (
          <Link
            className={navClass}
            href={navItem.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer">
            {navItem.label}
          </Link>
        );
      } else {
        return (
          <Link className={navClass} to={navItem.url} key={i}>
            {navItem.label}
          </Link>
        );
      }
    })}
  </>
);

export default Navigation;
