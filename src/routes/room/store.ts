import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import { svelteSyncedStore } from "@syncedstore/svelte";

type names = string[];
type packNames = {[name: string] : boolean}
const usernameStore = syncedStore({
    usernames: [] as names,
    
    packNames: {} as packNames,
});

export const stores = svelteSyncedStore(usernameStore)

const doc = getYjsValue(usernameStore);
console.log(doc)



// @ts-ignore
export const webrtcProvider = new WebrtcProvider("syncedstore-usernames", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();