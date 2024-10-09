import { memo, useState } from "react";


// 1. memo Higher order component (HOC) Tránh bị re-render trong một số tình huống không cần thiết
// 2. useCallback()
// memo nhận vào một component và sau đó nó check các props của component này sau có thay đổi props hay ko 
// có thay đổi thì render lại
// Mỗi khi các cái state được update lại thì nó luôn dẫn đến việc các component con cần phải render lại
// bởi vì là các component con đang sử dụng các state đó thì ko dùng memo. Giả sử có nhiều state mà các cái component con
// ko cần dùng các state đó thì ko cần dùng.
//Hooks
//HOC
//Render props

function Lesson_08_a({ onIncrease }) {

    console.log('re-render')
    return (
        <div>
            <h1>Memo</h1>
            <button onClick={onIncrease}>Click me</button>
        </div>
    );
}

export default memo(Lesson_08_a);
