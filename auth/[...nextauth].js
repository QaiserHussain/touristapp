import db from '../utils/db'
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../utils/models/users';
import { compare } from 'bcrypt';



export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                console.log(credentials);
                console.log(req);
                await db.connect();
                const userExist = await User.findOne({ email: credentials.email }).select('-image');
                if(!userExist){throw new Error('no user found')}
                const checkPassword = await compare(credentials.password,userExist.password);
                if(!checkPassword || userExist.email !== credentials.email){throw new Error('username or password is incorrect')}
                return userExist;
            }
        })
    ],
    session: {
        jwt:true
    },
    jwt:{
    secret:"x5s4dd4d684d15asd1a5de",
    // encryption:true
    },
    callbacks:{
        async signIn({user,account,profile,email,credentials}){return true},
        async jwt({token,user,account,profile,isNewUser}){
            return token
        },
        async session({session,user,token}){
            // return session.token.token.user
            session.image='image'            
            return token
        }
    }
})

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb'
        }
    }
  }