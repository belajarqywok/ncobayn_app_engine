import {
  // ---
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="#">Home</NavMenuItem>
      <NavMenuItem href="http://github.com/belajarqywok/">GitHub</NavMenuItem>
      <NavMenuItem href="https://twitter.com/FariqyAl/">Twitter</NavMenuItem>
      <NavMenuItem href="https://www.instagram.com/otw.mastah/">Instagram</NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
