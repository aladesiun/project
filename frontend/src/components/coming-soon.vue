<template>
    <div>
        <div class="absolute top-0 right-0 left-0 bottom-0 bg_w h-[100vh] bg_img">
            <nav class="py-5 w-full nav_btn ">
                <div class="max-w-[1550px] mx-auto flex md:justify-between justify-center items-center px-0 md:px-9">
                        <div class="cc  dw2  ml-0">
                            <img src="../assets/images/brave-white.png" class=" white_logo" alt="Logo">
                            <img src="../assets/images/logo-dark.png" class="hidden dark_logo" alt="dark-logo">
                        </div>
                        <div class="md:right-[0px] right-[20px] top-[23px] switch_box  md:static absolute">
                            <img src="../assets/images/SunDim.png" class="sun" alt="Switch-bg" @click ="lightMode()">
                            <img src="../assets/images/Moon.png" class="moon hidden" alt="Switch-bg" @click ="darkMode()">
                        </div>
                </div>
            </nav>

            <main class="mt-6">
                <div class="w-full flex wrapper max-w-[1550px] mx-auto px-0 md:px-9">
                    <div class="box_wrap">
                        <div class="pt-[89px] w-[700px]  box_content">
                            <div class="relative lg:w-[480px] md:w-[480px] sm:w-[100%] w-[100%] p_one">
                                <h2 class="flex font-[Ubuntu] coming_p font-semibold lg:text-6xl md:text-5xl sm:text-5xl text-4xl text-white mb-6">
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
                                <p class="font-[Ubuntu] brave_p font-light text-left text-lg text-[rgba(255,255,255,0.7)] w-[72%] leading-6">
                                    BraveBet is changing the face of Individual Betting in Nigeria and Across Africa.
                                </p>
                            </div>
                            <div class="hidden wrap_six overflow-hidden">
                                <img src="../assets/images/phone-white.png" class="mx-auto white_phone phone_rotation" alt="phone_image">
                                <img src="../assets/images/phone-green.png" class="mx-auto hidden dark_phone phone_rotation" alt="phone_image">
                            </div>
                            <div class="mb-10 wrap_three">
                                <div class="flex">
                                    <div class="flex flex-col items-center mr-8 days_p">
                                        <p class="text-white font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ days }}</p>
                                        <p class="text-white font-[Ubuntu] text-base">Days</p>
                                    </div>
                                    <div class=" flex flex-col items-center  mr-8 days_p">
                                        <p class="text-white font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ hours }}</p>
                                        <p class="text-white font-[Ubuntu] text-base">Hours</p>
                                    </div>
                                    <div class=" flex flex-col items-center  mr-8 days_p">
                                        <p class="text-white font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ minutes }}</p>
                                        <p class="text-white font-[Ubuntu] text-base">Minutes</p>
                                    </div>
                                    <div class=" flex flex-col items-center days_p">
                                        <p class="text-white font-light lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-[Ubuntu]">{{ seconds }}</p>
                                        <p class="text-white font-[Ubuntu] text-base">Seconds</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-14 wrap_five"> 
                                <button class="text-black text-base font-semibold btn font-[Ubuntu] bg-[#FFCA10] hover:bg-white ease-in-out duration-300 hover:text-[#FFCA10] rounded-3xl w-[220px] h-[47px]" 
                                    type="button"
                                    id="btnSave"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModalLg"
                                >
                                    Notify me at Launch
                                </button>
                             
                            </div>
                           


                            <div class="flex justify-start items-center wrap_four">
                                <i class="fa-brands fa-twitter text-lg mr-1 text-white"></i>
                                <i class="fa-brands fa-facebook text-lg mr-1 text-white"></i>
                                <i class="fa-brands fa-instagram text-lg mr-2 text-white"></i>
                                <p class="text-white font-[Ubuntu]">@bravebetnet</p>
                            </div>

                        </div>
                    </div>
                    <div class="bg_pattern w-full overflow-hidden">
                        <img src="../assets/images/phone-white.png" class="ml-auto  white_phone  phone_rotation " alt="phone_image">
                        <img src="../assets/images/phone-green.png" class="ml-auto  hidden dark_phone  phone_rotation" alt="phone_image">
                    </div>
                </div>
            </main> 

            <!---------------MODAL-------------->

            <!------------------=ALERT sUCCESSfULLY-------------->
            
            <!------------------GET NOTIFIED--------------->
            <subscribe-modal></subscribe-modal>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import subscribeModal from './subscribe-modal.vue';

export default {
  components: { subscribeModal },
    setup(){

        let days= ref(); let hours= ref(); let minutes= ref(); let seconds = ref();

        
        var now , timeleft;
        var lunchDate = new Date("May 30, 2022 11:38:20").getTime(); 
        var countdownHandler = setInterval(()=>{
            now = new Date().getTime();
            timeleft = lunchDate - now;
            days.value = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            hours.value = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.value = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((timeleft % (1000 * 60)) / 1000);
            
            if(timeleft < 0){
                clearInterval(countdownHandler)
                console.log("Time out!!")
                days.value = 0;
                hours.value = 0;
                minutes.value = 0;
                seconds.value = 0 ;
            }
        }, 1000);

        return{
           days,
           hours,
           minutes,
           seconds,
        }     

    },
}
</script>
<style scoped>
.modal-backdrop {
    z-index: 1040 !important;
}
.bg_img{
    background: linear-gradient(#12129B 0%, #01DA4C 100%)!important;
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


}
@media only screen and (max-width:745px){
  .nav_btn{
    box-shadow:none!important;
    padding-top: 50px!important;
    height: auto;
   }
   .switch_box{
       top: 54px;
   }
   .box_content{
       padding-top:55px!important;
   }
   .wrap_two{
       margin-bottom: 4px!important;
   }

}

@media only screen and (max-width:1155px){
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