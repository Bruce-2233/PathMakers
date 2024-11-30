<template>
  <div class="page-container">
    <!-- 轮播图部分 -->
    <div class="carousel-container">
      <el-carousel :interval="4000" type="card" height="300px">
        <!-- 使用图片数组来渲染轮播图项 -->
        <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
          <img :src="item" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 页面主体部分 -->
    <div class="content-wrapper">
      <!-- 时间轴部分 -->
      <div class="timeline-container">
        <el-timeline style="max-width: 400px;">
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>数学作业一</h4>
              <p>Tom committed 2024/12/22 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>蜀道难课文预习</h4>
              <p>Tom committed 2024/12/11 18:30</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>每周英语小测</h4>
              <p>Tom committed 2024/12/1 0:00</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <!-- layout 部分（班级通知、待办事项、留言小帖） -->
      <div class="tabs-container">
        <el-tabs v-model="activeTab" type="card">
          <el-tab-pane label="班级通知" name="class-notifications">
            <el-card v-for="(notification, index) in classNotifications" :key="index" class="notification-card">
              <h4>{{ notification }}</h4>
            </el-card>
          </el-tab-pane>

          <el-tab-pane label="待办事项" name="to-do-items">
            <el-card v-for="(item, index) in toDoItems" :key="index" class="to-do-card">
              <h4>{{ item }}</h4>
            </el-card>
          </el-tab-pane>

          <el-tab-pane label="留言小帖" name="messages">
            <el-card v-for="(message, index) in messages" :key="index" class="message-card">
              <h4>{{ message }}</h4>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 当前激活的标签页
const activeTab = ref('class-notifications');

// 存储图片路径的数组
const carouselImages = ref([
  'https://th.bing.com/th/id/OIP.YiRNiNq0Ver14Y9AM6hYFQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://th.bing.com/th/id/OIP.oanO5r3d8MJhHKZtNGrFJAHaEK?w=309&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://th.bing.com/th/id/OIP.ycJoi8nGqqvcmQff_2KgogHaFC?w=186&h=126&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  'https://th.bing.com/th/id/OIP.12-_kyUOaQNp2ZGgZD0eNgHaFA?w=186&h=126&c=7&r=0&o=5&dpr=1.5&pid=1.7',
]);

// 班级通知数据
const classNotifications = ref([
  '元旦放假通知：元旦放假日期为1月1日至1月3日',
  '本周五下午将组织篮球比赛，请同学们踊跃报名。',
  '下周三是期中考试，请注意复习。',
]);

// 待办事项数据
const toDoItems = ref([
  '完成期末论文',
  '准备班级聚会',
]);

// 留言小帖数据
const messages = ref([
  '同学们，有没有谁知道哪里有卖二手书的？',
  '下周五有个班级活动，大家记得参加哦！',
  '请大家记得带上运动鞋，参加篮球比赛。',
]);
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-container {
  margin-bottom: 20px; /* 设置轮播图和下方内容之间的间距 */
}

.content-wrapper {
  display: flex;
  justify-content: space-between; /* 让时间轴和标签切换部分并排显示 */
  gap: 20px; /* 控制两部分之间的间距 */
}

.timeline-container {
  width: 35%; /* 设置时间轴部分的宽度 */
}

.tabs-container {
  width: 60%; /* 设置 layout 部分的宽度 */
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-header {
  background-color: deepskyblue; /* 修改 header 背景颜色 */
}

.el-tabs {
  margin-top: 20px;
}

.el-card {
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
}

.el-timeline-item .el-card {
  padding: 8px 0; /* 调整时间轴项的上下内边距，控制项的高度 */
  height: auto; /* 自动适应高度 */
}

.notification-card, .to-do-card, .message-card {
  margin-bottom: 10px;
}

h4 {
  font-size: 14px;
  color: #333;
}
</style>
