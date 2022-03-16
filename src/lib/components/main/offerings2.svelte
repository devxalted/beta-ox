<script>
    export let prismicResponse

    let cards = prismicResponse.data.body.filter(bodyItem => bodyItem.slice_type === "services_cards")
    cards = cards[0].items
</script>



<section id="offerings" class="basis-full flex md:justify-center overflow-x-scroll overscroll-x-contain custom-scroll-bar px-3 py-12 md:pt-3 mb-4">
    <div class="">
        <div class="grid-flow-col space-x-3  md:space-x-12 lg:space-x-20 text-center grid inline-block custom-snap-scroll" >

            {#each cards as card, i}
                <div class="bg-gray-200 p-6 rounded drop-shadow-lg w-[85vw] md:w-52 lg:w-64 xl:w-72 2xl:w-96">
                    <img src={card.service_image.url} alt={card.service_name[0].text} class="rounded-lg drop-shadow-xl">
                    <h2 class="my-4 font-bold text-xl text-gray-600">{card.service_name[0].text}</h2>
                    <p class="text-gray-500">{card.service_description[0].text}</p>
                </div>
            {/each}

        </div>
    </div>
</section>

<style>
    .custom-snap-scroll {
        scroll-snap-type: inline mandatory;
    }

    .custom-snap-scroll > * {
        scroll-snap-align: start;
    }

    .custom-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .custom-scroll-bar::-webkit-scrollbar {
        display: none;
    }
</style>
