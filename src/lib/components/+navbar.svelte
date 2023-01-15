<script lang="ts">
    import icon_navbar from "$lib/assets/icon_navbar.png"
    import { slide, fly } from "svelte/transition"

    let dropdownDisplay: "hidden" | "block" = "hidden"

    const navbarEntries = [
        { text: "E-Dziennik", href: "https://edukacja.olsztyn.eu/" },  
        { text: "E-Rekrutacja", href: "https://naborpp.edukacja.olsztyn.eu/kandydat/app/offer_school_details_pg.html?schoolId=13" },  
        { text: "Szkoła", href: "/" },  
        { text: "Kontakt", href: "/" },  
        { text: "Informacje", href: "/" },  
        { text: "Strefa kandydata", href: "/" },  
    ]
    
    function toggleDropdownDisplay() {
        dropdownDisplay = dropdownDisplay == "hidden" ? "block" : "hidden"
    }
</script>

<nav class="border-b border-neutral-400 flex items-center justify-around p-4">
    <div class="flex gap-5 items-center">
        <img class="inline-block h-14" src="https://zseit.olsztyn.eu/images/logo-elektronik.png" alt="">
        <a class="font-medium text-sm sm:w-72 hover:text-blue-500" href="/">Zespół Szkół Elektronicznych i Telekomunikacyjnych w Olsztynie</a>
    </div>
    <button class="lg:hidden" on:click={toggleDropdownDisplay}>
        <img class="inline-block" src={icon_navbar} alt="">
    </button>
    <ul class="gap-5 lg:flex hidden">
        {#each navbarEntries as { text, href }}
            <li class="inline-block text-lg"><a class="hover:text-blue-500 font-normal" {href}>{text}</a></li>
        {/each}
    </ul>
</nav>
<nav>
    {#if dropdownDisplay == "block"}        
        <ul class="lg:hidden {dropdownDisplay} list-disc bg-blue-50 p-4 border-b border-neutral-400" transition:slide>
            {#each navbarEntries as { text, href }, i}
                <li class="inline-block text-xl w-full" transition:fly={{x: -100, delay: 40 * i}}><a class="hover:text-blue-500 font-medium" {href}>{text}</a></li>
            {/each}
        </ul>
    {/if}
</nav>