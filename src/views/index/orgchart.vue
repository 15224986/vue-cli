<template>
    <article id="page-bodier">
        <div id="wrapper" v-loading="loading">
            <section class="section-breadcrumb">
                <moc-breadcrumb></moc-breadcrumb>
            </section>



            <section class="section">
                <orgchart-topology></orgchart-topology>
            </section>


            <section class="section">
                <div class="orgChart-section">
                    <ul class="orgChart-list">
                        <li v-for="(item, index) in showOrgchartList" :key="index"
                            draggable="true"
                            @dragstart="orgchartDragStart($event,item)"
                            @dragend="orgchartDragend($event,item)"
                        >
                            {{item.name}}
                        </li>
                    </ul>
                    <div class="orgChart-box">
                        <moc-orgchart :datasource="orgchartData" pan zoom deleteBtn datapid @node-delete="nodeDeletefn">
                            <template v-slot="{nodeData}">
                                <p>{{nodeData.id}}</p>
                            </template>
                        </moc-orgchart>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="orgChart-section">
                    <ul class="orgChart-list">
                        <li v-for="(item, index) in showOrgchartList" :key="index"
                            draggable="true"
                            @dragstart="orgchartDragStart($event,item)"
                            @dragend="orgchartDragend($event,item)"
                        >
                            {{item.name}}
                        </li>
                    </ul>
                    <div class="orgChart-box">
                        <moc-orgchart :datasource="orgchartData" direction="l2r" datapid @node-delete="nodeDeletefn"></moc-orgchart>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="orgChart-section">
                    <ul class="orgChart-list">
                        <li v-for="(item, index) in showOrgchartList" :key="index"
                            draggable="true"
                            @dragstart="orgchartDragStart($event,item)"
                            @dragend="orgchartDragend($event,item)"
                        >
                            {{item.name}}
                        </li>
                    </ul>
                    <div class="orgChart-box">
                        <moc-orgchart :datasource="orgchartData" direction="r2l" datapid @node-delete="nodeDeletefn"></moc-orgchart>
                    </div>
                </div>
            </section>
            <section class="section">
                <el-button @click="showData()" type="primary">显示数据</el-button>
            </section>
        </div>
    </article>
