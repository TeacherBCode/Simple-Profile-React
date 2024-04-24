import curlyMan from '/src/assets/curly-hair-man.png'
import github from '/src/assets/github.png' 
import linkedin from '/src/assets/linkedin.png'
import './App.css'

function App() {

  return (
    <div className='profile-card'>
      <a href="#">
        <img src={curlyMan} className="logo" alt="Curly Hair Man" />
      </a>
      <div className='info'>
        <h1>Bhuvan Thota</h1>
        <p>Frontend Developer</p>
        <a>bhuvan.thota3</a>
        <div className='info-btns'>
          <button className='github btn'><img src={github} alt="github icon" className='github-img' />Github</button>
          <button className='linkedin btn'><img src={linkedin} alt="linkedin icon" className='linkedin-img' />LinkedIn</button>
        </div>
      </div>

      <div className='card'>
        <div className='about'>
          <h5>About</h5>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className='interest'>
          <h5>Interests</h5>
          <p>Reader. Internet fanatic. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>


    </div>
  )
}

export default App
