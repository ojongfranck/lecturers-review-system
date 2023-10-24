import { _404, anim_404 } from '../constants/images'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icon, SEO } from '../components/'
import { useEffect } from 'react'

export default function _404_() {
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <section className="p-8 mx-auto flex flex-col-reverse items-center gap-12 ">
            <SEO
                image={_404}
                title='404 - Page not found'
                name='404'
                description="Sorry, the page you are looking for doesn't exist"
                type='404'
            />
            <div className="w-full mr-5 mb-8 max-w-lg">
                <p className="text-primary text-2xl ">404 error</p>
                <h1 className="mt-3  text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>

                <div className="sm:justify-end mt-6 gap-3 grid sm:flex">
                    <button onClick={() => navigate(-1)} className="w-full sm:w-auto btn font-thin text-primary">
                        <Icon name='ArrowLeft' />Go back
                    </button>
                    <button onClick={() => navigate('/')} className="w-full sm:w-auto btn btn-primary">Take me Home</button>
                </div>
            </div>

            <div className="relative w-full mt-12 lg:w-1/2 scale-125">
                <img className="w-full max-w-lg mx-auto " src={anim_404} draggable={false} />
            </div>
        </section>
    )
}
