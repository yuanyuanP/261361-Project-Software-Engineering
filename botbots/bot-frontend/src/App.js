const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Eww</li>
        </ul>
        <nav>
          <p>Made By BotBots Team</p>
        </nav>
      </section>

      <section className="main">
        <h1>BotBots</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>

          <p className="info">This is botbots ....</p>
          
        </div>
      </section>
    </div>
  );
}

export default App;
