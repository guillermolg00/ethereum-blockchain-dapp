import React from 'react'

const Loading = () => {
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-600 opacity-75 flex flex-col items-center justify-center">
            <div className="w-14 h-14 border-b-4 border-white rounded-full animate-spin"></div>
	        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
	        <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.<br /> And remember!<br /> Before entering the App you must connect Metamask</p>
  	    </div>
    )
}

export default Loading