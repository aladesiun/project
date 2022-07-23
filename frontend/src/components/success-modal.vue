<template>
  <div>
    <div :class="show_notification"  class="bg-[#00000038] absolute top-0 left-0 right-0 font-[Ubuntu] bottom-0 flex z-40">
        <div class="h-full" style="width: calc(100% - 700px);" @click="close_notification_modal(close_home_toggle_side_modal)"></div>
        <div class="lg:w-[700px] flex justify-center items-center flex-col md:w-[700px] sm:w-[100%] w-[100%] animate-right absolute right-0 top-0 bg-white dark:bg-gradient-to-b from-[#08336B] to-[#03B557] h-full">
            <div class="ml-auto pl-5 w-[100px] my-3">
            <img src="../assets/images/XCircle.svg" class="dark:bg-transparent bg-black p-1 rounded w-[35px] md:hidden block " @click="close_notification_modal(close_home_toggle_side_modal)" />
        </div>
            <div>
                <div class="flex justify-center items-center">
                    <img src="../assets/images/CircleWavyCheck2.png" class="dark:block hidden lg:w-auto md:w-[140px] sm:w-[140px] w-[140px]" alt="success-logo" />
                    <img src="../assets/images/greenvalid.png" class="dark:hidden block lg:w-auto md:w-[140px] sm:w-[140px] w-[140px]" alt="success-logo" />
                </div>
                <div class="mb-24">
                    <p class="text-white text-2xl font-[Ubuntu] text-center leading-7">
                        Free bet placed <br />
                        Successfully
                    </p>
                </div>
                <div class="flex justify-center items-center flex-col">
                    <p class="dark:text-[rgba(255,255,255,0.6)] text-[rgba(0,0,0,0.6)] text-center text-base font-[Ubuntu] mx-4 lg:mb-0 md:mb-0 sm:mb-0 mb-4">Results will be sent to your Email Address</p>
                    <p class="dark:text-[rgba(255,255,255,0.4)] text-[rgba(0,0,0,0.6)] text-center text-base font-[Ubuntu] mx-4">This page will close Automatically</p>
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
    const {modalToggles, close_notification_modal, close_home_toggle_side_modal} = useModal();

    const { show_notification } = modalToggles;

    return {
      show_notification,
      close_notification_modal,
      close_home_toggle_side_modal
    }
  }

});
</script>

<style>

</style>