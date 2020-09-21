<template>
    <div class="app-container">
        <div class="app-header">
            <div class="mall_create">
                <el-button type="primary">创建商户</el-button>
            </div>
        </div>
        <el-table
        :data="tableData.rows"
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
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        computed: {
            pageSizes() {
                const count = this.tableData.count/10
                let pageSizes = []
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
        data() {
            return{
                tableData: {
                    count: 3,
                    rows: [{
                        id: 1,
                        created_at: '2016-05-04 16:04',
                        title: '大潮汕深夜豆浆',
                        name: '王小虎',
                        mall_count: '1'
                    }, {
                        id: 2,
                        created_at: '2016-05-04 16:04',
                        title: '肯德基宅急送',
                        name: '王小虎',
                        mall_count: '1'
                    }, {
                        id: 3,
                        created_at: '2016-05-04 16:04',
                        title: '麦当劳麦乐送',
                        name: '王小虎',
                        mall_count: '1'
                    }],
                },
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
    .mall_create{
        position: absolute;
        right: 60px;
        top: 0;
    }
</style>