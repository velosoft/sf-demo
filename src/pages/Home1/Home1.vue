<template>
  <div class="flex-col page">
    <div class="flex-col header space-y-18">
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
      <div class="flex-row justify-center group_3">
        <div class="flex-col group_4">
          <div class="flex-col items-start group_3">
            <img
              class="image_4"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733077995690659.png"
            />
            <div class="flex-col items-center badge"><span class="text_2">5</span></div>
          </div>
          <div class="section"></div>
        </div>
        <span class="text_3">应用</span>
        <img
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733091827567033.png"
        />
      </div>
    </div>
    <div class="flex-col group_5">
      <div class="flex-col group_6">
        <div class="flex-col items-center group_7">
          <img
            class="image_6"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733092145520973.png"
          />
          <img class="image_7" src="../../assets/5c76a5ef84f2cb8777a0b74ed47bf4a3.png" />
        </div>
        <div class="flex-row justify-between group_8">
          <span class="text_4">常用应用</span>
          <div class="flex-row space-x-21">
            <img
              class="image_8"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733102558808905.png"
            />
            <img
              class="image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733101209604283.png"
            />
          </div>
        </div>
        <div class="grid">
          <div class="flex-col items-center grid-item space-y-9" @click="onClick_View_19">
            <img class="image_10" src="../../assets/db8e8aaf8d6d30dd6226aa25e3b89c81.png" />
            <span class="font_1">XXXX</span>
          </div>
          <div class="flex-col items-center grid-item space-y-9">
            <img class="image_10" src="../../assets/db8e8aaf8d6d30dd6226aa25e3b89c81.png" />
            <span class="font_1">XXXX</span>
          </div>
          <div class="flex-col items-center grid-item space-y-9">
            <img class="image_10" src="../../assets/db8e8aaf8d6d30dd6226aa25e3b89c81.png" />
            <span class="font_1">XXXX</span>
          </div>
          <div class="flex-col items-center grid-item space-y-9">
            <img class="image_10" src="../../assets/db8e8aaf8d6d30dd6226aa25e3b89c81.png" />
            <span class="font_1">XXXX</span>
          </div>
          <div class="flex-col items-center grid-item space-y-9">
            <img class="image_10" src="../../assets/db8e8aaf8d6d30dd6226aa25e3b89c81.png" />
            <span class="font_1">XXXX</span>
          </div>
          <div class="flex-col items-center grid-item space-y-9">
            <img class="image_10" src="../../assets/8760c192ef447f15b05accbf5e1e6292.png" />
            <span class="font_1">新增应用</span>
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
      onClick_View_19() {
        this.$router.push({ name: 'Home1_1' });
      },
      onClick_View_19() {
        this.$router.push({ name: 'Home1_1' });
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
    padding: 0.75rem 0.88rem 0.81rem 1rem;
    height: 5.63rem;
  }
  .space-y-18 > *:not(:first-child) {
    margin-top: 1.13rem;
  }
  .group {
    padding-left: 0.88rem;
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
  .group_3 {
    padding-top: 0.5rem;
    position: relative;
  }
  .group_4 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.72rem;
  }
  .image_4 {
    width: 1rem;
    height: 0.94rem;
  }
  .badge {
    padding-top: 0.063rem;
    background-color: #f55858;
    border-radius: 50%;
    width: 1.13rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .text_2 {
    color: #ffffff;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    font-weight: 600;
    line-height: 1.06rem;
  }
  .section {
    margin-left: 0.31rem;
    align-self: flex-start;
    background-color: #444444;
    width: 0.34rem;
    height: 0.13rem;
  }
  .text_3 {
    color: #333333;
    font-size: 1.13rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.31rem;
  }
  .image_5 {
    position: absolute;
    right: 0.19rem;
    bottom: 0.19rem;
    width: 1rem;
    height: 1rem;
  }
  .group_5 {
    padding-bottom: 11.63rem;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .group_6 {
    padding: 0 0.38rem;
  }
  .group_7 {
    position: relative;
  }
  .image_6 {
    width: 22.69rem;
    height: 8.75rem;
  }
  .image_7 {
    width: 1.25rem;
    height: 0.25rem;
    position: absolute;
    bottom: 1.06rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .group_8 {
    margin-top: 0.5rem;
    padding: 0 0.63rem;
  }
  .text_4 {
    color: #333333;
    font-size: 1rem;
    font-family: '.AppleSystemUIFont';
    line-height: 1.13rem;
  }
  .space-x-21 > *:not(:first-child) {
    margin-left: 1.31rem;
  }
  .image_8 {
    width: 1.06rem;
    height: 1.13rem;
  }
  .image_9 {
    width: 1rem;
    height: 1.13rem;
  }
  .grid {
    margin: 0.75rem 0.5rem 0 0.44rem;
    height: 9.88rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-item {
    padding: 0.25rem 0 0.13rem;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
  }
  .image_10 {
    width: 3rem;
    height: 3rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1rem;
    font-weight: 200;
    color: #333333;
  }
</style>