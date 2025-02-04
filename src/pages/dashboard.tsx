import React from 'react';
import { useAuth } from '@/contexts/user';

const DashBoardPage: React.FC = () => {
    const auth = useAuth();
    if (!auth.user) return null;
    return (
        <div className="min-h-screen flex bg-gray-200">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mt-24">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        { `Welcome ${auth.user.displayName}!` }
                    </h2>
                    <p className="mt-2 text-center text-md text-gray-600">
                        { `You are logged in with ${auth.user.email}` }
                    </p>
                </div>
            </div>
        </div>
    );
};


export default DashBoardPage;
