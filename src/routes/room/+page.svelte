<script lang="ts">
	import { json } from "@sveltejs/kit";
    //@ts-ignore
	import { each } from "svelte/internal";
    import {Checkbox} from 'flowbite-svelte'
    //import {username} from './+page.server'
    export let data : any;
    //export let form : any;
    let deck_v2 = data.names;
    let userName = data.username;
    $: userNames = data.usernames;
    //console.log(username)
    let hello: { [key: string]: boolean }  = {};
        //console.log(hello)
    //console.log(data.names)

</script>
<div class="flex flex-wrap bg-slate-900 m-10 p-4 rounded-xl border-black border">

    {#each deck_v2 as dick}
    <div class= "p-3" >
        <Checkbox bind:checked={hello[dick]} class="text-slate-300 ">
            {dick}
        </Checkbox> 
    </div>
    {/each}
    
</div>
<p class="text-white">
        {userName}
       
</p>
<p class="text-white">
    {userNames}
</p>

<style>
</style>