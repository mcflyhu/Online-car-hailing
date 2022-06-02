<template>
  <div class="IDCard-form">
    <el-form ref="IDCardForm" v-model="IDCardForm" :rules="IDCardRules">
      <el-form-item label="身份证号" prop="id">
        <el-input v-model="IDCardForm.id" placeholder="请输入您的身份证号" />
      </el-form-item>

      <el-form-item label="身份证正面照片" prop="idCardFrontSrc">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleFrontSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="idCardFrontSrc" :src="idCardFrontSrc" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>

      <el-form-item label="身份证国徽面照片" prop="idCardBackSrc">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleBackSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="idCardBackSrc" :src="idCardBackSrc" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IDCardForm: {
        id: '',
        idCardFrontSrc: '',
        idCardBackSrc: ''
      }
    }
  },
  methods: {
    handleFrontSuccess(res, file) {
      this.idCardFrontSrc = URL.createObjectURL(file.raw)
    },
    handleBackSuccess(res, file) {
      this.idCardBackSrc = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isLt2M
    }
  }
}
</script>

<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #493c3c;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

</style>
