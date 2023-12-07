<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { getAssetsFile } from '@/utils/commonUse'
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
const p = ref('')
const nowPic = computed(() => {
  return getAssetsFile(`${p.value}.png`)
})
const show = (type, idx) => {
  showBigPhoto.value = true
  p.value = type + idx.toString()
}
</script>
<template>
  <div class="w-screen bg-[#FFD230] flex flex-col pt-[100px] items-center justify-end">
    <div class="flex flex-col items-center titleC">
      <div class="font-bold text-[64px] flex flex-col items-center titleCText">
        <span>NEW YUE WONG RESTAURANT</span>
        <span>裕旺大饭店</span>
      </div>
      <div class="flex gap-[46px] mt-[30px] mb-[30px] titleCOption">
        <div v-for="(item, idx) in headerList" :key="idx" class="py-[15px] px-[23px] bg-white rounded-[50px] font-bold cursor-pointer">
          {{ item.title }}
        </div>
      </div>
      <img src="@/assets/img/img1.png" alt="img" class="">
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px] about">
    <div class="flex w-[70%] gap-[80px] justify-center aboutC">
      <img src="@/assets/img/img2.png" alt="img">
      <div class="w-[40%] aboutCArea">
        <div class="font-bold text-[32px] mb-[30px] gap-3 flex aboutCTitle">
          <span>ABOUT</span>
          <span class="text-[#FFD230]">NYW</span>
        </div>
        <div class="text-[20px] leading-loose aboutCText">
          Welcome to New Yue Wong in NYC's Chinatown since 2011! Try our famous Peking Duck—crispy, succulent, and full of authentic flavor. Our spot blends tradition with innovation for a memorable dining experience that captures the spirit of Chinatown in every delicious bite!
        </div>
    </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px] explore">
    <div class="flex w-[70%] gap-[80px] justify-center items-center exploreC">
      <div>
        <img src="@/assets/img/text1.png" alt="img">
        <div class="bg-[#FFD230] text-[24px] font-bold py-[13px] px-[20px] text-center mt-[20px]">See More</div>
      </div>
      <div class="w-[60%] bg-[#FFD230] p-[49px]">
        <Carousel :items-to-show="2.5" :wrap-around="true">
          <Slide v-for="slide in 6" :key="slide" @click="show('c', slide)">
            <div class="carousel__item">
              <img :src="getAssetsFile(`c${slide}.png`)" class="w-[200px]">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="exploreCShow">
      <img src="../assets/img/text3.png" alt="">
      <div class="exploreCImgList">
        <div class="list1">
          <img v-for="item in 3" :key="item" :src="getAssetsFile(`menu/left${item}.jpg`)" alt="">
        </div>
        <div class="list2">
          <img v-for="item in 3" :key="item" :src="getAssetsFile(`menu/right${item}.jpg`)" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px] menu">
    <div class="flex w-[70%] gap-[80px] justify-center items-center menuC">
      <div class="bg-[#FFD230] p-[30px] w-[60%]">
        <Carousel :items-to-show="2.5" :wrap-around="true">
          <Slide v-for="slide in 11" :key="slide" @click="show('m', slide)">
            <div class="carousel__item">
              <img :src="getAssetsFile(`m${slide}.png`)" class="w-[200px]">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div>
        <img src="@/assets/img/text2.png" alt="img">
      </div>
    </div>
    <div class="menuCShow">
      <img class="title" src="../assets/img/text4.png" alt="">
      <img src="../assets/img/menu/menu1.jpg" alt="">
    </div>
  </div>
  <div class="bg-[#FFD230] w-screen h-[320px] justify-center items-center flex gap-[80px] mail">
    <div class="flex flex-col items-center">
      <span>Stay savory!</span>
      <span>Subscribe for exclusive updates.</span>
    </div>
    <div class="flex input">
      <el-input
        v-model="email"
        placeholder="Email"
      />
      <div class="send">
        <img src="@/assets/img/arrow.png" alt="arrow">
      </div>
    </div>
  </div>
  <div class="flex w-screen justify-center pt-[154px] pb-[111px] igFollow">
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
  <div class="w-screen flex footer">
    <img class="footerImg" src="@/assets/img/footer.png" alt="">
    <div class="bg-[#FFD230] w-full px-[74px] py-[98px] footerContent">
      <div class="content">
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
      </div>
      <div class="link">
        <div class="linkList cursor-pointer">
          <img @click="goOutWeb(index)" v-for="(item, index) in iconList" :key="index" :src="item.img" alt="">
        </div>
        <div class="remind">© 2023 NEW YUE WONG RESTAURANT. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  </div>
  <div class="footerC">
    <img class="footerImg" src="@/assets/img/footer.png" alt="">
    <div class="linkList cursor-pointer">
      <img @click="goOutWeb(index)" v-for="(item, index) in iconList" :key="index" :src="item.img" alt="">
    </div>
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
    <div class="remind">© 2023 NEW YUE WONG RESTAURANT. ALL RIGHTS RESERVED.</div>
  </div>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pic" v-if="showBigPhoto">
    <div class="absolute right-10 top-5 text-xl font-semibold z-20 text-white cursor-pointer" @click="showBigPhoto = false">CLOSE</div>
    <img :src="nowPic" class="w-[70vw] h-[80vh] object-contain">
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
.footerImg{
  width: 40%;
  object-fit: cover;
}
.footerContent{
  display: flex;
  flex-direction: column;

  .content{
    display: flex;
    justify-content: space-evenly;
    .area{
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 40%;
      .areaItem{
        display: flex;
        flex-direction: column;
        gap: 5px;
        .title{
          font-size: 20px;
          font-weight: bold
        }
      }
    }
    .area2{
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 60%;
      .area2Title{
        font-size: 20px;
        font-weight: bold
      }
      .area2Item{
        display: flex;
        align-items: center;
        .area2ContentItem{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .contentItem{
            display: flex;
            
          }
        }
        .title{
          font-size: 18px;
          font-weight: 600;
          width: 100px;
        }
        .text{
          font-size: 14px;
        }
      }
    }
  }
  .link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    .linkList{
      display: flex;
      gap: 10px;
    }
    .remind{
      font-size: 14px;
    }
  }
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
  .titleC{
    .titleCText{
      margin-bottom: 30px;
      span{
        font-size: 20px;
      }
    }
    .titleCOption{
      display: none;
    }
    img{
      height: 70vh;
      object-fit: cover;
    }
  }
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
        .aboutCTitle{
          font-size: 20px;
        }
        .aboutCText{
          font-size: 16px;
        }
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
  .mail{
    background-color: #fff;
    flex-direction: column;
    padding: 0 50px;
    gap: 20px;
    .input{
      width: 90%;
    }
  }
  .igFollow, .footer{
    display: none;
  }
  .footerC{
    background-color: #FFD230;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
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
    .remind{
      text-align: center;
      font-size: 9px;
    }
  }
}
</style>