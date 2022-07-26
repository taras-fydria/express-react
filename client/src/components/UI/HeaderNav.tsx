import * as React from 'react';
import {FC} from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';

interface iHeaderNav {
  navMenu: Array<NavLinkProps>;
}

const Nav: FC<iHeaderNav> = (props) => {
  const {navMenu} = props;
  return (
    <nav >
      {navMenu && navMenu.length > 0 && (
        <ul className="nav">
          {navMenu.map((item, i) => (
            <li key={i} className="nav-item">
              <NavLink to={item.to} className={`nav-link`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
