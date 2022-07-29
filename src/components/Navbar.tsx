import { Link } from 'react-router-dom';
import { CarbonCode } from '../icons/CarbonCode';
import { CarbonLogoGithub } from '../icons/CarbonLogoGithub';
import { CarbonLogoLinkedin } from '../icons/CarbonLogoLinkedin';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to='/'>
              <CarbonCode className='social' /> <span>Palskie</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>

        </li>
        <li className='social'>
          <a href='#home'>
            <CarbonLogoLinkedin className='social' />
          </a>
        </li>
        <li>
          <a href='#home'>
            <CarbonLogoGithub className='social' />
          </a>
        </li>
        <li>
          <a href='#resume' className='btn'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
