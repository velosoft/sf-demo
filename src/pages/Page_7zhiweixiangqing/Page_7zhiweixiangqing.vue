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
        <span class="font_3 text_2">有效期：2018年1月25日至2月14日</span>
      </div>
      <div class="flex-col job_info space-y-6">
        <div class="flex-col job_part">
          <div class="flex-row part_title_wrapper space-x-20">
            <div class="part_line"></div>
            <span class="font_4">工作职责</span>
          </div>
          <div class="flex-col part_detail space-y-9">
            <div class="divider"></div>
            <div class="flex-col part-wrapper view_2">
              <span class="font_5 text_3">
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
            <span class="font_4">任职要求</span>
          </div>
          <div class="flex-col group space-y-8">
            <div class="divider"></div>
            <div class="flex-col part-wrapper view_3">
              <span class="font_5 text_3">
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
            <span class="font_4">薪资待遇</span>
          </div>
          <div class="flex-col text-wrapper">
            <span class="font_6 text_4">五险一金，绩效奖金，年终分红，法定节假日，节日福利，专业培训等</span>
          </div>
        </div>
        <div class="flex-col job_salary">
          <div class="flex-row group_2 space-x-20">
            <div class="part_line"></div>
            <span class="font_4">工作地址</span>
          </div>
          <div class="flex-col text-wrapper_2">
            <span class="font_6 text_4">深圳市南山区学府路以南与白石路以东交汇处深圳市软件产业基地</span>
          </div>
        </div>
      </div>
      <div class="flex-col job_hr space-y-9">
        <div class="flex-row space-x-22">
          <div class="part_line"></div>
          <span class="font_4">职位发布人</span>
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
              <span class="phone hr_title">（人事负责人）</span>
            </div>
            <div class="flex-row hr_email space-x-5">
              <img
                class="email_icon"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477766073470063.png"
              />
              <span class="email">zhouyi@sf-express.com</span>
            </div>
          </div>
          <div class="flex-row hr_phone space-x-5">
            <img
              class="phone_icon"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477765308918972.png"
            />
            <span class="phone">0755-36390789</span>
          </div>
        </div>
      </div>
      <div class="flex-col job_part view_4">
        <div class="flex-row group_3 space-x-20">
          <div class="part_line"></div>
          <span class="font_4">可能感兴趣的职位推荐</span>
        </div>
        <div class="flex-col list">
          <div class="flex-col list-item space-y-4" :key="i" v-for="(item, i) in list_G5147um6">
            <span class="job_title text_6">人力资源初级专员</span>
            <div class="flex-row">
              <div class="flex-row">
                <span class="font_3 text_7">深圳-科技园</span>
                <div class="section view_5"></div>
              </div>
              <span class="font_3 text_8">1-2年</span>
              <div class="section view_6"></div>
              <span class="font_3 text_9">本科</span>
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
        list_G5147um6: [null, null],
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
    padding: 0.25rem 0.38rem 0.5rem;
    background-color: #6e7ffe;
    height: 4rem;
  }
  .space-y-14 > *:not(:first-child) {
    margin-top: 0.88rem;
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
  .network_signal {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 0.81rem;
    height: 0.56rem;
  }
  .status_text {
    font-size: 0.75rem;
    font-family: 'Heiti SC';
    line-height: 0.88rem;
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
    margin-left: 0.13rem;
  }
  .battery_icon {
    margin-bottom: 0.25rem;
    flex-shrink: 0;
    width: 1.56rem;
    height: 0.63rem;
  }
  .nav {
    padding: 0 0.38rem;
  }
  .image {
    width: 0.88rem;
    height: 1.38rem;
  }
  .hr_name {
    font-size: 1rem;
    font-family: 'PingFang SC';
    line-height: 1.38rem;
    color: #ffffff;
  }
  .image_2 {
    width: 0.88rem;
    height: 1.38rem;
  }
  .nav_icon {
    width: 0.88rem;
    height: 1.38rem;
  }
  .job_detail {
    padding-bottom: 4.19rem;
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .job_summary {
    padding: 0.75rem 0;
    background-color: #ffffff;
  }
  .space-y-11 > *:not(:first-child) {
    margin-top: 0.69rem;
  }
  .job_title {
    font-size: 1.13rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    font-weight: 600;
    color: #333333;
  }
  .text {
    margin-left: 0.88rem;
    align-self: flex-start;
  }
  .job_sections {
    padding: 0 1rem;
  }
  .addr_icon {
    flex-shrink: 0;
    width: 0.94rem;
    height: 1.25rem;
  }
  .font_2 {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    font-weight: 500;
    color: #767676;
  }
  .job_addr {
    margin: 0.063rem 0 0.13rem 0.31rem;
  }
  .job_year {
    margin: 0.063rem 0 0.13rem 2.88rem;
  }
  .year_icon {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.06rem;
  }
  .job_edu {
    margin: 0.063rem 0 0.13rem 2.06rem;
  }
  .edu_icon {
    margin-top: 0.13rem;
    flex-shrink: 0;
    width: 1.25rem;
    height: 1rem;
  }
  .divider {
    margin-left: 0.13rem;
    background-color: #eeeeee;
    height: 0.063rem;
  }
  .view {
    margin-left: 0;
  }
  .job_bu {
    margin-left: 1.13rem;
    align-self: flex-start;
    color: #333333;
    font-weight: 500;
  }
  .font_3 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #666666;
  }
  .text_2 {
    margin-left: 1.13rem;
    align-self: flex-start;
  }
  .job_info {
    padding: 0.38rem 0;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .job_part {
    background-color: #ffffff;
  }
  .part_title_wrapper {
    padding: 0.88rem 0;
  }
  .part_line {
    margin: 0.19rem 0 0.13rem;
    background-color: #6e7ffe;
    width: 0.13rem;
    height: 0.94rem;
  }
  .font_4 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    font-weight: 500;
    color: #333333;
  }
  .part_detail {
    padding: 0 0.63rem 0.88rem 1.38rem;
  }
  .part-wrapper {
    margin-right: 0.75rem;
  }
  .view_2 {
    overflow: hidden;
    height: 19.38rem;
  }
  .font_5 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.56rem;
    color: #333333;
  }
  .text_3 {
    font-size: 0.81rem;
    line-height: 1.63rem;
    text-align: justify;
  }
  .group {
    padding: 0 0.63rem 0.75rem 1.38rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .view_3 {
    overflow: hidden;
    height: 13.31rem;
  }
  .job_salary {
    padding-bottom: 0.63rem;
    background-color: #ffffff;
  }
  .group_2 {
    padding: 0.88rem 0 0.63rem;
  }
  .text-wrapper {
    padding-bottom: 0.19rem;
    align-self: center;
    overflow: hidden;
    width: 19.5rem;
    height: 2.59rem;
  }
  .font_6 {
    font-size: 0.88rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
    color: #666666;
  }
  .text_4 {
    font-size: 0.81rem;
  }
  .text-wrapper_2 {
    margin-left: 1.38rem;
    padding-bottom: 0.19rem;
    align-self: flex-start;
    overflow: hidden;
    width: 18.69rem;
    height: 2.59rem;
  }
  .job_hr {
    padding: 0.88rem 0;
    background-color: #ffffff;
  }
  .space-y-9 > *:not(:first-child) {
    margin-top: 0.56rem;
  }
  .space-x-22 > *:not(:first-child) {
    margin-left: 1.38rem;
  }
  .hr_info {
    padding-left: 1.31rem;
    padding-right: 0.75rem;
  }
  .avatar_wrapper {
    margin-top: 0.13rem;
    padding-bottom: 0.13rem;
    flex-shrink: 0;
    width: 2.69rem;
    position: relative;
  }
  .avatar {
    border-radius: 50%;
    width: 2.31rem;
    height: 2.31rem;
  }
  .avatar_level {
    width: 0.88rem;
    height: 1.06rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .hr_contact {
    margin-left: 0.56rem;
    flex: 1 1 auto;
  }
  .hr_user {
    align-self: flex-start;
  }
  .phone {
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.06rem;
    color: #666666;
  }
  .hr_title {
    color: #717171;
  }
  .hr_email {
    padding-left: 0.063rem;
  }
  .email_icon {
    flex-shrink: 0;
    align-self: center;
    width: 0.75rem;
    height: 0.56rem;
  }
  .email {
    color: #666666;
    font-size: 0.75rem;
    font-family: 'PingFang SC';
    line-height: 1.25rem;
  }
  .hr_phone {
    margin-left: 1.25rem;
    margin-top: 1.5rem;
    flex-shrink: 0;
  }
  .space-x-5 > *:not(:first-child) {
    margin-left: 0.31rem;
  }
  .phone_icon {
    margin: 0.19rem 0 0.13rem;
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
  }
  .view_4 {
    margin-top: 0.38rem;
  }
  .group_3 {
    padding: 0.88rem 0 0.94rem;
  }
  .space-x-20 > *:not(:first-child) {
    margin-left: 1.25rem;
  }
  .list {
    padding-left: 1.38rem;
    padding-right: 0.63rem;
  }
  .list-item {
    padding: 0.63rem 0 0.81rem;
  }
  .list-item:first-of-type {
    border-top: solid 0.063rem #eeeeee;
    border-bottom: solid 0.063rem #eeeeee;
  }
  .text_6 {
    margin-left: 0.88rem;
    align-self: flex-start;
  }
  .text_7 {
    margin-left: 1.13rem;
    align-self: flex-start;
  }
  .section {
    background-color: #d1d1d1;
    width: 0.063rem;
    height: 0.75rem;
  }
  .view_5 {
    margin: 0.31rem 0 0.19rem 0.25rem;
    flex-shrink: 0;
  }
  .text_8 {
    margin-left: 1.13rem;
    align-self: flex-start;
  }
  .view_6 {
    margin: 0.31rem 0 0.19rem 0.88rem;
  }
  .text_9 {
    margin-left: 1.13rem;
    align-self: flex-start;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
</style>