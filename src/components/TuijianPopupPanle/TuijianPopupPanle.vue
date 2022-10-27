<template>
  <div class="flex-col space-y-19 component-oRkx70Bt">
    <div class="flex-row justify-between popup_header">
      <span class="font_1">取消</span>
      <div class="flex-row space-x-6">
        <img
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477755436201888.png"
        />
        <span class="font_1 text">清空筛选</span>
      </div>
      <span class="text_2">确定</span>
    </div>
    <div class="flex-col popup_content">
      <div class="flex-col group space-y-10">
        <span class="title text_3">快捷选项</span>
        <div class="flex-col options">
          <div class="flex-row tag-list">
            <div v-for="(tag, tagIndex) in tags" :key="tagIndex">
              <input type="checkbox" :id="`tag_${tagIndex}`" v-model="checkedTags" :value="tag" />
              <div class="flex-col items-center tag-item">
                <label class="tag" :for="`tag_${tagIndex}`">{{ tag }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="title text_4">添加选项</span>
      <van-field
        class="group_2"
        label="求职意向"
        placeholder="请选择"
        v-bind:readonly="true"
        v-bind:clickable="true"
        v-bind:is-link="true"
        input-align="right"
        @click="onShowPicker_View_23"
        v-model="valuePicker_View_23"
      ></van-field>
    </div>
    <van-popup v-model="showPicker_View_23" position="bottom">
      <van-picker
        :columns="columnsPicker_View_23"
        @confirm="onConfirmPicker_View_23"
        @cancel="onCancelPicker_View_23"
        :show-toolbar="true"
        title="标题"
        confirm-button-text="确认"
        cancel-button-text="取消"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showPicker_View_23: false,
      valuePicker_View_23: null,
      columnsPicker_View_23: ["会计", "销售", "理赔专员"],
      tags: [
        "文员",
        "专员",
        "信息安全",
        "前端研发",
        "高级专员",
        "交互设计",
        "人力资源",
        "产品经理",
        "运营",
        "点部经理",
        "维修经理",
        "后勤管理",
      ],
      checkedTags: []
    };
  },

  methods: {
    onShowPicker_View_23() {
      this.showPicker_View_23 = true;
    },
    onCancelPicker_View_23() {
      this.showPicker_View_23 = false;
    },
    onConfirmPicker_View_23(value) {
      this.valuePicker_View_23 = value;
      this.showPicker_View_23 = false;
    },
  },
};
</script>

<style scoped lang="css">
.component-oRkx70Bt {
  padding-top: 1.25rem;
  background-color: #ffffff;
  border-radius: 1.19rem 1.19rem 0.13rem 0.13rem;
  border-bottom: solid 0.063rem #e6e6e6;
}
.space-y-19 > *:not(:first-child) {
  margin-top: 1.19rem;
}
.popup_header {
  margin: 0 1rem;
}
.font_1 {
  font-size: 1rem;
  font-family: "PingFang SC";
  line-height: 1.38rem;
  color: #333333;
}
.space-x-6 > *:not(:first-child) {
  margin-left: 0.38rem;
}
.image {
  margin: 0.13rem 0;
  flex-shrink: 0;
  width: 1rem;
  height: 1.13rem;
}
.text {
  color: #4f87ce;
}
.text_2 {
  margin-top: 0.19rem;
  color: #4f87ce;
  font-size: 1rem;
  font-family: "Heiti SC";
  font-weight: 200;
  line-height: 1.19rem;
}
.popup_content {
  padding: 0.63rem 0 11.63rem;
  background-color: #ffffff;
}
.group {
  padding-bottom: 1.88rem;
}
.title {
  font-size: 0.88rem;
  font-family: "PingFang SC";
  line-height: 1.25rem;
  font-weight: 700;
  color: #333333;
}
.text_3 {
  margin-left: 1.25rem;
  align-self: flex-start;
}
.options {
  padding-left: 1.31rem;
  padding-right: 0.88rem;
}
.space-y-10 > *:not(:first-child) {
  margin-top: 0.6rem;
}
.space-x-20 > *:not(:first-child) {
  margin-left: 1.25rem;
}

.tag-list {
  display: grid;
  gap: 0.8rem 1.25rem;
  grid-template-columns: repeat(4, 1fr);
}

.tag-item {
  flex: 1 1 4.38rem;
  padding: 0.38rem 0;
  background-color: #f5f5f5;
  border-radius: 0.13rem;
  height: 2rem;
  color: #333333;
}

.tag-list input:checked + .tag-item {
  flex: 1 1 4.38rem;
  padding: 0.38rem 0;
  background-color: #7288fc;
  border-radius: 0.13rem;
  color: #ffffff;
}

.tag-list input {
  display: none;
}

.text_4 {
  margin-left: 1.25rem;
  align-self: flex-start;
}
.group_2 {
  margin-top: 0.25rem;
}
.tag {
  font-size: 0.88rem;
  font-family: "PingFang SC";
  line-height: 1.25rem;
}

.van-field >>> .van-field__label {
  color: #333333;
  font-family: "PingFang SC";
  font-size: 1rem;
  line-height: 1.38rem;
}
.van-field >>> .van-field__value {
  color: #999999;
  font-family: "PingFang SC";
  font-size: 0.94rem;
  line-height: 1.31rem;
}
.van-field {
  padding-top: 0.75rem;
  padding-bottom: 0.44rem;
}
</style>
