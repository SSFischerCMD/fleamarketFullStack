import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExitIcon from "../svg/exit";
import { CartControllerApi } from "../api/api.ts";

function ProductItemInfo({ thisProduct, onItemClick }) {
  const api = new CartControllerApi();
  const navigate = useNavigate();

  const [msg,setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setMsg("");
    // 1) Ist ein User eingeloggt?
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) {
      setMsg("Bitte zuerst einloggen.");
      // Optional: direkt zum Login / Start
      // navigate("/", { replace: true });
      return;
    }

    // 2) Produkt-ID prüfen
    const productId = thisProduct?.id;
    if (!productId) {
      setMsg("Produkt-ID fehlt.");
      return;
    }

    try {
      setLoading(true);
      // 3) Backend: hinzufügen (Menge 1)
      console.log("first Log:"+Object.getOwnPropertyNames(Object.getPrototypeOf(api))); // zeigt Methodennamen
      console.dir("second log"+api.addItem);
       const { data: cart } = await api.addItem(
          user.email,
         { productId: String(productId), quantity: 1 }
        );
      // 4) Warenkorb lokal spiegeln
      localStorage.setItem("cart", JSON.stringify(cart || []));
      window.dispatchEvent(new Event("cart:updated")); 

      setMsg("Zum Warenkorb hinzugefügt ✅");
      // Optional: direkt zur Account-/Warenkorb-Seite
      // navigate("/account");
    } catch (err) {
      console.error(err);
      if (err?.response?.status === 404) {
        setMsg("Benutzer oder Produkt nicht gefunden.");
      } else {
        setMsg("Konnte nicht zum Warenkorb hinzufügen.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="popUp-container">
        <div className="exitDiv" onClick={() => onItemClick(false)}>
          <ExitIcon />
        </div>
        <div className="popUp-content">
          <h1>{thisProduct.title}</h1>
          <p>{thisProduct.description}</p>

          <div className="productInfos"><b>price </b>{thisProduct.price} €</div>
          <div className="productInfos"><b>condition </b>{thisProduct.condition}</div>
          <div className="productInfos"><b>location: </b>{thisProduct.location}</div>

          <p>{thisProduct.available}</p>

          {thisProduct?.images?.[0] ? (
            <img src={thisProduct.images[0]} alt={thisProduct.name || thisProduct.title} />
          ) : null}

          <p>{thisProduct.name}</p>
          <p>{thisProduct.userId}</p>

          <button
            className="productBTN"
            onClick={handleAddToCart}
            disabled={loading || !thisProduct?.id}
            title={!thisProduct?.id ? "Produkt-ID fehlt" : "In den Warenkorb"}
          >
            {loading ? "Bitte warten…" : "add to cart"}
          </button>

          <button
            className="productBTN"
            onClick={() => {
              // hier kannst du später deinen Kontakt-Flow einbauen
              navigate("/account");
            }}
          >
            contact seller
          </button>

          {msg ? <p style={{ marginTop: 8 }}>{msg}</p> : null}

          <div>
            <p className="footer">{thisProduct.category}</p>
            <p className="footer">{thisProduct.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemInfo;
