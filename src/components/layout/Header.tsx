import { useState } from "react";
import { RandomHeaders } from "../../data/RandomHeaders";

export default function Header(){
    const [headerText, setHeaderText] = useState("daviswilliams.dev");

    const setRandomHeaderText = () => {
        var rand = Math.floor(Math.random() * RandomHeaders.length);
        setHeaderText(RandomHeaders[rand]);
    }

    return(
        <header>
            <h1 onClick={() => setRandomHeaderText()}>{headerText}</h1>

            <div>
                <button>Projects</button>
                <button>About</button>
            </div>
        </header>
    )
}