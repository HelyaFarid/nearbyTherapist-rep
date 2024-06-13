import "./style.css";
import { Navbar, NavbarBrand, NavLink, NavItem } from "reactstrap";
const Nav = () => {
  return (
    <Navbar className="navLogo" expand="xl">
      <NavbarBrand href="/">
        <h1>nearby Therapist</h1>
        <span>Find Your Top Local Therapists</span>
      </NavbarBrand>
      <NavItem className="newSearch">
        <NavLink href="/">New Search</NavLink>
      </NavItem>
    </Navbar>
  );
};
export default Nav;
