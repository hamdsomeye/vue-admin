<template>
    <div class="pagination-container">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props: {
            total: {
                required: true,
                type: Number
            },
            page: {
                type: Number,
                default: 1
            },
            limit: {
                type: Number,
                default: 20
            },
            pageSizes: {
                type: Array,
                default: [10]
            }
        },
        computed: {
            currentPage: {
                get() {
                    return this.page
                },
                set(val) {
                    this.$emit('update:page', val)
                }
            },
            pageSize: {
                get() {
                    return this.limit
                },
                set(val) {
                    this.$emit('update:limit', val)
                }
            }
        },
        methods: {
            handleSizeChange(val) {
                this.$emit('pagination', { page: this.currentPage, limit: val })
                    if (this.autoScroll) {
                        scrollTo(0, 800)
                    }
                },
                handleCurrentChange(val) {
                    this.$emit('pagination', { page: val, limit: this.pageSize })
                    if (this.autoScroll) {
                        scrollTo(0, 800)
                    }
                }
        },
        data() {
            return {
                
            };
        }
    }
</script>

<style lang="scss" scoped>
    .pagination-container{
        margin: 30px 0;
    }
</style>