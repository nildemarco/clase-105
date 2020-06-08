import { useState } from 'react';

const useForm = (initialState) => {
    const [data, setData] = useState(initialState)

    return [
        data,
        e => {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    ]
}

export default useForm;