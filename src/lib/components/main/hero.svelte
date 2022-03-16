<script>
    export let prismicResponse
    let menuShowing = false;
</script>
<section id="hero" class="justify-center rounded-t-md">
    <div class="flex bg-cover bg-no-repeat md:bg-top bg-left h-56 md:h-96 2xl:h-[30rem] hero-image md:hero-image-md mb-10 rounded-t-md relative">
        <div id="logo" class="absolute top-10 md:top-1/4 left-1/2 -translate-x-1/2">
            <img src={prismicResponse.data.logo.url} alt="Beta Ox Logo" class="w-44 md:w-52 lg:w-64 2xl:w-80">
        </div>
        <div id="menu-button" class="absolute top-3 right-3 text-white text-xl md:top-10 md:right-10">
<!--            <div class="py-2 px-3.5 bg-white rounded-full" tabindex="0" on:click={() => menuShowing = true}>-->
<!--                <i class="fa-solid fa-bars text-black"></i>-->
<!--            </div>-->
            {#if menuShowing}
                <div class="absolute w-52 bg-white rounded-lg py-3 px-5 text-center">
                    <ul class="space-y-2 text-black">
                        <li>item 1</li>
                        <li>item 2</li>
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</section>


<!--#f8d889,-->
<!--#c5a556,-->

<!--<div class="max-w-3xl flex justify-center flex-wrap px-4">-->
<!--    <h1 class="basis-full  font-bold text-center my-4 text-gray-100 drop-shadow-2xl">-->
<!--        <span class="block font-extrabold text-xl md:text-4xl tracking-widest">GET FIT WITH BETA OX FITNESS</span>-->
<!--        <span class="text-lg md:text-2xl tracking-wider">sub header content</span>-->
<!--    </h1>-->
<!--    &lt;!&ndash;        <h2 class="basis-full text-lg md:text-xl text-center px-3 text-gray-100">&ndash;&gt;-->
<!--    &lt;!&ndash;            Welcome to BETA OX FITNESS! Here you will find some information about what I do myself and all of my services offered. Check out my blog for some interesting reads&ndash;&gt;-->
<!--    &lt;!&ndash;            dealing with health and fitness. If you have any questions, please do not hesitate to email or call. Enjoy your time here and I look forward to working with you!&ndash;&gt;-->
<!--    &lt;!&ndash;        </h2>&ndash;&gt;-->
<!--    <div class="space-x-5">-->
<!--        <button class="btn btn-large my-5 btn-primary drop-shadow-xl hover:scale-110 font-bold">-->
<!--            Get Started-->
<!--        </button>-->
<!--    </div>-->
<!--</div>-->
