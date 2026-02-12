import { useState } from "react";
import "./App.css";

import Login from "./Login";
import Dashboard from "./Dashboard";
import EventsPage from "./EventsPage";

type Page = "login" | "dashboard" | "events";

export default function App() {
  const [page, setPage] = useState<Page>("login");

  return (
    <div className="app-root">
      {/* Main content */}
      <div className="page-container">
        {page === "login" && <Login />}
        {page === "dashboard" && <Dashboard />}
        {page === "events" && <EventsPage />}
      </div>

      {/* Bottom Navigation (hide on login) */}
      {page !== "login" && (
        <nav className="bottom-nav">
          <button onClick={() => setPage("dashboard")}>
            🏠
            <span>Devices</span>
          </button>

          <button onClick={() => setPage("events")}>
            ▶
            <span>Events</span>
          </button>

          <button onClick={() => setPage("login")}>
            👤
            <span>Account</span>
          </button>
        </nav>
      )}

      {/* Fake login trigger for testing */}
      {page === "login" && (
        <div className="login-overlay">
          <button
            className="login-btn"
            onClick={() => setPage("dashboard")}
          >
            Enter Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
