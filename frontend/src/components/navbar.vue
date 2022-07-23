<template>
  <div>
    <nav class="
        bg-[#F8F3F3]
        fixed
        w-full
        z-[40]
        items-center
        flex 
        justify-center
        lg:h-[74px]
        md:h-[74px] 
        h-[65px]
        lg:pl-[80px]    
        pl-[28px]
        pr-[38px]   
      ">
      <div class="justify-between lg:flex md:flex block items-center w-full mx-width">
        <div>
          <img src="../assets/images/brave-logo.svg" class="w-[140px] lg:block md:block hidden" alt="bravebet-logo" />
          <img src="../assets/images/sm-biller-logo.svg" class="w-[110px] lg:hidden md:hidden block"
            alt="bravebet-logo" />
        </div>
        <div class="">
          <ul
            class="ease-in-out duration-200 lg:flex md:flex justify-end items-center lg:bg-transparent md:bg-transparent bg-white w-full lg:relative md:relative absolute left-0 lg:pl-0 md:pl-0 pl-[38px] lg:top-0 md:top-0 top-[65px] lg:h-auto md:h-auto h-0 overflow-hidden nav_links lg:shadow-none md:shadow-none shadow-md ">
            <li class="mr-9 lg:my-0 md:my-0 my-4">
              <button
                class="lg:text-lg  md:text-base sm:text-base text-sm text-[#000000] font-['Inter'] opacity-[0.5]  hover:border-b-2 ease-in-out duration-200 hover:pb-2 hover:border-[#01DA4C]"
                data-bs-toggle="modal" data-bs-target="#exampleModalCenter" type="button">Privacy policy</button>
            </li>
            <li class="mr-9 relative lg:mb-0 md:mb-0 mb-4">
              <button
                class="lg:text-lg md:text-base sm:text-base text-sm text-[#000000] font-['Inter'] opacity-[0.5] hover:border-b-2 ease-in-out duration-200 hover:pb-2 hover:border-[#01DA4C]"
                data-bs-toggle="modal" data-bs-target="#exampleModalCenterTwo" type="button">Support</button>
              <img src="../assets/images/sm-red.svg" alt="red-dot" class="absolute -right-2 top-1" />
            </li>
            <li class="lg:my-0 md:my-0 my-4">
              <button
                class="lg:w-[200px] md:w-[180px] w-[95%] h-[45px] bg-[#01DA4C] hover:border hover:border-[#01DA4C] hover:bg-white hover:text-[#01DA4C] ease-in-out duration-200 font-semibold text-[#fff] lg:text-base md:text-base sm:text-base text-sm rounded-[15px]">
                Download now
              </button>
            </li>
          </ul>
        </div>
        <div class="absolute lg:right-8 md:right-8 right-6 top-3 bottom-3 lg:hidden md:hidden block">
          <img src="../assets/images/hambugger.svg" class="w-[29px] cursor-pointer toggle-nav" alt="toggle" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'navbar',
};
</script>

<style>
</style>