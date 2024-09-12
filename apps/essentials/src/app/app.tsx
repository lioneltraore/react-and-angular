// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CORE_CONCEPTS } from '../mocks/data';
import Header from '../components/Header/Header';
import CoreConcept from '../components/CoreConcept/CoreConcept';
import TabButton from '../components/TabButton/TabButton';

export function App() {

  function handleSelect() {
    console.log('Button triggered - Selection done');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcept key={c.title} {...c} />
            ))}
          </ul>
        </section>

        <section id="examples">
            <menu>
              <TabButton onSelect={handleSelect}>Components</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
