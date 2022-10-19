<script lang="ts">
	import { json } from "@sveltejs/kit";
    //@ts-ignore
	import { each } from "svelte/internal";
    import {Checkbox} from 'flowbite-svelte'
    //import {username} from './+page.server'
    import {stores} from './store'
    import Players from "./players.svelte";
    
    export let data : any;
    //export let form : any;
    let deck_v2: string[] = data.names;
    let userName: string = data.username;
    //let userNames = data.usernames; 
    if (!($stores.usernames.includes(userName))) {
         
        console.log($stores.usernames.includes(userName))
        $stores.usernames.push(userName)
    }
   
    
    //console.log(username)
    let hello: { [key: string]: boolean }  = {};
        //console.log(hello)
    $: {
        console.log($stores.usernames)
        console.log($stores.packNames)
        console.log("aaaaaaaaaaaaaaaaaa") 
    }

</script>
<div class="flex flex-wrap bg-slate-900 gap-6 m-5 p-7 rounded-xl border-black">

    {#each deck_v2 as dick}
    <div class= "" >
       
        <Checkbox bind:checked={$stores.packNames[dick]} class="text-slate-300 ">
            {dick}
        </Checkbox> 
    </div>
    {/each}
    
</div>
<!--
<p class="text-white">
        {userName}
       
</p>

{#each $stores.usernames as us}
<p class="text-white">
    {us}
</p>
{/each}
-->

<Players>
</Players>

<style>
</style>