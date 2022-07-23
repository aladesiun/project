<template>
  <div>
    <div
      class="modal fade fixed sm:top-0 top-[14px]  left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="exampleModalCenterTwo"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTwo"
      aria-modal="true"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      role="dialog"
    >
      <div
        class="modal-dialog modal-dialog-centered relative pointer-events-none "
      >
        <div
          class="z-[40] modal-content border-none relative flex flex-col w-[600px] lg:mx-auto md:mx-auto  sm:mx-auto mx-auto h-[710px] pointer-events-auto bg-[#D9D9D9] bg-clip-padding outline-none text-current"
        >
          <div class="h-[85px] bg-white flex justify-between items-center lg:pl-8 md:pl-16 pl-4   lg:pr-10 md:pr-10 pr-4 sticky top-0">
           
            <div>
                 <img src="../assets/images/modal-brave.svg" class="lg:w-[125px] md:w-[125px] w-[100px]" alt="brave-logolese"/>
            </div>

            <div class="flex justify-start items-center flex-col mt-1">
                <img src="../assets/images/operator-support-svgrepo-com.svg" class="lg:min-w-[50px] mb-1 md:min-w-[50px] min-w-[35px]" alt="sheild"/>
                <p class="text-[rgba(0,0,0,0.6)] text-xs font-normal">24/7 Support</p>
            </div>
          </div>
          <div class="w-full text-center pt-14">
            <p class="text-[rgba(0,0,0,0.3)] text-center text-sm w-[359px] mx-auto leading-4">
                You are creating a Support ticket<br/>
                A Support Engineer will be Assigned to you
                immediately
            </p>
          </div>
          <div class="absolute bottom-0 right-0 left-0 h-[275px] border-t border-[#0000000f] sm:px-9 pt-8 px-2">
              <textarea id="message" rows="4" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 border border-[rgba(0,0,0,0.4)] focus:ring-[rgba(0,0,0,0.4)] outline-0 focus:border-[rgba(0,0,0,0.4)] rounded-[10px] placeholder:text-[rgba(0,0,0,0.3)] min-h-[140px] placeholder:text-sm" placeholder="Type something here"></textarea>
              <div class="w-full absolute bottom-10 right-0 left-0 flex justify-between items-center pl-7 pr-12">
                    <button class="text-[rgba(0,0,0,0.4)] font-['Ubuntu'] text-sm" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button class="bg-[#01DA4C] text-white font-light hover:bg-white border border-transparent hover:border-[#01DA4C] hover:text-[#01DA4C] rounded-[10px] h-[38px] lg:w-[218px] md:w-[218px] w-[135px]">
                      Start chat
                   </button>
               </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'support',
};
</script>

<style></style>
