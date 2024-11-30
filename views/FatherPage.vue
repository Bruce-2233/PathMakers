<template>
  <div>
    <div style="height: 100px; background-color: #6254a3; display: flex; align-items: center">
      <div style="width: 400px; display: flex; align-items: center; padding-left: 20px">
        <img style="width: 70px" src="@/assets/logo.jpg" alt="">
        <span style="font-size: 24px; color: #e6ecf7; margin-left: 10px">Wellcome back, student</span>
      </div>

      <div style="flex: 1"></div>
      <div style="display: flex; width: fit-content; margin-right: 10px; align-items: center">

        <div style="font-size: 20px; color: #e6ecf7; margin-right: 20px">
          {{ currentTime }}
        </div>
      </div>
    </div>

    <div style="display: flex; background-color: #ece9fa">

      <div style="width: 300px; border-radius: 12px; border: 1px solid black; min-height: calc(100vh - 60px); background-color: white; margin: 10px">
        <el-menu router :default-active="router.currentRoute.value.path" style="border: 0">

          <img style="width: 120px; height: 120px; margin: 50px auto; display: block; border-radius: 50%"  src="@/assets/img.png"  alt="">

          <el-menu-item index="/father/home">
            <el-icon><House /></el-icon>
            首页
          </el-menu-item>

          <el-menu-item index="/father/course">
            <el-icon><DataAnalysis /></el-icon>
            课程
          </el-menu-item>

          <el-sub-menu >
            <template #title>
              <el-icon><user /></el-icon>
              <span>练习</span>
            </template>

            <el-menu-item index="">找错别字</el-menu-item>
            <el-menu-item index="">口算天天练</el-menu-item>
            <el-menu-item index="">英汉互译</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/father/class">
            <el-icon><DataAnalysis /></el-icon>
            班级
          </el-menu-item>

          <el-menu-item index="/father/homework">
            <el-icon><DataAnalysis /></el-icon>
            作业
          </el-menu-item>

        </el-menu>



      </div>


      <div style="flex: 1; width: 0; padding: 20px; background-color: white; border-radius: 12px; margin: 10px; border: 1px solid black">
        <RouterView/>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import {DataAnalysis, House, User} from "@element-plus/icons-vue";
import router from "@/router/index.js";


const currentTime = ref(new Date().toLocaleTimeString());

function updateTime() {
  currentTime.value = new Date().toLocaleTimeString();
}

onMounted(() => {
  const intervalId = setInterval(updateTime, 1000);
  onUnmounted(() => clearInterval(intervalId));
});

</script>

<style>
.el-menu .is-active {
  background-color: #e6ecf7 !important;
}
</style>