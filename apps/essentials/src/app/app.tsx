// eslint-disable-next-line @typescript-eslint/no-unused-vars
import reactImg from '../assets/react-core-concepts.png';
import { Concept } from '../types/concept';
import { CORE_CONCEPTS } from '../mocks/data';

const reactDescriptions = ['Fundamental', 'Core', 'Crucial'];

function genRandomInit(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = reactDescriptions[genRandomInit(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export function CoreConcepts(props: Concept) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcepts {...c} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
