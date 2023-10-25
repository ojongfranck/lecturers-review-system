import { Link } from "react-router-dom";

export default function LogSignTab({ setType, onLogin, onSignup }) {
    return (
        <div className="mt-8 text-center -mb-[.8px]">
            <h3 className='text-2xl font-bold mb-8'>Teach Review</h3>
            <div className='tabs justify-center'>
                <div className='tab tab-lifted h-10'  ></div>
                <Link to='/login' onClick={() => setType('l')} className={`tab tab-lifted text-xl h-10 ${onLogin ? 'tab-active text-primary' : ''}`}  >Login</Link>
                <Link to='/signup' onClick={() => setType('s')} className={`tab tab-lifted text-xl h-10 ${onSignup ? 'tab-active text-primary' : ''}`} >Signup</Link>
                <div className='tab tab-lifted h-10'></div>
            </div>
        </div>)
}
