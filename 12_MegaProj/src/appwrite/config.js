import conf from "../conf/config";
import {Client, ID, Databases, Storage, Query} from "appwrite";

//1 
export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

            //same as Account
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        // bucket => Storage
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
                //document id => slug

                    
            )
        }
        catch(error){
            console.log(error);
            
        }
    }

    // slug iss liye pahle taki identify ho konsa kar rhe update
    async updatePost(slug, {title, content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error);
            
        }
    }

    async deletePost(slug){
        try {
            // no return  bs true kia
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Log Error", error);
            return false
        }
    }

    // Get a single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Error :: getPost", error);
            
        }
    }
    // use listDocument to get all but ye inactive document bhi dedega

    // displaying only active post
    // appwrite me indexes banayi thi
    // agar indexes nhi lagayenge to query nhi istemaal kr skte

    // Returns document if attribute is equal to any value in the provided array.
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100,
// pagination
            )
        } catch (error) {
            console.log("Appwrite Error :: getPosts", error);
            
        }
    }
    

    // upload Files
    async uploadFiles(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Error :: UPLOAD :", error); 
        }
    }

    async deleteFiles(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Error :: getPosts", error);
        }
    }


    // Response Fast so no await 
    // async lagane pe image load nhi ho rhi
    getFilePreview(featuredImage){
        console.log("featuredImg", featuredImage);
        console.log("conf.appwriteBucketId", conf.appwriteBucketId);
        
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            featuredImage
        )
    }
}

//3
const service = new Service();

//2
export default service

// Head to ../store/store.js