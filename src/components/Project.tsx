const Project = () => {
  return (
    <div className='section-blue'>
      <section id='projects'>
        <h2>Projects I'm proud of</h2>
        <article>
          <div className='text'>
            <h4>Latest Project</h4>
            <h3>Wall of Wonder</h3>
            <p>
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like{' '}
              <a href='https://frontendmasters.github.io/grid-flexbox-v2/'>
                this
              </a>
              , and multiple links look <a href='#home'>like this</a> and{' '}
              <a href='#home'>like this</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src='https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png'
            alt='Screenshot of the Wall of Wonder.'
          />
        </article>

        <article className='reverse'>
          <div className='text'>
            <h4>Bootcamp Project</h4>
            <h3>Feed-A-Star-Mole Game</h3>
            <p>
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like{' '}
              <a href='https://frontendmasters.github.io/grid-flexbox-v2/'>
                this
              </a>
              , and multiple links look <a href='#home'>like this</a> and{' '}
              <a href='#home'>like this</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <img
            src='https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png'
            alt='Screenshot of the Wall of Wonder.'
          />
        </article>

        <article>
          <div className='text'>
            <h4>Photography Project</h4>
            <h3>Wall of Wonder Collection</h3>
            <p>
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. A link looks like{' '}
              <a href='https://frontendmasters.github.io/grid-flexbox-v2/'>
                this
              </a>
              , and multiple links look <a href='#home'>like this</a> and{' '}
              <a href='#home'>like this</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img
            src='https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png'
            alt='Screenshot of the Wall of Wonder.'
          />
        </article>
      </section>
    </div>
  );
};

export default Project;
