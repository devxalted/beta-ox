<script>
    import personalTraining from '$lib/assets/personal_trainer.jpg'
    import nutrition from '$lib/assets/nutrition2.jpg'
    import onlineTraining from '$lib/assets/online_training.jpg'
</script>



<section id="offerings" class="basis-full flex md:justify-center overflow-x-scroll overscroll-x-contain custom-scroll-bar px-3 py-12 md:pt-3 mb-4">
    <div class="">
        <div class="grid-flow-col space-x-3  md:space-x-12 lg:space-x-20 text-center grid inline-block custom-snap-scroll" >

            <div class="bg-gray-300 p-6 rounded drop-shadow-lg w-[85vw] md:w-52 lg:w-64 xl:w-72 2xl:w-96">
                <img src={personalTraining} alt="Personal Training" class="rounded-lg drop-shadow-xl">
                <h2 class="my-4 font-bold text-xl text-gray-600">In-Person Training</h2>
                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolores eum id pariatur repellendus unde!</p>
            </div>

            <div class="bg-gray-300 p-6 rounded drop-shadow-lg w-[85vw] md:w-52 lg:w-64 xl:w-72 2xl:w-96">
                <img src={onlineTraining} alt="Online Coaching" class="rounded-lg drop-shadow-xl">
                <h2 class="my-4 font-bold text-xl text-gray-600">Online Coaching</h2>
                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae eaque enim error magni praesentium!</p>
            </div>

            <div class="bg-gray-300 p-6 rounded drop-shadow-lg w-[85vw] md:w-52 lg:w-64 xl:w-72 2xl:w-96">
                <img src={nutrition} alt="Nutrition Coaching" class="rounded-lg drop-shadow-xl">
                <h2 class="my-4 font-bold text-xl text-gray-600">Nutrition Coaching </h2>
                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laudantium, quia quibusdam quidem repellat?</p>
            </div>
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
