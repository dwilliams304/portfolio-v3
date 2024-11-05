import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


export function App(){
  return(
    <>
      <h1>daviswilliams.dev</h1>
    </>
  )
}