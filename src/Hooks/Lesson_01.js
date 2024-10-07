
import '../Hooks/Lesson_01.scss';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const orders = [100, 200, 300]
function Lesson_01() {

    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        return total;
    });

    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    const codeToHighLight = `
    const orders = [100, 200, 300]
    function Lesson_01() {
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        return total;
    });
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
     return (
        <>
            <div className='ls-01'>
                <div>
                    <h1>{counter}</h1>
                    <button className='btn btn-primary' onClick={handleIncrease}>Click</button>
                </div>
            </div>
        </>
    );
    `
    const [info, setInfo] = useState({
        name: 'Khang',
        gender: 'Male',
        age: '18'
    })
    const handleUpdate = () => {
        setInfo(
            prev => {
                return {
                    ...prev,
                    bio: 'Like the pink'
                }
            }
        )
    }
    return (
        <>
            <div className='ls-01'>
                <h1>Lesson 01 useState</h1>
                <div className='content-left'>
                    <h3>{counter}</h3>
                    <button className='btn btn-primary' onClick={handleIncrease}>Click</button>
                </div>
                <div className='content-right'>
                    <SyntaxHighlighter language="javascript" style={atomOneDark}>
                        {codeToHighLight}
                    </SyntaxHighlighter>
                </div>

            </div>
            <div>
                <div>
                    <h1>{JSON.stringify(info)}</h1>
                    <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </>

    );
}

export default Lesson_01;
