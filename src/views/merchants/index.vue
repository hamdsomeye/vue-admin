<template>
    <div class="app-container">
        <div class="app-header">
            <div class="mall_create">
                <el-button type="primary" @click="creatMerchants">创建商户</el-button>
            </div>
        </div>
        <el-table
        :data="tableData.rows"
        border
        :header-row-class-name="headerStyle"
        style="width: 100%">
        <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80"></el-table-column>
        <el-table-column label="商户名" prop="title" show-overflow-tooltip  width="200px"></el-table-column>
        <el-table-column label="描述" prop="text" align="left"></el-table-column>
        <el-table-column label="创建人" prop="creator" width="150px" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="created_at" width="150px" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="230">
            <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">详情</el-button>
                 <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
        </el-table>
         <pagination :total="tableData.count" :pageSizes="pageSizes"></pagination>
         <el-dialog
            title="创建商户"
            :visible.sync="dialogVisible"
            :width="dialogWidth"
            :before-close="handleClose">
            <el-form :rules="rules" ref="merchant_info" label-width="70px" label-position="left" class="demo-ruleForm" >
                <el-form-item label="商户名" prop="name">
                    <el-input v-model="merchant_info.name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input type="textarea" v-model="merchant_info.desc"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Pagination from '@/components/Pagination'
    import { mapState } from 'vuex'
    export default {
        components: {
            Pagination,
        },
        computed: {
            ...mapState({
                sidebar: state => state.app.sidebar,
                device: state => state.app.device
            }),
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
            },
            dialogWidth() {
                return this.device == 'mobile' ? '80%':'30%'
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
                        text: '大潮汕深夜豆浆真好吃',
                        creator: '王小虎',
                        mall_count: '1'
                    }, {
                        id: 2,
                        created_at: '2016-05-04 16:04',
                        title: '肯德基宅急送',
                        text: '肯德基宅急送,快速到家',
                        creator: '王小虎',
                        mall_count: '1'
                    }, {
                        id: 3,
                        created_at: '2016-05-04 16:04',
                        title: '麦当劳麦乐送',
                        text: '麦当劳麦乐送，宅在家就可以享受美食',
                        creator: '王小虎',
                        mall_count: '1'
                    }],
                },
                dialogVisible: false,
                rules: {
                    name: [{required: true,message: '商户名称不能为空',trigger: 'blur'}],
                    desc: [{required: true,message: '商户名称不能为空',trigger: 'blur'}],
                },
                merchant_info: {
                    name: '',
                    desc: ''
                }
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
            },
             handleClose(done) {
                
                done();
                
            },
            creatMerchants() {
                this.dialogVisible = true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .mall_create{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>