const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button> + New Chat</button>
        <ul className="history">
          <li>aaa</li>
        </ul>
        <nav>BotBots</nav>
      </section>
      <section className="main">
        <h1>BotBots</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit"> | </div>
          </div>
          <p className="info">aaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
      </section>
    </div>
  );
};

export default App;
