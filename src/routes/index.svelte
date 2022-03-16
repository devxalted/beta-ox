<script context="module">
    import createClient from '$lib/prismicClient';

    const client = createClient(fetch)
    const prismicQuery = client.getFirst()
</script>

<script>
    import Hero from '$lib/components/main/hero.svelte'
    import ForWho from '$lib/components/main/forWho.svelte'
    import Offerings from '$lib/components/main/offerings2.svelte'
    import AboutMe from '$lib/components/main/aboutMe.svelte'
    import AboutBetaOx from '$lib/components/main/aboutBetaOx.svelte'
    import Contact from '$lib/components/main/contact.svelte'
    import Divider1 from '$lib/components/main/divider1.svelte'
    import Divider2 from '$lib/components/main/divider2.svelte'
    import Certs from '$lib/components/main/certs.svelte'
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/ff2f2f774e.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Covered+By+Your+Grace&family=Hubballi&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900" rel="stylesheet">
</svelte:head>

{#await prismicQuery}
    <div>
        Loading
    </div>
{:then prismicResponse}
    <div id="main-container" class="bg-gradient-to-b from-gray-50 md:from-gray-300 to-transparent m-1.5 rounded-t-md">
        <Hero {prismicResponse}/>
        <AboutBetaOx {prismicResponse}/>
        <!--    <div class="bg-gradient-to-b from-gray-300 to-transparent py-10 rounded-t-md">-->
        <div class="container flex flex-wrap mx-auto">
            <Offerings {prismicResponse}/>
            <ForWho {prismicResponse}/>
        </div>
        <!--    </div>-->
        <Divider1 />
        <Divider2 />
        <AboutMe {prismicResponse} />
        <Contact {prismicResponse} />
        <Certs />
    </div>
{/await}
