
import "./App.css";
import { useState } from "react";
import { Header } from "./Header";
import { UserContext } from "./UserContext";

function App() {
    const[user, setUser] = useState({
        name: "Bruce Wayne",
        role: "admin",
        theme: "dark",
    });
    const contextValue = {
      user,
      setUser,
    }
    return (
      <UserContext.Provider value = {contextValue}>
          <div>
              <h1>Dashboard</h1>
              <Header />
          </div>
        </UserContext.Provider>
    )
}
export default App;
