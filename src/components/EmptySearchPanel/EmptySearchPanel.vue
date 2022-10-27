<template>
  <div class="flex-col group_5 view space-y-8">
    <div class="flex-col group_6 space-y-10">
      <span class="font_3 text_5">历史记录</span>
      <div class="flex-row justify-between">
        <div class="flex-row space-x-8">
          <img
            class="image_6 image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477758809846661.png"
          />
          <span class="text_6">信息安全文员</span>
        </div>
        <img
          class="image_6"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477758835314058.png"
        />
      </div>
    </div>
    <div class="flex-col section_4 space-y-14">
      <span class="font_3 text_7">热门职位推荐</span>
      <div class="flex-col space-y-8">
        <div class="flex-row justify-center space-x-6">
          <div class="flex-col items-center text-wrapper"><span class="font_4">初级专员</span></div>
          <div class="flex-col items-center text-wrapper"><span class="font_4">高级专员</span></div>
          <div class="flex-col items-center text-wrapper_2"><span class="font_4">信息技术信息安全</span></div>
          <div class="flex-col items-center text-wrapper_3"><span class="font_4">营运</span></div>
        </div>
        <div class="flex-row space-x-7">
          <div class="flex-col items-center text-wrapper"><span class="font_4">人力资源</span></div>
          <div class="flex-col items-center text-wrapper_4"><span class="font_4">UI设计</span></div>
        </div>
      </div>
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
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .group_6 {
    padding: 0.88rem 0.75rem 0.63rem 0.81rem;
    border-top: solid 0.063rem #eeeeee;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 0.63rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'Hiragino Sans GB';
    line-height: 0.88rem;
    font-weight: 300;
    color: #666666;
  }
  .text_5 {
    align-self: flex-start;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_6 {
    margin: 0.31rem 0;
    width: 0.63rem;
    height: 0.63rem;
  }
  .image_7 {
    flex-shrink: 0;
  }
  .text_6 {
    color: #000000;
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.25rem;
  }
  .section_4 {
    padding: 0.88rem 0.81rem 1rem;
    background-color: #ffffff;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-y-14 > *:not(:first-child) {
    margin-top: 0.88rem;
  }
  .text_7 {
    align-self: flex-start;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .text-wrapper {
    padding: 0.25rem 0 0.19rem;
    border-radius: 0.81rem;
    width: 4.75rem;
    height: 1.63rem;
    border: solid 0.063rem #d3d3d3;
  }
  .font_4 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    font-weight: 500;
    color: #666666;
  }
  .text-wrapper_2 {
    padding: 0.25rem 0 0.19rem;
    border-radius: 0.81rem;
    width: 7.63rem;
    height: 1.63rem;
    border: solid 0.063rem #d3d3d3;
  }
  .text-wrapper_3 {
    padding: 0.25rem 0 0.19rem;
    border-radius: 0.81rem;
    width: 3.38rem;
    height: 1.63rem;
    border: solid 0.063rem #d3d3d3;
  }
  .space-x-7 > *:not(:first-child) {
    margin-left: 0.44rem;
  }
  .text-wrapper_4 {
    padding: 0.25rem 0 0.19rem;
    border-radius: 0.81rem;
    width: 3.94rem;
    height: 1.63rem;
    border: solid 0.063rem #d3d3d3;
  }
</style>