import Navbar from './components/Navbar';
import ToggleSwitch from './components/ToggleSwitch';

function Home() {
  return (
    <>
      <header className="mt-2 flex justify-between laptop:flex-col laptop:justify-start w-full">
        <ToggleSwitch className="laptop:order-last" />
        <Navbar className="laptop:order-first" />
      </header>
    </>
  );
}

export default Home;
