
import { useState } from 'react';
import '../Hooks/Lesson_01.scss';


function Lesson_05() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>Toggle</button>

        </div>
    );
}

export default Lesson_05;
