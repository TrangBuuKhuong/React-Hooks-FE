import { useState } from 'react';

function Lesson_03() {

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('job'))
        return storageJobs;
    });
    const [isChecked, setIsChecked] = useState([]);

    const handleSubmit = () => {
        if (job && !jobs.includes(job)) {  // Kiểm tra xem job có hợp lệ và không trùng
            setJobs(prev => {

                //save to localstorage
                const newjobs = [...prev, job]
                const newjson = JSON.stringify(newjobs)
                localStorage.setItem('job', newjson)

                return [...prev, job]
            });
            setIsChecked(prev => [...prev, { job: job, check: false }]); // Thêm công việc với check: false
        }
        setJob(''); // Reset ô nhập liệu
        const subMit = isChecked;
        console.log('Submit: ', subMit.filter(item => item.check === true));
    }

    const handleCheck = (index) => {
        setIsChecked(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, check: !item.check } : item // Đảo ngược giá trị check
            )
        );
    }
    console.log(isChecked)
    return (
        <div>
            <h1>Lesson 3 useState with Todo list</h1>
            <div>
                <input value={job} onChange={e => setJob(e.target.value)} />
                <button className='btn btn-secondary' onClick={handleSubmit}>Submit</button>

                {jobs && jobs.length > 0 && jobs.map((item, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="checkbox"
                                checked={isChecked[index] ? isChecked[index].check : false}
                                onChange={() => handleCheck(index)}
                            />
                            <label style={{ textDecoration: isChecked[index]?.check ? 'line-through' : 'none' }}>
                                {item}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Lesson_03;