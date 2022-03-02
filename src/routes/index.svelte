<script>
    import Hero from '$lib/components/main/hero.svelte'
    import ForWho from '$lib/components/main/forWho.svelte'
    import Offerings from '$lib/components/main/offerings.svelte'
    import AboutMe from '$lib/components/main/aboutMe.svelte'
    import Contact from '$lib/components/main/contact.svelte'

</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/ff2f2f774e.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="main-container" class="bg-gray-100">
        <Hero />
    <div class="container mx-auto flex flex-wrap">
        <ForWho />
        <Offerings />
        <AboutMe />
        <Contact />
    </div>
</div>
