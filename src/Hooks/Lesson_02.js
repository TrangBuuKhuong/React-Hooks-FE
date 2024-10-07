
import { Fragment } from 'react';
import { useState } from 'react';
import '../Hooks/Lesson_01.scss';

const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB KEYBOARD'
]
function Lesson_02() {

    const [gift, setGift] = useState();
    const renderGitf = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const handleSubmit = () => {
        //Call API
        console.log({ name, email })
    }
    const course = [
        { id: 1, name: 'HTML,CSS' },
        {
            id: 2, name: 'JavaScript'
        },
        {
            id: 3, name: 'ReactJs'
        }
    ]

    const [checked, setChecked] = useState([]);
    const handlSubmit = () => {
        console.log("check ids: ", checked)
    }
    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                //uncheck
                return checked.filter(item => item !== id)
            }
            else {
                return [...prev, id]
            }
        }
        )
    }
    return (
        <>
            <div className='ls-01'>
                <h1>Lesson 02 useState with input</h1>
                <div className='content-left'>
                    <h1>{gift || 'No have gitf now'}</h1>
                    <button className='btn btn-info' onClick={renderGitf}>Get gift</button>
                </div>
                <div className='content-right'>
                    <label>Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <button className='btn btn-primary' onClick={handleSubmit}>Register</button>
                </div>
                <div className='content-right'>
                    {course && course.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type='checkbox'
                                    checked={checked.includes(item.id)}
                                    onChange={() => handleCheck(item.id)} />
                                <label>{item.name}</label>
                            </div>
                        )
                    })}
                    <button className='btn btn-info' onClick={handlSubmit}>Submit</button>
                </div>
            </div>
        </>

    );
}

export default Lesson_02;
