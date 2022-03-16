<script>
    export let prismicResponse
    let data = prismicResponse.data.body.filter(body => body.slice_type === "are_we_the_right_fit_")
    const header = data[0].primary.are_we_the_right_fit_[0].text
    const subtext = data[0].primary.ideal_client_description[0].text
</script>

<section class="mx-auto pb-8 lg:pb-12">
    <div id="for-who" class="flex justify-center basis-full">
        <div class="max-w-3xl flex justify-center flex-wrap px-4  text-gray-600">
            <h1 class="basis-full text-2xl md:text-4xl font-bold text-center my-4 text-gray-600">
                <span class="drop-shadow-xl">{header}</span>
            </h1>
            <p class="basis-full text-lg md:text-xl 2xl:text-2xl text-center px-3 text-gray-600">
                {subtext}
            </p>
<!--            <div class="mt-8">-->
<!--                <ul class="space-y-4">-->
<!--                    <li class="text-lg md:text-xl 2xl:text-2xl">item 1</li>-->
<!--                    <li class="text-lg md:text-xl 2xl:text-2xl">item 2</li>-->
<!--                    <li class="text-lg md:text-xl 2xl:text-2xl">item 3</li>-->
<!--                    <li class="text-lg md:text-xl 2xl:text-2xl">item 4</li>-->
<!--                </ul>-->
<!--            </div>-->
        </div>
    </div>

</section>
