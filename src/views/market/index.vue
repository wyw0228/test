<template>
  <div class="market-page">
    <div class="top">
     <div class="lt"> < </div>
      我是楼盘
      <!-- {{numInfo}} -->
      {{userInfo}}
      <span>x</span>
     </div>
     <div class="content" v-for="item in numInfo" :key="item">
       <van-card
          class="item"
          tag="别墅"
          price="2.00"
          desc="描述信息"  
          title="商品标题"
          :thumb="photo"
          origin-price="10.00"
       >
          <div slot="footer">
            <button size="mini" class="look">查看</button>
            
            <button size="mini">购买</button>
          </div>
        </van-card>
     </div>
  </div>
  
</template>
<script>
// import { Card } from 'vant'
import { mapState,mapGetters} from 'vuex'
  export default {
  data: _ => ({
    photo:require('IMG/tabbar/message.png'),
    userId: -1,
    result: 'wowo',
    
    // num:[
    //   1,2,3,4
    // ]
  }),
  computed: {
    // ...mapState(['userInfo']),
    ...mapGetters(['userInfo','numInfo']),
  },
  mounted(){
    
  }
  }
</script>
<style lang="less">
.market-page{
  width: 100%;
  height: 100%;
  .top{
    font-size: 18px;
    justify-content: space-between;
    display: flex;
    background: #79a6e4;
  }
  .content{
    button{
      width: 40px;
      height: 20px;
      border: 1px solid #eee;
    }
  }
}
</style>