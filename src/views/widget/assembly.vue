<template>
    <div id="wrapper">
        <div class="widget">

            <section class="section">
                <h3 class="widget-tit">路径导航</h3>
                <moc-breadcrumb></moc-breadcrumb>
            </section>

            <p class="widget-txt">建议使用一和二的方式，尽量不要使用三和四。</p>
            <section class="section">
                <h3 class="widget-title">插件的封装（1）</h3>
                <p class="widget-txt">不会在创建页面的时候生成组件的结构，进行隐藏。</p>
                <p class="widget-txt">插件位置在“@/components/dialog/index.js”。</p>
                <div class="widget-demo">
                    <el-button type="primary" @click="handleDialog">mocDialog</el-button>
                    <el-button type="primary" @click="handleAlert">mocAlert</el-button>
                    <el-button type="primary" @click="handleConfirm">mocConfirm</el-button>
                    <el-button type="primary" @click="handlePrompt">mocPrompt</el-button>
                </div>  
            </section>
            
            <section class="section">
                <h3 class="widget-title">插件的封装（2）</h3>
                <p class="widget-txt">将常用的小的方法封装到一个公共文件中。公共的方法和组件。</p>

                <div class="widget-demo">
                    <el-button type="primary" @click="handleBoolean">toBoolean</el-button>
                </div>
                <p class="widget-txt">插件位置在“@/utils/toBoolean.js”。</p>
                <dl class="widget-dl">
                    <dt>转换前：</dt>
                    <dd><span class="label">text：</span>{{ beforeText }}</dd>
                    <dd><span class="label">type：</span>{{ beforeType }}</dd>
                    <dt>转换后：</dt>
                    <dd><span class="label">text：</span>{{ afterText }}</dd>
                    <dd><span class="label">type：</span>{{ afterType }}</dd>
                </dl>

                <div class="widget-demo m-t-30">
                    <el-button type="primary" @click="handleMerge">merge</el-button>
                </div>
                <p class="widget-txt">插件位置在“@/utils/merge.js”。</p>
                <dl class="widget-dl">
                    <dd><span class="label">obj0：</span>{{ merge.obj0 }}</dd>
                    <dd><span class="label">obj1：</span>{{ merge.obj1 }}</dd>
                    <dd><span class="label">obj2：</span>{{ merge.obj2 }}</dd>
                </dl> 
            </section>

            <section class="section">
                <h3 class="widget-title">插件的封装（3）</h3>
                <p class="widget-txt">插件位置在“@/components/toast/index.js”。</p>
                <div class="widget-demo">
                    <el-button type="primary" @click="handleToast">toast</el-button>
                </div>
            </section>
            <section class="section">
                <h3 class="widget-title">插件的封装（4）</h3>
                <p class="widget-txt">插件位置在“@/components/loading/index.js”。</p>
                <div class="widget-demo">
                    <el-button type="primary" @click="handleLoading">loading</el-button>
                </div>
            </section>


            <section class="section">
                <h3 class="widget-title">Upload 上传</h3>
                <p class="widget-txt">element-ui 上传</p>
                <div class="widget-demo">
                    <el-upload
                        class="upload-list-hide"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-error="handleError"
                        :on-success="handleSuccess"
                        :file-list="fileList"
                        multiple>
                        <el-button type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="widget-demo">
                    <el-upload
                        class="upload-avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div slot="tip" class="el-upload__tip">只能上传JPG文件，且不超过2MB!</div>
                    </el-upload>
                </div>
            </section>        

        </div>

    </div>
</template>
<script>
    /**
     * 工具
     * merge        : 引入合并多个Object
     * toBoolean    : 将字符串true和false转化成Boolean类型
     */
    import merge from "@/utils/merge.js";
    import toBoolean from '@/utils/toBoolean.js'

    export default {
        name: 'echartsLine',
        data() {
            return {
                isShow: false,
                beforeText:'false',
                beforeType:'',
                afterText:'',
                afterType:'',
                merge:{
                    obj0: { a: 1, b: 2 },
                    obj1: { b: 4, c: 5 },
                    obj2: {}
                },
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }, 
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ],
                imageUrl: false
            };
        },
        mounted(){
            
        },
        methods: {
            handleSuccess(response, file, fileList){
                console.log(response, file, fileList);
            },
            handleError(err, file, fileList) {
                console.log(err, file, fileList);
            },
            handlePreview(file) {
                console.log(file);
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
            },
            /**
             * mocDialog
             */
            handleDialog(){
                this.$mocDialog({
                        title:'mocDialog提示', // 弹窗的标题
                        message:'我是 <strong style="color: #f00;">mocDialog</strong> 弹出框',
                        dangerouslyUseHTMLString: true
                    }).then( ()=>{
                        this.$mocToastr("promise then",1000);
                    });
            },
            /**
             * mocAlert
             */
            handleAlert(){
                this.$mocAlert({
                        title:'mocAlert提示', // 弹窗的标题
                        message:'mocAlert提示mocAlert提示mocAlert提示mocAlert提示'
                    }).then( ()=>{
                        this.$mocToastr("promise then",1000);
                    });
            },
            /**
             * Confirm
             */
            handleConfirm(){
                this.$mocConfirm({
                        title:'Confirm提示', // 弹窗的标题
                        message:'Confirm提示Confirm提示Confirm提示Confirm提示'
                    }).then( ()=>{
                        this.$mocToastr("promise then",1000);
                    }).catch( ()=>{
                        this.$mocToastr("promise catch",1000);
                    });
            },
            /**
             * Prompt
             */
            handlePrompt(){
                this.$mocPrompt({
                        title:'mocPrompt提示', // 弹窗的标题
                        message:'请输入邮箱',
                        closeOnClickModal: false,
                        inputPlaceholder: '***@163.com'
                    }).then( (value)=>{
                        console.log(value )
                        this.$mocToastr("promise then : "+value,1000);
                    }).catch( ()=>{
                        this.$mocToastr("promise catch",1000);
                    });
            },
            handleBoolean(){
                this.isShow = !this.isShow;

                this.beforeType = typeof this.beforeText;
                this.afterText = toBoolean(this.beforeText);
                this.afterType = typeof this.afterText;
            },
            handleMerge(){
                this.merge.obj2 = merge({}, this.merge.obj0, this.merge.obj1); 
                this.merge.obj2.a = 3;
            },
            handleToast(){
                // 调用 toast 插件
                this.$mocToastr("你好，请问你选择好了吗？",2000);
            },
            handleLoading(){
                // 调用加载中的插件
                this.$mocLoading.show();
                setTimeout(() => {
                    this.$mocLoading.hide();
                }, 2000);
            },
        },
    };
</script>
