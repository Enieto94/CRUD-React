import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../pages/Menu';


const UriBlog = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    // Procedimiento para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(UriBlog)
        setBlog(res.data)
    }
    const deleteBlog = async (id) => {
        getBlogs()
        axios.delete(`${UriBlog}${id}`)
        getBlogs()
    }

    return (
        <div >
            <Menu />
            <div className='containerPrincipal'>
                <div className='containerSecundario'>
                    <Link to="/crear" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i> Agregar Post</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Título</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='table-primary'>
                            {
                                blogs.map((blog) => (

                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-pen"></i></Link>
                                            <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )


                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs