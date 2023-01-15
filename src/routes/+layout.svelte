<script>
    import "../styles.css"
    import Navbar from "../components/+navbar.svelte"
    import Footer from "../components/+footer.svelte"
</script>

<div class="flex flex-col h-screen w-screen">
    <Navbar/>
    <slot></slot>
    <Footer/>
</div>
