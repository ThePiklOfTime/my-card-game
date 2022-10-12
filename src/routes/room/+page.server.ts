import { invalidateAll } from "$app/navigation";
import { redirect } from "@sveltejs/kit";
import type { List } from "flowbite-svelte";
import PocketBase, { Record } from "pocketbase";
import type { Actions, PageServerLoad } from './$types'

let user = import.meta.env.VITE_USERNAME;
let pass = import.meta.env.VITE_PASS;
const client = new PocketBase("http://127.0.0.1:8090");
await client.admins.authViaEmail(user, pass);

export let username: string[]= [];

export const ssr = false;

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

export const load: PageServerLoad= async(event) => {
    return {
        names : x,
        username: event.cookies.get('username'),
        usernames: username
    };
}
/** @type {import('./$types').Actions} */
export const actions = {
    //@ts-ignore
    default: async ({cookies, request}) =>{
        const user = await request.formData()
        let cookieUser = user.get("username")
        username.push(cookieUser);
        
        console.log("username");
        console.log(username)
        cookies.set('username', cookieUser, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        })
        throw redirect(303, "/room")
        
    }
}