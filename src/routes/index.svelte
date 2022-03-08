<script>
    import Hero from '$lib/components/main/hero.svelte'
    import ForWho from '$lib/components/main/forWho.svelte'
    import Offerings from '$lib/components/main/offerings.svelte'
    import AboutMe from '$lib/components/main/aboutMe.svelte'
    import AboutBetaOx from '$lib/components/main/aboutBetaOx.svelte'
    import Contact from '$lib/components/main/contact.svelte'
    import Divider1 from '$lib/components/main/divider1.svelte'
    import Divider2 from '$lib/components/main/divider2.svelte'
    import Certs from '$lib/components/main/certs.svelte'

</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/ff2f2f774e.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="main-container" class="bg-gradient-to-b from-gray-200 to-transparent overflow-hidden m-1.5 rounded-t-md">
    <Hero />
    <AboutBetaOx />
<!--    <div class="bg-gradient-to-b from-gray-300 to-transparent py-10 rounded-t-md">-->
        <div class="container flex flex-wrap mx-auto">
            <ForWho/>
            <Offerings/>
        </div>
<!--    </div>-->
    <Divider1 />
    <Divider2 />
    <AboutMe />
    <Contact />
    <Certs />
</div>
