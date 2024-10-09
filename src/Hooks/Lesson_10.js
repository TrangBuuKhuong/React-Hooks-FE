import { useReducer, useState } from "react";

// Redux
// Cung cấp thêm 1 sự lựa chọn cho việc lưu state trong function component
// Nhiều state quá dùng useReducer

// useState phù hợp với các component có state đơn giản: kiểu dữ liệu nguyên thuỷ string boolean int, object 1 cấp

// Bài toán sử dụng usereducer: 
// 1. InitState: 
// 2. Actions: Up/Down
// 3. Reducer
// 4. Dispatch

const initState = 0;
//action
const UP_ACTION = 'UP'
const DOWN_ACTION = 'DOWN'
//reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state - 1;
        case DOWN_ACTION:
            return state + 1;
        default:
            throw new Error('Invalid action')
    }
}
function Lesson_10() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>useReducer</h1>
            <h3>{count}</h3>
            <button className="btn btn-dark" onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button className="btn btn-success" onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    );
}

export default Lesson_10;
