<template>
  <div class="login-container">
    <el-form class="login-form" :class="bgClass" autoComplete="on" label-position="left" :model="loginForm" ref="loginForm">
        <div class="title-container">
            <h3>后台管理系统</h3>
        </div>
        <el-form-item class="form-box" prop="username">
            <i class="elem-icon el-icon-user-solid"></i>
            <el-input name="username" type="text" v-model="loginForm.name" autoComplete="on" placeholder="输入登录账号" />
        </el-form-item>
        <el-form-item class="form-box" prop="pwd">
            <i class="elem-icon el-icon-unlock"></i>
            <el-input type="password" v-model="loginForm.pwd" autocomplete="on" placeholder="输入登录密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm('numberValidateForm')" :disabled="(loginForm.name != '' && loginForm.pwd != '') ? false:true">确定</el-button>
        </el-form-item>
        <div class="forget-btn">忘记密码</div>
        <div class="other-login">其他登录方式</div>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapStates } from 'vuex'
import ResizeMixin from '../layout/components/ResizeHandler'
export default {
    computed: {
        ...mapState({
            device: state => state.app.device
        }),
        bgClass() {
            return this.device == 'mobile'?'bgClass':''
        }
    },
    mixins: [ResizeMixin],
    data() {
      return {
        loginForm: {
          name: '',
          pwd: ''
        }
      };
    },
    methods: {
         submitForm() {
             this.$refs.loginForm.validate(valid => {
                if(valid){
                    this.$store.dispatch('LoginUserInfo',this.loginForm)
                    this.$router.push({ path: '/' })
                }else{

                }
             })
         }
    }
  }
</script>

<style lang="scss" scoped>
    $bg-f3f3f5: #f3f3f5;
    $bg-fff: #fff;
    .login-container{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: $bg-fff;
        .form-box{
            margin-bottom: 26px;
            .elem-icon{
                display: inline-block;
                vertical-align: top;
                position: absolute;
                top: 50%;
                left: 20px;
                font-size: 14px;
                z-index: 9;
                color: #8891ab;
                transform: translateY(-50%); 
            }
            /deep/ .el-input__inner {
                padding: 0 40px;
            }
        }
        .login-form{
            position: absolute;
            left: 50%;
            top: 160px;
            transform: translateX(-50%);
            width: 420px;
            background-color: $bg-fff;
            padding: 0px 60px 40px;
            box-shadow: 0px 0px 40px 0px rgba(8,17,41,0.2);
            .title-container{
                h3{
                    color: #313651;
                    font-size: 26px;
                    text-align: center;
                    margin: 40px auto;
                }
            }
            .login-btn{
                width: 100%;
            }
            .forget-btn{
                position: absolute;
                bottom: 20px;
                left: 60px;
                font-size: 14px;
                color: #8891ab;
                cursor: pointer;
                &:hover{
                    color: #1a82fc;
                }
            }
            .other-login{
                position: absolute;
                bottom: 20px;
                right: 60px;
                font-size: 14px;
                color: #8891ab;
                cursor: pointer;
                &:hover{
                    color: #1a82fc;
                }
            }
        }
    }
    .bgClass{
         box-shadow: inherit !important;
    }
</style>
