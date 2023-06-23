import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="content-container">
          <header className="App-header">
            <div className="logo-container">
              <img src="./logo.png" alt="logo" className="logo" />
            </div>
            <div className="header-divider"></div>
          </header>
            <div className="left-section">
              <div className="login-section">
                <p><h2>Connexion</h2></p>
                <div className="input-container">
                  <label htmlFor="email">E-mail</label>
                  <br />
                  <input type="text" id="email" />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Mot de passe</label>
                  <br />
                  <input type="password" id="password" />
                </div>
                <p>Pas encore inscrit ? <a href="/inscription">Inscription</a></p>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="right-section">
              {/* Contenu de la partie droite */}
            </div>
          </div>
      </div>
  );
}

export default App;
