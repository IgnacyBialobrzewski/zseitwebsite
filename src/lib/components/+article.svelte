<script lang="ts">
    import hero_image from "$lib/assets/hero.jpg"
    import { onMount } from "svelte"

    let articleVisible: boolean
    let article: Element

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                articleVisible = entry.isIntersecting
            })
        })
        
        observer.observe(article)
    })
</script>

<article class="flex {articleVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm scale-100"} flex-col bg-neutral-200 shadow-lg shadow-neutral-black rounded-lg" bind:this={article}>
    <div class="p-3">
        <span class="text-neutral-500 text-sm">17.11.2022</span>
        <h1 class="block font-medium text-lg">Rekrutacja 2022/2023</h1>
    </div>
    <div class="group overflow-hidden rounded-b-lg cursor-pointer flex items-center justify-center">
        <img class="w-max group-hover:blur-sm group-hover:scale-110 flex-none" src={hero_image} alt="">
        <span class="text-white w-max h-max opacity-0 group-hover:scale-110 group-hover:opacity-80 text-xl font-medium absolute">Zobacz więcej</span>
    </div>
</article>