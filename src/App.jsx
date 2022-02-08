import { useState } from "react";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./context/user/AuthProvider";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
