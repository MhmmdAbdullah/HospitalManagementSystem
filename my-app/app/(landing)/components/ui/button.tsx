type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "purple" | "gray";
    size?: "normal" | "big" | "small";
}   & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ 
    children, 
    className, 
    variant = "purple", 
    size = "normal", ...props
}: TButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center gap-2 duration-300 cursor-pointer hover:scale-105 rounded-xl";

    const variants = {
        purple : 'bg-linear-to-r from-[#9083D5] to-[#807593] text-white',
        gray :  'bg-linear-to-r from-gray-300 to-gray-300 ',
    }

    const sizes = {
        normal: 'px-6 py-2',
        big: 'px-15 py-2',
        small: 'px-4 py-2'
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;