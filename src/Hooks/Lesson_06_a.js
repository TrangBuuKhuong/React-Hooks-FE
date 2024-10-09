
import { useEffect, useLayoutEffect, useState } from 'react';
import '../Hooks/Lesson_01.scss';


function Lesson_06_a() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count]
    )
    return (
        <div>
            <h1>useLayoutEffect</h1>
            <h3>{count}</h3>
            <button className='btn btn-success' onClick={() => setCount(prev => prev + 1)}>Click</button>
        </div>
    );
}

export default Lesson_06_a;
