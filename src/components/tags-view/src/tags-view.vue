<template>
    <div class="neu-tagsView-container" :class="{'has-arrow-left':arrowLeft,'has-arrow-right':arrowRight}">
        <a href="javascript:;" class="neu-tagsView-arrow-left" @click="moveScrollbar('left')"></a>
        <a href="javascript:;" class="neu-tagsView-arrow-right" @click="moveScrollbar('right')"></a>
        <el-scrollbar ref="scrollContainer" :vertical="false" :noresize="true" class="scroll-container" @wheel.native.prevent="handleScroll">
            <router-link
                :to="{path:tag.path, query: tag.query}"
                ref="tagitem"
                v-for="(tag,index) in tagsView" :key="index"
                v-mocSmartMenu="menudata"
                class="neu-tagsView-item"
                :class="{'neu-active':tag.active,'neu-affix':tag.affix}"
                @click.native="handleClickTags(tag)"
                @contextmenu.prevent.native="contextmenuMenu(index,$event)"
            >
                <span>{{ tag.title }}</span>
                <span v-if="!tag.affix" @click.prevent.stop="closeTags(index)" class="neu-tagsView-close">
                    <i class="el-icon-close"></i>
                </span>
            </router-link>
        </el-scrollbar>
    </div>
</template>

<script>

    export default {
        name: 'mocTagsView',
        componentName: 'mocTagsView',
        props:{
            /**
             * 添加第三个判断是否相等的条件，如果传值了, 会获取query[decide]的值进行判断，是否相等
             * @type {String, Number}
             */
            decide: [String, Number],
        },
        data () {
            return {
                tagsView: [],
                selectedTagIndex: 0,
                tagAndTagSpacing: 4,
                arrowLeft: false,
                arrowRight: false,
                menudata:{
                    customClass: "aaaa",
                    menus:[
                        // {
                        //     content:"关闭当前",
                        //     callback:(val)=>{

                        //     },
                        //     customClass: 'aaaaa'
                        // },
                        {
                            content:"关闭当前",
                            callback: "closeSelectedTag",
                            customClass: 'aaaaa'
                        },
                        {
                            content:"关闭其他",
                            callback:"closeOthersTags",
                            icon:'el-icon-share',
                            suffixIcon:'el-icon-share'
                        },
                        {
                            content:"关闭右侧",
                            callback:"closeRightTags",
                            icon:'el-icon-share'
                        },
                        {
                            content:"关闭左侧",
                            callback:"closeLeftTags",
                            suffixIcon:'el-icon-share'
                        },
                        {
                            content:"关闭所有",
                            callback:"closeAllTags",
                            customClass: 'aaaaa'
                        }
                    ],
                },
            }
        },
        mounted(){
            this.addTags();
        },
        watch:{
            $route(){
                this.addTags("watch");
            }
        },
        computed: {
            scrollWrapper() {
                return this.$refs.scrollContainer.$refs.wrap
            }
        },
        methods: {
            /**
             * 新增标签
             */
            addTags(){
                /**
                 * 判断是否需要新增标签
                 * 如果不需要新增标签，刷新时回到关联页面
                 *
                 */
                if( this.$route.meta.srcTagsView ){
                    if( type ==="watch" ){
                        return;
                    }else{
                        if( this.$route.path !== this.$route.meta.srcTagsView ){
                            this.$router.push({
                                path: this.$route.meta.srcTagsView,
                                query: this.$route.query
                            });
                        }
                        return;
                    }
                }

                // 获取标签需要显示的文字
                // 选中的标签的index
                // 循环判断页面是否已经打开
                let title = this.$route.query.title ? this.$route.query.title : this.$route.meta.name;
                let currentTagIndex = 0;
                let isHasTags = true;
                this.tagsView.forEach( (item, index)=>{
                    // 如果tag已经存在将其选中
                    if( item.isPath == this.$route.path && item.title == title){
                        if( this.decide ){
                            if( item.query[this.decide] == this.$route.query[this.decide] ){
                                item.path = this.$route.fullPath;
                                item.active = true;
                                isHasTags = false;
                                currentTagIndex = index;
                            }else{
                                item.active = false;
                            }
                        }else{
                            item.path = this.$route.fullPath;
                            item.active = true;
                            isHasTags = false;
                            currentTagIndex = index;
                        }
                    }else{ // 不存在清空选中
                        item.active = false;
                    }
                })
                /**
                 * 存储标签信息
                 */
                if( isHasTags ){
                    const route = {
                        path: this.$route.fullPath,
                        isPath: this.$route.path,
                        title: title,
                        affix: this.$route.meta.affix,
                        query: this.$route.query,
                        active: true
                    };
                    this.tagsView.push( route );
                    currentTagIndex = this.tagsView.length - 1;
                }
                /**
                 * 移动选中位置
                 */
                this.moveToTarget( currentTagIndex );
            },
            /**
             * 标签点击事件
             */
            handleClickTags(tag){
                this.$emit('node-click', tag);
            },
            /**
             * 关闭标签
             */
            closeTags(index){
                if( this.tagsView.length > 1 ){
                    // 判断关闭的标签是否为打开的标签
                    if( this.tagsView[index].active ){
                        this.tagsView.splice(index,1);
                        // 选中的标签index
                        let currentTagIndex = index-1;
                        if( currentTagIndex < 0 ){
                            currentTagIndex = 0;
                        }
                        // 修改导航栏的位置
                        this.$router.push({ path: this.tagsView[currentTagIndex].path, query:this.tagsView[currentTagIndex].query });
                        // 移动选中位置
                        this.moveToTarget( currentTagIndex );
                    }else{
                        this.tagsView.splice(index,1);
                    }
                }else{
                    this.$alert( '最后一个标签，不可以关闭！', '系统提示', {
                        callback: action => {}
                    });
                }
            },
            /**
             * 清空标签
             */
            emptyTags(){
                this.tagsView.splice(0, this.tagsView.length);
            },
            /**
             *
             * el-scrollbar
             *
             */
            // 鼠标控制滚动条位置的移动
            handleScroll(e) {
                const eventDelta = e.wheelDelta || - e.deltaY * 40
                const $scrollWrapper = this.scrollWrapper
                $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;

                this.arrowBtn();
            },
            // 滚动条位置的移动方法
            moveToTarget(currentTagIndex) {
                this.$nextTick(() => {
                    const $container = this.$refs.scrollContainer.$el
                    const $containerWidth = $container.offsetWidth
                    const $scrollWrapper = this.scrollWrapper
                    const tagList = this.$refs.tagitem
                    const currentTag = this.$refs.tagitem[ currentTagIndex ]
                    let firstTag = null
                    let lastTag = null
                    // find first tag and last tag
                    if (tagList.length > 0) {
                        firstTag = tagList[0]
                        lastTag = tagList[tagList.length - 1]
                    }
                    if (firstTag === currentTag) {
                        $scrollWrapper.scrollLeft = 0
                    } else if (lastTag === currentTag) {
                        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;
                    } else {
                        // find preTag and nextTag
                        const currentIndex = tagList.findIndex(item => item === currentTag)
                        const prevTag = tagList[currentIndex - 1]
                        const nextTag = tagList[currentIndex + 1]
                        // the tag's offsetLeft after of nextTag
                        const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + this.tagAndTagSpacing
                        // the tag's offsetLeft before of prevTag
                        const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - this.tagAndTagSpacing
                        if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
                            $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
                        } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
                            $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
                        }
                    }

                    this.arrowBtn();
                });
            },
            // 按钮的点击事件
            moveScrollbar(direction){
                const $container = this.$refs.scrollContainer.$el
                const $containerWidth = $container.offsetWidth
                const $scrollWrapper = this.scrollWrapper;
                if( direction == 'left' ){
                    let left = $scrollWrapper.scrollLeft - $containerWidth > 0 ? $scrollWrapper.scrollLeft - $containerWidth : 0;
                    $scrollWrapper.scrollLeft = left
                }else{
                    let right = $scrollWrapper.scrollLeft + $containerWidth;
                    let wrapWidth = $scrollWrapper.scrollWidth;
                    $scrollWrapper.scrollLeft = right
                }

                this.arrowBtn();
            },
            // 按钮的显示隐藏
            arrowBtn(){
                this.$nextTick(() => {
                    const $scrollWrapper = this.scrollWrapper
                    const $container = this.$refs.scrollContainer.$el
                    const $containerWidth = $container.offsetWidth

                    let scrollLeft = $scrollWrapper.scrollLeft;
                    if( scrollLeft ){
                        this.arrowLeft = true;
                    }else{
                        this.arrowLeft = false;
                    }
                    let scrollWidth = $scrollWrapper.scrollWidth;
                    if( scrollWidth > scrollLeft + $containerWidth ){
                        this.arrowRight = true;
                    }else{
                        this.arrowRight = false;
                    }
                });
            },


            /**
             *
             * mocSmartMenu
             *
             */
            contextmenuMenu(index){
                this.selectedTagIndex = index;
            },
            closeSelectedTag(){
                this.closeTags( this.selectedTagIndex );
                this.arrowBtn();
            },
            closeOthersTags(){
                var path = '',
                    query = '',
                    active = false;
                let tagsView = this.tagsView.filter( (item, index)=>{
                    if( this.selectedTagIndex === index ){
                        path = item.path;
                        query = item.query;
                        active = item.active;
                        return item;
                    }else{
                        if( item.affix ){
                            return item;
                        }
                    }
                } )
                this.tagsView = tagsView;
                if( !active ){
                    this.$router.push({
                        path: path,
                        query: query
                    });
                }
                this.arrowBtn();
            },
            closeRightTags(){
                var path = '',
                    query = '',
                    active = false;
                let tagsView = this.tagsView.filter( (item, index)=>{
                    if( this.selectedTagIndex > index ){
                        return item;
                    }else if( this.selectedTagIndex === index ){
                        path = item.path;
                        query = item.query;
                        return item;
                    }else{
                        if( item.affix ){
                            return item;
                        }else{
                            if( item.active ){
                                active = item.active;
                            }
                        }
                    }
                } )
                this.tagsView = tagsView;
                if( active ){
                    this.$router.push({
                        path: path,
                        query: query
                    });
                }
                this.arrowBtn();
            },
            closeLeftTags(){
                var path = '',
                    query = '',
                    active = false;
                let tagsView = this.tagsView.filter( (item, index)=>{
                    if( this.selectedTagIndex < index ){
                        return item;
                    }else if( this.selectedTagIndex === index ){
                        path = item.path;
                        query = item.query;
                        return item;
                    }else{
                        if( item.affix ){
                            return item;
                        }else{
                            if( item.active ){
                                active = item.active;
                            }
                        }
                    }
                } )
                this.tagsView = tagsView;
                if( active ){
                    this.$router.push({
                        path: path,
                        query: query
                    });
                }
            },
            closeAllTags(){
                let tagsView = this.tagsView.filter( (item, index)=>{
                    if( index === 0 ){
                        return item;
                    }else{
                        if( item.affix ){
                            return item;
                        }
                    }
                } );
                if( tagsView.length > 1 && tagsView[0].affix === false ){
                    tagsView.splice(0,1)
                }
                this.tagsView = tagsView;
                if( !this.tagsView[0].active ){
                    this.$router.push({
                        path: this.tagsView[0].path,
                        query: this.tagsView[0].query
                    });
                }
                this.arrowBtn();
            }
        }
    }
</script>
