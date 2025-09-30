import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartControllerApi } from "../api/api.ts";
import HeaderItem from "../components/HeaderItem";

function AccountPage() {
  const api = new CartControllerApi();
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "null"); }
    catch { return null; }
  });
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); }
    catch { return []; }
  });
  const [msg, setMsg] = useState("");

  // Cart laden, wenn eingeloggt
  useEffect(() => {
    if (!user) return;
    api.getCart(user.email)
      .then(({ data }) => {
        const items = data || [];
        setCart(items);
        localStorage.setItem("cart", JSON.stringify(items));
        window.dispatchEvent(new Event("cart:updated")); // Header-Badge aktualisieren
      })
      .catch(() => setMsg("Warenkorb konnte nicht geladen werden."));
  }, [user?.email]);

  // Logout-Button
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart:updated"));
    setUser(null);
    setCart([]);
    navigate("/home", { replace: true });
  }

  // Menge setzen (0 => entfernen)
  const setQty = async (productId, q) => {
    if (!user) return;
    const quantity = Number(q);
    try {
      await api.setQuantity(user.email, { productId: String(productId), quantity });
      const { data } = await api.getCart(user.email);
      const items = data || [];
      setCart(items);
      localStorage.setItem("cart", JSON.stringify(items));
      window.dispatchEvent(new Event("cart:updated"));
    } catch {
      setMsg("Menge konnte nicht geändert werden.");
    }
  };

  // Item entfernen
  const remove = async (productId) => {
    if (!user) return;
    try {
      await api.removeItem(user.email, String(productId));
      const { data } = await api.getCart(user.email);
      const items = data || [];
      setCart(items);
      localStorage.setItem("cart", JSON.stringify(items));
      window.dispatchEvent(new Event("cart:updated"));
    } catch {
      setMsg("Artikel konnte nicht entfernt werden.");
    }
  };

  // Nicht eingeloggt Ansicht (falls Route-Guard fehlt)
  if (!user) {
    return (
      <div>
        <HeaderItem />
        <h1>Mein Account</h1>
        <p>Du bist nicht eingeloggt.</p>
      </div>
    );
  }

  return (
    <div>
      <HeaderItem />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1>Mein Account</h1>
        <div>
          <span style={{ marginRight: 12 }}>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <h2>Warenkorb</h2>
      {msg && <p>{msg}</p>}
      {cart.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.productId}>
              <b>{item.productId}</b> – Menge:&nbsp;
              <input
                type="number"
                min={0}
                value={item.quantity}
                onChange={(e) => setQty(item.productId, e.target.value)}
                style={{ width: 64 }}
              />
              <button onClick={() => remove(item.productId)} style={{ marginLeft: 8 }}>
                Entfernen
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccountPage;
