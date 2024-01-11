import React from 'react'

export default function Pricing() {
    const blink = {
        animation: 'b 1s infinite',
        '@keyframes b': {
            '0%': { opacity: 1 },
            '50%': { opacity: 0 },
            '100%': { opacity: 1 },
        },
        border: "1px solid white",
        borderRadius: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "5px",
        paddingTop: "5px",
    }
    return (
        <>
            <div className='space-y-10 p-8 bg-white ' style={{
                height: "100vh"
            }}>
                <div className="bg-sky-900 space-x-2" style={{
                    width: "45rem",
                    height: "6rem",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    margin: "auto",
                    opacity: "90%",
                    marginTop: "2rem",
                    backdropFilter: "25%",
                    borderRadius: "5px",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem"
                }}>
                    <span style={blink} id="mail">
                        Right now its totally free but after some updation It will be paid.
                    </span>
                </div>
            </div>
        </>
    )
}
