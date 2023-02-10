<script lang="ts">
    import type { PageData } from "./$types"
    export let data: PageData
</script>

<div class="flex-1 w-screen">
    <h1 class="font-bold text-xl p-4">{data.articleTitle}</h1>
</div>