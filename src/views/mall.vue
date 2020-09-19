<template>
  <div class="app-container">
    <div class="time-block">
      <span class="demonstration">创建时间</span>
      <el-date-picker
        v-model="created_at"
        align="center"
        type="daterange"
        range-separator="|"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <el-table
      :data="tableData.rows.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      :header-row-class-name="headerStyle"
      style="width: 100%">
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80"></el-table-column>
      <el-table-column label="标题" prop="title" show-overflow-tooltip></el-table-column>
      <el-table-column label="创建人" prop="name" align="center" width="100px"></el-table-column>
      <el-table-column label="创建时间" prop="created_at" width="150px" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="230">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">更多</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :total="tableData.count" :pageSizes="pageSizes"></pagination>
  </div>
</template>


<script>
import Pagination from '@/components/Pagination'
  export default {
    components: {
      Pagination,
    },
    data() {
      return {
        tableData: {
          count: 11,
          rows: [{
            id: 1,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id: 2,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id: 3,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 4,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 5,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 6,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 7,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 8,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 9,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            id: 10,
            created_at: '2016-05-04 16:04',
            title: '标题标题标题标题标题标题标题标题标题标题',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        },
        search: '',
        created_at: ''
      }
    },
    computed: {
      pageSizes() {
        const count = this.tableData.count/10
        const pageSizes = []
        let sizes = []
        const page = this.tableData.count/10
        if(page <= 1){
          pageSizes = [10]
        }else{
          if(parseInt(page) == page){
            sizes = parseInt(page)
          }else{
            sizes = parseInt(page)+1
          }
          for(let i=0;i<sizes;i++){
            pageSizes.push((i+1)*10)
          }
        }
        return pageSizes
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      headerStyle() {
        return 'table-th'
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>