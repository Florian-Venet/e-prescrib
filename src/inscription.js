import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <header className="App-header">
          <div className="logo-container">
            <div className="header-text">
              <h2>ePrescrin</h2>
            </div>
            <img src="./logo.png" alt="logo" className="logo" />
          </div>
          <div className="header-divider"></div>
        </header>
        <div className="left-section">
          <div className="login-section">
            <h2>Inscription</h2>
            <div className="input-container">
              <label htmlFor="email">E-mail</label>
              <br />
              <input type="text" id="email" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input type="password" id="password" />
              <br/>
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input type="password" id="password" />
            </div>
            <br/>
            <button type="button" className="button">S'inscrire</button>
            <p>Déjà inscrit ? <a href="./App.js">Connexion</a></p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="right-section">
          <div className="right-content">
            <h2>Pourquoi utiliser ePrescrib ?</h2>
            <p>ePrescrip simplifie grandement les rapports entre médecins, patients et pharmaciens. Grâce à notre ordonnance digitalisée, fini l'utilisation intensive de papier.</p>
            <h2>Comment ça fonctionne ?</h2>
            <p>Appuez sur "nouvelle ordonnance pour créer un nouveau document, renseignez les informations nécessaire et finaliser là en appuyant sur "générer", ce qui va créer le QR code pour autentifier l'ordonnance. Le patient n'a plus qu'a se rendre sur son application ePrescrib et scanner le QR code avant de se rendre en pharamacie </p>
            <img src="./ordonnance.jpg" alt="image" className="custom-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
