import "./_layouts.css";

export default function CustomizationBar(){
    return(
        <div className="cb-hover-area">
            <div className="cb-container">
                <select>
                    <option>Experience 1</option>
                    <option>Experience 2</option>
                    <option>Experience 3</option>
                    <option>Experience 4</option>
                    <option>Experience 5</option>
                </select>
                <select>
                    <option>Brevity 1</option>
                    <option>Brevity 2</option>
                    <option>Brevity 3</option>
                    <option>Brevity 4</option>
                    <option>Brevity 5</option>
                </select>
                <button>
                    Light Mode/Dark Mode
                </button>
            </div>
        </div>
    )
}