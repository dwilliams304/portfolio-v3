//React imports
import { StrictMode, 
  useState, 
  useEffect 
} from "react";
import { createRoot } from "react-dom/client";

//Style imports
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/layout.css";

//Type imports
import { 
  Project 
} from "./data/types";

//Data imports
import { 
  DummyProjectData 
} from "./data/DummyProjectData";

//Component imports
import { 
  SectionsList,
  Header, 
  AboutCard, 
  Projects,
} from "./components";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



export function App(){
  const [projects, setProjects] = useState<Project[]>([]);
  const [textOption, setTextOption] = useState(null); //TEMP
  const [themeOption, setThemeOption] = useState(null); //TEMP
  const [experienceOption, setExperienceOption] = useState(null); //TEMP
  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
    setProjects(DummyProjectData);
  }, [])


  return(
    <div className="site-container">
      <SectionsList />
      <Header />
      <AboutCard />
      <Projects projects={projects}/>
    </div>
  )
}