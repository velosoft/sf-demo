<template>
  <div class="flex-col page">
    <div class="flex-col per-header space-y-48">
      <div class="flex-row justify-center group">
        <div class="flex-row group_2 space-x-5">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477751443982111.png"
          />
          <span class="font_1">中国移动</span>
          <img class="image_2" src="../../assets/5573a1bcb7d4463f8e72669075dc917b.png" />
        </div>
        <span class="font_1">9:41 AM</span>
        <div class="flex-row group_3 space-x-2">
          <span class="font_1">100%</span>
          <img class="image_3" src="../../assets/e8caaa5664029acc840a5ba00ca49e14.png" />
        </div>
      </div>
      <div class="flex-row per-con space-x-17">
        <img class="avatar" src="../../assets/31e975949f6e5b764ae732a357a8b62d.png" />
        <div class="flex-col items-start per-infor space-y-7">
          <span class="per-name">唐小阳</span>
          <span class="font_2 per-describe">生命不息，折腾不止！</span>
        </div>
      </div>
    </div>

    <div class="flex-row equal-division">
      <div class="flex-col items-center equal-division-item space-y-4">
        <span class="font_3">0</span>
        <span class="font_2">面试</span>
      </div>
      <div class="flex-col items-center equal-division-item space-y-4">
        <span class="font_3">1</span>
        <span class="font_2">已投递</span>
      </div>
      <div class="flex-col items-center equal-division-item space-y-4">
        <span class="font_3">6</span>
        <span class="font_2">关注</span>
      </div>
    </div>
    <van-cell-group class="list">
      <van-field
        label="基础信息"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        v-model="inputValue_5ljoljPe"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/9574758210f99b3fb5ef61ef90feeda7.png" />
          <span class="font_4 text">基础信息</span>
        </div>
      </van-field>
      <van-field
        label="添加简历"
        placeholder="已完成80%"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        input-align="right"
        v-model="inputValue_4DnLbgQg"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/e3d70b1e634534e16f664d6b868a3e6c.png" />
          <span class="font_4 text">添加简历</span>
        </div>
      </van-field>
      <van-field
        label="附件简历"
        placeholder="未上传"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        input-align="right"
        v-model="inputValue_Gui6bAh3"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/c7ea34564cae906ec91876b31cf01db5.png" />
          <span class="font_4 text">附件简历</span>
        </div>
      </van-field>
      <van-field
        label="推荐奖励"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        v-model="inputValue_lefMqt2v"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/1b377d5632a71496af66d3580ccfc847.png" />
          <span class="font_4 text">推荐奖励</span>
        </div>
      </van-field>
      <van-field
        label="我的关注"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        v-model="inputValue_IIuVcQG5"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/91bf7f64a0c2889fd1260176f5875e62.png" />
          <span class="font_4 text">我的关注</span>
        </div>
      </van-field>
      <van-field
        label="求职意向"
        placeholder="文员、信息安全专员"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        input-align="right"
        v-model="inputValue_hG7eUW05"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/2788b967904adf09fda53db3baa168f0.png" />
          <span class="font_4 text">求职意向</span>
        </div>
      </van-field>
      <van-field
        label="隐私设置"
        placeholder="关闭附件简历下载"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        input-align="right"
        v-model="inputValue_6GU0wu9u"
      >
        <div class="flex-row" slot="label">
          <img class="image_4" src="../../assets/2ba0905b81e314a40e46d0bdaecb71f5.png" />
          <span class="font_4 text">隐私设置</span>
        </div>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        inputValue_5ljoljPe: '',
        inputValue_4DnLbgQg: '',
        inputValue_Gui6bAh3: '',
        inputValue_lefMqt2v: '',
        inputValue_IIuVcQG5: '',
        inputValue_hG7eUW05: '',
        inputValue_6GU0wu9u: '',
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .per-header {
    padding: 0.25rem 0.38rem 4.38rem;
    background-image: url(https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/63574f0efe65f70012e54d8e/b8f5334bcf8872412a2546804665b259.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: 0% 0%;
  }
  .space-y-48 > *:not(:first-child) {
    margin-top: 3rem;
  }
  .group {
    position: relative;
  }
  .group_2 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .image {
    flex-shrink: 0;
    align-self: center;
    width: 2.13rem;
    height: 0.38rem;
  }
  .font_1 {
    font-size: 0.75rem;
    font-family: 'Heiti SC';
    line-height: 0.88rem;
    font-weight: 200;
    color: #ffffff;
  }
  .image_2 {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 0.81rem;
    height: 0.56rem;
  }
  .group_3 {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .space-x-2 > *:not(:first-child) {
    margin-left: 0.13rem;
  }
  .image_3 {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 1.56rem;
    height: 0.63rem;
  }
  .per-con {
    padding: 0 0.63rem;
  }
  .space-x-17 > *:not(:first-child) {
    margin-left: 1.06rem;
  }
  .avatar {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
  .per-infor {
    flex: 1 1 auto;
    align-self: center;
  }
  .space-y-7 > *:not(:first-child) {
    margin-top: 0.44rem;
  }
  .per-name {
    color: #ffffff;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 600;
    line-height: 1.56rem;
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    color: #717171;
  }
  .per-describe {
    color: #ededed;
    font-weight: 500;
  }
  .equal-division {
    padding: 0.063rem 0;
    background-color: #ffffff;
  }
  .equal-division-item {
    flex: 1 1 7.81rem;
    padding: 0.31rem 0;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 600;
    color: #333333;
  }
  .list {
    margin-top: 0.38rem;
  }
  .image_4 {
    flex-shrink: 0;
    border-radius: 50%;
    width: 1.88rem;
    height: 1.88rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text {
    margin: 0.31rem 0 0.31rem 0.63rem;
  }
  .page {
    padding-bottom: 0.81rem;
    background-color: #f7fafd;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .van-field {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .van-field >>> .van-field__value {
    color: #9b9b9b;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
    font-weight: 500;
  }
</style>
