<script lang="ts">
	import { json } from "@sveltejs/kit";
    //@ts-ignore
    import deck from '$lib/data/cah-cards-full.json';
	import { each } from "svelte/internal";
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