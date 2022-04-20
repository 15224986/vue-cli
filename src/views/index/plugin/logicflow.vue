<template>
    <article id="page-logicflow">
        <div class="logicflow-box">
            <!-- 左侧工具栏 -->
            <ul class="logicflow-tools" id="icons">
                <li @click="selectionSelect()" class="flow-chart-item">选区</li>
                <li v-for="(item,index) in logicflowTools" :key="index" @mousedown="mouseDownHandle(item)" class="js-drag-ele">
                    <i :class="item.icon"></i>{{item.text}}
                </li>
            </ul>
            <div id="logicflow"></div>
        </div>
        <div class="logicflow-btns">
            <el-button type="primary" @click="save()">保存</el-button>
        </div>

        <el-dialog
            title="添加属性"
            :visible.sync="rectDialogVisible"
        >
            <el-form :model="rectDialogData" ref="rectDialogForm" label-width="140px" label-suffix=":" size="small">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="rectDialogData.name"></el-input>
                </el-form-item>
                <el-form-item label="区域" prop="region">
                    <el-select v-model="rectDialogData.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                    <el-checkbox-group v-model="rectDialogData.type">
                        <el-checkbox label="1" name="type">美食/餐厅线上活动</el-checkbox>
                        <el-checkbox label="2" name="type">地推活动</el-checkbox>
                        <el-checkbox label="3" name="type">线下主题活动</el-checkbox>
                        <el-checkbox label="4" name="type">单纯品牌曝光</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="rectDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="rectDialogSubmit()">确 定</el-button>
            </span>
        </el-dialog>
    </article>
