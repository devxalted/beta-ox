<script>
    export let prismicResponse
    let data = prismicResponse.data.body.filter(body => body.slice_type === "personal_photo")
    let photoUrl = data[0].primary.personal_photo.url
    let aboutSelf = data[0].primary.about_self[0].text
    let name = data[0].primary.name[0].text
</script>
<section id="about-me" class="basis-full overflow-hidden">
    <div class="mt-10 pt-4">
<!--        <div class="mx-auto max-w-xs border-t border-base-300 my-5"></div>-->
        <div class="flex justify-center flex-wrap">
            <div class="my-2 mask mask-squircle">
                <img src={photoUrl} alt="personal-photo" class="scale-125 md:max-w-[500px] drop-shadow-xl">
            </div>
            <div class="basis-full">
                <h2 class="md:text-5xl text-4xl text-gray-900 my-2 text-center">
                <span class="drop-shadow-xl font-name">
                    {name}
                </span>
                </h2>
            </div>
            <div class="px-5 md:text-xl 2xl:text-2xl text-center text-gray-600 text-lg my-4 basis-full flex justify-center mb-6">
                <p class="max-w-4xl">{aboutSelf}</p>
            </div>
        </div>
    </div>
</section>
