import { reactive, toRefs, Ref, ref } from "vue";

const modalToggles = reactive({
    toggle_side_modal: "hidden",
    set_prediction_modal: "hidden",
    landing_modal: "hidden",
    show_notification: "hidden",
    home_toggle_side_modal: "hidden"
});


export const useModal = () => {

    
 
    //set home toggle model
    const set_home_toggle_side_modal=()=>{
        modalToggles.home_toggle_side_modal="block";
        modalToggles.landing_modal = "hidden";
    }

    const close_home_toggle_side_modal=()=>{
        modalToggles.home_toggle_side_modal="hidden";
    }
    
    const set_notification_modal = () => {
        modalToggles.show_notification = "block";
        modalToggles.toggle_side_modal = "hidden";
    };

    const close_notification_modal = (close_home_toggle_side_modal: any) => {
        modalToggles.show_notification = "hidden";
        modalToggles.toggle_side_modal = "hidden";
        close_home_toggle_side_modal()
    };

    const set_toggle_side_modal = () => {
        modalToggles.toggle_side_modal = "block";
    };

    const close_toggle_side_modal = () => {
        modalToggles.toggle_side_modal = "hidden";
    };

    const set_prediction_side_modal = () => {
        modalToggles.set_prediction_modal = "block";
        modalToggles.toggle_side_modal = "hidden";
    };

    const close_prediction_side_modal = () => {
        modalToggles.set_prediction_modal = "hidden";
        modalToggles.toggle_side_modal = "block";
        modalToggles.landing_modal = "hidden";
    };

    const close_landing_modal = () => {
        modalToggles.landing_modal = "hidden";
    };

    return {
        modalToggles: toRefs(modalToggles),
        set_notification_modal,
        close_notification_modal,
        close_landing_modal,
        set_toggle_side_modal,
        close_toggle_side_modal,
        set_prediction_side_modal,
        close_prediction_side_modal,
        set_home_toggle_side_modal,
        close_home_toggle_side_modal 
    };
};