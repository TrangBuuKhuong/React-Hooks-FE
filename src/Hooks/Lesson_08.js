import { memo, useCallback, useState } from "react";
import Lesson_08_a from "./Lesson_08_a";

// 1. memo Higher order component (HOC) Tránh bị re-render trong một số tình huống không cần thiết
// 2. useCallback()

//Hooks 
//HOC
//Render props

// useCallBack() tránh tạo ra các hàm mới không cần thiết đôi khi sơ ý tạo ra các function mới làm cho các 
// component re-render không cần thiết 
function Lesson_08() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div>
            <Lesson_08_a onIncrease={handleIncrease} />
            <h3>{count}</h3>
        </div>
    );
}

export default memo(Lesson_08);
