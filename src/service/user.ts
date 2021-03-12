import { auth, db } from '@/config/firebase';
import {SignupForm, User} from '@/model/User';

async function _createUser(user: Partial<User>): Promise<void> {
    return await db
        .collection('users')
        .doc(user.uid)
        .set(user)
        .catch(console.error)
        .then(user => user);
}

export async function getUser(userId: string): Promise<User> {
    return await db
        .collection('users')
        .doc(userId)
        .get()
        .then(userData => userData.data() as User);
}

export async function signUp({ displayName, email, password }: SignupForm): Promise<User> {
    const credentials = await auth.createUserWithEmailAndPassword(email, password);
    if (!credentials.user) {
        throw new Error('Can\'t create user');
    }
    await _createUser({ uid: credentials.user?.uid, displayName, email });
    return credentials.user;
}

export async function signIn(email: string, password: string): Promise<User> {
    const result = await auth.signInWithEmailAndPassword(email, password);
    if (!result || !result?.user) {
        throw new Error('User not found');
    }
    return await getUser(result.user.uid);
}
