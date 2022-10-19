<script>
    import {stores} from './store'
</script>




<div class="border-2 border-black w-1/5 min-w-fit text-center m-10 text-gray-200" >
    <slot/>
    <hr class="my-2 dark:bg-gray-600 bg-gray-600 color dark:border-gray-500 w-5/6 m-auto" />
    {#each $stores.usernames as us}
        <p>
            {us}
        </p>
        <hr class="my-2 dark:bg-gray-600 bg-gray-600 color dark:border-gray-500 w-5/6 m-auto" />
    {/each}
</div>