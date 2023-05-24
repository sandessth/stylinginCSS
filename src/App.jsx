import './App.css'
import './style.css'

function App() {
let Iproject=4
let Nproject=3
  return (
  <>
    {
      <>
          <div className='header'>
            <a href="https://www.instagram.com/sandesketch/" class="logo">XYZ Productions</a>
            <div class="header-right">
              <a href="#home">Home</a>
              <a href="https://www.youtube.com/">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
          <div className='head'>
              <h2>We create. We collaborate. We innovate. </h2><br></br>
              <h4> The number of projects we completed in April : {Nproject+Iproject}</h4>
          </div>
          <footer className='about'>
            <a href='https://www.w3schools.com/default.asp'>Contact Us</a>
            <a href='https://www.programiz.com/'>Learn more</a>
          </footer>
      </>
    }
    
  </>
  )
}

export default App