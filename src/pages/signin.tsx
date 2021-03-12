import {Button} from '@/components/Button';
import {Input} from '@/components/Input';
import {useAuth} from '@/contexts/user';
import {LoginForm, SignupForm} from '@/model/User';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});

const SignInPage = (): JSX.Element => {
    const auth = useAuth();
    const router = useRouter();

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: LoginForm): Promise<void> => {
        try {
            const user = await auth.signIn(data.email, data.password);
            console.log(user);
            await router.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create you to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or { ' ' }
                        <Link href="/signup">
                            sign in in you account
                        </Link>
                    </p>
                </div>
                <FormProvider { ...form }>
                    <form className="mt-8 space-y-4" onSubmit={ form.handleSubmit(onSubmit) }>
                        <Input
                          label="Email address"
                          id="email"
                          placeholder="Email address"
                          icon="mdi-email"
                          name="email"
                        />

                        <Input
                          label="Password"
                          id="password"
                          placeholder="Password"
                          icon="mdi-lock"
                          name="password"
                        />

                        <div>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default SignInPage;
