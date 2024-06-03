'use server'
import {ID} from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async({email,password}: SignInProps) =>{
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email,password);
        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(session);
    } catch (error) {
        console.error('---------------SignIn---------------',error);
    }
}

// export const signIn = async ({ email, password }: signInProps) => {
//     try {
//       const { account } = await createAdminClient();
//       const session = await account.createEmailPasswordSession(email, password);
  
//       cookies().set("appwrite-session", session.secret, {
//         path: "/",
//         httpOnly: true,
//         sameSite: "strict",
//         secure: true,
//       });
  
//       const user = await getUserInfo({ userId: session.userId }) 
  
//       return parseStringify(user);
//     } catch (error) {
//       console.error('Error', error);
//     }
//   }

export const signUp = async(userData: SignUpParams) =>{
    const { email, password, firstName, lastName} = userData;
    try {
        // create a user account
        const { account } = await createAdminClient();
        const newUserAccout = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccout);
    } catch (error) {
        console.error('---------------SignUp---------------',error);
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const result = await account.get();
        console.log(result);
        return parseStringify(result);
    } catch (error) {
        console.log("---------------Can not fetch userData---------------")
        return null;
    }
}

// export async function getLoggedInUser() {
//     try {
//       const { account } = await createSessionClient();
//       const result = await account.get();
  
//       const user = await getUserInfo({ userId: result.$id})
  
//       return parseStringify(user);
//     } catch (error) {
//       console.log(error)
//       return null;
//     }
//   }

export const logoutAccount = async()=>{
    try {
        const {account} = await createSessionClient();
        cookies().delete('appwrite-session');
        await account.deleteSession('current');
    } catch (error) {
        return(null);
    }
}