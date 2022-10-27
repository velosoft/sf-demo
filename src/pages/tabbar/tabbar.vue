<template>
  <div style="height: 100%">
    <router-view />
    <van-tabbar :route="true" active-color="#ff00000" inactive-color="#7d7e80">
      <van-tabbar-item :to="{ name: 'Home1' }">
        首页
        <template #icon="props">
          <img
            :src="
              props.active
                ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477735829676894.png'
                : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477768553904048.png'
            "
          />
        </template>
      </van-tabbar-item>

      <van-tabbar-item :to="{ name: 'Home2' }">
        职场
        <template #icon="props">
          <img
            :src="
              props.active
                ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/b82a7052bb0bd8b0b441b096baca453c.png'
                : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/9833e4dfae2e1ad395cb38ffbeaa7389.png'
            "
          />
        </template>
      </van-tabbar-item>

      <van-tabbar-item :to="{ name: 'Home3' }">
        我
        <template #icon="props">
          <img
            :src="
              props.active
                ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/16668477774570035159.png'
                : 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6278e7125a7e3f03105fe6d8/63574f0efe65f70012e54d8e/06ac8affa59bedc482b244454b78aff6.png'
            "
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