</template>
<script>
    export default {
        components: {
            orgchartTopology:()=>import('./orgchart-topology.vue')
        },
        data() {
            return {
                loading: false,

                capitalize: 'your browser does not support the video tag',
                /**
                 * 组织架构数据
                 */
                orgchartData:{
                    id: 'aaaa',
                    name: '百家姓',
                    children:[
                        {
                            id: 'a666',
                            name: '吴某'
                        },
                        {
                            id: 'a777',
                            name: '郑某'
                        },
                        {
                            id: 'a888',
                            name: '王某'
                        }
                    ]
                },
                // 组织架构 所有节点的id
                orgchartIdArr:[],
                // 选中节点的数据
                activeOrgchartList:{},
                // 选中的组织架构图的id
                activeOrgchartId:'',
                // 被删除节点的id
                orgchartDeleteId: [],
                /**
                 * 拖动节点的数据
                 */
                orgchartList:[
                    {
                        id: 'a111',
                        name: '赵某'
                    },
                    {
                        id: 'a222',
                        name: '钱某'
                    },
                    {
                        id: 'a333',
                        name: '孙某'
                    },
                    {
                        id: 'a444',
                        name: '李某'
                    },
                    {
                        id: 'a555',
                        name: '周某'
                    },
                    {
                        id: 'a666',
                        name: '吴某'
                    },
                    {
                        id: 'a777',
                        name: '郑某'
                    },
                    {
                        id: 'a888',
                        name: '王某'
                    }
                ]
            };
        },
        computed: {
            showOrgchartList: function () {
                return this.orgchartList.filter( (item)=> {
                    if( this.orgchartIdArr.indexOf( item.id ) === -1 ){
                        return item;
                    }
                });
            }
        },
        mounted(){
            /**
             * 获取所有节点的Id
             */
            if( this.orgchartData.id ){
                this.orgchartIdArr.push( this.orgchartData.id );
                if( this.orgchartData.children || this.orgchartData.children.length>0 ){
                    this.getOrgchartAllId( this.orgchartData.children );
                }
            }

            /**
             * 给orgchart的所有node节点添加事件
             */
            let _this = this;
            $(document).on('dragover', '.orgchart .node', function(event) {
                event.preventDefault();
                $(this).addClass("node-is-over");
            });
            $(document).on('dragleave', '.orgchart .node', function(event) {
                event.preventDefault();
                $(this).removeClass("node-is-over");
            });
            $(document).on('drop', '.orgchart .node', function(event) {
                event.preventDefault();
                $(this).removeClass("node-is-over");

                _this.activeOrgchartId = $(this).attr('id');
                /**
                 * 找到添加子节点的obj，将子节点添加
                 */
                if( _this.orgchartData.id !== _this.activeOrgchartId ){
                    _this.getOrgchartNode( _this.orgchartData.children );
                }else{
                    if( !_this.orgchartData.children ){
                        _this.$set( _this.orgchartData, 'children', []);
                    }
                    _this.orgchartData.children.push( _this.activeOrgchartList );
                }
                _this.orgchartIdArr.push( _this.activeOrgchartList.id );
            });
        },
        methods:{

            /**
             * 被拖动的节点的开始拖动
             */
            orgchartDragStart(event,item){
                this.activeOrgchartList = item;
                // 添加类名
                if( !this.orgchartData.id ){
                    $(".orgChart-box").addClass('node-is-ging');
                }else{
                    $(".orgchart .node").addClass('node-is-ging');
                }
                // 绑定事件
                this.bindEvent();
            },
            /**
             * 被拖动的节点的结束拖动
             */
            orgchartDragend(){
                $(".orgChart-box").removeClass('node-is-ging');
                $(".orgchart .node").removeClass('node-is-ging');
            },
            /**
             * 绑定事件
             */
            bindEvent(){
                // 当没有节点的时候
                let _this = this;
                if( !_this.orgchartData.id ){
                    $(document).on('dragover', '.orgChart-box', function(event) {
                        event.preventDefault();
                        $(this).addClass("node-is-over")
                    });
                    $(document).on('dragleave', '.orgChart-box', function(event) {
                        event.preventDefault();
                        $(this).removeClass("node-is-over")
                    });
                    $(document).on('drop', '.orgChart-box', function(event) {
                        event.preventDefault();
                        $(this).removeClass("node-is-over");
                        _this.orgchartData = _this.activeOrgchartList;
                        _this.orgchartIdArr.push( _this.activeOrgchartList.id );
                    });
                }else{
                    $(document).off('dragover', '.orgChart-box');
                    $(document).off('dragleave', '.orgChart-box');
                    $(document).off('drop', '.orgChart-box');
                }
            },
            /**
             * 添加节点
             */
            getOrgchartNode( json ){
                if( !json ){
                    json = [];
                }
                for(var i = 0 ; i < json.length ; i++){
                    let item = json[i];
                    /**
                     * 获取所有节点的id
                     */
                    if( this.orgchartIdArr.indexOf(item.id) === -1 ){
                        this.orgchartIdArr.push( item.id );
                    }
                    /**
                     * 判断节点是否符合条件
                     */
                    // console.log( 1,this.activeOrgchartId , item.id , this.activeOrgchartList, this.form.relationTree);
                    if( this.activeOrgchartId === item.id ){
                        /**
                         * 插入obj
                         */
                        this.$set( this.activeOrgchartList, 'children', []);
                        if( item.children ){
                            item.children.push( this.activeOrgchartList );
                        }else{
                            this.$set( item, 'children', []);
                            item.children.push( this.activeOrgchartList );
                        }
                    }else{
                        if( item.children && item.children.length > 0 && item.children.constructor==Array ){
                            item.children.forEach( (childrenEl,childrenIndex) => {
                                if( item.id == childrenEl.id  ){
                                    item.children.splice(childrenIndex, 1);
                                }
                            });
                            if( item.children.length > 0 ){
                                this.getOrgchartNode( item.children )
                            }
                        }
                    }
                }
            },
            getOrgchartAllId( json ){
                for(var i = 0 ; i < json.length ; i++){
                    let item = json[i];
                    /**
                     * 获取所有节点的id
                     */
                    if( this.orgchartIdArr.indexOf(item.id) === -1 ){
                        this.orgchartIdArr.push( item.id );
                    }
                    /**
                     * 判断节点是否符合条件
                     */
                    if( item.children && item.children.length > 0 ){
                        this.getOrgchartAllId( item.children )
                    }
                }
            },
            /**
             * 删除节点
             * @param  {[Object]} nodeData [节点数据]
             */
            nodeDeletefn( nodeData, $event ){
                console.log( $event.target.parentNode.getAttribute('pid') );

                // this.orgchartDeleteId.push( nodeData.id );
                // /**
                //  * 找到节点，删除节点的obj
                //  */
                // if( this.orgchartDeleteId.indexOf( this.orgchartData.id ) > -1 ){ // 判断是否为根节点
                //     this.orgchartData = {};
                //     this.orgchartIdArr = [];
                //     this.orgchartDeleteId = [];
                // }else{
                //     this.delOrgchartNode( this.orgchartData.children );
                //     // 去除被删除节点的id
                //     this.orgchartDeleteId.forEach( (value)=>{
                //         let index = this.orgchartIdArr.indexOf( value );
                //         this.orgchartIdArr.splice(index, 1);
                //     });
                //     this.orgchartDeleteId = [];
                // }
            },
            /**
             * 删除节点
             */
            delOrgchartNode( json ){
                /**
                 * 删除列表中的id
                 */
                for(var i = 0 ; i < json.length ; i++){
                    let item = json[i];
                    /**
                     * 判断节点是否符合条件
                     */
                    if( this.orgchartDeleteId.indexOf( item.id ) == -1 ){
                        if( item.children && item.children.length > 0 ){
                            item.children.forEach( (childrenEl,childrenIndex) => {
                                if( item.id == childrenEl.id  ){
                                    item.children.splice(childrenIndex, 1);
                                }
                            });
                            this.delOrgchartNode( item.children );
                        }
                    }else{
                        // 获取被删除节点的子级节点id
                        if( item.children && item.children.length>0 ){
                            this.delOrgchartAllId( item.children );
                        }
                        // 删除所有子节点
                        delete item.children;
                        // 删除节点
                        json.splice(i, 1);
                    }
                }
            },
            // 获取被删除节点的子级节点id
            delOrgchartAllId(json){
                for(var i = 0 ; i < json.length ; i++){
                    let item = json[i];
                    // 插入当前节点的id
                    this.orgchartDeleteId.push( item.id );
                    if( item.children && item.children.length > 0 ){
                        this.delOrgchartAllId( item.children )
                    }
                }
            },
            showData(){
                console.log( this.orgchartData );
            }
        }
    };
</script>
<style scoped lang="scss">
    #wrapper{
        background-color: transparent;
    }
    .section-breadcrumb{
        margin-bottom: 20px;
    }
    .section + .section{
        margin-top: 20px;
    }
    .section-title {
        padding: 0 0 10px;
    }
    .section-subhead{
        padding-bottom: 16px;
    }
    .section-title + .section-subhead{
        margin-top: -6px;
    }


    .describe-basics{
        line-height: 1.8;
        &>dt{
            color: #333;
            font-weight: 700;
        }
        &>dd + dt{
            margin-top: 8px;
        }
    }







    .orgChart-section{
        height: 360px;

    }
    .orgChart-list{
        width: 175px;
        height: 100%;
        float: left;
        li{
            background-color: #f5f5f6;
            line-height: 28px;
            margin-bottom: 5px;
            border-radius: 2px;
            text-align: center;
        }
    }
    .orgChart-box{
        height: 100%;
        margin-left: 186px;
        position: relative;
        border: #ccc 1px dashed;
        &.node-is-ging{
            border-color: #ff0000;
        }
        &.node-is-over{
            border-color: #0fb2ee;
        }
    }
</style>
<style lang="scss">
    .orgchart{
        margin-top: 16px;
    }
</style>
