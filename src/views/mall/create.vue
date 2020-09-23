<template>
    <div  class="app-container">
        <div class="return-path">
            <el-button @click="returnPath">返回</el-button>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品标题" prop="name">
                <el-input :class="inputClass" v-model="ruleForm.name" placeholder="请输入商品标题"></el-input>
            </el-form-item>
            <el-form-item label="所属商户" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择商户">
                <el-option label="大潮汕深夜豆浆" value="1"></el-option>
                <el-option label="肯德基宅急送" value="2"></el-option>
                <el-option label="麦当劳麦乐送" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品价钱" prop="money">
                <el-input :class="inputClass" v-model="ruleForm.name" placeholder="输入商品价钱"></el-input>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="封面" prop="headimg">
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                            <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                            >
                            <i class="el-icon-zoom-in"></i>
                            </span>
                            <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleDownload(file)"
                            >
                            <i class="el-icon-download"></i>
                            </span>
                            <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                            >
                            <i class="el-icon-delete"></i>
                            </span>
                        </span>
                        </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="商品标签" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="商品简介" prop="desc">
                <el-input type="textarea" :class="inputClass" v-model="ruleForm.desc" placeholder="请输入商品简介"></el-input>
            </el-form-item>
            <el-form-item  class="create-btn">
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState({
                device: state => state.app.device
            }),
            inputClass() {
                return this.device == 'mobile'?'input-mobile':''
            }
        },
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    delivery: false,
                    headimg: [],
                    type: ['美食/餐厅线上活动'],
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入商品标题', trigger: 'blur' }
                    ],
                    money: [
                        { required: true, message: '请输入商品价', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择所属商户', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个商品标签', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写商品简介', trigger: 'blur' }
                    ]
                },
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            returnPath() {
                this.$router.push({path: '/mall/list'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
        padding: 80px 30px 0;
        .el-input,.el-textarea{
            width: 50%;
        }
        .input-mobile{
            width: 100%;
        }
        .create-btn{
            margin-top: 40px;
        }
        .return-path{
            position: absolute;
            right: 30px;
            top: 20px;
        }
    }
</style>