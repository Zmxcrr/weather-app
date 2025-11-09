import React from 'react';

interface AppShellProps {
    children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
    return (
        <div className="text-[#292929] dark:text-white font-poppins min-h-screen bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,1)] to-[rgba(70,97,115,0.5)] dark:to-[rgba(0,0,0,1)] dark:via-[rgba(58,58,58,1)] dark:from-[rgba(58,58,58,1)]">
            <div className="container mx-auto px-4 py-6">
                {children}
            </div>
        </div>
    );
};