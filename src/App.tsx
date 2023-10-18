import Wrapper from './container/Wrapper';
import { Home } from './feature/Home/Home';
import Projects from './feature/Projects';
function App() {
  return (
    <Wrapper>
      <Home />
      <Projects />
    </Wrapper>
  );
}

export default App;
