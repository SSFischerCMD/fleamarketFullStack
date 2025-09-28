import App from "../App";
import ExitIcon from "../svg/exit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginItem({onItemClick}){
  const [mode, setMode] = useState("login"); //login oder Registrierung  
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
    const err = validate();
    if (err) return setMsg(err);

    // <<Fake-API-Aufruf>>
    await new Promise((r) => setTimeout(r, 300));
    setMsg(mode === "login" ? "Login erfolgreich ✅" : "Registrierung erfolgreich ✅");
    // Hier würdest du normalerweise: fetch('/api/login'|'/api/register', {body: {email, pw}})
  }


  return(
    <>
      <div className="popUp-container">
        <div className="popUp-content">
          <div onClick={() => onItemClick(false)}>
            <ExitIcon ></ExitIcon>
          </div>
          <h2>{mode === "login" ? "Login" : "Registrieren"}</h2>
          <form onSubmit={handleSubmit} >
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
            <label >
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
            {mode === "register" && 
            (
              <label >
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

            <button type="submit" >
              {mode === "login" ? "Einloggen" : "Konto erstellen"}
            </button>
          </form>
          
           {msg ? <p>{msg}</p> : null} {/*Wird nur angezeigt wenn msg nicht leer ist */}


          <button type="button"
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
    </>
  );
}

export default LoginItem