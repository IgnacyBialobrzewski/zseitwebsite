<script lang="ts">
    let inputEmail: string
    let inputName: string
    let inputPhone: number
    let inputMessage: string
</script>

<div class="flex-1 w-screen flex flex-col justify-center">
    <h1 class="text-3xl text-center text-neutral-800 font-bold pb-2">Kontakt</h1>
    <form class="flex flex-col items-center gap-3">
        <input class="bg-neutral-200 rounded p-1 pl-2 w-3/5 lg:w-1/3" type="email" placeholder="E-mail" bind:value={inputEmail}>
        <input class="bg-neutral-200 rounded p-1 pl-2 w-3/5 lg:w-1/3" type="text" placeholder="Imię i nazwisko" bind:value={inputName}>
        <input class="bg-neutral-200 rounded p-1 pl-2 w-3/5 lg:w-1/3" type="number" placeholder="Numer telefonu" bind:value={inputPhone}>
        <textarea class="bg-neutral-200 rounded p-1 pl-2 w-3/5 lg:w-1/3 min-h-[80px]" placeholder="Twoja wiadomość" bind:value={inputMessage}/>
        <input class="bg-blue-500 text-white p-1 w-3/5 lg:w-1/3 hover:bg-black rounded cursor-pointer" type="button" value="Wyślij">
    </form>
</div>