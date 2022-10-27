<template>
  <div class="flex-col page">
    <div class="flex-col header space-y-14">
      <div class="flex-row justify-center status_bar">
        <div class="flex-row network space-x-5">
          <img
            class="network_icon"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477751443982111.png"
          />
          <span class="font_1">中国移动</span>
          <img
            class="network_signal"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746940644839.png"
          />
        </div>
        <span class="font_1 status_text">9:41 AM</span>
        <div class="flex-row battery space-x-2">
          <span class="font_1 status_text">100%</span>
          <img
            class="battery_icon"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477746739004126.png"
          />
        </div>
      </div>
      <div class="flex-row justify-between nav">
        <img
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477763303476826.png"
          @click="onClick_Image"
        />
        <span class="hr_name">职位详情</span>
        <img
          class="image_2 nav_icon"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477763333155070.png"
        />
      </div>
    </div>
    <div class="flex-col job_detail">
      <div class="flex-col job_summary space-y-11">
        <span class="job_title text">人力资源高级专员</span>
        <div class="flex-row job_sections">
          <div class="flex-row">
            <img
              class="addr_icon"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477763466461408.png"
            />
            <span class="font_2 job_addr">深圳-科技园</span>
          </div>
          <div class="flex-row job_year space-x-5">
            <img
              class="year_icon"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477765170863790.png"
            />
            <span class="font_2">3-5年</span>
          </div>
          <div class="flex-row job_edu space-x-5">
            <img
              class="edu_icon"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477765281890337.png"
            />
            <span class="font_2">本科</span>
          </div>
        </div>
        <div class="divider view"></div>
        <span class="hr_name job_bu">速运事业群仓储事业部</span>
        <span class="job_item_text text_2">有效期：2018年1月25日至2月14日</span>
      </div>
      <div class="flex-col job_info space-y-6">
        <div class="flex-col job_part">
          <div class="flex-row part_title_wrapper space-x-20">
            <div class="part_line"></div>
            <span class="fav_title">工作职责</span>
          </div>
          <div class="flex-col part_detail space-y-9">
            <div class="divider"></div>
            <div class="flex-col part-wrapper view_2">
              <span class="font_3 text_3">
                1、根据仓储业务发展战略，分析用人部门招聘需求，制定年度招聘计划；
                <br />
                2、统筹与实施仓储地区关键岗位的招聘（如仓库负责人、储备干部等）；
                <br />
                3、统筹业务高峰期仓储临时人员需求收集、招聘跟进及人员投入分析；
                <br />
                4、协助拓展与完善仓储招聘机制与渠道，跟进总部招聘面试；
                <br />
                5、制定仓储人才发展计划，拓宽仓储员工发展通道，提升仓储人才能力建设；
                <br />
                6、完善仓储人才发展及选拔机制，推动仓储能力标准优化、人才盘点、晋升等人才管理工作的开展。
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>
        <div class="flex-col job_part">
          <div class="flex-row part_title_wrapper space-x-20">
            <div class="part_line"></div>
            <span class="fav_title">任职要求</span>
          </div>
          <div class="flex-col group space-y-8">
            <div class="divider"></div>
            <div class="flex-col part-wrapper view_3">
              <span class="font_3 text_3">
                1、人力资源相关专业优先；
                <br />
                2、3-5年人资相关工作经验，具备招聘、人才管理模块工作经验；
                <br />
                3、具备人力资源专业知识，有较强的逻辑判断、沟通表达和统筹协调能力；
                <br />
                4、具有高度的责任心、独立工作的能力，并具备较强的需求分析、判断和解决问题的能力；
                <br />
                5、熟练运用Office办公软件，如Excel、PPT、word等。
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>
        <div class="flex-col job_salary">
          <div class="flex-row group_2 space-x-20">
            <div class="part_line"></div>
            <span class="fav_title">薪资待遇</span>
          </div>
          <div class="flex-col text-wrapper">
            <span class="font_4 text_4"
              >五险一金，绩效奖金，年终分红，法定节假日，节日福利，专业培训等</span
            >
          </div>
        </div>
        <div class="flex-col job_salary">
          <div class="flex-row group_2 space-x-20">
            <div class="part_line"></div>
            <span class="fav_title">工作地址</span>
          </div>
          <div class="flex-col text-wrapper_2">
            <span class="font_4 text_4"
              >深圳市南山区学府路以南与白石路以东交汇处深圳市软件产业基地</span
            >
          </div>
        </div>
      </div>
      <div class="flex-col job_hr space-y-9">
        <div class="flex-row space-x-22">
          <div class="part_line"></div>
          <span class="fav_title">职位发布人</span>
        </div>
        <div class="flex-row hr_info">
          <div class="flex-col items-start avatar_wrapper">
            <img
              class="avatar"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477766129076561.png"
            />
            <img
              class="avatar_level"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477766795763255.png"
            />
          </div>
          <div class="flex-col hr_contact">
            <div class="hr_user">
              <span class="hr_name">周毅</span>
              <span class="font_5">（人事负责人）</span>
            </div>
            <div class="flex-row hr_email space-x-5">
              <img
                class="email_icon"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477766073470063.png"
              />
              <span class="font_5 email">zhouyi@sf-express.com</span>
            </div>
          </div>
          <div class="flex-row hr_phone space-x-5">
            <img
              class="phone_icon"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477765308918972.png"
            />
            <span class="font_5">0755-36390789</span>
          </div>
        </div>
      </div>
      <div class="flex-col job_part view_4">
        <div class="flex-row fav_wrapper space-x-20">
          <div class="part_line"></div>
          <span class="fav_title">可能感兴趣的职位推荐</span>
        </div>
        <div class="flex-col job_list">
          <div
            class="flex-col list-item space-y-4"
            :key="i"
            v-for="(item, i) in favJobs"
          >
            <span class="job_title text_5">{{ item.title }}</span>
            <div class="flex-row">
              <span class="job_item_text text_6">{{ item.addr }}</span>
              <div class="job_divider"></div>
              <span class="job_item_text text_7">{{ item.year }}</span>
              <div class="job_divider"></div>
              <span class="job_item_text text_8">{{ item.edu }}</span>
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
    return {
      favJobs: [
        {
          title: "人力资源初级专员",
          addr: "深圳-科技园",
          year: "1-2年",
          edu: "本科",
        },
        {
          title: "后勤保障中级专员",
          addr: "深圳-科技园",
          year: "2年以上",
          edu: "本科",
        },
      ],
    };
  },

  methods: {
    onClick_Image() {
      this.$router.back();
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
.header {
  padding: 4px 6px 8px;
  background-color: #6e7ffe;
  height: 64px;
}
.space-y-14 > *:not(:first-child) {
  margin-top: 14px;
}
.status_bar {
  position: relative;
}
.network {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.network_icon {
  flex-shrink: 0;
  align-self: center;
  width: 34px;
  height: 6px;
}
.font_1 {
  font-size: 12px;
  font-family: "Heiti SC";
  line-height: 14.08px;
  font-weight: 200;
  color: #ffffff;
}
.network_signal {
  margin-bottom: 4px;
  flex-shrink: 0;
  width: 13px;
  height: 9px;
}
.status_text {
  font-size: 12px;
  font-family: "Heiti SC";
  line-height: 14.08px;
  font-weight: 200;
  color: #ffffff;
}
.battery {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.space-x-2 > *:not(:first-child) {
  margin-left: 2px;
}
.battery_icon {
  margin-bottom: 4px;
  flex-shrink: 0;
  width: 25px;
  height: 10px;
}
.nav {
  padding: 0 6px;
}
.image {
  width: 14px;
  height: 22px;
}
.hr_name {
  font-size: 16px;
  font-family: "PingFang SC";
  line-height: 22px;
  color: #ffffff;
}
.image_2 {
  width: 14.08px;
  height: 22.08px;
}
.nav_icon {
  width: 14px;
  height: 22px;
}
.job_detail {
  padding-bottom: 67px;
  flex: 1 1 auto;
  overflow-y: auto;
}
.job_summary {
  padding: 12px 0;
  background-color: #ffffff;
}
.space-y-11 > *:not(:first-child) {
  margin-top: 11px;
}
.job_title {
  font-size: 18px;
  font-family: "PingFang SC";
  line-height: 25px;
  font-weight: 600;
  color: #333333;
}
.text {
  margin-left: 14px;
  align-self: flex-start;
}
.job_sections {
  padding: 0 16px;
}
.addr_icon {
  flex-shrink: 0;
  width: 15px;
  height: 20px;
}
.font_2 {
  font-size: 12px;
  font-family: "PingFang SC";
  line-height: 17px;
  font-weight: 500;
  color: #767676;
}
.job_addr {
  margin: 1px 0 2px 5px;
}
.job_year {
  margin: 1px 0 2px 46px;
}
.year_icon {
  flex-shrink: 0;
  width: 20px;
  height: 17px;
}
.job_edu {
  margin: 1px 0 2px 33px;
}
.edu_icon {
  margin-top: 2px;
  flex-shrink: 0;
  width: 20px;
  height: 16px;
}
.divider {
  margin-left: 2px;
  background-color: #eeeeee;
  height: 1px;
}
.view {
  margin-left: 0;
}
.job_bu {
  margin-left: 18px;
  align-self: flex-start;
  color: #333333;
  font-weight: 500;
}
.job_item_text {
  font-size: 14px;
  font-family: "PingFang SC";
  line-height: 20px;
  font-weight: 500;
  color: #666666;
}
.text_2 {
  margin-left: 18px;
  align-self: flex-start;
}
.job_info {
  padding: 6px 0;
}
.space-y-6 > *:not(:first-child) {
  margin-top: 6px;
}
.job_part {
  background-color: #ffffff;
}
.part_title_wrapper {
  padding: 14px 0;
}
.part_line {
  margin: 3px 0 2px;
  background-color: #6e7ffe;
  width: 2px;
  height: 15px;
}
.fav_title {
  font-size: 14px;
  font-family: "PingFang SC";
  line-height: 20px;
  font-weight: 500;
  color: #333333;
}
.part_detail {
  padding: 0 10px 14px 22px;
}
.part-wrapper {
  margin-right: 12px;
}
.view_2 {
  overflow: hidden;
  height: 310px;
}
.font_3 {
  font-size: 14px;
  font-family: "PingFang SC";
  line-height: 25px;
  color: #333333;
}
.text_3 {
  font-size: 13px;
  line-height: 26px;
  text-align: justify;
}
.group {
  padding: 0 10px 12px 22px;
}
.space-y-8 > *:not(:first-child) {
  margin-top: 8px;
}
.view_3 {
  overflow: hidden;
  height: 213px;
}
.job_salary {
  padding-bottom: 10px;
  background-color: #ffffff;
}
.group_2 {
  padding: 14px 0 10px;
}
.text-wrapper {
  padding-bottom: 3px;
  align-self: center;
  overflow: hidden;
  width: 312px;
  height: 41.5px;
}
.font_4 {
  font-size: 14px;
  font-family: "PingFang SC";
  line-height: 20px;
  color: #666666;
}
.text_4 {
  font-size: 13px;
}
.text-wrapper_2 {
  margin-left: 22px;
  padding-bottom: 3px;
  align-self: flex-start;
  overflow: hidden;
  width: 299px;
  height: 41.5px;
}
.job_hr {
  padding: 14px 0;
  background-color: #ffffff;
}
.space-y-9 > *:not(:first-child) {
  margin-top: 9px;
}
.space-x-22 > *:not(:first-child) {
  margin-left: 22px;
}
.hr_info {
  padding-left: 21px;
  padding-right: 12px;
}
.avatar_wrapper {
  margin-top: 2px;
  padding-bottom: 2px;
  flex-shrink: 0;
  width: 43px;
  position: relative;
}
.avatar {
  border-radius: 50%;
  width: 37px;
  height: 37px;
}
.avatar_level {
  width: 14px;
  height: 17px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.hr_contact {
  margin-left: 9px;
  flex: 1 1 auto;
}
.hr_user {
  align-self: flex-start;
}
.font_5 {
  font-size: 12px;
  font-family: "PingFang SC";
  line-height: 17px;
  color: #666666;
}
.hr_email {
  padding-left: 1px;
}
.email_icon {
  flex-shrink: 0;
  align-self: center;
  width: 12px;
  height: 9px;
}
.email {
  line-height: 20px;
}
.hr_phone {
  margin-left: 20px;
  margin-top: 24px;
  flex-shrink: 0;
}
.space-x-5 > *:not(:first-child) {
  margin-left: 5px;
}
.phone_icon {
  margin: 3px 0 2px;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
}
.view_4 {
  margin-top: 6px;
}
.fav_wrapper {
  padding: 14px 0 15px;
}
.space-x-20 > *:not(:first-child) {
  margin-left: 20px;
}
.job_list {
  padding-left: 22px;
  padding-right: 10px;
}
.list-item {
  padding: 10px 0 13px;
}
.list-item:first-of-type {
  border-top: solid 1px #eeeeee;
  border-bottom: solid 1px #eeeeee;
}
.text_5 {
  margin-left: 14px;
  align-self: flex-start;
}
.text_6 {
  margin-left: 18px;
  align-self: flex-start;
}
.text_7 {
  margin-left: 18px;
  align-self: flex-start;
}
.text_8 {
  margin-left: 18px;
  align-self: flex-start;
}
.space-y-4 > *:not(:first-child) {
  margin-top: 4px;
}
.job_divider {
  margin: 5px 0 3px 4px;
  background-color: #d1d1d1;
  width: 1px;
  height: 12px;
}
</style>
