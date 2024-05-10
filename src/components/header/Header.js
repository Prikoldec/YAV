import './style.css';

const Header = () => {
  return ( 
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="logo">YAV</div>
          <nav className="header_nav">
            <ul> 
              <li><a href="#!">Мероприятия</a></li>
              <li><a href="#!">Магазин</a></li>
              <li><a href="#!">Кластеры</a></li>
              <li><a href="#!">Мой аккаунт</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
