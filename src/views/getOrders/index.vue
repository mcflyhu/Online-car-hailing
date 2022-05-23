import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="A-Map">
        <Map_index />
        <div id="Order-List">
            <ul class="get-orders-ui">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="出发地：">
                        <el-input v-model="form.origin" :placeholder="psdPlaceholder"></el-input>
                    </el-form-item>
                    <el-form-item label="目的地：">
                        <el-input v-model="form.destination" placeholder="请输入目的地"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="push_order" type="primary" @click="onSubmit()">立即下单
                        </el-button>
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
            form: {
                origin: '',
                destination: ''
            },
            orOrigin: ''
        }
    },
    computed: {
        psdPlaceholder() {
            this.orOrigin = '西南交通大学犀浦校区西南二门';
            return this.orOrigin
        },
    },

    methods: {
        onSubmit() {
            if (this.form.destination != '' && this.form.origin != '') {
                this.$alert('正在等待接单...', '等候接单', {
                    confirmButtonText: '取消订单',
                    callback: action => {
                        this.open();
                    }
                });
            } else if (this.form.origin == '' && this.form.destination == '') {
                this.form.origin = this.orOrigin;
                this.$message('请输入目的地！!');
            } else if (this.form.destination == '') {
                this.$message('请输入目的地！');
            } else {
                this.form.origin = this.orOrigin;
                this.$alert('正在等待接单...', '等候接单', {
                    confirmButtonText: '取消订单',
                    callback: action => {
                        this.open();
                    }
                });
            }
        },
        open() {
            this.$confirm('此操作将取消订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '取消订单成功!',
                });
                refs["form"].resetFields();
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '继续等候'
                });
                this.onSubmit();
            });
        },
        // 重置表单
        reset() {
            refs["form"].resetFields();
        }
    }
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