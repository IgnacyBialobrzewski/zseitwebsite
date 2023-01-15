<script>
    import icon_userconfirm from "$lib/assets/icon_userconfirm.png"
    import { fly } from "svelte/transition"
    
    let loadTransition = false

    setTimeout(() => loadTransition = true)
</script>

<div class="bg-hero-image h-[55vh] bg-no-repeat bg-cover flex justify-center items-center">
    {#if loadTransition}
        <div class="flex flex-col gap-3 justify-center items-center sm:items-start p-14">
            <h1 class="text-4xl sm:text-6xl text-center sm:text-left text-white" transition:fly={{x: -200, delay: 0}}>Elektronik</h1>
            <span class="inline-block text-sm text-center sm:text-left lg:text-xl w-1/1 lg:w-3/6 text-white" transition:fly={{x: -200, delay: 100}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam ullamcorper metus non condimentum fermentum.
                Vestibulum aliquet, velit convallis tristique.
                eleifend, nisl eros fermentum mauris.
            </span>
            <div class="flex items-center bg-blue-500 w-fit p-3 rounded-lg hover:shadow-2xl hover:bg-black shadow-black cursor-pointer" transition:fly={{x: -200, delay: 200}}>
                <img class="h-6" src={icon_userconfirm} alt="">
                <a class="text-white font-medium pl-1" href="/">REKRUTACJA</a>
            </div>
        </div>
    {/if}
</div>

<style>
    h1, span {
        text-shadow: 0 0px 4px black;
    }
</style>