import { useMemo, useRef, useState } from "react";




function Lesson_09() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()
    const handleSubmit = () => {
        setProducts([...products, { name, price: +price }])
        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const result = products.reduce((result, prod) =>
            result + prod.price, 0)

        return result
    }, [products])
    return (
        <div>
            <h1>useMemo</h1>
            <input
                ref={nameRef}
                value={name}
                placeholder="name..."
                onChange={e => setName(e.target.value)}
            />
            <br></br>
            <input
                value={price}
                placeholder="price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button className='btn btn-info' onClick={handleSubmit}>Add</button>
            <label>Total: {total}</label>
            <ul>
                {products.map((product, index) => {
                    return (
                        <li key="index">{product.name}-{product.price}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Lesson_09;
