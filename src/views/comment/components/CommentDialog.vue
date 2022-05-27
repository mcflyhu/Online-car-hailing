<template>
  <el-dialog :visible.sync="dialogVisible" width="30%" show-close :before-close="handleClose">
    <el-form :model="CommentForm" label-width="150px">
      <el-form-item label="司机姓名">
        <span>
          {{}}
        </span>
      </el-form-item>

      <el-form-item label="所乘车型">
        <span>
          {{}}
        </span>
      </el-form-item>

      <el-form-item label="行程满意度">
        <el-rate
          v-model="satisfaction"
          :icon-classes="iconClasses"
          void-icon-class="icon-rate-face-off"
          :colors="colors"
          show-text="texts"
        />
      </el-form-item>

      <el-form-item label="车辆舒适度">
        <el-rate v-model="comfort" :colors="colors" allow-half show-score />
      </el-form-item>

      <el-form-item label="司机服务分">
        <el-rate v-model="driverate" :colors="colors" allow-half show-score />
      </el-form-item>

      <el-form-item label="评论">
        <el-input v-model="comment" type="textarea" :rows="2" placeholder="请进行对行程评论" />
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" icon="el-icon-check" @click="dialogVisible = false">提交评价</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      satisfaction: null,
      comfort: null,
      driverate: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      texts: ['极度不满意', '失望', '一般', '满意', '非常满意'],
      comment: '',
      dialogVisible: true,
      CommentForm: {

      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
