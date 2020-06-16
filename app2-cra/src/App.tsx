import React from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import logo from "./logo.svg";
import { emit } from "./index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Main = () => {
  return (
    <div>
      <Link to="/page1">page 1</Link>
      <br />
      <Link to="/page2">page 2</Link>
      <br />
      <Link to={`/page3/${Math.random()}`}>page 3</Link>
      <App />
    </div>
  );
};

const Page3 = () => {
  const { id } = useParams();
  return (
    <>
      <div>create-react-app page 3</div>
      <div>id: {id}</div>
    </>
  );
};

export default () => {
  const basePath = window.__POWERED_BY_QIANKUN__ ? "/app2" : undefined;
  return (
    <BrowserRouter basename={basePath}>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/page1">
        <div>create-react-app page 1</div>
      </Route>
      <Route path="/page2">
        <div>create-react-app page 2</div>
        <input
          type="text"
          onChange={({ currentTarget }) => {
            emit.set({ string: currentTarget.value });
          }}
        />
      </Route>
      <Route path="/page3/:id">
        <Page3 />
      </Route>
    </BrowserRouter>
  );
};
