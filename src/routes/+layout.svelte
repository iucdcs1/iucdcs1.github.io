<script lang="ts">
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
    <Header />
</svelte:head>

<slot />

<Footer />