import env from '@/app/env'
import { Avatars, Client, Databases, Storage, Users } from 'node-appwrite';

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) 
    .setProject(env.appwrite.projectId) 
    .setKey(env.appwrite.apiKey) 
;

const databases = new Databases(client);
const users = new Users(client);
const avatars = new Avatars(client);
const storage = new Storage(client);


export {client, databases, users, avatars, storage}