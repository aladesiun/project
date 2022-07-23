<template>
    <div>
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-lg modal-dialog-centered relative w-auto pointer-events-none">
                <div class="modal-content modal_content border-none shadow-lg relative sm:rounded-lg w-[90%] m-auto flex flex-col sm:w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current">
                    <div class=" flex flex-shrink-0 items-center justify-between p-4  rounded-t-md">
                        <div class="lg:block md:block sm:hidden hidden">
                            <img src="../assets/images/logo-dark.png" class="w-[120px]" alt="dark_logo">
                        </div>
                        <button
                        type="button" 
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="large-modal"
                        data-bs-dismiss="modal" aria-label="Close"
                        > 
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>  
                        </button>
                    </div>
                    <div class="modal-body relative p-4">
                        <div class="">
                        <div class="flex justify-center items-center">
                            <div class=" relative">
                                <img src="../assets/images/EnvelopeSimple.png" alt="Message_logo">
                                <span class="w-[20px] h-[20px] rounded-full bg-[#FF720C] flex justify-center items-center text-white absolute top-2 right-0">
                                    1
                                </span>
                            </div>
                        </div>

                        <div class="flex justify-center items-center mb-5">
                            <p class="font-[Ubuntu] text-2xl">
                                Get notified
                            </p>
                        </div>

                        <div class="flex justify-center items-center mb-2">
                            <p class="text-base text-[rgba(0,0,0,0.6)]">
                                Please input your Email address
                            </p>
                        </div>
                        <form action="" method="" @submit.prevent="subscribe">
                            <div class="flex justify-center items-center lg:mb-0 md:mb-0 sm:mb-[90px] mb-[90px]"> 
                                <input 
                                type="email" 
                                v-model="email"
                                placeholder="johnbravebet@gmail.com" 
                                class="lg:h-[40px] md:h-[40px] sm:h-[55px] h-[55px] rounded-lg border placeholder:text-center border-[rgba(51,51,51,0.2)]  lg:w-[60%] md:w-[60%] sm:w-[60%] w-[90%] placeholder:text-black"
                                required
                                >
                                
                            </div>

                            <div class="flex justify-center items-center mt-[23px] pb-[38px]">
                                <button type="submit" class="lg:h-[40px] md:h-[40px] sm:h-[55px] h-[55px] rounded-xl flex  justify-center items-center  placeholder:text-center border-[rgba(51,51,51,0.2)]  lg:w-[270px]  md:w-[270px]  sm:w-[60%] w-[90%] bg-[#19DD5D]">
                                    <img src="../assets/images/PaperPlaneTilt.png" alt="Submit">
                                    <p class="text-white text-base font-[Ubuntu]">
                                        <span v-if="!loading">Complete</span>
                                        <span v-else>Loading...</span>
                                    </p>
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------=ALERT sUCCESSfULLY-------------->
        <div ref="alertModal" class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="successAlert" tabindex="-1" aria-labelledby="successAlertLabel" aria-modal="true" role="dialog"> 
            <div class="modal-dialog modal-lg modal-dialog-centered relative w-auto pointer-events-none">
                <div class="modal-content modal_content border-none shadow-lg relative sm:rounded-lg w-[90%] m-auto flex flex-col sm:w-full pointer-events-auto bg-white bg-clip-padding  outline-none text-current">
                    <div class=" flex flex-shrink-0 items-center justify-between p-4  rounded-t-md">
                        <div class="lg:block md:block sm:hidden hidden">
                            <img src="../assets/images/logo-dark.png" class="w-[120px]" alt="dark_logo">
                        </div>
                        <button
                        type="button" 
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="large-modal"
                        data-bs-dismiss="modal" aria-label="Close"
                        > 
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>  
                        </button>
                    </div>
                    <div class="modal-body relative p-4">
                        <div class="flex flex-col justify-center items-center mb-14">
                            <img src="../assets/images/CircleWavyCheck.png"  alt="successfully_created">
                            <p class="text-black lg:text-2xl md:text-2xl sm:text-lg text-base whitespace-nowrap mt-3 font-[Ubuntu]  text-center">Alert Created Successfully!</p>
                        </div>
                        <div  class="flex justify-center items-center">
                            <button 
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                class="text-[#AEA1A1] font-[Ubuntu] text-base text-center btn_close pb-4">
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
</template>
<script>
import { ref } from '@vue/reactivity'
import axios from 'axios';

export default{
    setup(){
        const loading = ref(false);
        const email = ref('');

        const subscribe = async () => {
            loading.value = true;
            try{
                const response = await axios.post( process.env.VUE_APP_API_BASE_URL+'/subscribe', {email: email.value})
                if(response.status){
                    window.$('#exampleModalLg').modal('hide');
                    window.$('#successAlert').modal('show');
                }
            }
            catch (e) {
                console.log(e)
            }
            loading.value = false;
        }

        return{
            subscribe,
            email,
            loading
        }
    }
}
</script>
