<script lang="ts">
    import {Heading, Input, Button} from 'flowbite-svelte'
    let userName: string;
    export let data;
    export let form;
    $: {
        console.log(userName)
    }
</script>

<div class="text-center">
    <Heading class="dark:text-sky-400">
        <p class="text-slate-100 pt-96 pb-20">
            Welcome to cards against you!
        </p>
    </Heading>
    <div class="m-10 flex">
        <form method="POST" action="/room" class="flex w-full">
            <Input id="Large-input" size="lg" placeholder="Input your username" class="dark:border-slate-300" bind:value={userName} name="username"/> 
            <Button class="ml-10 my-2" type="submit">
                Continue
            </Button> 
            
           
        </form>
    </div>
    
</div>
<style>

</style>