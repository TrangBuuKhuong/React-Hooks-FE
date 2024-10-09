
import { useEffect, useState } from 'react';
import '../Hooks/Lesson_01.scss';

const lessons = [{ id: 1, name: 'What is React, why do you learn React?' },
{ id: 2, name: 'What are SPA/MPA?' }, { id: 3, name: 'Arrow funtion' }
]
function Lesson_05() {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => {
                    return (
                        <li key={lesson.id}
                            style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
                            onClick={() => setLessonId(lesson.id)}
                        >{lesson.name}</li>
                    )
                })}
            </ul>


        </div>
    );
}

export default Lesson_05;
