<template>
    <div>
        <el-table
                :data="tableData"
                :default-sort="{prop: 'date', order: 'descending'}"
                style="width: 100%">
            <el-table-column
                    sortable
                    prop="account"
                    label="账号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="学生电话">
            </el-table-column>
            <el-table-column
                    prop="sexName"
                    label="性别">
            </el-table-column>


            <el-table-column label="操作" width="260" fixed="right">
                <template slot-scope="scope">
                    <el-button
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"> 移出该学生
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.page"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="page.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
        </el-pagination>

    </div>
</template>

<script>
    import {tclassmanagemt,deleteStudent} from "../../api/teacher/teacherclass.js";
    import {mapState} from 'vuex'
    import Cookies from 'js-cookie'
    export default {
        name: "StudentInfo",

        data() {
            return {
                tableData: [],
                page: {
                    page: 1, //初始页
                    pageSize: 10,    //    每页的数据
                    userId:''
                },
                form: {
                    userName: '',
                    account:'',
                    phone:'',
                    className:'',
                },
                formLabelWidth: '120px',
                param:{
                    userId:'',
                }

            }
        },
        created() {
            this.page.userId=Cookies.get('userId')
            this.listAllClass(this.page)
        },
        methods: {
            handleDelete(index,row){
                this.param.userId=row.userId
                deleteStudent(this.param).then(resp=>{
                    if(resp.data.code==200){
                        this.$message({
                            message: '移除学生成功 ',
                            type: 'success'
                        });
                        this.dialogFormVisibleEdit=true
                        this.listAllClass(this.page)
                    }else{
                        this.$message.error('移除学生失败');
                    }
                })
            },
            handleSizeChange(size) {
                this.page.pageSize = size;
                // console.log(this.pageSize,'888')
                this.listAllClass(this.page)
                console.log(`每页 ${size} 条`);
            },
            handleCurrentChange(pageNum) {
                this.page.pageNum = pageNum;
                this.listAllClass(this.page)
                console.log(`当前页: ${val}`);
            },

            listAllClass(page) {
                tclassmanagemt(page).then(resp => {
                    this.tableData = resp.data.resultData.data
                    console.log(this.tableData)
                })
            },
        },

    }
</script>

<style>
    el-table-column {
        line-height: 50px;
    }

</style>
