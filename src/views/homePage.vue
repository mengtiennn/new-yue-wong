<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getAssetsFile } from '@/utils/commonUse'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'
components: {
  Carousel,
  Slide,
  Pagination,
  Navigation
}
const headerList = reactive([
  { title: 'ABOUT' },
  { title: 'GALLERY' },
  { title: 'MENU' },
  { title: 'CONTACT' }
])
const footerList1 = reactive([
  { title: 'Contact Us', content: '(646) 609-2331' },
  { title: 'Address', content: '60 Bayard St, New York,<hr> NY 10013' },
])
const footerList2 = reactive([
  { title: 'Dine-in', content: ['Monday-Thursday   9AM - 9PM', 'Friday-Sunday         9AM - 10PM'] },
  { title: 'Takeout', content: ['Monday-Thursday    9AM - 9PM', 'Friday-Sunday          9AM - 10PM'] },
])
const iconList = reactive([
  { img: '/img/icon/ig.svg' },
  { img: '/img/icon/fb.svg' },
  { img: '/img/icon/google.svg' },
  { img: '/img/icon/yelp.svg' },
])
// Instagram✅https://www.instagram.com/newyuewongrestaurant/

// Facebook✅https://www.facebook.com/profile.php?id=61553334060030

// Google✅https://g.page/r/Cd5cXREYwJlEEB0/review

// Yelp✅https://www.yelp.com/biz/new-yuewong-restaurant-new-york

