import { useReducer, useRef, useState } from "react";
import { setJob, addJob, deleteJob } from './Todo/action';
import reducer, { initState } from './Todo/reducer';
import logger from './Todo/logger';
// Redux
// Cung cấp thêm 1 sự lựa chọn cho việc lưu state trong function component
// Nhiều state quá dùng useReducer

// useState phù hợp với các component có state đơn giản: kiểu dữ liệu nguyên thuỷ string boolean int, object 1 cấp

// Bài toán sử dụng usereducer: 
// 1. InitState: 
// 2. Actions: Up/Down
// 3. Reducer
// 4. Dispatch


function Lesson_11() {

    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state
    const inPutReef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inPutReef.current.focus();
    }

    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }


    return (
        <div>
            <h1>useReducer TodoList</h1>
            <h3>Todo</h3>
            <input placeholder="Enter todo..." ref={inPutReef} value={job} onChange={e => { dispatch(setJob(e.target.value)) }} />
            <button className="btn btn-dark" onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>{job} <span onClick={() => handleDelete(index)}>&times;</span></li>
                    )
                }
                )

                }

            </ul>
        </div>
    );
}

export default Lesson_11;
