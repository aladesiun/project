<template>
  <div>
     <div :data="home_toggle_side_modal"  :class="home_toggle_side_modal =='hidden'? toggle_side_modal+' '+'bg-[#00000038] absolute top-0 left-0 right-0 font-[Ubuntu] bottom-0 flex z-40' : home_toggle_side_modal+' '+'bg-[#00000038] absolute top-0 left-0 right-0 font-[Ubuntu] bottom-0 flex z-30'" >
        <div v-if="home_toggle_side_modal === 'block'" class="h-full" style="width: calc(100% - 500px)" @click="close_home_toggle_side_modal"></div>
        <div v-else class="h-full" style="width: calc(100% - 500px)" @click="close_toggle_side_modal"></div>
        <div class="animate-right-margin w-[100%] md:w-[700px] bg-white ml-auto h-full dark:bg-gradient-to-b from-[#12129B] to-[#01DA4C] py-6">
            <div v-if="home_toggle_side_modal === 'block'"  class="ml-auto pl-5 w-[100px] my-3">
                <img src="../assets/images/XCircle.svg" class="dark:bg-transparent bg-black p-1 rounded w-[35px] md:hidden block " @click="close_home_toggle_side_modal"  />
            </div>
                <div v-else  class="ml-auto pl-5 w-[100px] my-3">
                <img src="../assets/images/XCircle.svg" class="dark:bg-transparent bg-black p-1 rounded w-[35px] md:hidden block " @click="close_toggle_side_modal" />
            </div>

            <div class="dark:text-white text-black text-center px-6">
                <h1 class="text-[20px] font-semibold">Predict 6 Outcomes of this Match to Win</h1>
                <p class="text-[15px] font-light">You must have at least 5 correct</p>
                <p class="text-[15px] font-light">predictionDetails to Win</p>
            </div>
            <div class="mt-3 mb-0">
                <div class="flex justify-between items-center w-[220px] h-[100px] mx-auto">
                    <div class="">
                        <img src="../assets/images/Liverpool.svg" alt="Liverpool_logo" />
                    </div>
                    <div class="">
                        <img src="../assets/images/Group-champ.svg" class="hidden dark:block h-[60px]" alt="champ_logo" />
                        <img src="../assets/images/uefadark.svg" class="block dark:hidden" alt="champ_logo" />
                    </div>
                    <div class="">
                        <img src="../assets/images/Rm.svg" alt="real_madrid" />
                    </div>
                </div>
            </div>
            <div class="px-9">
                <div class="ml-auto flex justify-end w-fit">
                    <img src="../assets/images/ShieldWarning.svg" class="hidden dark:block" alt="shield" />
                    <img src="../assets/images/ShieldWarningdark.svg" class="block dark:hidden" alt="shield" />
                    <p class="dark:text-white ml-auto font-light text-[#121E67]" @click="set_prediction_side_modal">Bet Guild</p>
                </div>
                <form class="my-2" @submit.prevent="createPredict()">
                <notification :class="throwError"/>
                    <div class="form my-3">
                        <input v-for="(outcome, index) in outcomes" :key="index"
                            type="text"
                            placeholder="outcome 1"
                            v-model="outcome.value"
                            class="focus:bg-black my-3 border-none text-black focus:text-white outline-none focus:ring-0 dark:focus:bg-[#313030] dark:bg-white bg-[#D9D9D9] py-2 px-6 rounded-[10px] placeholder:text-[16px] placeholder:font-light dark:placeholder:text-gray-300 w-full"
                        />
                    </div>
                    <div class="form flex mt-5">
                        <input
                            type="checkbox"
                            v-model="predictionDetails.wantResultUpdate"
                            class="dark:bg-white bg-gray-300 w-[20px] h-[20px] rounded mr-3 border-none focus:border-none default:ring-none focus:ring-black outline-none focus:ring-0 dark:checked:bg-[#091870] checked:bg-[#091870] p-2"
                        />
                        <p class="font-light text-[13px] dark:text-white text-black">I agree that outcomes considered as irrelant can be nullified and would like to receive the Result in my Email provided below</p>
                    </div>
                    <div class="form flex mt-5">
                        <input
                            type="checkbox"
                            checked
                            v-model="predictionDetails.subscribe"
                            class="dark:bg-white bg-gray-300 w-[20px] h-[20px] rounded mr-3 border-none focus:border-none default:ring-none focus:ring-black outline-none focus:ring-0 dark:checked:bg-[#091870] checked:bg-[#091870] p-2"
                        />
                        <p class="font-light text-[13px] dark:text-white text-black">subscribe to news letter</p>
                    </div>
                    <div class="form my-3">
                        <input
                            type="email"
                            placeholder="josephpromise@bravebet.com"
                            v-model="predictionDetails.email"
                            required
                            class="border-1 dark:border-white dark:text-white text-gray-500 text-[13px] focus:border-gray-300 focus:ring-0 bg-transparent py-1 px-4 dark:bg-none placeholder:text-[13px] placeholder:font-light dark:placeholder:text-white w-full"
                        />
                    </div>
                    <VueRecaptcha
                        :sitekey="siteKey"
                        :load-recaptcha-script="true"
                        @verify="handleSuccess"
                        @error="handleError"
                    ></VueRecaptcha>
                    <div class="my-5 form">
                        <div class="flex justify-between items-center">
                            <p class="dark:text-white text-black font-semibold">Stack:Free</p>
                            <button 
                                :class="!recaptchaSuccess? 'disabledBtn' : '' "
                                class="text-white text-sm font-normal btn font-[Ubuntu] bg-[#FF2323] shadow-md hover:bg-white ease-in-out duration-300 hover:text-[#FFCA10] rounded-[15px] py-2 px-5"
                                type="submit"
                                :disabled = "recaptchaSuccess? 'false' : 'true' "

                            >
                                <span v-if="!loading">Place free bet</span>
                                <span v-else>Loading</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import notification from './notification-component.vue'
