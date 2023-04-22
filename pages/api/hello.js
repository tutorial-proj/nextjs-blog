// import { join, dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
import path from 'path';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
// db.json file path
// const __dirname = dirname(fileURLToPath(import.meta.url))
// const posts = join(__dirname, '../data/datas.json')

const posts = path.join(process.cwd(), 'data/datas.json');

    // Configure lowdb to write data to JSON file
const adapter = new JSONFile(posts)
const defaultData = { posts: ["this is the best ","article1"] }
const db = new Low(adapter, defaultData)




export default async function handler(req, res) {
       db.data.posts.push('zz hello world')
       await db.write()
       const {posts} = db.data
    res.status(200).json({ text: 'Hello', posts});
}
  