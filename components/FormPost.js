import { useRouter } from 'next/router'
import { useState } from "react"; 
import User from "../pages/api/user"; 

export default function FormPost(props) {
    const router = useRouter()
    const [data, setData] = useState({
        username: props.dataPost ? props.dataPost.username : '',
        id: props.dataPost ? props.dataPost.id : '',
        email: props.dataPost ? props.dataPost.email : '',
        password: props.dataPost ? props.dataPost.password : '',
        level: props.dataPost ? props.dataPost.level : ''
    })

    const handleChange = (e) => {
        setData(prevState => (
            {
                ...prevState, [e.target.name]: e.target.value
            }
        ))
    }

    const storeData = async (e) => {
        const res = await User.postData(data)
        if (res.message) {//alert id tidak ditemukan
            router.push('/')
        } else {
            router.push('/')
            // router.push(`/${encodeURIComponent(res.id)}`)
        }
    }

    const updateData = async (e) => {
        const res = await User.updtData(data) 
        if (res.message) {//alert id tidak ditemukan
            router.push('/')
        } else {
            router.push('/')
            // router.push(`/${encodeURIComponent(res)}`)
        }
    }

    const handleButton = (action) => {
        if (action == 'add') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={storeData}>Submit</a>
        } else if (action == 'update') {
            return <a className="rounded text-gray-100 px-3 py-1 bg-red-500 hover:shadow-inner hover:bg-red-700 transition-all duration-300" onClick={updateData}>Update</a>
        }
    }

    return (
        <div className="my-10">
            <form>
                <div className="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label htmlFor="name" className="bg-white text-gray-600 px-1">username *</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="username"
                            name="username"
                            value={data.username}
                            onChange={handleChange} className="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div>
                <div className="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label htmlFor="email" className="bg-white text-gray-600 px-1">email *</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange} className="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div> 
                <div className="my-8 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label htmlFor="level" className="bg-white text-gray-600 px-1">level *</label>
                        </p>
                    </div>
                    <p>
                        <input type="text" id="level"
                            name="level"
                            value={data.level}
                            onChange={handleChange} className="py-1 px-1 text-gray-900 outline-none block h-full w-full" />
                    </p>
                </div> 
                {handleButton(props.action)}
            </form>
        </div>
    )
}

