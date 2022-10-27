<template>
  <div class="flex-col page">
    <div class="flex-col page_content">
      <div class="flex-col">
        <div class="flex-col group">
          <div class="flex-col section space-y-6">
            <div class="flex-row justify-center group_2">
              <div class="flex-row group_3 space-x-5">
                <img
                  class="image_2"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477747394296774.png"
                />
                <span class="font_1">中国移动</span>
                <img
                  class="image_3"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746940644839.png"
                />
              </div>
              <span class="font_1">9:41 AM</span>
              <div class="flex-row group_4 space-x-2">
                <span class="font_1">100%</span>
                <img
                  class="image"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746739004126.png"
                />
              </div>
            </div>
            <div class="flex-col">
              <div class="flex-row justify-center section_2 space-x-8">
                <img
                  class="image_4"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735899753003.png"
                />
                <span class="text">请搜索职位/组织名称</span>
              </div>
              <div class="flex-col items-center group_5">
                <img
                  class="image_5"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735855801104.png"
                />
                <img
                  class="image_6"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/c6384d842c4bd561cbfed970ea9a9bb6.png"
                />
              </div>
            </div>
          </div>
          <div class="flex-row justify-between section_3">
            <span class="font_3 text_3">最新发布</span>
            <span class="font_2 text_2">推荐职位</span>
            <div class="section_4"></div>
          </div>
        </div>
        <div class="flex-row justify-between group_6">
          <div class="flex-row space-x-8">
            <div class="section_5"></div>
            <div class="section_6"></div>
            <div class="section_7"></div>
          </div>
          <div class="section_8"></div>
        </div>
      </div>
      <div class="flex-col group_8 space-y-7">
        <div class="section_9"></div>
        <div class="section_9"></div>
      </div>
      <div class="section_10"></div>
    </div>
    <div class="flex-col popup_mask"><TuijianPopupPanle /></div>
  </div>
</template>

<script>
  import TuijianPopupPanle from '../../components/TuijianPopupPanle/TuijianPopupPanle.vue';

  export default {
    components: { TuijianPopupPanle },
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    position: relative;
  }
  .page_content {
    background-color: #f7fafd;
  }
  .group {
    border-bottom: solid 0.063rem #eeeeee;
  }
  .section {
    padding-top: 0.25rem;
    background-color: #12100e;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .group_2 {
    padding: 0 0.38rem;
    position: relative;
  }
  .group_3 {
    position: absolute;
    left: 0.41rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .image_2 {
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
  .image_3 {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 0.81rem;
    height: 0.56rem;
  }
  .group_4 {
    position: absolute;
    right: 0.34rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .space-x-2 > *:not(:first-child) {
    margin-left: 0.13rem;
  }
  .image {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 1.56rem;
    height: 0.63rem;
  }
  .section_2 {
    padding: 0.5rem 0;
    align-self: center;
    background-color: #ffffff;
    border-radius: 1.03rem;
    width: 19.56rem;
  }
  .space-x-8 > *:not(:first-child) {
    margin-left: 0.5rem;
  }
  .image_4 {
    width: 1rem;
    height: 1.06rem;
  }
  .text {
    margin-top: 0.13rem;
    color: #cdcdcd;
    font-size: 0.94rem;
    font-family: 'Hiragino Sans GB';
    font-weight: 300;
    line-height: 0.94rem;
  }
  .group_5 {
    position: relative;
  }
  .image_5 {
    width: 23.44rem;
    height: 8.37rem;
  }
  .image_6 {
    width: 1.13rem;
    height: 0.25rem;
    position: absolute;
    bottom: 0.56rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .section_3 {
    padding: 0.69rem 3.81rem 0.63rem 4.13rem;
    background-color: #ffffff;
    position: relative;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #333333;
  }
  .text_3 {
    margin-top: 0.13rem;
    font-weight: 500;
  }
  .font_2 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    color: #333333;
  }
  .text_2 {
    color: #6e7ffe;
    font-weight: 500;
  }
  .section_4 {
    background-color: #6e7ffe;
    width: 1.31rem;
    height: 0.19rem;
    position: absolute;
    right: 5.25rem;
    top: 2.5rem;
  }
  .group_6 {
    padding: 0.63rem 0.31rem 0 4.38rem;
  }
  .section_5 {
    background-color: #1dce9e;
    box-shadow: 0px 0.13rem 0.25rem 0px #4fedc3;
    border-radius: 0.81rem;
    width: 3.44rem;
    height: 1.63rem;
    position: relative;
  }
  .section_6 {
    background-color: #ff6c6c;
    box-shadow: 0px 0.13rem 0.25rem 0px #ffc5c5;
    border-radius: 0.81rem;
    width: 3.44rem;
    height: 1.63rem;
    position: relative;
  }
  .section_7 {
    background-color: #7288fc;
    box-shadow: 0px 0.13rem 0.25rem 0px #cacdff;
    border-radius: 0.81rem;
    width: 4.75rem;
    height: 1.63rem;
  }
  .section_8 {
    background-color: #858585;
    box-shadow: 0px 0.13rem 0.25rem 0px #9f9f9f80;
    border-radius: 50%;
    width: 1.63rem;
    height: 1.63rem;
  }
  .group_8 {
    margin-top: 3.31rem;
    padding: 0 0.31rem;
  }
  .space-y-7 > *:not(:first-child) {
    margin-top: 0.44rem;
  }
  .section_9 {
    background-color: #ffffff;
    box-shadow: 0px 0px 0.31rem 0px #c0e2ff80;
    border-radius: 0.25rem;
    height: 10.5rem;
  }
  .section_10 {
    margin-top: 2.06rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 1.25rem 0px #c0e2ffad;
    height: 3.13rem;
  }
  .popup_mask {
    padding-top: 15.63rem;
    background-color: #00000066;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
</style>