<template>
  <Layout id="components-layout-demo-custom-trigger">
    <LayoutSider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <Menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <MenuItem key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </MenuItem>
        <MenuItem key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </MenuItem>
        <MenuItem key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </MenuItem>
      </Menu>
    </LayoutSider>
    <Layout>
      <LayoutHeader style="background: #fff; padding: 0">
        <Icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </LayoutHeader>
      <LayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </LayoutContent>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {
  Layout,
  Menu,
  Icon
} from 'ant-design-vue'

@Component({
  components: {
    Layout,
    LayoutSider: Layout.Sider,
    LayoutContent: Layout.Content,
    LayoutHeader: Layout.Header,
    Icon,
    Menu,
    MenuItem: Menu.Item,
  }
})
export default class HomeView extends Vue {
  collapsed: boolean = false
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>