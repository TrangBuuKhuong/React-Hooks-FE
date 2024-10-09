import { memo, useCallback, useState } from "react";
import Lesson_12_b from "./Lesson_12_b";
//Context
// CompA=>CompB=>CompC
// Theme:Dark/light


function Lesson_12_a() {

    return (
        <div>
            <Lesson_12_b />
        </div>
    );
}

export default Lesson_12_a;
