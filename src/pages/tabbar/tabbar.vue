<template>
  <div>
    <router-view />
    <van-tabbar :route="true" active-color="#ff00000" inactive-color="#7d7e80">
      <van-tabbar-item :to="{name: 'Home1'}">
        Home1
        <template #icon="props">
          <img
            :src="props.active ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/6357aedefe65f70012e56ddf/849bd0210923be6cc01d7d5d83cfb2f3.png' : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/6357aedefe65f70012e56ddf/849bd0210923be6cc01d7d5d83cfb2f3.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'Home2'}">
        Home2
        <template #icon="props">
          <img
            :src="props.active ? 'https://img01.yzcdn.cn/vant/user-active.png' : 'https://img01.yzcdn.cn/vant/user-inactive.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'Home3'}">
        Home3
        <template #icon="props">
          <img
            :src="props.active ? 'https://img01.yzcdn.cn/vant/user-active.png' : 'https://img01.yzcdn.cn/vant/user-inactive.png'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :to="{name: 'Home4'}">
        Home3
        <template #icon="props">
          <img
            :src="props.active ? 'https://img01.yzcdn.cn/vant/user-active.png' : 'https://img01.yzcdn.cn/vant/user-inactive.png'"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>