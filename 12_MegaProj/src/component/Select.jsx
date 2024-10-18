import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {

    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select 
        {...props}
        ref={ref}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* Options bydefault array milega */}
            {//if options me value hai, agar null hai
            options?.map((option) => (
                <option key = {option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// way 2
export default React.forwardRef(Select)

// Head to ./PostCard.jsx