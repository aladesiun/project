<template>
  <div>
    <div  :class="set_prediction_modal +' '+ 'bg-[#00000038] absolute top-0 left-0 right-0 font-[Ubuntu] bottom-0 flex z-40'">
            <div class="h-full" style="width: calc(100% - 700px);" @click="close_prediction_side_modal"></div>
            <div class="lg:w-[700px] md:w-[700px] sm:w-[100%] w-[100%] absolute right-0 animate-right top-0 bg-white dark:bg-gradient-to-b from-[#08336B] to-[#03B557] h-full">
                <div class="ml-auto pl-5 w-[100px] my-3">
                    <img src="../assets/images/XCircle.svg" class="dark:bg-transparent bg-black p-1 rounded w-[35px] md:hidden block " @click="close_prediction_side_modal" />
                </div>
                <div class="mt-10">
                    <p class="font-[Ubuntu] dark:text-white text-black text-xl text-center mb-1 font-semibold lg:w-[100%] md:w-[100%] sm:w-[280px] w-[280px] mx-auto">Predict 6 Outcomes of this Match to Win</p>
                    <p class="dark:text-white text-black text-base font-[Ubuntu] leading-5 text-center mx-auto lg:w-[300px] md:w-[300px] sm:w-[100%] w-[90%]">You must have at least 5 correct predictionDetails to Win</p>
                </div>
                <div class="mt-3 mb-2">
                    <div class="flex justify-between items-center w-[260px] mx-auto">
                        <div class="">
                            <img src="../assets/images/Liverpool.svg" class="lg:w-[60px] md:w-[60px] sm:w-[45px] w-[45px]" alt="Liverpool_logo" />
                        </div>
                        <div class="">
                            <img src="../assets/images/Group-champ.svg" class="lg:w-[60px] md:w-[60px] dark:block hidden sm:w-[45px] w-[45px]" alt="champ_logo" />
                            <img src="../assets/images/dark_logo.png" class="block dark:hidden" alt="dark_champ_logo" />
                        </div>
                        <div class="">
                            <img src="../assets/images/Rm.svg" class="lg:w-[60px] md:w-[60px] sm:w-[45px] w-[45px]" alt="real_madrid" />
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-center pr-10 mb-5">
                    <div class="flex cursor-pointer" @click="close_prediction_side_modal">
                        <img src="../assets/images/XCircle.png" />
                        <p class="text-red-800 ml-1">Close</p>
                    </div>
                </div>
                <div class="lg:px-20 md:px-20 sm:px-10 px-10 pt-8 w-[83%] mx-auto mb-12 bg-[rgba(217,217,217,0.1)]">
                    <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px]font-semibold text-center mb-4 font-[Ubuntu] leading-5">
                        You Must Win 5 out of all 6 PredictionDetails.<br />
                        Do not use any Conjunction i.e or, and.<br />
                        Example : Team a to win or to draw
                    </p>

                    <div>
                        <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[15px] font-semibold text-center mb-[-4px] font-[Ubuntu]">Predict on</p>
                        <ul class="leading-2 text-center">
                            <li class="leading-2">
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu] leading-2">Winner</p>
                            </li>
                            <li class="leading-2">
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Exact number of Goals for any Team</p>
                            </li>
                            <li class="leading-2">
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Exact number of Cards</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Players to score</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">First team to score</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Half Time win, Draw or Lose</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">First Team to Score</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">First Team to Play corner or last</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Man of the Match</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Highest Possession</p>
                            </li>
                            <li>
                                <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Team to have clean sheet e.t.c</p>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4 pb-8">
                        <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu]">Examples</p>
                        <p class="dark:text-white text-[rgba(0,0,0,0.8] text-[14px] text-center mb-[-1px] font-[Ubuntu] leading-5">
                            Team A to have 30 Yellow Cards<br />
                            Team B to have 16 Red Cards<br />
                            Team A to Score First
                        </p>
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
    const { modalToggles, close_prediction_side_modal } = useModal();
    const { set_prediction_modal } = modalToggles;


    return {
      set_prediction_modal,
      close_prediction_side_modal
    }
  }

});
</script>

<style>

</style>