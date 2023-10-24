import { useField } from 'formik';
import { Icon } from './';
export default function Input(props) {

    const [field, meta] = useField(props);
    return (
        <div className='my-1'>
            <label className='label text-[1em] whitespace-nowrap' htmlFor={props.id}>{props.label}</label>
            
            <div className="relative">
                {props.type === 'file' ?
                    <input type="file" className={`w-full file-input ${meta.touched && meta.error ? 'file-input-error text-error' : 'file-input-primary text-primary'}`} {...field} {...props} /> :
                    <input className={`w-full ${props.type === 'file'} input ${meta.touched && meta.error ? "input-error bg-[#fff8f8] text-red-500" : "input-primary"}`} {...field} {...props} />
                }
                {props.passField &&
                    <span className='p-2 absolute right-2 bottom-[.4em]'
                        onClick={props.handleToggle}>
                        <Icon
                            name={props.showPass ? 'Eye' : 'EyeSlash'}
                        />
                    </span>
                }
            </div>
            {meta.touched && meta.error ? (
                <p className="text-red-500 mt-2 text-xs whitespace-nowrap">{meta.error}</p>
            ) : null}
        </div>
    );
}
