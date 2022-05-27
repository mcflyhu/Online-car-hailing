import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="A-Map" ref="map"  @callbackComponent="callbackComponent" >
        <Map_index />
        <div id="Order-List">
            <ul class="get-orders-ui">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="出发地" prop="origin">
                        <el-input v-model="ruleForm.origin" :placeholder="psdPlaceholder"></el-input>
                    </el-form-item>
                    <el-form-item label="目的地" prop="destination">
                        <el-input v-model="ruleForm.destination" placeholder="请输入目的地"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="pushOrder">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </ul>
        </div>
    </div>
</template>

<script>
import Map_index from "../amap/index.vue"
export default {
    name: "getOrders",
    components: { Map_index },
    data() {
        return {
            ruleForm: {
                origin: '',
                destination: ''
            },
            orOrigin: '',
            rules: {
                origin: [
                    { required: false, message: '请输入出发地', trigger: 'blur' },
                ],
                destination: [
                    { required: true, message: '请输入目的地', trigger: 'blur' },
                ],
            },
        }
    },
    computed: {
        psdPlaceholder() {
            this.orOrigin = '西南交通大学犀浦校区西南二门';
            return this.orOrigin
        },
    },
    methods: {
        callbackComponent(params) {
            params.function && this[params.function](params.data);
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
                                    message: '取消订单成功!',
                                });
                                this.resetForm(formName);
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '继续等候'
                                });
                                this.submitForm(formName);
                            });
                        }
                    });
                } else {
                    this.$message('请输入目的地');
                    this.resetForm(formName);
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>
<style lang="scss">
#Order-List {
    ul {
        display: inline-block;
    }

    li {
        display: inline-block;
    }

    position: absolute;
    top: 480px;
    border-radius: 50px;
    bottom: 0;
    right: 515px;
    z-index: auto;
    text-align: center;
    width: 500px;
    background-color: #313c49;
}
</style>