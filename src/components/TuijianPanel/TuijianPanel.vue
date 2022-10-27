<template>
  <div class="flex-col component-BWBmnM7I">
    <div class="flex-row justify-between group_7">
      <div class="flex-row space-x-8">
        <span class="font_2 text_4">求职意向</span>
        <div class="flex-col items-center text-wrapper">
          <span class="font_3">文员</span>
        </div>
        <div class="flex-col items-center text-wrapper_2">
          <span class="font_3">专员</span>
        </div>
        <div class="flex-col items-center text-wrapper_3">
          <span class="font_3">信息安全</span>
        </div>
      </div>
      <img
        class="image_7"
        @click="showPopup"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/27ef7862e6641c3ee9bcbee74784ecdc.png"
      />
    </div>
    <span class="font_4 text_5">- 好友推荐职位 -</span>
    <div class="flex-col list">
      <GangweiItem :key="i" v-for="(item, i) in list_8AQ8arP9" />
    </div>
  </div>
</template>

<script>
import GangweiItem from "../../components/GangweiItem/GangweiItem.vue";

export default {
  components: { GangweiItem },
  data() {
    return {
      list_8AQ8arP9: [null, null],
    };
  },
  methods: {
    showPopup() {
      this.$emit("showPopup");
    },
  },
};
</script>

<style scoped lang="css">
.component-BWBmnM7I {
  padding-bottom: 2.25rem;
}
.font_2 {
  font-size: 0.88rem;
  font-family: "PingFang SC";
  line-height: 1.25rem;
  font-weight: 500;
  color: #717171;
}
.group_7 {
  padding: 0.63rem 0.31rem;
}
.text_4 {
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
.font_3 {
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
.image_7 {
  box-shadow: 0px 0.13rem 0.25rem 0px #9f9f9f80;
  border-radius: 50%;
  width: 1.63rem;
  height: 1.63rem;
}
.font_4 {
  font-size: 1.13rem;
  font-family: "PingFang SC";
  line-height: 1.56rem;
  font-weight: 600;
  color: #333333;
}
.text_5 {
  margin-top: 0.25rem;
  align-self: center;
  font-weight: 500;
}
.list {
  margin-top: 0.88rem;
  padding: 0 0.31rem;
}
.space-x-8 > *:not(:first-child) {
  margin-left: 0.5rem;
}
</style>
