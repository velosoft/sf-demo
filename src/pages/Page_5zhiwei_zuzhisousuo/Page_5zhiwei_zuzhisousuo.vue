<template>
  <div class="flex-col page">
    <div class="flex-col section space-y-6">
      <div class="flex-row justify-center group">
        <div class="flex-row group_2 space-x-5">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477760469366916.png"
          />
          <span class="text">中国移动</span>
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477759388263093.png"
          />
        </div>
        <span class="font_1">9:41 AM</span>
        <div class="flex-row group_3">
          <span class="font_1">100%</span>
          <img
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477759357520707.png"
          />
        </div>
      </div>
      <div class="flex-row group_4 space-x-20">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477758165413229.png"
        />
        <div class="flex-row section_2 space-x-10">
          <span class="font_2 text_2">深圳</span>
          <img
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477758190743609.png"
          />
          <div class="flex-col group_5">
            <span class="font_2 text_3">请输入职位/组织名称</span>
            <div class="section_3"></div>
          </div>
        </div>
        <span class="text_4">搜索</span>
      </div>
    </div>
    <EmptySearchPanel class="group_6" />
  </div>
</template>

<script>
  import EmptySearchPanel from '../../components/EmptySearchPanel/EmptySearchPanel.vue';

  export default {
    components: { EmptySearchPanel },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 25.13rem;
    background-color: #f7fafd;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .section {
    padding: 0.25rem 0 4.94rem;
    background-color: #ffffff;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .group {
    padding: 0 0.38rem 0.063rem;
    position: relative;
  }
  .group_2 {
    position: absolute;
    left: 0.41rem;
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
  .text {
    color: #030303;
    font-size: 0.75rem;
    font-family: 'Heiti SC';
    font-weight: 200;
    line-height: 0.88rem;
  }
  .image_2 {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 0.81rem;
    height: 0.56rem;
  }
  .font_1 {
    font-size: 0.75rem;
    font-family: 'Helvetica';
    line-height: 0.88rem;
    color: #030303;
  }
  .group_3 {
    position: absolute;
    right: 0.34rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .image_3 {
    margin: 0.13rem 0 0.19rem 0.13rem;
    flex-shrink: 0;
    width: 1.56rem;
    height: 0.63rem;
  }
  .group_4 {
    padding: 0 0.75rem;
  }
  .space-x-20 > *:not(:first-child) {
    margin-left: 1.25rem;
  }
  .image_4 {
    flex-shrink: 0;
    align-self: center;
    width: 0.56rem;
    height: 0.94rem;
  }
  .section_2 {
    padding: 0.5rem 0.69rem 0.25rem;
    flex: 1 1 auto;
    background-color: #f5f5f5;
    border-radius: 1.03rem;
    height: 2.06rem;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .font_2 {
    font-size: 0.94rem;
    font-family: 'PingFang SC';
    line-height: 1.31rem;
  }
  .text_2 {
    color: #1f1f1f;
  }
  .image_5 {
    align-self: center;
    width: 0.63rem;
    height: 0.38rem;
  }
  .group_5 {
    position: relative;
  }
  .text_3 {
    color: #999999;
  }
  .section_3 {
    background-color: #2a83ff;
    width: 0.063rem;
    height: 1.06rem;
    position: absolute;
    left: 0.094rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .text_4 {
    align-self: center;
    color: #666666;
    font-size: 0.94rem;
    font-family: 'Hiragino Sans GB';
    font-weight: 300;
    line-height: 0.94rem;
  }
  .group_6 {
    position: relative;
    margin-top: -4.38rem;
  }
</style>