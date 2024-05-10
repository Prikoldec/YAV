import Events from './components/events/Events';
import Header from './components/header/Header';
import Title from './components/title/Title';
import './styles/main.css';
import "./fonts/South.woff";

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      <Header />
      <Title />
      <Events />
      {/* <Main /> */}

    </div>
  );
}

export default App;
