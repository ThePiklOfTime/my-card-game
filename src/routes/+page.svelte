<script lang="ts">
	import { json } from "@sveltejs/kit";
    //@ts-ignore
    import deck from '$lib/data/cah-cards-full.json';
	import { each } from "svelte/internal";
    import PocketBase from 'pocketbase';
    let user = import.meta.env.VITE_USERNAME
    let pass = import.meta.env.VITE_PASS //move this to server side for security reasons
    let myDick = JSON.stringify(deck[0])
    const client = new PocketBase('http://127.0.0.1:8090');
    async function db() {
        await client.admins.authViaEmail(user, pass)
        deck.forEach(element => {
            const record = client.records.create('deck', {field : element, name: element["name"]}).then()
        });

    }
    db()

    let official = true;
    let hello: { [key: string]: boolean }  = {};
    $: {
        console.log(hello)
    }

</script>
<div class="cardSelector">
{#each deck as dick}
{#if dick["official"] == official}
<div>
    <input type="checkbox" bind:checked={hello[dick["name"]]}> 
    <p>
        {dick["name"]}
    </p>
</div>
{/if}
    
{/each}
</div>
<style>
.cardSelector {
    display: flex;
    flex-wrap: wrap;
    background-color: #362222;
    padding: 1em;
    border-radius: 20px;

}
div{
    display: flex;
}
p {
    padding: 0.2em;
    margin: 0.3em;
    outline: 1px solid black;
    color: white;
    border-radius: 5px;
    font-size: 0.9em;
    box-shadow: 1px;
    background-color: #423F3E;
}

</style>