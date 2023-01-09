import db from '../../../utils/db'
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../utils/models/users';
import { compare } from 'bcrypt';
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                await db.connect();
                const userExist = await User.findOne({ email: credentials.email });
                if(!userExist){throw new Error('no user found')}
                const checkPassword = await compare(credentials.password,userExist.password);
                if(!checkPassword || userExist.email !== credentials.email){throw new Error('username or password is incorrect')}
                return userExist;
            }
        })
    ],
    secret:"x5s4dd4d684d15asd1a5de"
})