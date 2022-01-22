import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>Hey let's build Letsflix</h1>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
