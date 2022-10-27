<template>
  <div class="flex-col page">
    <div class="flex-col section space-y-12">
      <div class="flex-row justify-center group_2" style="opacity: 0">
        <div class="flex-row group_3 space-x-5">
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477751443982111.png"
          />
          <span class="font_1 text">中国移动</span>
          <img
            class="image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746940644839.png"
          />
        </div>
        <span class="font_1 text_2">9:41 AM</span>
        <div class="flex-row group_4 space-x-2">
          <span class="font_1 text_3">100%</span>
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746739004126.png"
          />
        </div>
      </div>
      <span class="font_2 text_4">职场</span>
    </div>

    <div class="flex-col wrapper">
      <div class="flex-col group">
        <van-tabs
          color="#6e7ffe"
          v-model="tabs_View_43"
          class="tabs_View_43"
          line-width="21"
        >
          <van-tab title="精品阅读">
            <div class="flex-col list group_5 space-y-6">
              <div
                class="flex-col list-item space-y-14"
                :key="i"
                v-for="(item, i) in list"
              >
                <div class="flex-row">
                  <img class="image_4" :src="item.cover" />
                  <div class="flex-col group_6 space-y-5">
                    <span class="font_4">{{ item.title }}</span>
                    <div class="flex-row space-x-11">
                      <span class="font_3 text_8">标签</span>
                      <div
                        class="flex-col items-center text-wrapper"
                        v-for="(tag, tagIndex) in item.tags"
                      >
                        <span :key="tagIndex" class="font_3">{{ tag }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-row justify-between group_7">
                  <div class="flex-row group_8 space-x-8">
                    <img
                      class="image_5 image_6"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477769687670482.png"
                    />
                    <span class="font_5">5</span>
                  </div>
                  <div class="flex-row space-x-4">
                    <img
                      class="image_7"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477769752506235.png"
                    />
                    <span class="font_5">120</span>
                  </div>
                  <div class="flex-row group_9 space-x-4">
                    <img
                      class="image_5"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477770126886976.png"
                    />
                    <span class="font_5">56</span>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="我的收藏"><span></span></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tabs_View_43: 0,
      list: [
        {
          title: "跨行业应聘，你有多少胜算率!",
          cover:
            "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477770436701850.png",
          tags: ["HR"],
        },
        {
          title: "面试的时候应该注意哪些问题？",
          cover:
            "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477772419743352.png",
          tags: ["UI设计", "视觉设计"],
        },
        {
          title: "面试的时候应该注意哪些问题？",
          cover:
            "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477774050620271.png",
          tags: ["营运"],
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.page {
  background-color: #f7fafd;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.section {
  padding: 0.25rem 0.38rem 0.88rem;
  background-color: #6e7ffe;
  height: 4.13rem;
}
.space-y-12 > *:not(:first-child) {
  margin-top: 0.75rem;
}
.group_2 {
  position: relative;
}
.group_3 {
  position: absolute;
  left: 0;
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
  font-size: 0.81rem;
  font-family: "Heiti SC";
  line-height: 0.88rem;
  font-weight: 200;
  color: #ffffff;
}
.text {
  font-size: 0.75rem;
}
.image_3 {
  margin-bottom: 0.25rem;
  flex-shrink: 0;
  width: 0.81rem;
  height: 0.56rem;
}
.text_2 {
  font-size: 0.75rem;
}
.group_4 {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.space-x-2 > *:not(:first-child) {
  margin-left: 0.13rem;
}
.text_3 {
  font-size: 0.75rem;
}
.image {
  margin-bottom: 0.25rem;
  flex-shrink: 0;
  width: 1.56rem;
  height: 0.63rem;
}
.font_2 {
  font-size: 1rem;
  font-family: "PingFang SC";
  line-height: 1.38rem;
}
.text_4 {
  align-self: center;
  color: #ffffff;
}
.wrapper {
  padding-bottom: 10.75rem;
  flex: 1 1 auto;
  overflow-y: auto;
}
.group {
  margin-top: -4.13rem;
  padding-top: 4.13rem;
  position: relative;
}
.font_3 {
  font-size: 0.81rem;
  font-family: "PingFang SC";
  line-height: 1.06rem;
  font-weight: 500;
  color: #999999;
}
.list {
  margin-top: 0.13rem;
}
.group_5 {
  padding: 0.38rem 0.31rem 0;
}
.space-y-6 > *:not(:first-child) {
  margin-top: 0.38rem;
}
.list-item {
  padding: 0.63rem 0.38rem 0.56rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 0.31rem 0px #c0e2ff80;
  border-radius: 0.25rem;
}
.list-item:active {
  filter: brightness(0.98);
}
.space-y-14 > *:not(:first-child) {
  margin-top: 0.88rem;
}
.image_4 {
  flex-shrink: 0;
  width: 5.44rem;
  height: 3.63rem;
}
.group_6 {
  margin: 0.13rem 0.38rem 0 0.5rem;
  flex: 1 1 auto;
}
.font_4 {
  font-size: 1.13rem;
  font-family: "PingFang SC";
  line-height: 1.56rem;
  font-weight: 500;
  color: #333333;
}
.space-x-11 > *:not(:first-child) {
  margin-left: 0.69rem;
}
.text_8 {
  line-height: 1.13rem;
}
.text-wrapper {
  border-radius: 0.56rem;
  padding: 0 6px;
  height: 1.13rem;
  border: solid 0.063rem #c5c5c5;
}
.group_7 {
  padding: 0 2.44rem;
}
.group_8 {
  padding: 0 0.31rem;
}
.space-x-8 > *:not(:first-child) {
  margin-left: 0.5rem;
}
.image_5 {
  flex-shrink: 0;
  width: 0.75rem;
  height: 0.75rem;
}
.image_6 {
  margin-bottom: 0.13rem;
}
.font_5 {
  font-size: 0.63rem;
  font-family: "PingFang SC";
  line-height: 0.88rem;
  font-weight: 500;
  color: #8a8a8a;
}
.image_7 {
  flex-shrink: 0;
  width: 0.88rem;
  height: 0.88rem;
}
.group_9 {
  margin-right: 0.13rem;
  padding: 0 0.25rem;
}
.space-x-4 > *:not(:first-child) {
  margin-left: 0.25rem;
}
.space-y-5 > *:not(:first-child) {
  margin-top: 0.31rem;
}
.section_3 {
  background-color: #ffffff;
  box-shadow: 0px 0px 1.25rem 0px #c0e2ffad;
}
.equal-division {
  padding-top: 0.19rem;
}
.equal-division-item {
  padding: 0.25rem 0 0.063rem;
  width: 6.25rem;
}
.space-y-3 > *:not(:first-child) {
  margin-top: 0.19rem;
}
.image_9 {
  width: 1.5rem;
  height: 1.5rem;
}
.font_6 {
  font-size: 0.63rem;
  font-family: "PingFang SC";
  line-height: 0.88rem;
  font-weight: 500;
  color: #929292;
}
.text_9 {
  color: #6e7ffe;
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
