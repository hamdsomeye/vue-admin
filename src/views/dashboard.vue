<template>
  <div class="app-container">
    <el-row :gutter="40">
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>新增用户</div>
          <p>0</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>已上架商品</div>
          <p>0</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>成交订单数</div>
          <p>0</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>成交订单金额</div>
          <p>0</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons')
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .info-box{
    height: 140px;
    margin-bottom: 30px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    div{
      text-align: center;
      padding: 20px 0 0;
    }
    p{
      text-align: center;
      font-size: 30px;
    }
  }
</style>