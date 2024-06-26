import React from 'react';

const Input = (props) => {
    const {type,placeholder,touched ,errorMessage,...inputProps} = props
    return (
        <div className="w-full">
            <label htmlFor={placeholder} className="relative block cursor-text w-full">
                <input id={placeholder} type={type} className={`h-14 w-full border outline-none px-4 peer pt-2 text-secondary font-sans ${touched && errorMessage ? 'border-red-700':'border-primary'}`} required {...inputProps}/>
                <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs text-secondary font-sans peer-valid:text-opacity-50 transition-all opacity-50 peer-focus:text-opacity-50">{placeholder}</span>
            </label>
            {touched && errorMessage ? <span className="text-danger text-xs">{errorMessage}</span>:''}

        </div>
    );
};

export default Input;
