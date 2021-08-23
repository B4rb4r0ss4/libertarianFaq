import logo from '../logo.png';

const Header = () => {
  return (
    <header className="App-header">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <h1>FAQ i Biblioteczka Libertariańska</h1>
          <ul>
            <li>
              <a href="#faq-el">FAQ</a>
            </li>
            <li>
              <a href="/">Biblioteczka</a>
            </li>
            <li>
              <a href="/">O nas</a>
            </li>
          </ul>
        </nav>
      </header>
      <h3 className="quote">
        Libertariańskie kredo opiera się na jednym centralnym pewniku: żaden
        człowiek, ani grupa ludzi, nie ma prawa do agresji skierowanej przeciwko
        osobie lub własności innego człowieka.
        <span>~ Murray Rothbard</span>
      </h3>
    </header>
  );
};

export default Header;
