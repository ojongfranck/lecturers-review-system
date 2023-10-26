import "./TermsPrivacy.css"
import { Link, } from 'react-router-dom'
export default function TermsPrivacy() {
  return (
    <div className="mx-auto p-4 py-8 grid max-w-[28em] rounded-lg shadow-2xl shadow-[#00000028] transition-shadow duration-500 hover:shadow-md border-t-[1px] border-[#e2e8f4] bg-white">
        <h1 className="main">Terms</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus aliquid eum fugit repellat quae, sapiente distinctio repellendus quam quos voluptas quia libero dolores unde vitae quibusdam aspernatur excepturi quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga sed odit libero possimus vitae iure facere obcaecati tempore eaque maxime eos, molestiae nostrum culpa praesentium dolorum illum, repellat dolore?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptates eos qui repudiandae repellendus excepturi omnis ut eius expedita! Omnis laborum et eos consequatur quibusdam. Cum eligendi quisquam maiores fugiat?
        </p>

        <h1 className="main">Our Privacy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus aliquid eum fugit repellat quae, sapiente distinctio repellendus quam quos voluptas quia libero dolores unde vitae quibusdam aspernatur excepturi quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga sed odit libero possimus vitae iure facere obcaecati tempore eaque maxime eos, molestiae nostrum culpa praesentium dolorum illum, repellat dolore?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptates eos qui repudiandae repellendus excepturi omnis ut eius expedita! Omnis laborum et eos consequatur quibusdam. Cum eligendi quisquam maiores fugiat?
        </p>
        <button><Link to='/Signup' onClick={() => setType('l')} className='act'>Go Back </Link> </button>

    </div>
  )
}

