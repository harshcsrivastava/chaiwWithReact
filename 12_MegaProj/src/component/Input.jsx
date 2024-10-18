import React, {useId, forwardRef} from 'react'
// ya to import kr le ya direct React.forwardRef
// explore aur dekho about forwar Ref
const Input = forwardRef(
    function Input({
        label,
        type = "text",
        className = "",
        ...props
    }, ref){

        const id = useId()
        return (
            <div className='w-full'>
                {label && <label 
                    className='inline-block mb-1 pl-1' 
                    htmlFor={id}>
                            {label}
                     </label>
                }
                <input 
                type= {type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                // user se reference liya as a prop 
                {...props}
                id={id}
                />
            </div>
        )
    }
)

export default Input

// Head to ./Select.jsx