import { ref, defineComponent, computed} from "vue";
import { Prediction, Outcomes } from "../model";
import { defaultOutcomes, defaultPrediction } from '../services/const';
import axios from 'axios'; 
import { useModal } from "@/composables/useModal";
import { VueRecaptcha } from 'vue-recaptcha';

export default defineComponent({
    components:{
        notification,
        VueRecaptcha
    },

  name:"SuccessModal",
  setup(){
        const { modalToggles, set_prediction_side_modal, close_home_toggle_side_modal } = useModal();
        const { home_toggle_side_modal, show_notification } = modalToggles;

        const recaptchaSuccess = ref(false);

        const siteKey = computed(() => {
            return '6Lfl2R4gAAAAAJanHAjb1iv7dx_ZAyHEGGEuG9UB';
        });

        const handleError = () => {
            
        };
        
        const handleSuccess = (response: string) => {
            recaptchaSuccess.value = true;
            console.log(response)
        };


        const loading = ref(false);
        const throwError= ref('hidden')
        const toggle_side_modal = ref("hidden");
        const outcomes = ref<Array<Outcomes>>(defaultOutcomes as unknown as Array<Outcomes>);
        const predictionDetails = ref<Prediction>(defaultPrediction as unknown as Prediction); 


        const createPredict = async () =>{
            loading.value = true;
            const predictionOutcomes = outcomes.value.filter((outcome)=> outcome.value != '');
            const predictions: Array<string> = predictionOutcomes.map((outcome)=> outcome.value);
            console.log(predictions) 
            predictionDetails.value.predictions = predictions
                
            console.log(predictionDetails)
            if(predictions.length < 4){
                throwError.value='block';
                setTimeout(() => {
                throwError.value='hidden';
                    
                },5000);
            }

            try{
                const response = await axios.post(process.env.VUE_APP_API_BASE_URL+'/predict', predictionDetails.value)
                if(response.status){
                    show_notification.value = "block";
                    toggle_side_modal.value = "hidden";
                }
            }
            catch (e) {
                console.log(e)
            }
            loading.value = false;
        }

       

        return {
            outcomes,
            loading,
            toggle_side_modal,
            predictionDetails,
            home_toggle_side_modal,
            createPredict,
            set_prediction_side_modal,
            close_home_toggle_side_modal,
            throwError,
            handleSuccess,
            handleError,
            siteKey,
            recaptchaSuccess
        }
  }

});
</script>

<style>
.disabledBtn{
    opacity: .5;
}
</style>