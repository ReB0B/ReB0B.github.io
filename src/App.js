import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper-main">
      {/* Left side */}
      <div className="left-text">
        <div>
          <a href="#contact" className="scroll-link">Contact</a>
        </div>
        <div>
          <a href="#creative" className="scroll-link">Creative</a>
        </div>
        <div>
          <a href="#work" className="scroll-link">Work</a>
        </div>
        <div>
          <a href="#about" className="scroll-link">About</a>
        </div>
        <div>
          <a href="#home" className="scroll-link">Home</a>
        </div>
      </div>

      {/* Right side */}
      <div className="right-text">
        <a href="#" className="name">RIBHAB GHIMIRE</a>
      </div>

      <div id="home" className="section">
        <div className="middle-container">
          <div className="eleven-grid">
            <div className="welcome">WELCOME</div>
          </div>
        </div>
      </div>

      <div id="about" className="section">
        <div className="middle-container">
          <div className="twelve-grid">
            <div className="heading">Introduction</div>
            <div className="description">
              <p>
                My design process is centered around people and how their needs fit into larger systems. I particularly excel in being able to go deep into an ambiguous space, simplify complex problems, and catalyze action through design execution. I ask a lot of questions.
                <br />
                <br />
                My skillset in visual design, high-fidelity prototyping, and defining product strategy have helped me lead design across different product spaces. I do my best work when I feel that I am making a tangible impact and growing myself and others.
              </p>
            </div>
          </div>
          <div className="twelve-grid">
            <div className="heading">Hobbies</div>
            <div className="description">
              <ul>
                <li>asjkcjkas</li>
                <li>vkndvkndkv</li>
                <li>dfvndsfkjnvsdfkv</li>
                <li>fdv.kjsdfnkvnsd</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="section">
        <div className="middle-container">
          <div className="twelve-grid">
            <div className="heading">Project 1</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam autem veniam tenetur, esse aliquam ut, recusandae explicabo quam nostrum quos? Distinctio, necessitatibus facilis.
            </div>
          </div>
          <div className="twelve-grid">
            <div className="heading">Project 1</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam autem veniam tenetur, esse aliquam ut, recusandae explicabo quam nostrum quos? Distinctio, necessitatibus facilis.
            </div>
          </div>
          <div className="twelve-grid">
            <div className="heading">Project 2</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam autem veniam tenetur, esse aliquam ut, recusandae explicabo quam nostrum quos? Distinctio, necessitatibus facilis.
            </div>
          </div>
          <div className="twelve-grid">
            <div className="heading">Project 3</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam autem veniam tenetur, esse aliquam ut, recusandae explicabo quam nostrum quos? Distinctio, necessitatibus facilis.
            </div>
          </div>
          <div className="twelve-grid">
            <div className="heading">Project 4</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam autem veniam tenetur, esse aliquam ut, recusandae explicabo quam nostrum quos? Distinctio, necessitatibus facilis.
            </div>
          </div>
        </div>
      </div>

      <div id="creative" className="section"></div>

      <div id="contact" className="section"></div>
    </div>
  );
}

export default App;

