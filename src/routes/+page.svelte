<script lang="ts">
	import { enhance } from '$app/forms';
    import {Heading, Input, Button} from 'flowbite-svelte'
    import type {ActionData} from './$types'
    let userName: string;
    //export let data;
    export let form: ActionData;
    $: {
        console.log(userName)
    }
</script>

<div class="flex h-screen flex-col gap-10 items-center justify-center text-center">
    <Heading class="dark:text-sky-400">
        <p class="text-slate-100 ">
            Welcome to cards against you!
        </p>
    </Heading>
    <div class=" flex">
        <form method="POST" action="/room" class="flex w-full" use:enhance>
            <Input id="Large-input" size="lg" placeholder="Input your username" class="dark:border-slate-300" bind:value={userName} name="username"/> 
            <Button class="ml-10 my-2" type="submit">
                Continue
            </Button> 
        
           
        </form>
    </div>
    
</div>
<style>

</style>