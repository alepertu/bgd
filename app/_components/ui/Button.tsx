import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    icon,
    iconPosition = 'left'
}: ButtonProps) {
    const baseClasses = "font-semibold rounded-2xl border-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

    const variantClasses = {
        primary: "bg-black text-white border-transparent hover:bg-gray-900",
        secondary: "bg-white text-black border-black hover:bg-black hover:text-white",
        outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
    };

    const sizeClasses = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-lg",
        lg: "py-4 px-8 text-xl"
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const renderContent = () => {
        if (!icon) {
            return children;
        }

        if (iconPosition === 'right') {
            return (
                <>
                    {children}
                    <span className="ml-2">{icon}</span>
                </>
            );
        } else {
            return (
                <>
                    <span className="mr-2">{icon}</span>
                    {children}
                </>
            );
        }
    };

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
        >
            {renderContent()}
        </motion.button>
    );
}
