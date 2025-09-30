import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FleamarketControllerApi } from "../api/api.ts";
import ExitIcon from "../svg/exit";

function LoginItem({ onItemClick }) {
  const api = new FleamarketControllerApi();
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [msg, setMsg] = useState("");

  function validate() {
    if (!email.includes("@")) return "Bitte eine gültige E-Mail angeben.";
    if (pw.length < 6) return "Passwort muss mind. 6 Zeichen haben.";
    if (mode === "register" && pw !== pw2) return "Passwörter stimmen nicht überein.";
    return "";
  }

async function handleSubmit(e) {
  e.preventDefault();
  const v = validate();
  if (v) return setMsg(v);

  try {
    // 1) LOGIN
    const res = await api.findUser(email.trim());
    const user = res.data;
    if (!user) return setMsg("Login fehlgeschlagen");

    localStorage.setItem("user", JSON.stringify(user));
    setMsg("");

    // 2) CART LADEN (Fehler hier NICHT als Login-Fehler anzeigen)
    try {
      const { data: cart } = await api.getCart(user.email);
      localStorage.setItem("cart", JSON.stringify(cart || []));
      window.dispatchEvent(new Event("cart:updated"));
    } catch (cartErr) {
      console.warn("Cart load failed:", cartErr);
      // Optional: eigene, harmlose Meldung
      // toast("Warenkorb konnte nicht geladen werden");
    }

    // 3) Close + Navigate
    onItemClick?.(false);
    navigate("/account", { replace: true });

  } catch (err) {
    // <- NUR Login-Request landet hier
    console.error("Login error:", err);
    if (err.response?.status === 404) setMsg("Login fehlgeschlagen");
    else if (err.message?.includes("Network Error")) setMsg("CORS/Netzwerkfehler beim Login.");
    else setMsg("Serverfehler: Unable to log in.");
  }
}

  return (
    <div className="popUp-container">
      <div className="popUp-content">
        <div onClick={() => onItemClick(false)}>
          <ExitIcon />
        </div>

        <h2>{mode === "login" ? "Login" : "Registrieren"}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            E-Mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Passwort
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              required
              minLength={6}
            />
          </label>

          {mode === "register" && (
            <label>
              Passwort bestätigen
              <input
                type="password"
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
                autoComplete="new-password"
                required
                minLength={6}
              />
            </label>
          )}

          <button type="submit">
            {mode === "login" ? "Einloggen" : "Konto erstellen"}
          </button>
        </form>

        {msg ? <p>{msg}</p> : null}

        <button
          type="button"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setMsg("");
          }}
        >
          {mode === "login"
            ? "Noch kein Konto? Jetzt registrieren"
            : "Schon ein Konto? Zum Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginItem;
