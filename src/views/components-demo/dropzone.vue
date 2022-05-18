<template>
  <div class="components-container">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card class="register-card" shadow="always">
          <span class="register-text">注册</span>
          <div class="register-from">
            <el-form label-width="100px" aria-autocomplete="off">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>

              <el-form-item label="用户名">
                <el-input style="width:300px" :rows="4" placeholder="adminstrator" />
              </el-form-item>

              <el-form-item label="姓名">
                <el-input style="width:200px" rows="4" placeholder="xxx" />
              </el-form-item>

              <el-form-item label="电话号码">
                <el-input style="width:700px" rows="4" />
              </el-form-item>

              <el-form-item label="身份证号">
                <el-input style="width:700px" rows="4" />
              </el-form-item>

              <el-form-item label="密码">
                <el-input style="width:500px" rows="4" />
              </el-form-item>

              <el-form-item label="确认密码">
                <el-input style="width:500px" rows="4" />
              </el-form-item>
            </el-form>
          </div>
          <el-button class="register-button" icon="el-icon-check" type="success" round>
            注册账号
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    dropzoneS(file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
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
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.register-text{
  text-align: center;
}

.register-button {
  text-align: center;
}
</style>
