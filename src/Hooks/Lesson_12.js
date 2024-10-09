
import Lesson_12_a from "./Lesson_12_a";
import { themeContext } from "./ThemeContext";
import "./Lesson_12.css";
import { useContext } from "react";
//Context
// CompA=>CompB=>CompC
// Theme:Dark/light
// 1. Create context

// 2. Provider
// 3. Consumer

function Lesson_12() {
    const context = useContext(themeContext)
    console.log(context);
    return (

        <div>
            <button className="btn btn-warning" onClick={context.toggleThem}>Toggle theme</button>
            <Lesson_12_a />
        </div>


    );
}

export default Lesson_12;
