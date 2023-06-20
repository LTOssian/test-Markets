import React, { createContext, useContext, useState } from 'react';

interface SelectFilterContextType {
    selectedValue: string;
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectFilterContext = createContext<SelectFilterContextType | undefined>(undefined);

const useSelectFilter = () => {
    const context = useContext(SelectFilterContext);

    if (!context) {
        throw new Error('useSelectFilter must be used within a SelectFilterProvider');
    }

    return context;
};

interface SelectFilterProviderProps {
    children: React.ReactNode;
}

const SelectFilterProvider: React.FC<SelectFilterProviderProps> = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const contextValue: SelectFilterContextType = {
        selectedValue,
        setSelectedValue,
    };

    return (
        <SelectFilterContext.Provider value={contextValue}>
            {children}
        </SelectFilterContext.Provider>
    );
};

export { SelectFilterProvider, useSelectFilter };
