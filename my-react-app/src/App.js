import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <body>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGZH8HT"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  
  <nav class="hide-on-small-only">
    <ul class="side-nav fixed section table-of-contents">

      <li class="logo">
        <a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro"
          class="brand-logo grey-blue-text">
          <img src="/Infetech/assets/img/passport-new.jpg" class="circle img-responsive profile-pic" alt="avatar"/>
        </a>
      </li>

      <li class="bold">
        <a aria-label="Navigate to the About section" href="#about" class="waves-effect waves-dark teal-text"><i
            class="mdi-social-person small"></i><span>About</span></a>
      </li>
      <li class="bold">
        <a aria-label="Navigate to the Experience section" href="#experience"
          class="waves-effect waves-dark teal-text"><i
            class="mdi-action-trending-up small"></i><span>Experience</span></a>
      </li>

      <li class="bold">
        <a aria-label="Navigate to the Projects section" href="#projects" class="waves-effect waves-dark teal-text"><i
            class="mdi-av-my-library-books small"></i><span>Projects</span></a>
      </li>

      <li class="bold">
        <a aria-label="Navigate to the Skills section" href="#skills" class="waves-effect waves-dark teal-text"><i
            class="mdi-action-assessment small"></i><span>Skills</span></a>
      </li>
      
      <li class="bold">
        <a aria-label="Navigate to the Education section" href="#education" class="waves-effect waves-dark teal-text"><i
            class="mdi-social-school small"></i><span>Education</span></a>
      </li>

      <li class="bold">
        <a aria-label="Navigate to the Contact section" href="#contact" class="waves-effect waves-dark teal-text"><i
            class="mdi-content-mail small"></i><span>Contact</span></a>
      </li>

      <li class="bold">
  <a aria-label="Open Varad's resume in a new tab" href="#resume" target="_blank"
          onclick="window.open('https://drive.google.com/file/d/1vYi-bMyIsZPve0x_clxY8xsDtiHiOMd3/view?usp=sharing')"
          class="waves-effect waves-dark teal-text"><i class="mdi-file-folder-open small"></i><span>Resume</span></a> -->
        <a aria-label="Open Varad's resume in a new tab" href="https://farhanzaman123.github.io/Infetech/assets/resume/Farhan_Zaman_resume.pdf" target="_blank"
        class="waves-effect waves-dark teal-text"><i class="mdi-file-folder-open small"></i><span>Resume</span></a>  
      </li>
    </ul>
  </nav>
  </body>
    </div>
  
  );
}

export default App;
