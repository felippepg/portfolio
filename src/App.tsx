import Wrapper from './container/Wrapper';
import AboutMe from './feature/AboutMe';
import { Home } from './feature/Home/Home';
import Projects from './feature/Projects';
function App() {
  return (
    <Wrapper>
      <Home />
      <Projects />
      <AboutMe />
    </Wrapper>
  );
}

export default App;
