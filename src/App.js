import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>📚 Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          This project was coded by Pauline Johansson and is{" "}
          <a href="https://github.com/PaulineJohansson/dictionary-project">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
