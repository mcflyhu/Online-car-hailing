<template>
  <div class="app-container">
    <el-row class="comment-card-table">
      <el-col v-for="comment in list" :key="comment.oid" span="20" offset="2">
        <el-card shadow="hover" class="comment-card">
          <div slot="header" @click="showComment(comment.oid)">
            <span>{{ comment.oid }}</span>
            <el-button style="float:right;padding:3px 0">
              <i class="el-icon-arrow-right" />
            </el-button>
          </div>

          <div class="card-content">
            <span class="static-text">行程评分：</span>
            <el-rate
              v-model="comment.driverService"
              class="static-text"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            />
            <el-divider><i class="el-icon-chat-dot-square" /></el-divider>
            <div class="comment-content static-text">
              <p>{{ comment.commentInfo }}</p>
            </div>
          </div>
        </el-card>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchList } from '@/api/comment'
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      listQuery: {
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data
      })
      this.listLoading = false
    },
    showComment(oid) {
      this.$router.push({
        path: '/comment-description',
        query: {
          oid: oid
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .card-content {}
}

.static-text {
  padding-top: 10px;
  margin-left: 15px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: large;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
