<script>
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
            <a href="/"><img src="./src/assets/logos/Original.svg" alt="Beta Ox Fitness Logo" class="h-24"></a>
        </div>
        <div class="flex space-x-8 my-auto mr-6">
            <button class="text-white font-bold h-14 p-4 hover:text-orange-400"
                    on:click={handleKnowledgeCenter}>
                Knowledge Center
            </button>
            <button class="text-white font-bold h-14 p-4 bg-orange-400 hover:bg-orange-500 rounded-xl hover:text-gray-700"
                    on:click={handleGetStarted}>
                <span class="shadow-lg hover:shadow-xl">Get Started</span>
            </button>
        </div>
    </div>
    <!--Mobile Nav -->
    <div class="md:hidden flex justify-between p-6 bg-gray-800">
        <div>
            <a href="/"><img src="./src/assets/logos/Original.svg" alt="Beta Ox Fitness Logo" class="h-20"></a>
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
                    Menu 1
                </button>
            </div>
            <div class="bg-gray-800 flex justify-center py-2 hover:bg-orange-400 text-white">
                <button on:click={handleGetStarted}>
                    Menu 1
                </button>
            </div>
        </div>
    {/if}
</div>
