import { useEffect, useRef, useState } from "react";


//Lưu các giá trị bị tham chiếu ra bên ngoài
// function component
// Trả về của useref là 1 object bên trong giá trị là current

function Lesson_07() {
    const [count, setCount] = useState(60)

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect)
    })
    const handleStart = () => {

        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div>
            <h1>useRef</h1>
            <h3 ref={h1Ref}>{count}</h3>
            <button className="btn btn-primary" onClick={handleStart}>Start</button>
            <button className="btn btn-danger" onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Lesson_07;
