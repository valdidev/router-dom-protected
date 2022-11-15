import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Admin, Analytics, Dashboard, HomeLogged, Landing } from "./pages";

export const App = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // request done
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      rol: 2,
    });
  };

  const logout = () => setUser(null);

  return (
    <>
      <BrowserRouter>
        <Navigation />

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}

        <Routes>
          {/* PUBLIC ROUTES */}
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />

          {/* GENERIC PRIVATE ROUTES */}
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/homelogged" element={<HomeLogged />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* ROL PRIVATE ROUTES */}
          <Route
            path="/analytics"
            element={
              <ProtectedRoute
                isAllowed={!!user && user?.permissions.includes("analize")}
              >
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute 
              isAllowed={!!user && user?.rol === 1}
              redirectTo='/homelogged'
              >
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="landing">Landing</Link>
        </li>
        <li>
          <Link to="homelogged">Home Logged</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="analytics">Analytics</Link>
        </li>
        <li>
          <Link to="admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
