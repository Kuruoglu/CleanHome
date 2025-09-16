const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar__wrap">
        <div className="topbar__info">
          <span className="topbar__tagline">Your clean space starts here</span>
        </div>
        <div className="topbar__contact">
          <a href="tel:+18883339999" className="topbar__link">
            <strong>Call us:</strong> 888 333 9999
          </a>
          <a href="mailto:info@cleanhome.com" className="topbar__link">
            <strong>Email:</strong> info@cleanhome.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
