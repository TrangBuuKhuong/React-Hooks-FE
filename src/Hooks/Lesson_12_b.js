import { useContext } from "react";
import { themeContext } from "./ThemeContext";
//Context
// CompA=>CompB=>CompC
// Theme:Dark/light


function Lesson_12_b() {
    const context = useContext(themeContext);
    console.log(context)
    return (
        <div>
            <p className={context.theme}>Hello</p>
        </div>
    );
}

export default Lesson_12_b;
