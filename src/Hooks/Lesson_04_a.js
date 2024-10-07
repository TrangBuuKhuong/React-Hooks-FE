import { useEffect, useState } from "react";
import { compile } from "sass";


function Lesson_04_a() {


    //1. useEffect(callback)
    //- Gọi mỗi khi component render
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const tabs = ['posts', 'albums', 'comments']
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    //- Gọi callback sau khi component then element vào DOM
    //2. useEffect(callback, [])
    //- Chỉ gọi 1 lần sau khi component được mounted
    //3. useEffect(callback,[deps])
    // update DOM, call API, Listen DOM events, Cleanup
    //- Callback sẽ được gọi lại mỗi khi dependence thay đổi
    //------------------------
    //1. callback is called sau khi component mounted
    //2. Cleanup function luôn được gọi trước khi component unmount
    //3. Cleanup function luôn được gọi trước khi callback được gọi(trừ lần đầu tiên)

    // Luôn nhớ clear listener
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            }
            else {
                //hide
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const handleChangeType = (type) => {
        setType(type)
    }
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)

        }
        window.addEventListener('resize', handleResize)
        //clean
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const id = setInterval(() => {
            setCountDown(prevState => prevState - 1);
            console.log('check count down: ', countDown)
        }, 1000)
        return () => clearInterval(id)

    }, [])

    const [total, setTotal] = useState(1)
    useEffect(() => {
        console.log('mounted or Re-render')
        return () => {
            console.log('cleanup')
        }
    })
    const [avatar, setAvatar] = useState()
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    return (

        <div>

            <h1>Lesson 04 Mount And Unmount, useEffect</h1>
            <h1 >{width}</h1>
            <div>
                {tabs.map((item, index) => {
                    return (
                        <button key={index}
                            onClick={() => handleChangeType(item)}
                            style={type === item ? { color: '#fff', backgroundColor: '#333' } : {}}
                        >{item}</button>
                    )
                })}
            </div>
            <input value={title} onChange={e => setTitle(e.target.value)} />

            <ul>
                {/* {posts.map((item, index) => {
                    return (
                        <li key={index}>{item.title || item.name}</li>
                    )
                })} */}
            </ul>
            {showGoToTop && (
                <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to top</button>
            )}
            <div>
                <h1>{countDown}</h1>
            </div>
            <div>
                <input type='file' onChange={handlePreviewAvatar} />
                {avatar && (
                    <img src={avatar.preview} alt="" width="80%"></img>
                )}
                <button>Click me</button>
            </div>
        </div>
    );
}

export default Lesson_04_a;
