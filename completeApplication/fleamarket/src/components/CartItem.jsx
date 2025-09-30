import ExitIcon from "../svg/exit";
import { useEffect, useState } from "react";
import { CartControllerApi } from "../api/api.ts";

function CartItem({ onItemClick }) {
  const api = new CartControllerApi();
  const [cart, setCart] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatchCartUpdated = () => window.dispatchEvent(new Event("cart:updated"));

  const loadCart = async () => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (!user) {
        setMsg("Bitte zuerst einloggen.");
        setCart([]);
        return;
      }
      const { data } = await api.getCart(user.email);
      setCart(data || []);
      localStorage.setItem("cart", JSON.stringify(data || []));
      dispatchCartUpdated();
      setMsg("");
    } catch (e) {
      console.error(e);
      setMsg("Konnte Warenkorb nicht laden.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCart(); }, []);

  const setQty = async (productId, quantity) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (!user) return setMsg("Bitte zuerst einloggen.");
      if (quantity <= 0) return remove(productId);

      await api.setCartQuantity(user.email, productId, quantity);
      await loadCart();
    } catch (e) {
      console.error(e);
      setMsg("Menge konnte nicht geändert werden.");
    }
  };

  const inc = (productId, q) => setQty(productId, (q || 0) + 1);
  const dec = (productId, q) => setQty(productId, (q || 0) - 1);

  const remove = async (productId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (!user) return setMsg("Bitte zuerst einloggen.");
      await api.removeItem(user.email, productId);
      await loadCart();
    } catch (e) {
      console.error(e);
      setMsg("Artikel konnte nicht entfernt werden.");
    }
  };

  const count = cart.reduce((s, i) => s + (i.quantity || 0), 0);

  return (
    <div className="popUp-container">
      <div className="popUp-content">
        <div onClick={() => onItemClick(false)}>
          <ExitIcon />
        </div>
        <h1>Dein Warenkorb</h1>

        {loading && <p>Lade…</p>}
        {msg && <p>{msg}</p>}

        {cart.length === 0 && !loading ? (
          <p>Dein Warenkorb ist leer.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.productId} className="cart-row">
                <div className="cart-col">
                  <b>{item.productId}</b>
                  {/* Falls du Produktdetails hast, kannst du hier Titel/Preis einblenden */}
                </div>
                <div className="cart-col">
                  <button onClick={() => dec(item.productId, item.quantity)}>-</button>
                  <input
                    type="number"
                    min={0}
                    value={item.quantity}
                    onChange={(e) => setQty(item.productId, Number(e.target.value))}
                    style={{ width: 60, textAlign: "center" }}
                  />
                  <button onClick={() => inc(item.productId, item.quantity)}>+</button>
                </div>
                <div className="cart-col">
                  <button onClick={() => remove(item.productId)}>Entfernen</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-footer">
          <b>Artikel gesamt:</b> {count}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
