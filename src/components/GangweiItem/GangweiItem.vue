<template>
  <div class="flex-col item_root">
    <div class="flex-row justify-between">
      <span class="txt-title">人力资源高级专员</span>
      <span class="txt_date">2018-01-24</span>
    </div>
    <div class="flex-row justify-between group view">
      <div class="flex-col space-y-8">
        <div class="flex-row group_2 items-center">
          <img
            class="icon_location"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735936288140.png"
          />
          <span class="font_normal text">深圳-科技园</span>
          <img
            class="icon_file"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477742016541672.png"
          />
          <span class="font_normal text_2">3-5年</span>
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477742456501041.png"
          />
          <span class="font_normal text_3">本科</span>
        </div>
        <div class="flex-col depart_wrapper"><span class="font_normal text_4">速运事业群仓储事业部</span></div>
      </div>
      <img
        class="icon-large"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/d2f559a988cdc9e71216f6ccaf503a37.png"
      />
    </div>
    <span class="font_normal text-time">有效期：2018年1月25日至2月14日</span>
    <div class="flex-row group view_2 space-x-8">
      <div class="flex-col items-start group_3">
        <img
          class="avatar_img"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477742486821908.png"
        />
        <img
          class="image_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477742933752964.png"
        />
      </div>
      <span class="font_normal txt_name">周毅（人事负责人）</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .item_root {
    padding: 0.75rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 0.31rem 0px #c0e2ff80;
    border-radius: 0.25rem;
  }
  .txt-title {
    color: #333333;
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    font-weight: 600;
    line-height: 1.56rem;
  }
  .txt_date {
    margin-top: 0.063rem;
    color: #717171;
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.25rem;
  }
  .group {
    padding: 0 0.063rem;
  }
  .view {
    margin-top: 0.38rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .group_2 {
    padding-left: 0.063rem;
  }
  .icon_location {
    flex-shrink: 0;
    align-self: center;
    width: 0.69rem;
    height: 0.88rem;
  }
  .font_normal {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    font-weight: 500;
    color: #767676;
  }
  .text {
    margin-left: 0.19rem;
  }
  .icon_file {
    margin-left: 0.88rem;
    flex-shrink: 0;
    align-self: center;
    width: 0.88rem;
    height: 0.81rem;
  }
  .text_2 {
    margin-left: 0.25rem;
  }
  .image {
    margin-left: 0.88rem;
    flex-shrink: 0;
    align-self: center;
    width: 0.88rem;
    height: 0.69rem;
  }
  .text_3 {
    margin-left: 0.25rem;
  }
  .depart_wrapper {
    padding: 0.13rem;
    align-self: flex-start;
    background-color: #f4f5f7;
    border-radius: 0.13rem;
  }
  .text_4 {
    margin-left: 0.13rem;
    margin-right: 0.31rem;
    color: #999999;
  }
  .icon-large {
    border-radius: 50%;
    width: 1.88rem;
    height: 1.88rem;
  }
  .text-time {
    margin-left: 0.063rem;
    margin-top: 0.5rem;
    align-self: flex-start;
    color: #333333;
  }
  .view_2 {
    margin-top: 0.75rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .group_3 {
    padding-bottom: 0.063rem;
    width: 2.25rem;
    position: relative;
  }
  .avatar_img {
    border-radius: 50%;
    width: 1.94rem;
    height: 1.94rem;
  }
  .image_2 {
    width: 0.75rem;
    height: 0.88rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .txt_name {
    align-self: center;
    color: #717171;
    font-weight: unset;
  }
</style>