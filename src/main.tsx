import { StrictMode, 
  useState, 
  useEffect 
} from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";

import { 
  Project 
} from "./data/types";

import { 
  DummyProjectData 
} from "./data/DummyProjectData";

import Projects from "./components/Projects";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


export function App(){
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(DummyProjectData);
  }, [])

  return(
    <>
      <h1>daviswilliams.dev</h1>
      <Projects 
        projects={projects}
      />
    </>
  )
}