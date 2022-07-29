import { CarbonEmail } from '../icons/CarbonEmail';
import { CarbonLogoGithub } from '../icons/CarbonLogoGithub';
import { CarbonLogoLinkedin } from '../icons/CarbonLogoLinkedin';

const Footer = () => {
  return (
    <footer>
      <h2>Palskie • Software Engineer</h2>
      <ul>
        <li>
          <a href='#linkedin'>
            <CarbonLogoLinkedin />
          </a>
        </li>
        <li>
          <a href='#home'>
            <CarbonLogoGithub />
          </a>
        </li>
        <li>
          <a href='#home'>
            <CarbonEmail />
          </a>
        </li>
      </ul>
      <p>© 2022 Zai Santillan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
