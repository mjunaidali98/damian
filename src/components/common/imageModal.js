import React from 'react'

const ImageModal = ({image, setImage}) => {
    return (
        <div className={`absolute inset-0 w-full h-full bg-slate-900  ${image ? " bg-opacity-80 z-30" : " -z-10 opacity-0"}`}>
            <div className="w-full fixed flex items-center justify-center top-5 bottom-5">
                <img className="w-7/12 h-full " src={image} alt="" />
            </div>
            <div className="fixed top-2 right-2">
                <svg role={"button"} onClick={() => setImage(null)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
        </div>
    )
}

export default ImageModal