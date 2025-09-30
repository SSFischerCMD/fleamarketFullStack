import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import FilterPage from "./pages/FilterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NoFilterPage from "./pages/NoFilterPage.jsx";
import ProductPage from "./pages/ProductsPage.jsx";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AccountPage from "./pages/AccountPage.jsx";
function App() {

  function PrivateRoute() {
  const isAuthed = !!localStorage.getItem("user");
  return isAuthed ? <Outlet /> : <Navigate to="/" replace />;
}
  return (
    <>
      <div className="myApp">  
          <Routes>      
                <Route path="home"  element={<HomePage />}>
                  <Route index element={<NoFilterPage />} />
                  <Route path="filters" element={<FilterPage />} />
                </Route>
                <Route path="products" element={<ProductPage/>}/>
                <Route path="products/:searchTerm" element={<ProductPage />} /> 

                {/* Geschützte Routen */}
                <Route element={<PrivateRoute />}>
                  <Route path="/account" element={<AccountPage />} />
                </Route>

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>       
      </div>
    </>
  );
}

export default App;