</template>
<script>
    /**
     * 混入对象
     */
    // 页面通用的
    import common from '@/mixins/common.js';

    import { LogicFlow, RectNode, RectNodeModel } from '@logicflow/core';
    import {
        Menu,
        SelectionSelect
    } from '@logicflow/extension';
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    import '@logicflow/core/dist/style/index.css';
    import '@logicflow/extension/lib/style/index.css'

    export default {
        mixins: [common],
        components: {},
        data() {
            return {
                // 实力
                logicflowObj: "",
                // 数据
                logicflowData: {
                    // // 节点
                    // nodes: [
                    //     {
                    //         id: 50,
                    //         type: 'rect',
                    //         x: 100,
                    //         y: 150,
                    //         text: '你好',
                    //     },
                    //     {
                    //         id: 21,
                    //         type: 'circle',
                    //         x: 300,
                    //         y: 150,
                    //     }
                    // ],
                    // // 边
                    // edges: [
                    //     {
                    //         type: 'polyline',
                    //         sourceNodeId: 50,
                    //         targetNodeId: 21,
                    //     }
                    // ]
                },
                activeNode: "",
                // 左侧菜单
                logicflowTools: [
                    {
                        id: 'start',
                        type: 'circle',
                        text: '开始',
                        icon: 'el-icon-video-play'
                    },
                    {
                        id: 'rect',
                        type: 'rect',
                        text: '矩形',
                        icon: 'el-icon-coin'
                    },
                    {
                        id: 'destroy',
                        type: 'destroy',
                        text: '自定义模型',
                        icon: 'el-icon-coin'
                    },
                    {
                        id: 'ellipse',
                        type: 'ellipse',
                        text: '椭圆形',
                        icon: 'el-icon-chat-round'
                    },
                    {
                        id: 'diamond',
                        type: 'diamond',
                        text: '菱形',
                        icon: 'el-icon-coordinate'
                    },
                    {
                        id: 'polygon',
                        type: 'polygon',
                        text: '多边形',
                        icon: 'el-icon-house'
                    },
                    {
                        id: 'end',
                        type: 'text',
                        text: '文本',
                        icon: 'el-icon-tickets'
                    },
                    {
                        id: 'end',
                        type: 'circle',
                        text: '结束',
                        icon: 'el-icon-switch-button'
                    }
                ],
                // 设置默认主题样式
                logicflowStyle: {
                    // 矩形样式
                    rect: {
                        width: 100,
                        height: 80,
                        radius: 6,
                        stroke: '#0085d0',
                        fill: '#fff',
                        strokeWidth: 1
                    },
                    // 圆形
                    circle: {
                        r: 25,
                        stroke: '#0085d0',
                        fill: '#fff',
                        strokeWidth: 1
                    },
                    // 椭圆形
                    ellipse: {
                        stroke: '#0085d0',
                        fill: '#fff',
                        strokeWidth: 1,
                        rx: 35,
                        ry: 25
                    },
                    // 菱形
                    diamond: {
                        stroke: '#0085d0',
                        fill: '#fff',
                        strokeWidth: 1,
                        rx: 35,
                        ry: 35
                    },
                    // 多边形
                    polygon: {
                        stroke: '#0085d0',
                        fill: '#fff',
                        strokeWidth: 1,
                        points: [
                            [50, 0],
                            [100, 36.337],
                            [79.315, 100],
                            [20.685, 100],
                            [0, 36.337]
                        ]
                    },
                    // 文本
                    text: {
                        fontSize: 18,
                         fontWeight: 'bold',
                        color: '#333'
                    },
                    // 节点文本样式
                    nodeText: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#333'
                    },
                    // 边文本样式
                    edgeText: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#333'
                    },
                    // 锚点样式
                    anchor: {
                        fill: "#0085d0"
                    },
                    // 连接线
                    polyline: {
                        stroke: '#0085d0',
                        strokeWeight: 1,
                        selectedStroke: '#0085d0',
                    }
                },

                rectDialogVisible: false,
                rectDialogData:{
                    name: '',
                    region: '',
                    type: []
                }
            }
        },
        created() {},
        mounted() {
            this.initLogicflow()
        },
        methods: {
            initLogicflow() {
                this.logicflowObj = new LogicFlow({
                    // 容器配置
                    container: document.querySelector('#logicflow'),
                    // 画布配置
                    width: "100%",
                    height: "100%",
                    grid: {
                        type: 'mesh',
                        config: {
                            color: '#ddd'
                        },
                    },
                    textEdit: false,
                    // 样式配置
                    style: this.logicflowStyle
                });


                class DestroyModel extends RectNodeModel {
                    setAttributes() {
                        this.stroke = '#1E90FF';
                        this.fill = '#F0F8FF';
                        this.radius = 10;
                        const { properties: { type } } = this;
                        // 单独为销毁阶段的元素设置菜单。
                        this.menu = [
                            {
                                className: 'lf-menu-delete',
                                text: '删除',
                                callback: (node) => {
                                    this.graphModel.deleteNode(node.id);
                                    this.graphModel.eventCenter.emit('custom:event', node);
                                },
                            }
                        ];
                    }
                }
                this.logicflowObj.register({
                    type: 'destroy',
                    view: RectNode,
                    model: DestroyModel,
                })

                /**
                 * 指定类型元素配置菜单
                 */
                this.logicflowObj.setMenuByType({
                    type: "text",
                    menu: [
                        {
                            text: '删除',
                            className: "delete",
                            icon: true,
                            callback: (node)=> {
                                this.logicflowObj.deleteNode(node.id);
                            }
                        },
                        {
                            text: '编辑',
                            className: "edit",
                            icon: true,
                            callback: (node)=> {
                                this.logicflowObj.graphModel.setTextEditable(node.id, 2);
                            }
                        },
                        {
                            text: '复制',
                            className: "copy",
                            icon: true,
                            callback: (node)=> {
                                this.logicflowObj.cloneNode(node.id);
                            }
                        }
                    ]
                });
                this.logicflowObj.setMenuByType({
                    type: "polyline",
                    menu: [
                        {
                            text: '删除',
                            className: "delete",
                            icon: true,
                            callback: (node)=> {
                                this.logicflowObj.deleteEdge(node.id);
                            }
                        },
                        {
                            text: '编辑',
                            className: "edit",
                            icon: true,
                            callback: (node)=> {
                                this.logicflowObj.graphModel.setTextEditable(node.id, 2);
                            }
                        }
                    ]
                });

                /**
                 * 加载数据
                 */
                this.logicflowObj.render(this.logicflowData);


                /**
                 * 节点的点击事件
                 */
                this.logicflowObj.on('element:click', (data) => {
                    // console.log('node:add', data.data)
                    let whitelist = ['rect', 'polyline'];
                    if (  whitelist.includes(data.data.type) ) {
                        this.activeNode = data.data
                        this.rectDialogVisible = true
                    }
                })
                /**
                 * 线的新增
                 */
                this.logicflowObj.on('edge:add', (data) => {
                    console.log('edge:add', data)
                })
            },
            /**
             * 拖拽
             * @param item 拖拽属性
             */
            selectionSelect(){
                this.logicflowObj.openSelectionSelect();
                this.logicflowObj.once('selection:selected', () => {
                    this.logicflowObj.closeSelectionSelect();
                });
            },
            mouseDownHandle(item) {
                this.logicflowObj.dnd.startDrag({
                    type: item.type,
                    text: item.type === 'rect' ? '' : item.text,
                    stroke: '#f00',
                    properties: {}
                });
            },
            save() {
                //保存数据
                //1:节点，2，连线，3：节点信息
                var data = this.logicflowObj.getGraphData();
                console.log(data)
            },
            /**
             * 弹框确定
             */
            rectDialogSubmit(){
                this.logicflowObj.updateText( this.activeNode.id , this.rectDialogData.name )
                this.logicflowObj.setProperties( this.activeNode.id , this.rectDialogData )
                this.$refs.rectDialogForm.resetFields()
                this.rectDialogVisible = false
            }
        }
    }
</script>

<style>
    #page-logicflow{
        height: 600px;
        margin-top: 20px;
        background-color: #FFFFFF;
    }
    .logicflow-box {
        width: calc(100% - 221px);
        height: calc(100% - 92px);
        border: #666666 1px solid;
        position: relative;
        padding-left: 221px;
    }

    #logicflow {
        width: 100%;
        height: 100%;
    }

    .logicflow-tools {
        width: 188px;
        height: 100%;
        padding: 0 16px;
        border-right: #666666 1px solid;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        background-color: #FFFFFF;
        line-height: 32px;
        user-select: none;
    }

    .logicflow-btns {
        margin: 20px 20px 0;
        text-align: right;
    }
    .lf-menu-item:nth-child(2){
        display: none;
    }
    .lf-menu-item.edit:nth-child(2){
        display: block;
    }

</style>
