import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    let result = null,
        error = null;
    const data = {
        email: email,
        password: password
    }
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        await addData('users', 'user-id', data)

    } catch (e) {
        error = e;
    }

    return { result, error };
}