<script>
    export let prismicResponse
</script>

<section id="about-beta-ox" class="flex justify-center flex-wrap md:mb-10 pt-12 pb-3">
    <div class="text-center basis-full mb-8">
        <h2 class="text-2xl md:text-4xl text-gray-600 font-bold mx-auto px-5">
            <span class="drop-shadow-xl">{prismicResponse.data.mission_statement[0].text}</span>
        </h2>
    </div>
    <div class="text-center">
        <div class="container mx-auto max-w-4xl">
            <p class="px-5 md:text-xl 2xl:text-2xl text-center text-gray-600 text-lg my-4 basis-full flex justify-center">
                {prismicResponse.data.mission_statement_supporting_text[0].text}
            </p>
        </div>
    </div>
</section>
