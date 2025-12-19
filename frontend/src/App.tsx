import { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";

interface GetSeeCallback {
  (data: string): void;
}

function App() {
  return (
    <>
      <Chat />
    </>
  );
}

export default App;
