import Header from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./assets/data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </section>
      </main>
    </div>
  );
}

export default App;
