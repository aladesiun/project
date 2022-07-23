<template>
  <div>
     <div :class="landing_modal+ ' '+ 'bg-[#00000038] z-10  absolute top-0 left-0 right-0 font-[Ubuntu] bottom-0'">
            <div class="md:w-[700px] landing-modal">
                <div class="border-none bg-white  flex flex-col">
                    <div class="bg-champions-banner bg-cover  h-[300px] bg-no-repeat">

                        <div class="flex justify-between items-center w-full px-4 py-4">
                            <img src="../assets/images/white-02.svg" class="" alt="Logo" />
                            <img src="../assets/images/XCircle.svg" class="dark:bg-transparent bg-black p-1 rounded w-[35px]" @click="close_landing_modal" />
                        </div>
                    </div>
                    <div class="flex justify-between items-center my-1 mt-0 px-3 md:px-8 bg-white">
                        <div>
                            <h1 class="sm:text-[25px] text-[14px] my-0 flex">
                                <p class="text-[#FF2323]">Predict for <span class="uppercase mr-1">free</span></p>
                                and win
                            </h1>
                            <p class="sm:text-[25px] text-[14px]">BraveBet Swags</p>
                            <p class="text-[10px] text-[#00000080] mb-5">T & C Apply</p>
                        </div>
                        <button
                            class="text-white  text-[13px] sm:text-sm font-normal btn font-[Ubuntu] bg-[#05CC4A] hover:bg-[#146f34] shadow-md ease-in-out duration-300 hover:text-[#FFCA10] rounded-[11px] py-2 px-3 sm:w-[210px]"
                            type="button"
                            @click="set_home_toggle_side_modal"
                        >
                            Place free bet
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { defineComponent} from "vue";
import { useModal } from '../composables/useModal'
export default defineComponent({
  name:"SuccessModal",
  setup(){
    const { modalToggles, close_landing_modal, set_home_toggle_side_modal } = useModal();

    const { landing_modal } = modalToggles;


    // if(localStorage.getItem('braveBetVisit') != 'true'){
    //     localStorage.setItem('braveBetVisit', 'true')
    //     landing_modal.value = "block";
    // }

    landing_modal.value = "block";

    return {
      landing_modal,
      close_landing_modal,
      set_home_toggle_side_modal
    }
  }

});
</script>

<style>

</style>