const goOutWeb = (index) => {
  switch (index) {
    case 0:
      window.open('https://www.instagram.com/newyuewongrestaurant/', '_blank');
      break;
    case 1:
      window.open('https://www.facebook.com/profile.php?id=61553334060030', '_blank');
      break;
    case 2:
      window.open('https://g.page/r/Cd5cXREYwJlEEB0/review', '_blank');
      break;
    case 3:
      window.open('https://www.yelp.com/biz/new-yuewong-restaurant-new-york', '_blank');
      break;  
    default:
      break;
  }
}
const email = ref('')
const showBigPhoto = ref(false)
const showBigPhoto2 = ref(false)
const nowIndex = ref(0)
const nowPic = computed(() => {
  return getAssetsFile(`m${nowIndex.value}.png`)
})
const nowIndex2 = ref(0)
const nowPic2 = computed(() => {
  return getAssetsFile(`r${nowIndex2.value}.jpeg`)
})
const show = (type, idx) => {
  showBigPhoto.value = true
  nowIndex.value = idx
}
const show2 = (type, idx) => {
  console.log(idx)
  showBigPhoto2.value = true
  nowIndex2.value = idx
}
const changePicIndex = (type) => {
  if (nowIndex.value == 11 && type == 'go') {
    nowIndex.value = 1
    return
  } else if ((nowIndex.value == 1 || nowIndex.value == 0) && type == 'back') {
    console.log('yoyoy', nowIndex.value)
    nowIndex.value = 11
    return
  }
  type == 'back' ? nowIndex.value -= 1 : nowIndex.value += 1
}
const changePicIndex2 = (type) => {
  if (nowIndex2.value == 6 && type == 'go') {
    nowIndex2.value = 1
    return
  } else if ((nowIndex2.value == 1 || nowIndex2.value == 0) && type == 'back') {
    console.log('yoyoy', nowIndex2.value)
    nowIndex2.value = 6
    return
  }
  type == 'back' ? nowIndex2.value -= 1 : nowIndex2.value += 1
}
const showHamburger = ref(false)
const scrollTo = (id) => {
  let targetId = id

  const element = document.getElementById(targetId)
  showHamburger.value = false
  
  if(element){
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 70;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
const sendEmail = () => {
  // 檢查 email 是否為空
  if (!email.value) {
    ElMessage.error('Please enter your email address')
    return
  }

  // 使用正則表達式檢查 email 格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    ElMessage.error('Please enter a valid email address')
    return
  }
  const mailData = {
    userMail: email.value
  }
  emailjs.send('service_0v76l68', 'template_v0ex4o7', mailData, 'nxnbY0R-LdL_kvTzg').then(() => {
    email.value = ''
    ElMessage({
      message: 'Email sent successfully',
      type: 'success',
    })
  })
} 
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1290: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const breakpoints2 = {
  // 700px and up
  700: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  // 1024 and up
  1290: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}
const config = {
  itemsToShow: 1.5,
  wrapAround: true,
};
</script>
<template>
  <div class="w-full bg-[#FFD230] flex flex-col pt-[100px] items-center justify-end tablet:pt-[74px]">
    <div class="w-full flex flex-col items-center">
      <div class="font-bold text-[48px] flex flex-col items-center titleCText tablet:hidden">
        <span>裕旺大饭店</span>
        <span class="rublk font-[800]">NEW YUE WONG RESTAURANT</span>
      </div>
      <div class="w-full h-[74px] font-bold text-[1rem] flex justify-evenly items-center bg-[#ffd230] desktop:hidden mac:hidden laptop:hidden tablet:fixed tablet:top-0 tablet:left-0 z-50">
        <div class="flex flex-col font-[600]">
          <span>裕旺大饭店</span>
          <span class="rublk font-[800]">NEW YUE WONG RESTAURANT</span>
        </div>
        <img src="@/assets/img/menubar.png" @click="showHamburger = true">
      </div>
      <div class="flex gap-[46px] mt-[30px] mb-[30px] tablet:hidden">
        <div v-for="(item, idx) in headerList" :key="idx" class="py-[15px] px-[23px] border-[1px] border-black border-solid rounded-[50px] font-bold cursor-pointer" @click="scrollTo(item.title)">
          {{ item.title }}
        </div>
      </div>
      <img class="tablet:!h-[228px] tablet:w-full object-cover" src="@/assets/img/img1.png" alt="img">
    </div>
  </div>
  <div id="ABOUT" class="flex w-full justify-center pt-[154px] pb-[111px] about">
    <div class="flex w-[70%] gap-[80px] justify-center aboutC tablet:gap-[3rem]">
      <img class="object-contain tablet:hidden" src="@/assets/img/img2.png" alt="img">
      <div class="w-[50%] aboutCArea">
        <div class="font-[600] text-[32px] mb-[30px] gap-3 flex tablet:text-[24px]">
          <span class="rublk">About</span>
          <span class="text-[#FFD230] rublk">New Yue Wong</span>
        </div>
        <div class="rublk text-[24px] leading-loose tablet:text-[15px] tablet:w-[85%] tablet:text-center break-all">
            Welcome to New Yue Wong in NYC's Chinatown since 2011! Try our famous Peking Duck—crispy, succulent, and full of authentic flavor. Our spot blends tradition with innovation for a memorable dining experience that captures the spirit of Chinatown in every delicious bite!
        </div>
      </div>
      <img class="desktop:hidden mac:hidden laptop:hidden object-contain h-[171px]" src="@/assets/img/img2.png" alt="img">
    </div>
  </div>
  <div id="GALLERY">
    <!-- Serving food 電腦版 -->
    <div class="bg-[#FFD230] pt-[167px] pb-[184px] flex justify-center gap-[100px] items-center tablet:hidden">
      <div class="flex flex-col items-center">
        <span class="font-[600] text-[32px] rublk">Serving food</span>
        <span class="font-[600] text-[32px] rublk">from the heart</span>
      </div>
      <div class="w-[623px]">
        <Carousel :snapAlign="'center'" :breakpoints="breakpoints" :wrapAround="true">
          <Slide v-for="r in 6" :key="r">
            <div class="carousel__item" @click="show2('r', r)">
              <!-- <img :src="getAssetsFile(`carousel/c${slide}.png`)"
                class="w-[220px] h-[281px] object-cover cursor-pointer"> -->
              <img :src="getAssetsFile(`r${r}.jpeg`)" alt="" class="w-[121px] h-[323px] object-cover cursor-pointer" :class="{'translate-y-[-30px]': r%2 == 0, 'translate-y-[30px]': r%2 != 0}">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <!-- Serving food 手機版 -->
    <div class="bg-[#FFD230] pt-[71px] pb-[68px] flex-col items-center hidden tablet:flex">
      <div class="flex flex-col items-center mb-[100px]">
        <span class="font-[600] text-[24px] rublk">Serving food</span>
        <span class="font-[600] text-[24px] rublk">from the heart</span>
      </div>
      <div class="flex gap-[12px] w-full justify-center">
        <img v-for="r in 4" :src="getAssetsFile(`r${r}.jpeg`)" alt="" class="w-[21%] h-[253px] object-cover cursor-pointer" :class="{'translate-y-[-30px]': r%2 == 0, 'translate-y-[30px]': r%2 != 0}">
      </div>
    </div>
  </div>
  <div id="MENU">
    <!-- MENU 電腦版 -->
    <div class="w-full pt-[133px] pb-[161px] bg-white flex flex-col items-center tablet:hidden">
      <span class="rublk font-[600] text-[32px] mb-[55px]">MENU</span>
      <div class="flex flex-wrap gap-[33px] w-[60%] justify-center">
        <img v-for="m in 11" :src="getAssetsFile(`m${m}.png`)" alt="" class="w-[180px] cursor-pointer" @click="show('m', m)">
      </div>
    </div>
    <!-- MENU 手機班 -->
    <div class="bg-white pt-[57px] pb-[92px] flex-col items-center hidden tablet:flex">
      <span class="rublk font-[600] text-[24px] mb-[55px]">MENU</span>
      <div class="w-full">
        <Carousel v-bind="config">
          <Slide v-for="m in 11" :key="m">
            <div class="carousel__item" @click="show('m', m)">
              <img :src="getAssetsFile(`m${m}.png`)" alt="" class="w-[217px] h-[242px] object-contain cursor-pointer">
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
  <div class="bg-[#FFD230] w-full h-[364px] items-center flex tablet:flex-col tablet:h-full">
    <div class="w-[35%] h-full tablet:w-full tablet:h-[254px]">
      <img class="w-full h-full object-cover" src="@/assets/img/emailBanner1.jpg" alt="">
    </div>
    <div class="w-[65%] h-full flex justify-center items-center flex-col gap-[1rem] bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('@/assets/img/emailBanner2.jpg')] bg-center tablet:w-full tablet:h-[279px]">
      <div class="flex flex-col items-center text-white text-[20px] font-[500]">
        <span>Stay savory!</span>
        <span>Subscribe for exclusive updates.</span>
      </div>
      <div class="flex input w-full justify-center">
        <el-input
          v-model="email"
          placeholder="Email"
          class="tablet:!w-[70%]"
        />
        <div class="send" @click="sendEmail">
          <img src="@/assets/img/arrowWhite.png" alt="arrow">
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex w-screen justify-center pt-[154px] pb-[111px] igFollow">
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
  </div> -->
  <div id="CONTACT">
    <div class="w-full flex footer">
      <div class="bg-[#FFD230] w-full px-[25%] py-[98px] flex flex-col">
        <div class="content flex justify-between">
          <div class="flex flex-col gap-[22px]">
            <div v-for="(item, index) in footerList1" :key="index" class="flex flex-col gap-[7px]">
              <div class="rublk text-[18px] font-[600]">{{ item.title }}</div>
              <div class="rublk text-[14px] font-[400]" v-html="item.content" />
            </div>
          </div>
          <div class="flex flex-col gap-[21px]">
            <div class="rublk text-[18px] font-[600]">Opening Hours</div>
            <div v-for="(item, index) in footerList2" :key="index"  class="flex gap-[3rem]">
              <div class="title">{{ item.title }}</div>
              <div class="area2ContentItem">
                <div v-for="(item2, index2) in item.content" :key="index2" class="contentItem">
                  <div class="rublk text-[14px] font-[400]">{{ item2 }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mt-[21px]">
          <div class="flex gap-[9px] cursor-pointer">
            <img @click="goOutWeb(index)" v-for="(item, index) in iconList" :key="index" :src="item.img" alt="">
          </div>
          <div class="text-[#818181] text-[14px] font-[300]">© 2024 NEW YUE WONG RESTAURANT.<br> ALL RIGHTS RESERVED. x WAG Marketing</div>
        </div>
      </div>
    </div>
    <div class="footerC">
      <div class="area">
        <div v-for="(item, index) in footerList1" :key="index" class="areaItem">
          <div class="title">{{ item.title }}</div>
          <div class="text" v-html="item.content" />
        </div>
      </div>
      <div class="area2">
        <div class="area2Title">Opening Hours</div>
        <div v-for="(item, index) in footerList2" :key="index"  class="area2Item">
          <div class="title">{{ item.title }}</div>
          <div class="area2ContentItem">
            <div v-for="(item2, index2) in item.content" :key="index2" class="contentItem">
              <div class="text">{{ item2 }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="linkList cursor-pointer">
        <img @click="goOutWeb(index)" v-for="(item, index) in iconList" :key="index" :src="item.img" alt="">
      </div>
      <div class="text-[13px] text-[#818181]">© 2024 NEW YUE WONG RESTAURANT.<br> ALL RIGHTS RESERVED. x WAG Marketing</div>
    </div>
  </div>
  <Transition name="slide-fade">
    <div class="w-full h-full fixed top-0 left-0 bg-white z-50 flex items-center pt-[75px] flex-col"
      v-if="showHamburger">
      <img src="@/assets/img/close.svg" class="fixed top-[16px] right-4 cursor-pointer desktop:hidden"
        @click="showHamburger = false">
      <div class="flex gap-[24px] text-text-black flex-col items-center">
        <div v-for="(link, idx) in headerList" :key="idx" @click="scrollTo(link.title)" class="cursor-pointer teko">{{ link.title }}
        </div>
      </div>
    </div>
  </Transition>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[1000]" v-if="showBigPhoto">
    <div class="w-full h-full pic absolute left-0 top-0 z-10" @click="showBigPhoto = false"></div>
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer"
      @click="showBigPhoto = false">
      <img src="@/assets/icon/closewhite.svg" alt="">
    </div>
    <img src="@/assets/img/ca.png"
      class="rotate-180 w-[50px] absolute top-[50%] left-[20%] translate-y-[-50%] cursor-pointer tablet:left-0 z-20"
      @click="changePicIndex('back')">
    <img :src="nowPic"
      class="h-[80vh] object-contain absolute left-[50%] translate-x-[-50%] z-20 tablet:w-[70vw] tablet:h-auto">
    <img src="@/assets/img/ca.png"
      class="w-[50px] absolute top-[50%] right-[20%] translate-y-[-50%] cursor-pointer tablet:right-0 z-20"
      @click="changePicIndex('go')">
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[1000]" v-if="showBigPhoto2">
    <div class="w-full h-full pic absolute left-0 top-0 z-10" @click="showBigPhoto2 = false"></div>
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer"
      @click="showBigPhoto2 = false">
      <img src="@/assets/icon/closewhite.svg" alt="">
    </div>
    <img src="@/assets/img/ca.png"
      class="rotate-180 w-[50px] absolute top-[50%] left-[20%] translate-y-[-50%] cursor-pointer tablet:left-0 z-20"
      @click="changePicIndex2('back')">
    <img :src="nowPic2"
      class="h-[80vh] object-contain absolute left-[50%] translate-x-[-50%] z-20 tablet:w-[70vw] tablet:h-auto">
    <img src="@/assets/img/ca.png"
      class="w-[50px] absolute top-[50%] right-[20%] translate-y-[-50%] cursor-pointer tablet:right-0 z-20"
      @click="changePicIndex2('go')">
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-input) {
  width: 400px;
  .el-input__wrapper {
    border-radius: 0px;
    box-shadow: none;
    background-color: transparent;
    border: 2px solid white;
  }
}
:deep(.el-input__inner){
  color: white;
}
.send {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  padding: 10px;
}
.footerImg{
  width: 40%;
  object-fit: cover;
}
:deep(.carousel__prev) {
  left: -45px;
}
:deep(.carousel__next) {
  right: -45px;
}
.pic {
  background-color: rgba(0,0,0,0.7);
}
.exploreCShow, .menuCShow, .footerC{
  display: none;
}

@media screen and (max-width: 990px) {
  .about{
    padding: 60px 0;
    .aboutC{
      flex-direction: column;
      .aboutCArea{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .explore{
    background-color: #FFD230;
    padding: 50px;
    .exploreC{
      display: none;
    }
    .exploreCShow{
      display: flex;
      flex-direction: column;
      gap: 30px;
      .exploreCImgList{
        display: flex;
        gap: 5px;
        .list1, .list2{
          display: flex;
          flex-direction: column;
          gap: 20px;
          img{
            width: 145px;
            height: 168px;
            object-fit: cover;
          }
        }
        .list2{
          padding-top: 20px;
        }
      }
    }
  }
  .menu{
    background-color: #FFD230;
    padding: 50px;
    .menuC{
      display: none;
    }
    .menuCShow{
      display: flex;
      flex-direction: column;
      .title{
        transform: scale(.5);
      }
    }
  }
  .igFollow, .footer{
    display: none;
  }
  .footerC{
    background-color: #FFD230;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 75px 0;
    img{
      width: 90%;
      margin-bottom: 20px;
    }
    .linkList{
      display: flex;
      gap: 10px;
    }
    .area{
      text-align: center;
      .areaItem{
        margin-bottom: 25px;
        .title{
          font-weight: bold;
        }
      }
    }
    .area2{
      text-align: center;
      .area2Title{
        font-weight: bold;
      }
      .area2Item{
        margin-bottom: 25px;
      }
    }
  }
}
.rublk{
  font-family: "Rublk", sans-serif;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>