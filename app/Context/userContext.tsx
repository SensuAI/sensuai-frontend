import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"

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
    redirectToHomePage: () => void
}

const UserContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    data: null,
    setData: (): DataType | null => null,
    redirectToHomePage: (): void => {}
});

export const UserProvider = ({ children }: any) => {
    const { toast } = useToast();
    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [data, setData] = useState<DataType | null>(null);
    const redirectToHomePage = () => {
        router.push('/');
        toast({
          description: "Unauthorized access. Redirecting to the homepage.",
          duration: 6000,
        });
      };
    
    return (
        <UserContext.Provider value={{ userId, setUserId, data, setData, redirectToHomePage }}>
            {children}
        </UserContext.Provider> 
    );
};

export const useUserContext = () => useContext(UserContext);