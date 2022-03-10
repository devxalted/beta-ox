<script>
    let emailForm = false
    let smsForm = false
    let invalidEmailError = false
    let invalidPhoneError = false
    let requiredNameError = false
    let requiredEmailError = false
    let requiredPhoneError = false

    let name
    let email
    let phone
    let message

    const handleEmailForm = () => {
        emailForm = !emailForm
        invalidEmailError = false
        requiredNameError = false
        requiredEmailError = false
    }

    const handleSmsForm = () => {
        smsForm = !smsForm
        invalidPhoneError = false
        requiredNameError = false
        requiredEmailError = false
    }

    const checkNameRequired = () => {
        (name) && (requiredNameError = false)
        return !!name;
    }

    const checkEmailRequired = () => {
        (email) && (requiredEmailError = false)
        return !!email;
    }

    const checkPhoneRequired = () => {
        (phone) && (requiredPhoneError = false)
        return !!phone;
    }

    const validateEmail = () => {
        // eslint-disable-next-line no-control-regex
        let emailRegex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)
        let passed = emailRegex.test(email)
        if (passed) invalidEmailError = false;
        return passed
    }

    const handleEmailSubmit = async () => {
        let isEmail = validateEmail()
        let namePass = checkNameRequired()
        let emailPass = checkEmailRequired()

        if (!isEmail) invalidEmailError = true
        if (!namePass) requiredNameError = true
        if (!emailPass) requiredEmailError = true

        if (!namePass || !emailPass || !isEmail) return


        //Handle Email

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': ' application/json'
            },
            body: JSON.stringify({
                name,
                from: email,
                msgBody: message
            })
        }

        let res = await fetch('/api/contact/email', config)
        res = await res.json()

        if (res.msg === 'Sent successfully.') {
            emailForm = false;
            name = ''
            phone = ''
            message = ''
        }
    }

    const validatePhone = () => {
        // eslint-disable-next-line no-control-regex
        // let phoneRegex = new RegExp(/s/)
        // let passed = phoneRegex.test(email)
        // if (passed) invalidPhoneError = false;
        // return passed
        return true
    }

    const handleSmsSubmit = async () => {
        let isPhone = validatePhone()
        let namePass = checkNameRequired()
        let phonePass = checkPhoneRequired()

        if (!isPhone) invalidPhoneError = true
        if (!namePass) requiredNameError = true
        if (!phonePass) requiredPhoneError = true

        if (!namePass || !phonePass || !isPhone) return


        //Handle SMS

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': ' application/json'
            },
            body: JSON.stringify({
                name,
                from: phone,
                msgBody: message
            })
        }

        let res = await fetch('/api/contact/sms', config)
        res = await res.json()

        if (res.msg === 'Sent successfully.') {
            smsForm = false;
            name = ''
            phone = ''
            message = ''
        }

    }


</script>

