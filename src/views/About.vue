<template>
  <div class="app-container">
    <div class="setting">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :lg="12">
          <div>账号： <p>admin</p><i class="el-icon-edit" @click="editName"></i></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :lg="12">
          <div>密码： <p>******</p><i class="el-icon-edit" @click="editPwd"></i></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :lg="12">
          <div>头像 
            <div class="headimg"></div>
            <i class="el-icon-edit" @click="editHeadimg"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="上传头像"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div  class="btn-box"><el-button class="headimg-btn" type="primary">确定 </el-button></div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        imageUrl: ''
      }
    },
    methods: {
      editName()  {
        this.$prompt('请输入账号', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      editPwd()  {
        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      editHeadimg() {
        this.dialogVisible = true;
      },
      handleClose(done) {
        done();
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .setting{
    &>div{
      &>div{
        position: relative;
        border: 1px solid #e1e3ea;
        margin-top: 20px;
        padding: 0 30px !important;
      }
      p{
        display: inline-block;
        margin-left: 60px;
      }
      .headimg{
          background-image: url(http://files.drcloud.me/FsxUk1xSsq2VzXqe9zqvf5Lz0r9v);
          width: 120px;
          height: 120px;
          background-size: cover;
          background-position: center;
          display: inline-block;
          vertical-align: middle;
          margin-left: 60px;
          border-radius: 50%;
          margin: 20px 0 20px 60px;
      }
      i{
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        color: #8891ab;
        cursor: pointer;
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid #e1e3ea;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .btn-box{
    position: relative;
    height: 50px;
  }
  .headimg-btn{
    position: absolute;
    right: 30px;
    bottom: 0;
  }
</style>