import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import './scss/main.scss';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="content">
      <Content />
      </div>
    </div>
  );
}

export default App;
