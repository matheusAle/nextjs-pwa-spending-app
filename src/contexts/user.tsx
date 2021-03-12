import {auth} from '@/config/firebase';
import {SignupForm, User} from '@/model/User';
import {getUser, signIn, signUp} from '@/service/user';
import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContext {
    user: User | null,
    signUp(form: SignupForm): Promise<void>,
    signIn(emails: string, password: string): Promise<void>
}


const useAuthProvider = (): AuthContext => {
    const [user, setUser] = useState<User | null>(null);

    const _signUp = async (form: SignupForm): Promise<void> => {
        const _user = await signUp(form);
        setUser(_user);
    };

    const _signIn = async (email: string, password: string): Promise<void> => {
        const _user = await signIn(email, password);
        setUser(_user);
    };

    const handleAuthStateChanged = (user: User | null): void => {
        setUser(user);
        if (user) {
            getUser(user.uid).then(setUser);
        }
    };

    React.useEffect(() => {
        const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

        return () => unsub();
    }, []);

    return {
        user,
        signUp: _signUp,
        signIn: _signIn
    };
};



const authContext = createContext<AuthContext>({} as any);
const { Provider } = authContext;

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
    const auth = useAuthProvider();
    return <Provider value={ auth }>{ props.children }</Provider>;
}

export const useAuth = (): AuthContext => {
    return useContext(authContext);
};
