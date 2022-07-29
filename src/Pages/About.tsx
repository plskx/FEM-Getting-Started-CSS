/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='divider' />
      <div className='section-blue'>
        <section id='projects'>
          <h2>Zai Santillan</h2>
          <article>
            <div className='text'>
              <h4>Just the highlights</h4>
              <p>
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like{' '}
                <a href='https://frontendmasters.github.io/grid-flexbox-v2/'>
                  this
                </a>
                , and multiple links look <a href='#'>like this</a> and{' '}
                <a href='#'>like this</a>.
              </p>
              <h4>My favorite technologies include:</h4>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <img
              src='https://cdn.mos.cms.futurecdn.net/YYH9o4wmSXJfvbzRTq5BTY.jpg'
              alt='me'
            />
          </article>
        </section>
      </div>
      <div className='divider' />
      <Footer />
    </>
  );
};

export default About;
