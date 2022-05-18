<template>
  <div class="register">
    <el-form label-width="100px" class="demo-ruleForm" autocomplete="off">
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
        <el-input style="width:1000px" rows="4" />
      </el-form-item>
    </el-form>
    <div class="register_button">
      <el-button type="primary" plain style="margin-left:100px">保存信息</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}

.register {
  .register_button {
    text-align: center;
  }
}
</style>
