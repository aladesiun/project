<template>
    <div>
        <LandingModal />
        <BetGuide />
        <ChoosePrediction /> 
        <SuccessModal />
    </div>
</template>

<script lang="ts">
    import { defineComponent} from "vue";
    import SuccessModal from "./success-modal.vue";
    import BetGuide from "./bet-guides-modal.vue";
    import ChoosePrediction from "./choose_prediction_modal.vue";
    import LandingModal from "./landing_modal.vue"; 

    export default defineComponent({
        components: {
            SuccessModal, 
            BetGuide, 
            ChoosePrediction,
            LandingModal
        },

        setup() { 
        

            return { 
            };
        },
    });
</script>

<style>
.animate-right{
    animation-name: animate-right;
    animation-duration: .5s;
}
.animate-right-margin{
    animation-name: animate-right-margin;
    animation-duration: .5s;
}
@keyframes animate-right {
    from{
        right: -700px;
    }
    to{
       right: 0x; 
    }
}
@keyframes animate-right-margin {
    from{
        margin-right: -700px;
    }
    to{
       margin-left:auto; 
    }
}
.landing-modal{
    position: fixed;
    left: 50%;
    top:calc(100% - 700px);

    transform: translateY(50%); 
    transform: translateX(-50%);
}
@media only screen and (max-width:800px){
    .landing-modal{
       width: 90%;
       position: fixed;
    left: 50%;
    top:calc(100% - 700px);

    transform: translateY(50%); 
    transform: translateX(-50%);
    }
    .bg-champions-banner{
        height: 300px;
    }
}
@media only screen and (max-width:710px){
    .bg-champions-banner{
        height: 250px;
    }
}
@media only screen and (max-width:600px){
    .bg-champions-banner{
        height: 210px;
    }
}
@media only screen and (max-width:500px){
    .bg-champions-banner{
        height: 170px;
    }
}
@media only screen and (max-width:400px){
    .bg-champions-banner{
        height: 140px;
    }
}
</style>
