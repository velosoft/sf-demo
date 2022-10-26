<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-between section">
        <span class="text">09:41</span>
        <div class="flex-row space-x-4 group">
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
      <div class="flex-row justify-center section_2">
        <img
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733070843855611.png"
        />
        <span class="text_2">事件详情</span>
        <div class="flex-row section_3">
          <img
            class="image_6"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733070968997016.png"
          />
          <div class="section_4"></div>
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733070903357730.png"
          />
        </div>
      </div>
    </div>
    <div class="flex-col group_2">
      <div class="flex-col space-y-17 section_5">
        <div class="flex-col">
          <div class="flex-row space-x-29 section_6">
            <span class="font_1">事件名称</span>
            <div class="flex-row justify-center space-x-16 group_3">
              <span class="font_1">二级事件</span>
              <span class="font_1">二级发生率</span>
              <span class="font_1">三级事件</span>
              <span class="font_1">三级发生率</span>
            </div>
          </div>
          <div class="flex-row space-x-10 group_4">
            <div class="flex-col items-center text-wrapper"><span class="font_2">接地速度小</span></div>
            <div class="flex-col items-center text-wrapper_2"><span class="font_3">4</span></div>
            <div class="flex-col items-center text-wrapper_3"><span class="font_3">7.8431%</span></div>
            <div class="flex-col items-center text-wrapper_4"><span class="font_3">4</span></div>
            <div class="flex-col items-center text-wrapper_5"><span class="font_3">7.8431%</span></div>
          </div>
        </div>
        <div class="flex-col space-y-19 group_5">
          <div class="flex-col space-y-17">
            <div class="flex-row justify-between">
              <span class="font_2">着陆坡度大</span>
              <span class="font_3">4</span>
              <span class="font_3">7.8431%</span>
              <span class="font_3">4</span>
              <span class="font_3 text_3">7.8431%</span>
            </div>
            <div class="flex-row group_6">
              <span class="font_4 text_4">50英尺接地距离大</span>
              <span class="font_3 text_5">4</span>
              <span class="font_3 text_6">7.8431%</span>
              <span class="font_3 text_7">4</span>
              <span class="font_3 text_8">7.8431%</span>
            </div>
          </div>
          <div class="flex-row justify-between">
            <span class="font_2">接地速度小</span>
            <span class="font_3">4</span>
            <span class="font_3">7.8431%</span>
            <span class="font_3">4</span>
            <span class="font_3 text_9">7.8431%</span>
          </div>
          <div class="flex-col space-y-17">
            <div class="flex-row justify-between">
              <span class="font_2">着陆坡度大</span>
              <span class="font_3">4</span>
              <span class="font_3">7.8431%</span>
              <span class="font_3">4</span>
              <span class="font_3 text_10">7.8431%</span>
            </div>
            <div class="flex-row group_7">
              <span class="font_4 text_4">50英尺接地距离大</span>
              <span class="font_3 text_11">4</span>
              <span class="font_3 text_12">7.8431%</span>
              <span class="font_3 text_13">4</span>
              <span class="font_3 text_14">7.8431%</span>
            </div>
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

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #f5f5f5;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    padding-bottom: 0.13rem;
    height: 5.63rem;
  }
  .section {
    padding: 0.75rem 0.88rem 0.88rem 1.88rem;
    background-color: #ffffff;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
  }
  .group {
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
  .section_2 {
    padding: 0.75rem 1rem 0.69rem;
    background-color: #ffffff;
    box-shadow: 0px 0.13rem 0.25rem 0px #dfdfdf80;
    position: relative;
  }
  .image_5 {
    align-self: center;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    height: 0.88rem;
  }
  .text_2 {
    align-self: center;
    color: #333333;
    font-size: 1.13rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.31rem;
  }
  .section_3 {
    padding: 0.25rem 0.5rem 0.25rem 0.56rem;
    border-radius: 1rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    border: solid 0.063rem #c8cbcf;
  }
  .image_6 {
    align-self: center;
    width: 1.13rem;
    height: 0.25rem;
  }
  .section_4 {
    margin: 0.19rem 0 0.13rem 0.63rem;
    background-color: #c8cbcf;
    width: 0.063rem;
    height: 1.06rem;
  }
  .image_4 {
    margin-left: 0.63rem;
    width: 1.38rem;
    height: 1.38rem;
  }
  .group_2 {
    padding: 0.5rem 0 17.5rem;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .section_5 {
    margin-left: 0.44rem;
    margin-right: 0.5rem;
    padding-bottom: 0.75rem;
    background-color: #ffffff;
    box-shadow: 0px 0.13rem 0.31rem 0px #d2e0f280;
    border-radius: 0.25rem;
  }
  .space-y-17 > *:not(:first-child) {
    margin-top: 1.06rem;
  }
  .section_6 {
    padding: 0.63rem 0.63rem;
    background-color: #ffffff;
    box-shadow: 0px 0.13rem 0.25rem 0px #d2e0f280;
    border-radius: 0.25rem 0px 0px 0px;
    position: relative;
  }
  .space-x-29 > *:not(:first-child) {
    margin-left: 1.81rem;
  }
  .font_1 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    color: #333333;
  }
  .group_3 {
    flex: 1 1 auto;
  }
  .space-x-16 > *:not(:first-child) {
    margin-left: 1rem;
  }
  .group_4 {
    padding: 0.56rem 0.63rem 0;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .text-wrapper {
    flex: 1 1 3.75rem;
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    font-weight: 600;
    color: #808080;
  }
  .text-wrapper_2 {
    flex: 1 1 3.75rem;
  }
  .font_3 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    font-weight: 600;
    color: #333333;
  }
  .text-wrapper_3 {
    flex: 1 1 3.75rem;
  }
  .text-wrapper_4 {
    flex: 1 1 3.75rem;
  }
  .text-wrapper_5 {
    flex: 1 1 3.75rem;
  }
  .group_5 {
    padding: 0 0.63rem;
  }
  .space-y-19 > *:not(:first-child) {
    margin-top: 1.19rem;
  }
  .text_3 {
    margin-right: 0.31rem;
  }
  .group_6 {
    margin-right: 0.31rem;
  }
  .font_4 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.19rem;
    font-weight: 600;
    color: #808080;
  }
  .text_4 {
    text-align: left;
    width: 3.94rem;
  }
  .text_5 {
    margin-left: 2.13rem;
    flex-shrink: 0;
  }
  .text_6 {
    margin-left: 2.63rem;
    flex-shrink: 0;
  }
  .text_7 {
    margin-left: 2.5rem;
    flex-shrink: 0;
  }
  .text_8 {
    margin-left: 2.63rem;
    flex-shrink: 0;
  }
  .text_9 {
    margin-right: 0.31rem;
  }
  .text_10 {
    margin-right: 0.31rem;
  }
  .group_7 {
    margin-right: 0.31rem;
  }
  .text_11 {
    margin-left: 2.13rem;
    flex-shrink: 0;
  }
  .text_12 {
    margin-left: 2.63rem;
    flex-shrink: 0;
  }
  .text_13 {
    margin-left: 2.5rem;
    flex-shrink: 0;
  }
  .text_14 {
    margin-left: 2.63rem;
    flex-shrink: 0;
  }
</style>