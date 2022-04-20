<template>
    <div class="tinymce-editor">
        <editor v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
        </editor>
    </div>
</template>
<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    import 'tinymce/icons/default'
    // 编辑器插件plugins
    // 更多插件参考：https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/image'          // 插入上传图片插件
    import 'tinymce/plugins/media'          // 插入视频插件
    import 'tinymce/plugins/table'          // 插入表格插件
    import 'tinymce/plugins/lists'          // 列表插件
    import 'tinymce/plugins/wordcount'      // 字数统计插件
    import 'tinymce/plugins/advlist'        // 高级列表
    import 'tinymce/plugins/autolink'       // 自动链接
    import 'tinymce/plugins/link'           // 超链接
    import 'tinymce/plugins/preview'        // 预览
    import 'tinymce/plugins/fullscreen'     // 全屏
    import 'tinymce/plugins/hr'             // 水平分割线
    import 'tinymce/plugins/autoresize'     // 编辑器自适应
    import 'tinymce/plugins/charmap'       // 自动存稿

    let pluginsData = 'lists advlist image media table wordcount link autolink preview fullscreen hr charmap';
    export default {
        name: 'mocTinymceEditor',
        componentName: 'mocTinymceEditor',
        components: {
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
            // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
            baseUrl: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: ''
            },
            toolbar: {
                type: [String, Array],
                default: 'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | charmap hr removeformat preview fullscreen'
            },
            menubar: {
                type: [String, Boolean],
                default: 'file edit insert view format table tools help'
            },
            height: {
                type: [Number, String],
                default: 360
            },
            width: {
              type: [Number, String],
              default: 'auto'
            },
            autoresize: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                init: {
                    /**
                     * 1、在public目录下新建tinymce，将上面下载的语言包解压到该目录
                     * 2、在node_modules里面找到tinymce,将skins目录复制到public/tinymce里面
                     * 3、参考文档1    https://liubing.me/vue-tinymce-5.html
                     * 4、参考文档2    https://aaron-bird.github.io/2019/06/09/在%20Vue%20中使用%20TinyMCE/
                     * 5、中文文档     http://tinymce.ax-z.cn/general/basic-setup.php
                     */
                    language_url: "/static/tinymce/langs/zh_CN.js",
                    language: 'zh_CN',
                    skin_url: `${this.baseUrl}/static/tinymce/skins/ui/oxide/`,
                    content_css: `${this.baseUrl}/static/tinymce/skins/content/default/content.css`,
                    // skin_url: `${this.baseUrl}/static/tinymce/skins/ui/oxide-dark`, // 暗色系
                    // content_css: `${this.baseUrl}/static/tinymce/skins/content/dark/content.css`, // 暗色系
                    width: this.width,
                    height: this.height,
                    min_height: this.autoresize ? this.height:false,
                    plugins: pluginsData,
                    toolbar: this.toolbar,
                    branding: false,
                    menubar: this.menubar,
                    fontsize_formats: "10px 12px 14px 16px 18px 24px 36px",
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                },
                myValue: this.value
            }
        },
        watch: {
            value (newValue) {
                this.myValue = newValue
            },
            myValue (newValue) {
                this.$emit('input', newValue)
            }
        },
        created(){
            if( this.plugins.length > 0 ){
                this.init.plugins = this.plugins;
            }else{
                if( this.autoresize ){
                    this.init.plugins = pluginsData + " autoresize";
                }
            }
        },
        methods: {
            // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            // 需要什么事件可以自己增加
            onClick (e) {
                this.$emit('onClick', e, tinymce)
            },
            // 可以添加一些自己的自定义事件，如清空内容
            clear () {
                this.myValue = ''
            }
        }
    }
</script>
