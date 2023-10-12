'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

type DataType = {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    data: DataType | null,
    setData: Dispatch<SetStateAction<DataType | null>>,
}

const UserContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    data: null,
    setData: (): DataType | null => null,
});

export const UserProvider = ({ children }: any) => {
    const [userId, setUserId] = useState('');
    const [data, setData] = useState<DataType | null>(null);

    return (
        <UserContext.Provider value={{ userId, setUserId, data, setData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);