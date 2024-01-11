"use client"
import React from 'react'
export default function Partner() {
    const copyToClipBoard = () => {
        navigator.clipboard.writeText('parmeshb90@gmail.com')
        alert('copied the Email address')
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
                    <span style={{
                        border: "1px solid white",
                        borderRadius: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingBottom: "5px",
                        paddingTop: "5px"
                    }} id="mail">
                        parmeshb90@gmail.com
                    </span>
                    <span onClick={copyToClipBoard}><abbr title="copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                    </svg></abbr></span>
                </div>
                <div className='text-black' style={{
                    textAlign: "center"
                }}>Drop one mail If you want to become partner</div>
            </div>
        </>
    )
}
