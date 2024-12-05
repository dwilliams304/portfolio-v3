import { StrictMode, 
  useState, 
  useEffect 
} from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/sections.css";

import { 
  Project 
} from "./data/types";

import { 
  DummyProjectData 
} from "./data/DummyProjectData";

import { 
  CustomizationBar,
  SectionsList,
  Header, 
  MainCard, 
} from "./components";
import NebulaEffect from "./components/misc/NebulaEffect";


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
    <div className="site-container">
      <CustomizationBar />
      <SectionsList />
      <Header />
      <MainCard />
      <NebulaEffect />
    </div>
  )
}