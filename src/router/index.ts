import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import config from '@/views/my-config/my-config.vue'
import upload from '@/views/upload-image/upload-image.vue'
import management from '@/views/imgs-management/imgs-management.vue'
import settings from '@/views/my-settings/my-settings.vue'
import toolbox from '@/views/githubImageTools-toolbox/githubImageTools-toolbox.vue'
import feedback from '@/views/feedback-info/feedback-info.vue'
import compressTool from '@/components/tools/compress-tool/compress-tool.vue'
import base64Tool from '@/components/tools/base64-tool/base64-tool.vue'
import watermarkTool from '@/components/tools/watermark-tool/watermark-tool.vue'
import { setWindowTitle } from '@/utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: {
      name: 'upload'
    }
  },
  {
    path: '/config',
    name: 'config',
    component: config,
    meta: {
      title: `nav.config`
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload,
    meta: {
      title: `nav.upload`
    }
  },
  {
    path: '/management',
    name: 'Management',
    component: management,
    meta: {
      title: `nav.management`
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings,
    meta: {
      title: `nav.settings`
    }
  },
  {
    path: '/toolbox',
    name: 'Toolbox',
    component: toolbox,
    meta: {
      title: `nav.toolbox`
    },
    children: [
      {
        path: '/toolbox/compress',
        name: 'Compress',
        component: compressTool
      },
      {
        path: '/toolbox/base64',
        name: 'Base64',
        component: base64Tool
      },
      {
        path: '/toolbox/watermark',
        name: 'Watermark',
        component: watermarkTool
      }
    ]
  },
  // {
  //   path: '/feedback',
  //   name: 'feedback',
  //   component: feedback,
  //   meta: {
  //     title: `nav.feedback`
  //   }
  // },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    setWindowTitle(to.meta.title as string)
  }
  next()
})

export default router
