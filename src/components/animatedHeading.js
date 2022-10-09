import React from 'react';


const AnimatedHeading = () => {
    const [index, setIndex] = React.useState(0)
    const text_array = [
        "Daily Protein Snack",
        "3pm Pick-Me-Up",
        "Post-Workout",
        "Late Night Treat"
    ]

    React.useEffect(() => {

        const interval = setInterval(() => {
            setIndex((index + 1) % text_array.length)
        }, 3000)

        return (() => clearInterval(interval)) //This is a cleanup function
    })

    return (
        <div className='w-full py-11 bg-white'>
            <h1 className='text-black w-full text-[40px] font-extrabold f-f-p text-center'>
                <span>For Your </span>
                <span className='w-[387px] inline-block relative text-[#767C82] align-top text-left overflow-hidden'>
                    {text_array.map((text, idx) => {
                        return (
                            <b className={`${idx !== index ? "-z-10 fixed " : " slideOutDown relative z-10"}  whitespace-nowrap`}>{text}</b>
                        )
                    })}
                    <b></b>
                </span>
            </h1>
        </div>
    )
}

export default AnimatedHeading