
import { useState } from 'react';
import '../Hooks/Lesson_01.scss';
import Lesson_06_a from './Lesson_06_a';

//useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (multated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

//useLayoutEfect
//useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (multated)
// 3. Gọi cleanup nếu deps thay đổic (sunc)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
function Lesson_06() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
            {show && <Lesson_06_a />}
        </div>
    );
}

export default Lesson_06;
