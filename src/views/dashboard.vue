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
          <div>今天上架商品</div>
          <p>0</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>今天成交订单数</div>
          <p>0</p>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="info-box">
          <div>今天成交订单金额</div>
          <p>0</p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :lg="24">
      <line-chart :chart-data="chartData"></line-chart>
       </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import lineChart from './lineChart/index'
  require('echarts/theme/macarons')
  export default {
    components: {
      lineChart,
    },
    data() {
      return {
        chartData: {
          actualData: [120, 82, 91, 154, 162, 140, 145]
        }
      }
    },
    methods: {
      
    }
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