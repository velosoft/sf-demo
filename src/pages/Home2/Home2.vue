<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-between group">
        <span class="text">09:41</span>
        <div class="flex-row group_2 space-x-4">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733071044302262.png"
          />
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733071017240790.png"
          />
          <img class="image_3" src="../../assets/1725fca8dcf60a83d3d881a28b7c3972.png" />
        </div>
      </div>
      <div class="flex-row justify-between section">
        <div class="flex-col items-center group_3">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733077995690659.png"
          />
          <div class="section_2"></div>
        </div>
        <div class="flex-col items-center badge"><span class="text_2">1</span></div>
        <div class="flex-col text-wrapper"><span class="text_3">待办</span></div>
        <div class="flex-col items-center image-wrapper">
          <img
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733078526395642.png"
          />
        </div>
      </div>
    </div>
    <div class="flex-col group_4">
      <div class="flex-col group_5">
        <div class="flex-col group_6 space-y-5" @click="onClick_View_11">
          <div class="flex-row justify-between">
            <div class="flex-row space-x-6">
              <span class="font_1">新机长监控评估</span>
              <div class="section_3"></div>
            </div>
            <span class="font_2 text_4">2021/07/22 12:55</span>
          </div>
          <div class="flex-row justify-between">
            <span class="font_3">新机长：姓名(工号)</span>
            <span class="font_3">飞行员所属组织</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex-col group_7 space-y-5">
          <div class="flex-row justify-between">
            <span class="font_1">新机长监控评估校对</span>
            <span class="font_2 text_5">2021/07/21 08:00</span>
          </div>
          <div class="flex-row justify-between">
            <span class="font_3">新机长：史孝存(01989778)</span>
            <span class="font_3">B757机队一分部</span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex-col group_7 space-y-5">
          <div class="flex-row justify-between">
            <span class="font_1">新机长监控评估审核</span>
            <span class="font_2 text_5">2021/07/21 08:00</span>
          </div>
          <div class="flex-row justify-between">
            <span class="font_3">新机长：张三(01989778)</span>
            <span class="font_3">B757机队一分部</span>
          </div>
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

    methods: {
      onClick_View_11() {
        this.$router.push({ name: 'Home2_2' });
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    height: 5.5rem;
  }
  .group {
    padding: 0.75rem 0.88rem 0.88rem 1.88rem;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
  }
  .group_2 {
    margin: 0.25rem 0 0.13rem;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .image {
    width: 1.06rem;
    height: 0.69rem;
  }
  .image_2 {
    width: 1rem;
    height: 0.69rem;
  }
  .image_3 {
    width: 1.53rem;
    height: 0.72rem;
  }
  .section {
    padding: 0.75rem 0.25rem 0.69rem;
    background-color: #ffffff;
    box-shadow: 0px 0.13rem 0.25rem 0px #dfdfdf80;
    position: relative;
  }
  .group_3 {
    margin-bottom: 0.19rem;
    width: 2.31rem;
  }
  .image_4 {
    width: 1rem;
    height: 0.94rem;
  }
  .section_2 {
    background-color: #444444;
    width: 0.34rem;
    height: 0.13rem;
  }
  .badge {
    padding-top: 0.063rem;
    background-color: #f55858;
    border-radius: 50%;
    width: 1.13rem;
    position: absolute;
    left: 1.56rem;
    top: 0.25rem;
  }
  .text_2 {
    color: #ffffff;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    font-weight: 600;
    line-height: 1.06rem;
  }
  .text-wrapper {
    position: relative;
  }
  .text_3 {
    color: #333333;
    font-size: 1.13rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.31rem;
  }
  .image-wrapper {
    margin-right: 0.13rem;
    margin-bottom: 0.13rem;
    width: 2.31rem;
    position: relative;
  }
  .image_5 {
    width: 1.13rem;
    height: 1.13rem;
  }
  .group_4 {
    padding-bottom: 18.75rem;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .group_5 {
    border-bottom: solid 0.063rem #e6e6e6;
  }
  .group_6 {
    padding: 0.63rem 0.94rem 0.5rem 1rem;
  }
  .space-x-6 > *:not(:first-child) {
    margin-left: 0.38rem;
  }
  .font_1 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    font-weight: 600;
    color: #333333;
  }
  .section_3 {
    flex-shrink: 0;
    align-self: center;
    background-color: #f55858;
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
  }
  .font_2 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 600;
    color: #333333;
  }
  .text_4 {
    margin-top: 0.13rem;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #666666;
  }
  .divider {
    margin-left: 1rem;
    background-color: #e6e6e6;
    height: 0.063rem;
  }
  .group_7 {
    padding: 0.63rem 0.94rem 0.38rem 1rem;
  }
  .space-y-5 > *:not(:first-child) {
    margin-top: 0.31rem;
  }
  .text_5 {
    margin-top: 0.13rem;
  }
</style>