<section id="contact" class="basis-full">
    <div class="flex flex-wrap justify-center relative">
        <h2 class="font-bold text-gray-600 text-xl 2xl:text-3xl mb-6 basis-full text-center drop-shadow-xl">
            Let's Get Started!
        </h2>
        <p class="text-gray-600 text-center px-3 md:px-0">
            Contact me via email, sms, or social media by clicking any of the links below
        </p>
        <div class="basis-full w-full flex justify-center my-3">
            <div class="basis-full border-t border-gray-300 max-w-xl mx-10 mb-3 md:mb-0 md:mx-0"></div>
        </div>
        <div class="container basis-full mx-auto max-w-md mb-3 md:mb-0">
            <div class="flex justify-between mx-auto -mb-10 md:mb-10 px-8 md:px-0">
                <a target="_blank" href="https://twitter.com/BetaOxFitness"
                   class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main"><i class="fa-brands fa-twitter"></i></a>
                <a target="_blank" href="https://www.facebook.com/betaoxfitness/"
                   class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main"><i
                        class="fa-brands fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.instagram.com/beta_ox_fitness/"
                   class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main"><i
                        class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCY5AtnqsNwbPrJ7UlAimoUA"
                   class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main"><i
                        class="fa-brands fa-youtube"></i></a>
                <a href="#contact-form" class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main" on:click={handleEmailForm}><i
                        class="fa-solid fa-envelope"
                ></i></a>
                <a href="#contact-form" class="2xl:text-2xl xl:text-xl md:text-lg hover:scale-125 hover:drop-shadow-2xl hover:text-primary-main" on:click={handleSmsForm}><i
                        class="fa-solid fa-comment-sms"></i></a>
            </div>
        </div>
        {#if emailForm}
            <div class="absolute bottom-12 bg-white rounded-lg center-text drop-shadow-xl m-3 max-w-xl">
                <!--Form Container-->
                <div class="flex flex-wrap relative space-y-3 justify-center px-4 pb-12 pt-14">
                    <div class="absolute top-2 right-5">
                        <button on:click={()=> {smsForm = false; emailForm = false; requiredNameError = false; requiredEmailError = false; invalidEmailError = false}}>
                            <i class="fa-regular fa-circle-xmark text-2xl hover:text-primary-main"></i>
                        </button>
                    </div>
                    <div class="absolute top-2 left-1/2 -translate-x-1/2">
                        <h1 class="font-bold text-xl xl:text-2xl 2xl:text-3xl text-gray-900">Let's talk!</h1>
                    </div>
                    <div class="basis-full w-full">
                        <input type="text" name="name" placeholder="Name *" bind:value={name}
                               class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main">
                        {#if requiredNameError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Required</label>
                        {/if}
                    </div>
                    <div class="basis-full w-full">
                        <input type="email" name="email" placeholder="Email *" bind:value={email}
                               class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main">
                        {#if requiredEmailError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Required</label>
                        {:else if invalidEmailError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Please enter a valid email...</label>
                        {/if}
                    </div>
                    <div class="basis-full w-full">
                        <textarea rows="4" type="text" placeholder="Message (optional)" bind:value={message}
                                  class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main"></textarea>
                    </div>
                    <div class="absolute bottom-2 left-1/2 -translate-x-1/2">
                        <button on:click={handleEmailSubmit} class="bg-gray-200 hover:bg-primary-main rounded-lg py-1.5 px-3 font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        {:else if smsForm}
            <div class="absolute bottom-12 bg-white rounded-lg center-text drop-shadow-xl m-3 max-w-xl">
                <!--Form Container-->
                <div class="flex flex-wrap relative space-y-3 justify-center px-4 pb-12 pt-14">
                    <div class="absolute top-2 right-5">
                        <button on:click={()=> {smsForm = false; emailForm = false; requiredNameError = false; requiredEmailError = false; invalidEmailError = false}}>
                            <i class="fa-regular fa-circle-xmark text-2xl hover:text-primary-main"></i>
                        </button>
                    </div>
                    <div class="absolute top-2 left-1/2 -translate-x-1/2">
                        <h1 class="font-bold text-xl xl:text-2xl 2xl:text-3xl text-gray-900">Let's talk!</h1>
                    </div>
                    <div class="basis-full w-full">
                        <input type="text" name="name" placeholder="Name *" bind:value={name}
                               class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main">
                        {#if requiredNameError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Required</label>
                        {/if}
                    </div>
                    <div class="basis-full w-full">
                        <input type="text" name="phone" placeholder="Phone Number *" bind:value={phone}
                               class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main">
                        {#if requiredPhoneError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Required</label>
                        {:else if invalidPhoneError}
                            <label for="name" class="text-s font-light text-red-600 ml-4"><i class="fa-solid fa-chevron-up"></i> Please enter a valid phone number...</label>
                        {/if}
                    </div>
                    <div class="basis-full w-full">
                        <textarea rows="4" type="text" name="message" placeholder="Message (optional)" bind:value={message}
                                  class="w-full px-4 py-2.5 text-sans text-lg rounded-md bg-gray-50 focus:outline-2 focus:outline-primary-main focus:drop-shadow-xl focus:font-bold hover:border-2 border-2 hover:border-primary-main"></textarea>
                    </div>
                    <div class="absolute bottom-2 left-1/2 -translate-x-1/2">
                        <button on:click={handleSmsSubmit} class="bg-gray-200 hover:bg-primary-main rounded-lg py-1.5 px-3 font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</section>
