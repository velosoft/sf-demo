<template>
  <div class="flex-col page">
    <div class="flex-col top_box">
      <div class="flex-col search_wrapper">
        <div class="flex-row justify-center group" style="opacity: 0">
          <div class="flex-row group_2 space-x-5">
            <img
              class="image"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477747394296774.png"
            />
            <span class="font_1">中国移动</span>
            <img
              class="image_2"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746940644839.png"
            />
          </div>
          <span class="font_1">9:41 AM</span>
          <div class="flex-row group_3 space-x-2">
            <span class="font_1">100%</span>
            <img
              class="image_3"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746739004126.png"
            />
          </div>
        </div>

        <van-search
          class="section search_UuaIif82"
          placeholder="请搜索职位/组织名称"
          input-align="center"
          @click="onClick_View_13"
          v-model="search_UuaIif82"
          @search="onSearch_UuaIif82"
        >
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735899753003.png"
            slot="left-icon"
          />
        </van-search>
      </div>
      <van-swipe class="swiper" autoplay="3000">
        <van-swipe-item
          v-for="(item, itemIndex) in switch_rYaW0TQV"
          :key="itemIndex"
        >
          <img
            class="CoverIamge"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735855801104.png"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-tabs
      color="#6e7ffe"
      v-model="tabs_View_43"
      class="tabs_View_43"
      line-width="21"
    >
      <van-tab title="最新发布">
        <div class="flex-col tabs_content_box">
          <div class="flex-row justify-between qiuzhi_box">
            <div class="flex-row space-x-8">
              <span class="font_3 text_6">求职意向</span>
              <div class="flex-col items-center text-wrapper">
                <span class="font_4">文员</span>
              </div>
              <div class="flex-col items-center text-wrapper_2">
                <span class="font_4">专员</span>
              </div>
              <div class="flex-col items-center text-wrapper_3">
                <span class="font_4">信息安全</span>
              </div>
            </div>
            <img
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/27ef7862e6641c3ee9bcbee74784ecdc.png"
              @click="onShowPopup_Image_2"
            />
          </div>
          <div class="flex-col list">
            <van-swipe-cell
              @click.native="onClickListItem"
              :key="i"
              v-for="(item, i) in listData"
            >
              <GangweiItem class="listitem" />
              <template #right>
                <SwipeAction class="swiper_action" />
              </template>
            </van-swipe-cell>
          </div>
        </div>
      </van-tab>
      <van-tab title="推荐职位"><TuijianPanel /></van-tab>
    </van-tabs>
    <van-popup v-model="showPopup_Image_2" position="bottom" :round="true">
      <TuijianPopupPanle />
    </van-popup>
  </div>
</template>

<script>
import GangweiItem from "../../components/GangweiItem/GangweiItem.vue";
import TuijianPanel from "../../components/TuijianPanel/TuijianPanel.vue";
import TuijianPopupPanle from "../../components/TuijianPopupPanle/TuijianPopupPanle.vue";
import SwipeAction from "../../components/SwipeAction/SwipeAction.vue";

export default {
  components: { GangweiItem, TuijianPanel, TuijianPopupPanle, SwipeAction },
  data() {
    return {
      search_UuaIif82: "",
      switch_rYaW0TQV: [1, 2, 3],
      showPopup_Image_2: false,
      tabs_View_43: 0,
      listData: [1, 2, 3, 4, 5, 6],
    };
  },

  methods: {
    onClick_View_13() {
      this.$router.push({ name: "SearchPage" });
    },

    onSearch_UuaIif82(event) {
      console.log("search: ", event);
    },
    onShowPopup_Image_2() {
      this.showPopup_Image_2 = true;
    },
    onClickListItem() {
      this.$router.push({ name: "page7" });
    },
  },
};
</script>

