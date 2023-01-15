<script>
    import icon_arrowback from "$lib/assets/icon_arrowback.png"
</script>

<div class="flex flex-col items-center justify-center flex-1 gap-3 p-10 overflow-x-hidden bg-hero-image bg-no-repeat bg-cover h-3/5">
    <div>
        <h1 class="text-center text-xl font-medium text-white">Nie odnaleziono strony</h1>
        <h2 class="text-center text-white">Sprawdź URL wyszukiwania i spróbój ponownie</h2>
    </div>
    <a class="flex items-center w-fit p-3 rounded-lg hover:shadow-sm hover:bg-green-500 bg-blue-500 shadow-black cursor-pointer" href="/">
        <img class="h-6" src={icon_arrowback} alt="">
        <span class="text-white font-medium pl-1">POWRÓT</span>
    </a>
</div>