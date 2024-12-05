import { useState } from "react";
import { RandomHeaders } from "../../data/RandomHeaders";

export default function Header(){
    const [headerText, setHeaderText] = useState("daviswilliams");

    const setRandomHeaderText = () => {
        var rand = Math.floor(Math.random() * RandomHeaders.length);
        setHeaderText(RandomHeaders[rand]);
    }

    return(
        <header>
            <h1 onClick={() => setRandomHeaderText()}>
                {headerText}
                .<span className="txt-highlight-p-cul">dev</span>
            </h1>

        </header>
    )
}