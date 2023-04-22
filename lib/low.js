// import lowdb from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';
// import path from 'path';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url))
const posts = join(__dirname, '../data/datas.json')

// const posts = path.join(process.cwd(), 'data/datas.json');

    // Configure lowdb to write data to JSON file
const adapter = new JSONFile(posts)
const defaultData = { posts: ["this is the best ","article1"] }
const db = new Low(adapter, defaultData)


// Create and query items using plain JavaScript


// let db2 =lowdb(new FileSync('../data/datas.json'))
// db2.defaults({
//     articles:["this is the best ","article1", 'aritcle 2' ]
// }).write()

// db.defaults({
//     articles:[],
//     cred:{
//         username:'admin'
//     }
// }).write()

export async function getArticles(){
    await db.read()
    // db.data.posts.push('hello world')
    const firstPost = db.data.posts[0]
    // db.data.posts.push('hello world')
    await db.write()
    await db.read()
    const {posts} = db.data
    
    return posts
}