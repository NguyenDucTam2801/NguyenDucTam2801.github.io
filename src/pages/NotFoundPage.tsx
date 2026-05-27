import React from 'react';
import { Link } from 'react-router-dom'; // <-- Use this link for React Router
// import Link from 'next/link';           // <-- Use this link for Next.js

export const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-manrope px-4">

            {/* Giant 404 Accent Number */}
            <h1 className="text-9xl md:text-[12rem] font-bebas text-[#D3E97A] tracking-widest leading-none select-none">
                404
            </h1>

            {/* Error Message */}
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mt-4 text-center">
                Page Under Construction
            </h2>

            <p className="text-gray-400 text-center max-w-md mt-2 mb-8 text-sm md:text-base leading-relaxed">
                The route you are looking for has not been developed yet, or does not exist. Let's get you back to the main page.
            </p>

            {/* Go Back Home Button */}
            {/* (Uncomment the line matching your router) */}

            {/* For React Router: */}
            <Link to="/" className="bg-[#D3E97A] text-black font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-full hover:bg-[#c5db6c] active:scale-95 transition-all">Go Back Home</Link>

            {/* For Next.js: */}
            {/* <Link href="/" className="bg-[#D3E97A] text-black font-bold uppercase text-sm tracking-wider px-8 py-3.5 rounded-full hover:bg-[#c5db6c] active:scale-95 transition-all">Go Back Home</Link> */}

        </div>
    );
};