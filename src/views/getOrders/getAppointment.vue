import VueAMap from '@vuemap/vue-amap'
<template>
  <div ref="map" class="A-Map" @callbackComponent="callbackComponent">
    <Map_index />
    <div class="order-type">
      <h4 class="column">
        <img src="./components/agora_快速发版-快速上线.svg">
        <p class="name">迅捷网约车</p>
      </h4>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="开始使用时间:" class="get_start">
          <ul class="show_icon">
            <li class="show_type1"><img src="./components/员工渠道APP-开始时间.svg"></li>
            <li class="show_type2"><img src="./components/员工渠道APP-结束时间.svg"></li>
            <li class="show_type3"><img src="./components/车型-未选.svg"></li>
            <li class="show_type4"><img src="./components/出发地.svg"></li>
            <li class="show_type5"><img src="./components/花费.svg"></li>
          </ul>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择日期"
                style="width: 150px;"
              />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="time1">
              <el-time-picker
                v-model="ruleForm.time1"
                placeholder="选择时间"
                style="width: 120px;left: 10px;"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="结束使用时间:" class="get_end">
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker
                v-model="ruleForm.date2"
                type="date"
                placeholder="选择日期"
                style="width: 150px;"
              />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="time2">
              <el-time-picker
                v-model="ruleForm.time2"
                placeholder="选择时间"
                style="width: 120px;left: -10px;"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="选择车型:" class="get_carType" prop="car_type">
          <el-select v-model="ruleForm.car_type" placeholder="SUV">
            <el-option label="SUV" value="SUV" />
            <el-option label="小轿车" value="小轿车" />
            <el-option label="越野车" value="越野车" />
            <el-option label="敞篷车" value="敞篷车" />
          </el-select>
        </el-form-item>
        <el-form-item label="出发地:" class="origins" prop="origins">
          <el-input v-model="ruleForm.origin" :placeholder="psdPlaceholder" />
        </el-form-item>
        <el-form-item label="预计花费:" class="paid">
          <el-input v-model="ruleForm.money" />
        </el-form-item>
        <el-form-item class="get_pay">
          <el-button type="primary" @click="calc('ruleForm')">查看预计花费</el-button>
        </el-form-item>
        <el-form-item class="doc1" prop="agreement">
          <el-checkbox-group v-model="ruleForm.agreement">
            <el-checkbox label="参保《全面保障服务》乘车更放心" name="type" class="pull-left" />
          </el-checkbox-group>
          <h4 class="line1" />
        </el-form-item>
        <el-form-item class="finish">
          <el-button @click="comback">返回</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Map_index from '../amap/index.vue'
export default {
    name: 'GetAppointments',
    components: { Map_index },
    data() {
        return {
            orOrigin: '',
            ruleForm: {
                date1: '',
                time1: '',
                date2: '',
                time2: '',
                money: '',
                origin: '',
                car_type: '',
                agreement: ''
            },

            rules: {
                origin: [
                    { required: false, message: '请输入出发地', trigger: 'change' }
                ],
                date1: [
                    { required: true, message: '请输入开始使用的日期', trigger: 'change' }
                ],
                time1: [
                    { required: true, message: '请输入开始使用的时间', trigger: 'change' }
                ],
                date2: [
                    { required: true, message: '请输入结束使用的日期', trigger: 'change' }
                ],
                time2: [
                    { required: true, message: '请输入结束使用的时间', trigger: 'change' }
                ],
                car_type: [
                    { required: true, message: '请选择车型', trigger: 'change' }
                ],
                agreement: [
                    { required: true, message: '请勾选协议', trigger: 'change' }
                ]
            }
        }
    },
    computed: {
        // psdPlaceholder() {
        //     this.orOrigin = '西南交通大学犀浦校区西南二门'
        //     return this.orOrigin
        // }
    },
    methods: {
        comback() {
            this.$router.replace({
                name: 'Index'
            })
        },
        calc(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const t1 = this.ruleForm.date2 - this.ruleForm.date1
                    const t2 = this.ruleForm.time2 - this.ruleForm.time1
                    const t = t1 + t2
                    const tt = t / 3600
                    const ttt = tt / 1000
                    if (this.ruleForm.car_type === 'SUV') {
                        this.ruleForm.money = ttt * 10
                    } else if (this.ruleForm.car_type === '小轿车') {
                        this.ruleForm.money = ttt * 8
                    } else if (this.ruleForm.car_type === '越野车') {
                        this.ruleForm.money = ttt * 12
                    } else if (this.ruleForm.car_type === '敞篷车') {
                        this.ruleForm.money = ttt * 15
                    }
                }
            })
        },
        callbackComponent(params) {
            params.function && this[params.function](params.data)
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.ruleForm.origin === '') {
                         this.ruleForm.origin = this.orOrigin
                    }

                    this.$alert('正在等待接单...', '等候接单', {
                        confirmButtonText: '取消订单',
                        callback: action => {
                            this.$confirm('此操作将取消订单, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
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
        }
    }
}
</script>
<style lang="scss">
@import "./getAppointment.scss"
</style>
