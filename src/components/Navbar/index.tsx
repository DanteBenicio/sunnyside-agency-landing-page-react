import { NavbarProps } from '../../types/navbar';
import Button from '../Button';
import './styles.scss';

export default function Navbar() {
  return (
    <header className="navbar_container">
      <nav className="navbar_wrapper">
        <img src="assets/logo.svg" alt="logo writed sunnyside" aria-hidden="true" id="logo" width="124" height="24" />
        <div className="list_button_wrapper">
          <ul className="list">
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#1">Services</a>
            </li>
            <li>
              <a href="#2">Projects</a>
            </li>
          </ul>
          <Button bgColor="white" />
        </div>
      </nav>
    </header>
  );
}
