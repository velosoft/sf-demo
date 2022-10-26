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
        <span class="text_2">新增执照</span>
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
      <div class="flex-col group_3">
        <span class="font_1 text_3">基础信息</span>
        <van-cell-group class="view">
          <van-field
            label="姓名"
            placeholder="请输入"
            v-bind:required="true"
            input-align="right"
            v-model="inputValue_87H6m556"
          ></van-field>
          <van-field
            label="执照编码"
            placeholder="请输入"
            v-bind:required="true"
            input-align="right"
            v-model="inputValue_J6PNkpWp"
          ></van-field>
          <van-field
            label="执照类别"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:required="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_kysy0hzV"
          ></van-field>
          <van-field
            label="英语等级"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:required="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_3whmT2EC"
          ></van-field>
          <van-field
            label="颁发日期"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:required="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_1Ow2H1ax"
          ></van-field>
        </van-cell-group>
      </div>
      <div class="flex-col group_12">
        <span class="font_1 text_6">机型签署信息</span>
        <van-cell-group class="section_6">
          <van-field
            label="签注1"
            placeholder="删除"
            v-bind:required="true"
            input-align="right"
            v-model="inputValue_5CveSXO3"
          ></van-field>
          <van-field
            label="机型"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_EnXImY7x"
          ></van-field>
          <van-field
            label="签署日期"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_D2milTWf"
          ></van-field>
          <van-field
            label="有效日期"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_CRfW1Q8O"
          ></van-field>
        </van-cell-group>
        <van-cell-group class="view_3">
          <van-field
            label="签注2"
            placeholder="删除"
            v-bind:required="true"
            input-align="right"
            v-model="inputValue_BclRGgbv"
          ></van-field>
          <van-field
            label="机型"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_DpU7fnRb"
          ></van-field>
          <van-field
            label="签署日期"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_E0llC35u"
          ></van-field>
          <van-field
            label="有效日期"
            placeholder="请选择"
            v-bind:readonly="true"
            v-bind:clickable="true"
            v-bind:is-link="true"
            input-align="right"
            v-model="inputValue_4yxVhybM"
          ></van-field>
        </van-cell-group>
        <div class="flex-row justify-center section_7">
          <img
            class="image_8"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733087161572456.png"
          />
          <span class="font_6 text_8">新增签注</span>
        </div>
        <div class="flex-col section_8">
          <div class="flex-row justify-between group_10">
            <div class="flex-row space-x-2">
              <div class="flex-col items-center text-wrapper"><span class="font_4">*</span></div>
              <span class="font_2">执照附件</span>
            </div>
            <span class="font_3 text_9">上传附件</span>
          </div>
          <div class="flex-row justify-between section_9">
            <div class="flex-row space-x-10">
              <img
                class="image_9"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733082719616879.png"
              />
              <span class="font_2 text_10">1232文件名.jpg</span>
            </div>
            <img
              class="image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62ce05105a7e3f0310f6d4fc/634cbc1bf9b4a40011d9ba3f/16659733088766183628.png"
            />
          </div>
        </div>
        <div class="flex-col items-center button"><span class="font_6 text_11">提交</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        inputValue_87H6m556: '',
        inputValue_J6PNkpWp: '',
        inputValue_kysy0hzV: '',
        inputValue_3whmT2EC: '',
        inputValue_1Ow2H1ax: '',
        inputValue_5CveSXO3: '',
        inputValue_EnXImY7x: '',
        inputValue_D2milTWf: '',
        inputValue_CRfW1Q8O: '',
        inputValue_BclRGgbv: '',
        inputValue_DpU7fnRb: '',
        inputValue_E0llC35u: '',
        inputValue_4yxVhybM: '',
      };
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
    padding-bottom: 0.063rem;
    height: 5.56rem;
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
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .group {
    margin: 0.25rem 0 0.13rem;
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
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .group_3 {
    padding-top: 0.56rem;
  }
  .font_1 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #999999;
  }
  .text_3 {
    margin-left: 0.94rem;
    align-self: flex-start;
  }
  .view {
    margin-top: 0.38rem;
  }
  .text-wrapper {
    flex-shrink: 0;
    align-self: center;
    overflow: hidden;
    width: 0.5rem;
    height: 0.56rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 0.88rem;
    color: #d3494d;
  }
  .font_2 {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    color: #333333;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #808080;
  }
  .group_10 {
    padding: 0.63rem 0;
  }
  .group_12 {
    padding: 1.31rem 0 0.94rem;
  }
  .text_6 {
    margin-left: 0.94rem;
    align-self: flex-start;
  }
  .section_6 {
    margin-top: 0.31rem;
  }
  .view_3 {
    margin-top: 0.56rem;
  }
  .section_7 {
    padding: 0.63rem 0;
    background-color: #f2f2f2;
    border-bottom: solid 0.063rem #e6e6e6;
  }
  .image_8 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .font_6 {
    font-size: 1rem;
    font-family: 'Hiragino Sans GB';
    line-height: 1rem;
  }
  .text_8 {
    margin: 0.25rem 0 0.25rem 0.5rem;
    color: #333333;
    font-weight: 300;
  }
  .section_8 {
    margin-top: 0.31rem;
    padding: 0 0.38rem 0.56rem;
    background-color: #ffffff;
    border-top: solid 0.063rem #e6e6e6;
    border-bottom: solid 0.063rem #e6e6e6;
  }
  .space-x-2 > *:not(:first-child) {
    margin-left: 0.13rem;
  }
  .text_9 {
    margin-right: 0.81rem;
    color: #5779d7;
    font-weight: 600;
  }
  .section_9 {
    margin: 0.38rem 0.19rem 0 0.25rem;
    padding: 0.63rem 0.63rem;
    background-color: #ffffff;
    box-shadow: 0px 0.13rem 0.31rem 0px #61616180;
    border-radius: 0.25rem;
  }
  .space-x-10 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .image_9 {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
  }
  .text_10 {
    font-weight: 600;
  }
  .image_10 {
    margin: 0.13rem 0;
    width: 1rem;
    height: 1.13rem;
  }
  .button {
    margin-top: 0.44rem;
    padding: 1rem 0;
    align-self: center;
    background-color: #4f6cbe;
    box-shadow: 0px 0.13rem 0.25rem 0px #4a6ac480;
    border-radius: 0.25rem;
    width: 19.19rem;
  }
  .text_11 {
    color: #ffffff;
    font-weight: 600;
  }
  .van-field >>> .van-field__label {
    color: #333333;
    font-family: 'PingFang SC';
    font-size: 1rem;
    line-height: 1.38rem;
  }
  .van-field >>> .van-field__value {
    color: #808080;
    font-family: 'PingFang SC';
    font-size: 0.88rem;
    line-height: 1.25rem;
    font-weight: 500;
  }
  .van-field {
    padding-top: 0.69rem;
    padding-bottom: 0.63rem;
  }
</style>