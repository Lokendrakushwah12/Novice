import React, { RefObject, useEffect, useState } from 'react'

interface Props {
    cursor: { x: number, y: number }
    cardRef: RefObject<HTMLElement>
}

const Logo: React.FC<Props> = ({ cursor, cardRef }) => {
    const [gradientColor, setGradientColor] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (cardRef.current && cursor.x != null && cursor.y != null) {
            const CardRect = cardRef.current.getBoundingClientRect();
            const cxPercentage = (cursor.x / CardRect.width) * 100;
            const cyPercentage = (cursor.y / CardRect.height) * 100;
            setGradientColor({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
        }
    }, [cursor, cardRef]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 258 258"
            className='w-64 h-64 duration-200 transition-all'
        >
            <defs>
                <radialGradient id="MovingMouse" gradientUnits="userSpaceOnUse" cx={gradientColor.cx} cy={gradientColor.cy} >
                    <stop stopColor='#919191' />
                    <stop offset={1} stopColor='#fafafa' />
                </radialGradient>

                <linearGradient id="paint0_linear_51_119" gradientUnits="userSpaceOnUse" >
                    <stop stopColor="#fafafa" />
                    <stop offset="1" stopColor="#f0f0f0" />
                    <animateTransform
                        attributeName="gradientTransform"
                        type="rotate"
                        from="0 50 50"  // Start rotation angle (0 degrees)
                        to="360 50 50"   // End rotation angle (360 degrees, full circle)
                        dur="5s"         // Duration of the animation (5 seconds)
                        repeatCount="indefinite"  // Loop the animation indefinitely
                    />
                </linearGradient>
            </defs>
            <path
                d="M36.84 1.0017L180.918 129H129.077L221.16 205.278V1H257V65H239.08V193H257V257H221.16V256.998L77.238 129H129.077L36.84 52.7215V257H1V193H18.92V65H1V1H36.84V1.0017Z"
                fill="url(#paint0_linear_51_119)"
                stroke="#d9d9d9"
            />
            <path
                d="M129.077 129L36.84 52.7215V257H1V193H18.92V65H1V1H36.84V1.0017L180.918 129H129.077ZM129.077 129H77.238L221.16 256.998V257H257V193H239.08V65H257V1H221.16V205.278L129.077 129Z"
                className=' fill-[#fafafa00]'
                stroke='url(#MovingMouse)'
                stroke-opacity="0.5"
            />
        </svg>

    )
}

export default Logo