<style scoped lang="css">
.page {
  background-color: #f7fafd;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.top_box {
  height: 12.06rem;
  border-bottom: solid 0.063rem #eeeeee;
}
.search_wrapper {
  padding: 0 0.38rem 0.63rem;
  background-color: #12100e;
}
.group {
  padding: 0.25rem 0 0.38rem;
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
  font-family: "Heiti SC";
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
.section {
  margin-left: 1.56rem;
  margin-right: 1.63rem;
}
.image_4 {
  width: 1rem;
  height: 1.06rem;
}
.CoverIamge {
  width: 100%;
  height: 8.38rem;
}
.font_3 {
  font-size: 0.88rem;
  font-family: "PingFang SC";
  line-height: 1.25rem;
  font-weight: 500;
  color: #717171;
}
.tabs_content_box {
  padding-bottom: 1.5rem;
}
.qiuzhi_box {
  padding: 0.63rem 0.31rem;
}
.text_6 {
  margin: 0.13rem 0 0.25rem;
  color: #666666b5;
}
.text-wrapper {
  padding: 0.31rem 0 0.25rem;
  flex-shrink: 0;
  background-color: #1dce9e;
  box-shadow: 0px 0.13rem 0.25rem 0px #4fedc3;
  border-radius: 0.81rem;
  width: 3.44rem;
  height: 1.63rem;
  position: relative;
}
.font_4 {
  font-size: 0.75rem;
  font-family: "PingFang SC";
  line-height: 1.06rem;
  font-weight: 500;
  color: #ffffff;
}
.text-wrapper_2 {
  padding: 0.31rem 0 0.25rem;
  flex-shrink: 0;
  background-color: #ff6c6c;
  box-shadow: 0px 0.13rem 0.25rem 0px #ffc5c5;
  border-radius: 0.81rem;
  width: 3.44rem;
  height: 1.63rem;
  position: relative;
}
.text-wrapper_3 {
  padding: 0.31rem 0 0.25rem;
  flex-shrink: 0;
  background-color: #7288fc;
  box-shadow: 0px 0.13rem 0.25rem 0px #cacdff;
  border-radius: 0.81rem;
  width: 4.75rem;
  height: 1.63rem;
}
.image_6 {
  box-shadow: 0px 0.13rem 0.25rem 0px #9f9f9f80;
  border-radius: 50%;
  width: 1.63rem;
  height: 1.63rem;
}
.list {
  padding: 0 0.63rem;
}

.listitem {
  margin-top: 0.63rem;
}
.space-x-8 > *:not(:first-child) {
  margin-left: 0.5rem;
}
.swiper {
  position: relative;
  margin-top: -0.63rem;
  width: 100%;
  height: 8.38rem;
}
.van-search {
  background-color: #ffffff;
  border-radius: 1.03rem;
  padding: 0;
}
.van-search__content {
  background-color: #ffffff;
  border-radius: 1.03rem;
}

:deep(.search_UuaIif82.van-search) .van-field__control {
  color: #cdcdcd;
  font-family: "Hiragino Sans GB";
  font-size: 0.94rem;
  line-height: 0.94rem;
  font-weight: 300;
}

:deep(.search_UuaIif82.van-search) .van-icon-clear {
  line-height: 1;
  padding: 0;
  margin: 0;
}

:deep(.search_UuaIif82.van-search) .van-search__label {
  line-height: 1;
  padding: 0;
  margin: 0;
}

:deep(.search_UuaIif82.van-search) .van-cell {
  line-height: 1;
  padding: 0;
  margin: 0;
}

:deep(.search_UuaIif82.van-search) .van-search__content {
  padding: 0.5rem 3rem;
  align-items: center;
}

:deep(.search_UuaIif82.van-search) .van-field__left-icon {
  display: flex;
  align-items: center;
}

:deep(.tabs_View_43.van-tabs) .van-tab {
  color: #333333;
  font-family: "PingFang SC";
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 500;
}
:deep(.tabs_View_43.van-tabs) .van-tab--active {
  color: #6e7ffe;
  font-family: "PingFang SC";
  font-size: 1rem;
  line-height: 1.38rem;
  font-weight: 500;
}
</style>
