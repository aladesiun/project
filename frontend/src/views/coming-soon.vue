<template>
    <div>  
        <div class="relative top-0 right-0 left-0 bottom-0 bg_w h-[100vh] bg-white dark:bg-gradient-to-b from-[#12129B] to-[#01DA4C] ">
        
            <nav class="py-5 w-full nav_btn  sm:top-0 top-0 sticky bg-white dark:bg-[#1E35A0] z-20">
                <div class="max-w-[1450px] mx-auto flex md:justify-between justify-center items-center px-0 md:px-9">
                        <div class="cc  dw2  ml-0">
                           <img src="../assets/images/brave-white.png" class=" white_logo  hidden dark:block" alt="Logo">
                            <img src="../assets/images/logo-dark.png" class=" dark_logo block dark:hidden" alt="dark-logo">
                        </div>
                        <div class="md:right-[0px] right-[20px] top-[0px] switch_box  md:static absolute">
                            <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 text-sm p-2.5">
                                <svg id="theme-toggle-dark-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                <svg id="theme-toggle-light-icon" class="hidden w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                </div>
            </nav>
            <main class="sm:pt-[100px]">
                <div class="w-full flex wrapper max-w-[1450px] mx-auto md:px-9 ]">
                    <div class="box_wrap mt-[50px">
                        <div class="pt-[89px] w-[700px]  box_content">
                            <div class="relative lg:w-[480px] md:w-[480px] sm:w-[100%] w-[100%] p_one">
                                <h2 class="flex font-[Ubuntu] coming_p font-semibold lg:text-6xl md:text-5xl sm:text-5xl text-4xl dark:text-white text-[#091870] mb-6">
                                    Coming 
                                    <div class="ml-5  relative">
                                        <b class="text-[#42FF83]">
                                            soon!

                                        </b>
                                        <span class="w-[32px] h-[32px] smile_face rounded-full border-b-4 absolute right-[73px] bottom-[-14px]  border-[#42FF83]">
                                        </span>
                                    </div>
                                </h2>
                            </div>

                            <div class="mb-16 wrap_two">
                                <p class="font-[Ubuntu] brave_p font-light text-left text-lg dark:text-[rgba(255,255,255,0.7)] text-[rgba(0,0,0,0.6)]  w-[72%] leading-6">
                                    BraveBet is changing the face of Individual Betting in Nigeria and Across Africa.
                                </p>
                            </div>
                            <div class="hidden wrap_six overflow-hidden">
                                <img src="../assets/images/phone-white.png" class="md:ml-auto mx-auto  dark:block hidden phone_rotation" alt="phone_image">
                                <img src="../assets/images/phone-green.png" class="md:ml-auto mx-auto  dark:hidden block phone_rotation" alt="phone_image">
                            </div>
                            <div class="mb-10 wrap_three">
                                <div class="flex">
                                    <div class="flex flex-col items-center mr-8 days_p">
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ days }}</p>
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-[Ubuntu] text-base">Days</p>
                                    </div>
                                    <div class=" flex flex-col items-center  mr-8 days_p">
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ hours }}</p>
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)]font-[Ubuntu] text-base">Hours</p>
                                    </div>
                                    <div class=" flex flex-col items-center  mr-8 days_p">
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ minutes }}</p>
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-[Ubuntu] text-base">Minutes</p>
                                    </div>
                                    <div class=" flex flex-col items-center days_p">
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ seconds }}</p>
                                        <p class="dark:text-white text-[rgba(0,0,0,0.6)] font-[Ubuntu] text-base">Seconds</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-14 wrap_five flex justify-start items-center"> 
                                <button class="text-black  text-base font-semibold btn font-[Ubuntu] bg-[#FFCA10] hover:bg-white ease-in-out duration-300 hover:text-[#FFCA10] rounded-3xl w-[220px] h-[47px]" 
                                    type="button"
                                    id="btnSave"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModalLg"
                                >
                                    Notify me at Launch
                                </button>
                                <!----======New Button=====-->
                                <button v-if="leagueTimeOut" class="text-white ml-6 flex justify-center items-center text-base font-semibold btn font-[Ubuntu] champ_btn  ease-in-out duration-300  rounded-3xl w-[220px] h-[47px]" 
                                    type="button"
                                    @click="toggleModal()"
                                   
                                >
                                 Free <b class="font-light ml-1 mr-3">Predictions</b><img src="../assets/images/uefa-champions-league-1-logo-svgrepo-com.png" alt="champions_league_logo"/>
                                </button>
                            </div>
                           


                            <div class="flex justify-start items-center wrap_four">
                                <a href="https://twitter.com/Bravebetnet"><i class="fa-brands fa-twitter text-lg mr-1 dark:text-white text-[#3D3C3C]"></i></a>
                                <a href="https://web.facebook.com/Bravebetnet"><i class="fa-brands fa-facebook text-lg mr-1 dark:text-white text-[#3D3C3C]"></i></a>
                                <a href="https://www.instagram.com/bravebetnet/"><i class="fa-brands fa-instagram text-lg mr-2 dark:text-white text-[#3D3C3C]"></i></a>
                                <p class="dark:text-white text-[#3D3C3C] font-[Ubuntu]">@bravebetnet</p>
                            </div>

                        </div>
                    </div>
                    <div class="bg_pattern w-full overflow-hidden z-5">
                        <img src="../assets/images/phone-white.png" class="ml-auto z-5 dark:block hidden  phone_rotation " alt="phone_image">
                        <img src="../assets/images/phone-green.png" class="ml-auto z-5 dark:hidden block     phone_rotation" alt="phone_image">
                    </div>
                   
                </div>
            </main>

            <!---------------MODAL-------------->
 
            <!------------------GET NOTIFIED--------------->
            <championsLeague v-if="leagueTimeOut" />
            <subscribe-modal></subscribe-modal>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import subscribeModal from '.././components/subscribe-modal.vue';
