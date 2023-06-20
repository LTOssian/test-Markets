import React, { createContext, useState, useContext } from 'react';

interface PaginationContextType {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PaginationProviderProps {
    children: React.ReactNode;
}


const PaginationContext = createContext<PaginationContextType | undefined>(undefined);

const usePagination = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePagination must be used within a PaginationProvider');
    }
    return context;
};

const PaginationProvider: React.FC<PaginationProviderProps> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const contextValue: PaginationContextType = {
        currentPage,
        setCurrentPage,
    };

    return (
        <PaginationContext.Provider value={contextValue}>
            {children}
        </PaginationContext.Provider>
    );
};

export { PaginationProvider, usePagination };

