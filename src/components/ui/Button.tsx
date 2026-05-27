import React from "react";

const Button = ({ children, onClick = () => { }, className, type, disabled = false }: { children: React.ReactNode; onClick: () => void; className?: string; type?: 'button' | 'submit' | 'reset'; disabled?: boolean }) => {
    const baseClass = 'text-sm px-10 py-4 bg-[#D3E97A] text-black rounded-full font-semibold hover:bg-white transition-all duration-300 group uppercase tracking-wider active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
    const buttonClass = className ? `${baseClass} ${className}` : baseClass;
    return (
        <button type={type} onClick={onClick} className={buttonClass} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button