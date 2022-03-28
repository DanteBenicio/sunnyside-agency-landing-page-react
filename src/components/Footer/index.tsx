import { LogoIcon } from '../../svgs/logo';
import {
  FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon,
} from '../../svgs/socialmedia';
import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <LogoIcon />
        <ul className="footer_list">
          <li>
            <a href="#00">About</a>
          </li>
          <li>
            <a href="#01">Services</a>
          </li>
          <li>
            <a href="#02">Projects</a>
          </li>
        </ul>
        <div className="social_links">
          <a href="#10">
            <FacebookIcon />
          </a>
          <a href="#11">
            <InstagramIcon />
          </a>
          <a href="#12">
            <TwitterIcon />
          </a>
          <a href="#13">
            <PinterestIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
