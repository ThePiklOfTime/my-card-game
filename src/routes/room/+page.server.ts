import PocketBase, { Record } from "pocketbase";

let user = import.meta.env.VITE_USERNAME;
let pass = import.meta.env.VITE_PASS;
const client = new PocketBase("http://127.0.0.1:8090");
await client.admins.authViaEmail(user, pass);
let username: string;
let decks = await client.records.getFullList("deck_v2", 300)
//@ts-ignore
decks.sort( (a, b) => {
    if (a["white"][0]["pack"] < b["white"][0]["pack"]) {return -1}
    else if (a["white"][0]["pack"] > b["white"][0]["pack"]) {return 1}
    else {return 0}
})

let x: Record[] = []
decks.forEach(deck => {
    if (deck["official"]) {
        x.push(deck["name"])    
    }
    
})

export function load () {
    return {
        names : x,
        username: username
    };
}
/** @type {import('./$types').Actions} */
export const actions = {
    //@ts-ignore
    default: async ({cookies, request}) =>{
        const user = await request.formData()
        username = user.get("username");
        console.log("username");
        console.log(username)
        return {
            success : true,
        }
    }
}