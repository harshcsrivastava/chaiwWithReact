import conf from "../conf/config.js";
import {Client, Account, ID} from "appwrite";

// FUTURE-PROOF CASE: If we want to use another service, we can create another file and use it
// Can be copy pasted and used in another project

export class AuthService{
    client = new Client();
    account;

    constructor(){  
    // Method that calls itself
    // It is used to initialize the client and account
    // Creates  when object is created
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);


            this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        // account creation fail bhi ho skta hai thats why try catch
        try{
            // Appwrite documentation me id parameter bhi dena hai
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch(err){
            throw err;
        }
    }
    async login({email, password}){
        // https://appwrite.io/docs/products/auth/email-password
        try{
            const session = await this.account.createEmailPasswordSession(email, password);
        } catch(err){
            throw err;
        }
    }
// documentation me promise hai yaha async await
    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch(err){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            // await this.account.deleteSession("current");
            // or we can use deleteAllSessions
            // await this.account.deleteSessions();
            await this.account.deleteSessions();

        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
// class banake kar rhe
// . use krke access kr skte
// jb ye obj bane tb hi client and account banega
export default authService;

// head to ./config.js