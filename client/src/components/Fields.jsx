import { useState } from "react";
import { useField } from "formik";
import { Link } from "react-router-dom";
import { Input } from './'

export function CheckBoxField(props) {
    const [field, { touched, error, ..._ }] = useField(props);

    return (
        <label htmlFor={props.id} className="label text-xs">
            <input
                type="checkbox"
                name={props.id}
                id={props.id}
                className={`checkbox checkbox-sm mr-3 ${touched && error ? "checkbox-error" : "checkbox-primary"}`}
                {...field}{...props}
            />
            {touched && error ? (
                <span className="text-error">{error}</span>
            ) : <span>{props.message}<Link className="link-primary link-hover" to='/terms-of-service'>{props.url}</Link></span>}
        </label>
    )
}




export  function PasswordField({ id, label }) {
    const [showPassword, setShowPassword] = useState(true)

    return (
        <Input
            id={id}
            label={label}
            passField={true}
            name={id}
            type={showPassword ? "password" : 'text'}
            placeholder="• • • • • • • • •"
            // maxLength='20'
            handleToggle={() => { setShowPassword(!showPassword) }}
            showPass={showPassword}
        />
    )
}

