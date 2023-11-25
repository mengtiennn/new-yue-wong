<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
const headerList = reactive([
  { title: 'ABOUT' },
  { title: 'GALLERY' },
  { title: 'MENU' },
  { title: 'CONTACT' }
])
const email = ref('')
</script>
<template>
  <div class="w-screen h-screen bg-[#FFD230] flex flex-col pt-[100px] items-center justify-end">
    <div class="flex flex-col items-center">
      <div class="font-bold text-[64px] flex flex-col items-center">
        <span>NEW YUE WONG RESTAURANT</span>
        <span>裕旺大饭店</span>
      </div>
      <div class="flex gap-[46px] mt-[30px] mb-[20px]">
        <div v-for="(item, idx) in headerList" :key="idx" class="py-[15px] px-[23px] bg-white rounded-[50px]">
          {{ item.title }}
        </div>
      </div>
      <img src="@/assets/img/img1.png" alt="img" class="">
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px]">
    <div class="flex w-[70%] gap-[80px] justify-center">
      <img src="@/assets/img/img2.png" alt="img">
      <div class="w-[40%]">
        <div class="font-bold text-[32px] mb-[30px] gap-3 flex">
          <span>ABOUT</span>
          <span class="text-[#FFD230]">NYW</span>
        </div>
        <div class="text-[20px] leading-loose">
          Welcome to New Yue Wong in NYC's Chinatown since 2011! Try our famous Peking Duck—crispy, succulent, and full of authentic flavor. Our spot blends tradition with innovation for a memorable dining experience that captures the spirit of Chinatown in every delicious bite!
        </div>
    </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px]">
    <div class="flex w-[70%] gap-[80px] justify-center items-center">
      <div>
        <img src="@/assets/img/text1.png" alt="img">
        <div class="bg-[#FFD230] text-[24px] font-bold py-[13px] px-[20px] text-center mt-[20px]">See More</div>
      </div>
      <div class="w-[40%] bg-[#FFD230] p-[49px]">
        這邊搞輪播
    </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px]">
    <div class="flex w-[70%] gap-[80px] justify-center items-center">
      <div class="w-[40%] bg-[#FFD230] p-[49px]">
        這邊搞輪播
      </div>
      <div>
        <img src="@/assets/img/text2.png" alt="img">
      </div>
    </div>
  </div>
  <div class="bg-[#FFD230] w-screen h-[320px] justify-center items-center flex gap-[80px]">
    <div class="flex flex-col items-center">
      <span>Stay savory!</span>
      <span>Subscribe for exclusive updates.</span>
    </div>
    <div class="flex">
      <el-input
        v-model="email"
        placeholder="Email"
      />
      <div class="send">
        <img src="@/assets/img/arrow.png" alt="arrow">
      </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px]">
    <div class="flex w-[70%] gap-[80px] justify-center items-center flex-col">
      <div class="flex font-bold text-[36px]">
        <span>Follow</span>
        <span class="text-[#FFD230]">@newyuewongrestaurant</span>
      </div>
      <div class="flex gap-[40px]">
        <img src="@/assets/img/imgb1.png">
        <img src="@/assets/img/imgb2.png">
        <img src="@/assets/img/imgb3.png">
        <img src="@/assets/img/imgb4.png">
      </div>
    </div>
  </div>
  <div class="w-screen flex">
    <img src="@/assets/img/footer.png" alt="">
    <div class="bg-[#FFD230] w-full px-[74px] py-[98px]">

    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-input) {
  width: 400px;
  .el-input__wrapper {
    border-radius: 0px;
    box-shadow: none;
    background-color: transparent;
    border: 2px solid black;
  }
}
.send {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  padding: 10px;
}
</style>