import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../svg/UserIcon.jsx";
import CartIcon from "../svg/CartIcon.jsx";
import SearchItem from "./SearchItem.jsx";
import LoginItem from "./LoginItem.jsx";
import CartItem from "./CartItem.jsx";

function HeaderItem() {
  const location = useLocation();
  const isHomePage =  location.pathname === '/home' || location.pathname === '/home/' || 
                      location.pathname === '/home/filters' || location.pathname === '/home/filters/';

  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "null"); } catch { return null; }
  });

  const countCart = (items) => items.reduce((sum, i) => sum + (i.quantity || 0), 0);
  const refreshCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(countCart(cart));
    } catch {
      setCartCount(0);
    }
  };
  const refreshUser = () => {
    try { setUser(JSON.parse(localStorage.getItem("user") || "null")); }
    catch { setUser(null); }
  };

  useEffect(() => {
    // Initial
    refreshUser();
    refreshCartCount();

    // Reagieren auf Custom-Event nach Cart-Updates
    const onCartUpdated = () => refreshCartCount();
    window.addEventListener("cart:updated", onCartUpdated);

    // Optional: auf Änderungen aus anderen Tabs reagieren
    const onStorage = (e) => { if (e.key === "cart" || e.key === "user") { refreshCartCount(); refreshUser(); } };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cart:updated", onCartUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function handleLoginChange() { setShowLogin(true); }
  function handleCartChange() {
    // Wenn nicht eingeloggt → zuerst Login öffnen
    const u = JSON.parse(localStorage.getItem("user") || "null");
    if (!u) { setShowLogin(true); return; }
    setShowCart(true);
  }

  function handleLoginItemClick(closing) {
    setShowLogin(closing);
    // Nach dem Schließen ggf. User/Cart neu einlesen
    refreshUser();
    refreshCartCount();
  }
  function handleCartItemClick(closing) {
    setShowCart(closing);
    refreshCartCount();
  }

  return (
    <>
      <header>
        <Link to={"/home"}>
          <div className="logo">FleatMarket</div>
        </Link>
        {!isHomePage ? <SearchItem id="headerSearchItem" /> : null}

        <div className="menu">
          {!user ? (
            <div className="menu-item" onClick={handleLoginChange}>
              <div className="menuItem-text">Sign In</div>
              <div className="menuItem-icon"><UserIcon /></div>
            </div>
          ) : (
            <Link to="/account" className="menu-item">
              <div className="menuItem-text">{user.email || "Account"}</div>
              <div className="menuItem-icon"><UserIcon /></div>
            </Link>
          )}

          <div className="menu-item" onClick={handleCartChange}>
            <div className="menuItem-text">
              Cart{cartCount > 0 ? ` (${cartCount})` : ""}
            </div>
            <div className="menuItem-icon"><CartIcon /></div>
          </div>
        </div>
      </header>

      {showLogin ? <LoginItem onItemClick={handleLoginItemClick} /> : null}
      {showCart  ? <CartItem  onItemClick={handleCartItemClick} /> : null}
    </>
  );
}

export default HeaderItem;