import championsLeague from '../components/champions-league.vue'
import {useModal} from "@/composables/useModal";

export default {
  components: { subscribeModal, championsLeague },
    setup(){

        const leagueTimeOut = ref(false);

        let days= ref(); let hours= ref(); let minutes= ref(); let seconds = ref();

        const { close_home_toggle_side_modal, set_home_toggle_side_modal} = useModal();
            
        // const store  = useStore();
        const toggleModal = () => {
            set_home_toggle_side_modal();
        };    
       
        var now , timeleft;
        var lunchDate = new Date("Jul 25, 2022 16:37:52").getTime(); 
        var countdownHandler = ()=>{
            now = new Date().getTime();
            timeleft = lunchDate - now;
            days.value = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            hours.value = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.value = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((timeleft % (1000 * 60)) / 1000);
        }

        setInterval(()=>{countdownHandler()}, 1000);

        const date1 = new Date();
        const date2 = new Date('2022-05-28 19:50:00');

        if (date1.getTime() < date2.getTime()) {
            leagueTimeOut.value = true;
        }
        
            
       return{
           days,
           hours,
           minutes,
           seconds,
           set_home_toggle_side_modal,
           close_home_toggle_side_modal,
           toggleModal,
            leagueTimeOut
       }
    },
}
</script>
<style scoped>
.champ_btn{
    background: linear-gradient(#0311C7 , #050A6B);
}
.modal-backdrop {
    z-index: 1040 !important;
}
.none{
    display: none!important;
}
.bg_pattern{
    background-image: url("../assets/images/bb.png");
    background-repeat:repeat;
    background-position: -87%  center;
}
.btn{
    box-shadow:0px 0px 17px 3px rgb(0 0 0 / 17%) ;
}
.nav_btn{
    box-shadow: 0px 4px 10px 1px rgb(0 0 0 / 5%);
}
  
.phone_rotation{
    animation: rotate 2s;
    animation-iteration-count: infinite;

}

@keyframes rotate {
    0%{
       transform: rotate(45deg); 
    }
    50%{
        transform: rotate(0deg); 
    }
    100%{
        transform: rotate(45deg); 
    }
}
@media only screen and (max-width:575px){
   .modal_content{
       margin: 0px 35px;
   }
   .btn_close{
       padding-bottom: 28px;
   }
   .wrap_five{
       display: block;
   }
   .champ_btn{
       margin: auto;
       margin-top: 19px;
   }

}
@media only screen and (max-width:745px){
  .nav_btn{
    box-shadow:none!important;
    height: auto;
   }
   .switch_box{
       top: 23px;
   }
   .box_content{
       padding-top:55px!important;
   }
   .wrap_two{
       margin-bottom: 4px!important;
   }

}

@media only screen and (max-width:1156px){
       .wrap_five{
           justify-content: center;
       }
        .bg_w{
          height: auto;  
        }
      .bg_pattern{
          display: none;
      }
      .box_content{
            width: 100%!important;
            padding-left: 0px!important;
       }
       .box_wrap,.wrap_two,.wrap_three,.wrap_four,.coming_p{
           display: flex;
           justify-content: center;
           align-items: center;
           text-align: center;
       }
       .box_wrap,.wrap_two p{
            text-align: center;   
       } 
       .wrapper,.wrap_six{
          display: block!important;
       }
       .p_one{
           margin: auto;
       }
       .wrap_five{
           justify-content: center !important;
           margin-bottom: 20px!important;
       }
       .bg_img{
           height: fit-content;
       }
       .wrap_four{
           margin-bottom: 100px!important;
       }
    }
@media only screen and (max-width:1023px){
    .smile_face{
        right: 55px;
    } 
}
@media only screen and (max-width:639px){
   .smile_face{
        right: 41px;
        width: 25px;
        height: 25px;
        top: 22px;
    }
}
</style>>