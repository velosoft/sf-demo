<template>
  <div class="flex-col page space-y-10">
    <div class="flex-col section space-y-6">
      <div class="flex-row justify-center group" style="opacity: 0;">
        <div class="flex-row group_2 space-x-5">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477762684420707.png"
          />
          <span class="text">中国移动</span>
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477762632161566.png"
          />
        </div>
        <span class="font_1">9:41 AM</span>
        <div class="flex-row group_3">
          <span class="font_1">100%</span>
          <img
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477762138115528.png"
          />
        </div>
      </div>
      <div class="flex-row group_4">
        <img
          class="image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477761321512097.png"
          @click="onClick_Image"
        />
        <van-search
          class="section_2 search_oZNVWY1Q"
          placeholder="请输入"
          v-model="search_oZNVWY1Q"
          @search="onSearch_oZNVWY1Q"
        >
          <div class="flex-row space-x-10" @click="onShowPicker_View_25" slot="left-icon">
            <span class="font_2 text_2">深圳</span>
            <img
              class="image_5"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477758190743609.png"
            />
          </div>
        </van-search>
        <span class="text_4">搜索</span>
      </div>
    </div>
    <div class="flex-col list">
      <GangweiItem :key="i" v-for="(item, i) in list_ER4CTiSC" />
    </div>
    <van-popup v-model="showPicker_View_25" position="bottom">
      <van-picker
        :columns="columnsPicker_View_25"
        @confirm="onConfirmPicker_View_25"
        @cancel="onCancelPicker_View_25"
        :show-toolbar="true"
        title="标题"
        confirm-button-text="确认"
        cancel-button-text="取消"
      />
    </van-popup>
  </div>
</template>

<script>
  import GangweiItem from '../../components/GangweiItem/GangweiItem.vue';

  export default {
    components: { GangweiItem },
    data() {
      return {
        showPicker_View_25: false,
        valuePicker_View_25: null,
        columnsPicker_View_25: ['选项1', '选项2', '选项3'],
        search_oZNVWY1Q: '',
        list_ER4CTiSC: [null, null],
      };
    },

    methods: {
      onClick_Image() {
        this.$router.back();
      },
      onShowPicker_View_25() {
        this.showPicker_View_25 = true;
      },
      onCancelPicker_View_25() {
        this.showPicker_View_25 = false;
      },
      onConfirmPicker_View_25(value) {
        this.valuePicker_View_25 = value;
        this.showPicker_View_25 = false;
      },

      onSearch_oZNVWY1Q(event) {
        console.log('search: ', event);
      },
    },
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 15.38rem;
    background-color: #f7fafd;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .space-y-10 > *:not(:first-child) {
    margin-top: 0.63rem;
  }
  .section {
    padding: 0.25rem 0.38rem 0.44rem;
    background-color: #ffffff;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .group {
    padding-bottom: 0.063rem;
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
    right: 0;
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
    padding: 0 0.38rem;
  }
  .image_4 {
    flex-shrink: 0;
    align-self: center;
    width: 0.56rem;
    height: 0.94rem;
  }
  .section_2 {
    flex: 1 1 auto;
    margin-left: 1.25rem;
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
    flex-shrink: 0;
    align-self: center;
    width: 0.63rem;
    height: 0.38rem;
  }
  .text_4 {
    margin-left: 1.19rem;
    align-self: center;
    color: #666666;
    font-size: 0.94rem;
    font-family: 'Hiragino Sans GB';
    font-weight: 300;
    line-height: 0.94rem;
  }
  .list {
    padding: 0 0.31rem;
  }
  .van-search {
    background-color: #f5f5f5;
    border-radius: 1.03rem;
    padding: 0;
  }
  .van-search__content {
    background-color: #f5f5f5;
    border-radius: 1.03rem;
  }
  /deep/.search_oZNVWY1Q.van-search .van-field__control {
    color: #333333;
    font-family: 'PingFang SC';
    font-size: 0.94rem;
    line-height: 1.31rem;
  }
  :deep(.search_oZNVWY1Q.van-search) .van-field__control {
    color: #333333;
    font-family: 'PingFang SC';
    font-size: 0.94rem;
    line-height: 1.31rem;
  }
  /deep/.search_oZNVWY1Q.van-search .van-icon-clear {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  :deep(.search_oZNVWY1Q.van-search) .van-icon-clear {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  /deep/.search_oZNVWY1Q.van-search .van-search__label {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  :deep(.search_oZNVWY1Q.van-search) .van-search__label {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  /deep/.search_oZNVWY1Q.van-search .van-cell {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  :deep(.search_oZNVWY1Q.van-search) .van-cell {
    line-height: 1;
    padding: 0;
    margin: 0;
  }
  /deep/.search_oZNVWY1Q.van-search .van-search__content {
    padding: 0.44rem 0.69rem;
    align-items: center;
  }
  :deep(.search_oZNVWY1Q.van-search) .van-search__content {
    padding: 0.44rem 0.69rem;
    align-items: center;
  }
</style>
