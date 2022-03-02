<script>
    import logo from '$lib/assets/logos/Original.svg'
    import {goto} from '$app/navigation'
    let mobileMenuShowing = false

    const handleMobileMenu = () => {
        mobileMenuShowing = !mobileMenuShowing
    }

    const handleKnowledgeCenter = () => {
        mobileMenuShowing = false
        goto('/knowledge-center')
    }

    const handleGetStarted = () => {
        mobileMenuShowing = false
        goto('#contact')
    }

</script>

<div id="main-nav">
    <!-- Desktop Nav -->
    <div class="hidden md:flex justify-between p-8 bg-gray-800">
        <div class="pl-16">
            <a href="/"><img src={logo} alt="Beta Ox Fitness Logo" class="h-24"></a>
        </div>
        <div class="flex space-x-8 my-auto mr-6">
            <button class="text-white font-bold h-14 p-4 hover:text-primary-secondary-light"
                    on:click={handleKnowledgeCenter}>
                Knowledge Center
            </button>
            <button class="text-gray-800 font-bold h-14 p-4 bg-primary-main hover:bg-primary-secondary-light rounded-xl shadow-inner"
                    on:click={handleGetStarted}>
                <span class="shadow-lg hover:shadow-xl">Get Started</span>
            </button>
        </div>
    </div>
    <!--Mobile Nav -->
    <div class="md:hidden flex justify-between p-6 bg-gray-800">
        <div>
            <a href="/"><img src="../../assets/logos/Original.svg" alt="Beta Ox Fitness Logo" class="h-20"></a>
        </div>
        <div class="mr-4 my-auto">
            <button on:click={handleMobileMenu}>
                <i class="fa-solid fa-bars text-white text-2xl"></i>
            </button>
        </div>
    </div>
    {#if mobileMenuShowing}
        <div class="md:hidden">
            <div class="bg-gray-800 flex justify-center py-2 hover:bg-orange-400 text-white">
                <button on:click={handleKnowledgeCenter}>
                    Knowledge Center
                </button>
            </div>
            <div class="bg-gray-800 flex justify-center py-2 text-white pb-4">
                <button on:click={handleGetStarted} class="bg-primary-main text-gray-800 rounded-xl px-3 w-1/2 py-1">
                    <span class="shadow-xl">Get Started</span>
                </button>
            </div>
        </div>
    {/if}
</div>
