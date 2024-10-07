
import '../Hooks/LessonList.scss';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lesson_01 from './Lesson_01';
import Lesson_02 from './Lesson_02';
import Lesson_03 from './Lesson_03';
import Lesson_04 from './Lesson_04';
import Lesson_05 from './Lesson_05';
import Lesson_06 from './Lesson_06';
import Lesson_07 from './Lesson_07';
import Lesson_08 from './Lesson_08';
import Lesson_09 from './Lesson_09';
import Lesson_10 from './Lesson_10';


function LessonList() {
    const [lessons, setLessons] = useState(
        Array.from({ length: 10 }, (_, index) => `Lesson ${index + 1}`.padStart(8, '0'))
    );
    const scrollRef = useRef(null);
    return (
        <>
            <div className='title'>Learn React with React Hooks</div>
            <div className='lesson-routes'>
                <ul>
                    {lessons.map((lesson, index) => (
                        <li key={index} className="custom-cursor">
                            <Link to={`/lesson/${index + 1}`}>{lesson}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='lesson-content'>
                <Routes>
                    <Route path='/lesson/1' element={<Lesson_01 />} />
                    <Route path='/lesson/2' element={<Lesson_02 />} />
                    <Route path='/lesson/3' element={<Lesson_03 />} />
                    <Route path='/lesson/4' element={<Lesson_04 />} />
                    <Route path='/lesson/5' element={<Lesson_05 />} />
                    <Route path='/lesson/6' element={<Lesson_06 />} />
                    <Route path='/lesson/7' element={<Lesson_07 />} />
                    <Route path='/lesson/8' element={<Lesson_08 />} />
                    <Route path='/lesson/9' element={<Lesson_09 />} />
                    <Route path='/lesson/10' element={<Lesson_10 />} />
                </Routes>
            </div>



        </>


    );
}

export default LessonList;
