<template>
  <div class="root">
    <div class="flex-col items-center space-y-7 top ">
      <span class="font_2">投递简历</span>
      <img class="image_17"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477751356935410.png" />
    </div>
    <div class="flex-col items-center space-y-4 section_9">
      <span class="font_2">取消关注</span>
      <img class="image_20"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477751385485181.png" />
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
.font_2 {
  font-size: 1rem;
  font-family: 'PingFang SC';
  line-height: 1.38rem;
  font-weight: 500;
  color: #ffffff;
}

.space-y-7>*:not(:first-child) {
  margin-top: 0.44rem;
}

.top {
  padding: 0.88rem;
  background-color: #ff6c6c;
  border-radius: 0.25rem;

}

.image_17 {
  width: 1.31rem;
  height: 1.5rem;
}

.space-y-4>*:not(:first-child) {
  margin-top: 0.25rem;
}

.section_9 {
  padding: 0.88rem 0;
  background-color: #ffc25d;
  border-radius: 0.25rem;
  margin-top: 10px;
}

.image_20 {
  width: 0.94rem;
  height: 1.5rem;
}

.root {
  padding: 0 10px;
}
</style>