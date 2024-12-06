import { useState } from "react";

import { 
    Brevities, 
    Experiences, 
    Styles 
} from "../../data/types";

import "./_layouts.css";


export default function CustomizationBar(){
    const [experience, setExperience] = useState(Experiences[0]);
    const [styles, setStyles] = useState(Styles[experience]);

    const onChange = (e: any) => {
        const {name, value} = e.target;
        if(name === "experience"){
            setStyles(Styles[value as keyof typeof Styles]);
            setExperience(value);
        }
    }

    return(
        <div className="cb-hover-area">
            <div className="cb-container">
                <div>
                    <label htmlFor="experience">Experience</label>
                    <select name="experience"
                    onChange={onChange}>
                        {
                            Experiences.map(experience => (
                                <option key={experience}
                                value={experience}>
                                    {experience}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="style">Style</label>
                    <select name="style"
                    onChange={onChange}>
                        {
                            styles.map(style => (
                                <option key={style}>
                                    {style}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="brevity">Brevity</label>
                    <select name="brevity"
                    onChange={onChange}>
                        {
                            Brevities.map(brevity => (
                                <option key={brevity}
                                value={brevity}>
                                    {brevity}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {/* <button>
                    
                </button> */}
            </div>
        </div>
    )
}