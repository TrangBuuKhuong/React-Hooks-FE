
import { useState } from 'react';
import '../Hooks/Lesson_01.scss';
import Lesson_04_a from './Lesson_04_a';

function Lesson_04() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>
            {show && <Lesson_04_a />}
        </div>
    );
}

export default Lesson_04;
