import * as React from 'react';
import {FC} from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';

interface iHeaderNav {
  navMenu: Array<NavLinkProps>;
}

const Nav: FC<iHeaderNav> = (props) => {
  const {navMenu} = props;
  return (
    <nav>
      {navMenu && navMenu.length > 0 && (
        <ul>
          {navMenu.map((item, i) => (
            <li key={i}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
