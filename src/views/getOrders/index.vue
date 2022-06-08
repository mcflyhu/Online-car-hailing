import VueAMap from '@vuemap/vue-amap'
<template>
  <div ref="map" class="A-Map" @callbackComponent="callbackComponent">
    <Map_index />
    <div v-if="main_show" id="Order-List">
      <ul class="get-orders-ui">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="出发地" prop="origin">
            <el-input v-model="ruleForm.origin" :placeholder="psdPlaceholder" />
          </el-form-item>
          <el-form-item label="目的地" prop="destination">
            <el-input v-model="ruleForm.destination" placeholder="请输入目的地" />
          </el-form-item>
          <el-form-item class="pushOrder">
            <el-button @click="pushback">返回</el-button>
            <el-button type="primary" @click="getForm('ruleForm')">创建订单</el-button>
          </el-form-item>
        </el-form>
      </ul>
    </div>
    <div v-if="v_show" class="order-type">
      <h4 class="column">
        <img src="./components/agora_快速发版-快速上线.svg">
        <p class="name">迅捷网约车</p>
      </h4>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="业务类型:" class="get_type">
          <ul class="car_icon">
            <li class="car_type"><img src="./components/特惠车.svg"></li>
            <li class="car_type"><img src="./components/业务介绍-短途快车.svg"></li>
            <li class="car_type"><img src="./components/业务介绍-出租车.svg"></li>
            <li class="car_type"><img src="./components/专车接送.svg"></li>
            <li class="car_type"><img src="./components/优享车.svg"></li>
            <li class="car_type"><img src="./components/豪车风云 拷贝 2.svg"></li>
          </ul>
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="特惠快车：51.35元" />
            <el-radio label="快车：65.85元" />
            <el-radio label="迅的出租：90.52元" />
            <el-radio label="专车：104.34元" />
            <el-radio label="优享专车：76.19元" />
            <el-radio label="豪华车：212.88元" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="乘坐人数:" class="get_num">
          <el-select v-model="ruleForm.region" placeholder="1">
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
            <el-option label="3" value="3" />
            <el-option label="4" value="4" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="comback">返回</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
        <el-form-item class="doc">
          <el-checkbox label="参保《全面保障服务》乘车更放心" name="type" class="pull-left" />
          <h4 class="line " />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Map_index from '../amap/index.vue'
export default {
  name: 'GetOrders',
  components: { Map_index },
  data() {
    return {
      ruleForm: {
        origin: '',
        destination: '',
        resource: '',
        region: ''
      },
      orOrigin: '',
      main_show: true,
      v_show: false,
      acceptCode: false,
      rules: {
        origin: [
          { required: false, message: '请输入出发地', trigger: 'blur' }
        ],
        destination: [
          { required: true, message: '请输入目的地', trigger: 'blur' }
        ]
      },
      timer1: ''
    }
  },
  computed: {
    // psdPlaceholder() {
    //   this.orOrigin = '西南交通大学犀浦校区西南二门'
    //   return '西南交通大学犀浦校区西南二门'
    // }
  },
  watch: {
    '$store.state.order.get_done': {
      handler() {
        console.log(111)
        this.$alert.close()
      }
    }
  },
  methods: {
    getForm(formName) {
      if (this.ruleForm.destination === '') {
        this.$message('请输入目的地')
        this.resetForm(formName)
      } else if (this.ruleForm.origin === '') {
        this.ruleForm.origin = this.orOrigin
        this.v_show = true
        this.main_show = false
      } else {
        this.v_show = true
        this.main_show = false
      }
    },
    getAcceptCode() {
      this.acceptCode = JSON.parse(localStorage.getItem('acceptCode'))
      console.log(this.acceptCode)
      if (this.acceptCode === 'accept') {
        clearInterval(this.timer1)
        // this.$router.replace({ name: "Index" });
        const messageBox = document.getElementsByClassName('el-message-box__wrapper')
        const model = document.getElementsByClassName('v-modal')
        if (messageBox) {
          messageBox[0].parentNode.removeChild(messageBox[0])
          model[0].parentNode.removeChild(model[0])
        }
        window.localStorage.setItem('acceptCode', JSON.stringify(''))
        this.$router.replace({ name: 'walking_pre' })
      }
    },
    comback() {
      this.v_show = false
      this.main_show = true
    },
    callbackComponent(params) {
      params.function && this[params.function](params.data)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.timer1 = setInterval(this.getAcceptCode, 1000)
          // console.log(JSON.parse(localStorage.getItem("orderId")))
          if (localStorage.getItem('orderId') === null) {
            console.log(222)
            localStorage.orderId = 1
          } else {
            console.log(3333)
            localStorage.orderId = parseInt(localStorage.orderId) + 1
            console.log(localStorage.orderId)// 标记订单号
          }
          this.$alert('正在等待接单...', '等候接单', {
            confirmButtonText: '取消订单',
            callback: action => {
              // console.log(JSON.parse(localStorage.getItem("acceptCode")));
              this.$confirm('此操作将取消订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                localStorage.orderId = parseInt(localStorage.orderId) - 1
                this.$message({
                  type: 'success',
                  message: '取消订单成功!'
                })
                this.resetForm(formName)
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '继续等候'
                })
                this.submitForm(formName)
              })
            }
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    pushback() {
      this.$router.replace({
        name: 'Index'
      })
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>
