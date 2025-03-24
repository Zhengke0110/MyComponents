import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/Main",
    name: "Main",
    component: () => import("@/layout/GlobalMain"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: {
          description: "组件库首页，展示组件库概览和使用指南"
        }
      },
      {
        path: "/Alert",
        name: "Alert",
        component: () => import("@/libs/Alert"),
        meta: {
          description: "警告提示组件，用于页面中展示重要的提示信息"
        }
      },
      {
        path: "/Avatar",
        name: "Avatar",
        component: () => import("@/libs/Avatar"),
        meta: {
          description: "头像组件，用于展示用户或事物的图像、图标或字符的容器"
        }
      },
      {
        path: "/Badge",
        name: "Badge",
        component: () => import("@/libs/Badge"),
        meta: {
          description: "徽标组件，用于展示计数、状态等信息"
        }
      },
      {
        path: "/Button",
        name: "Button",
        component: () => import("@/libs/Button"),
        meta: {
          description: "按钮组件，用于触发操作，支持多种样式和状态"
        }
      },
      {
        path: "/ButtonGroups",
        name: "ButtonGroups",
        component: () => import("@/libs/ButtonGroups"),
        meta: {
          description: "按钮组组件，用于组合多个相关按钮成组展示"
        }
      },
      {
        path: "/Calendars",
        name: "Calendars",
        component: () => import("@/libs/Calendars"),
        meta: {
          description: "日历组件，用于日期的展示和选择"
        }
      },
      {
        path: "/Card",
        name: "Card",
        component: () => import("@/libs/Card"),
        meta: {
          description: "卡片组件，用于信息的分组和展示"
        }
      },
      {
        path: "/Carousel",
        name: "Carousel",
        component: () => import("@/libs/Carousel"),
        meta: {
          description: "轮播组件，用于循环播放多个内容项"
        }
      },
      {
        path: "/CheckBox",
        name: "CheckBox",
        component: () => import("@/libs/CheckBox"),
        meta: {
          description: "复选框组件，用于多选场景"
        }
      },
      {
        path: "/ColorInput",
        name: "ColorInput",
        component: () => import("@/libs/ColorInput"),
        meta: {
          description: "颜色选择器组件，用于选择和设置颜色值"
        }
      },
      {
        path: "/Comment",
        name: "Comment",
        component: () => import("@/libs/Comment"),
        meta: {
          description: "评论组件，用于展示用户评论内容"
        }
      },
      {
        path: "/Dialog",
        name: "Dialog",
        component: () => import("@/libs/Dialog"),
        meta: {
          description: "对话框组件，用于需要用户处理事务的弹出式窗口"
        }
      },
      {
        path: "/Divider",
        name: "Divider",
        component: () => import("@/libs/Divider"),
        meta: {
          description: "分割线组件，用于分隔内容区域"
        }
      },
      {
        path: "/Drawer",
        name: "Drawer",
        component: () => import("@/libs/Drawer"),
        meta: {
          description: "抽屉组件，从屏幕边缘滑出的面板"
        }
      },
      {
        path: "/Dropdowns",
        name: "Dropdowns",
        component: () => import("@/libs/Dropdowns"),
        meta: {
          description: "下拉菜单组件，用于展示更多操作或选项"
        }
      },
      {
        path: "/Empty",
        name: "Empty",
        component: () => import("@/libs/Empty"),
        meta: {
          description: "空状态组件，用于暂无数据或结果时的展示"
        }
      },
      {
        path: "/ImagePreview",
        name: "ImagePreview",
        component: () => import("@/libs/ImagePreview"),
        meta: {
          description: "图片预览组件，提供图片查看和交互功能"
        }
      },
      {
        path: "/Message",
        name: "Message",
        component: () => import("@/libs/Message/View.vue"),
        meta: {
          description: "消息提示组件，用于全局展示操作反馈信息"
        }
      },
      {
        path: "/ModalBox",
        name: "ModalBox",
        component: () => import("@/libs/ModalBox"),
        meta: {
          description: "模态框组件，用于创建对话框和弹出层"
        }
      },
      {
        path: "/Notification",
        name: "Notification",
        component: () => import("@/libs/Notification"),
        meta: {
          description: "通知提醒组件，用于全局展示通知信息"
        }
      },
      {
        path: "/Pagination",
        name: "Pagination",
        component: () => import("@/libs/Pagination"),
        meta: {
          description: "分页组件，用于数据分页展示"
        }
      },
      {
        path: "/Popover",
        name: "Popover",
        component: () => import("@/libs/Popover"),
        meta: {
          description: "气泡卡片组件，用于展示更多内容的悬浮提示"
        }
      },
      {
        path: "/Progress",
        name: "Progress",
        component: () => import("@/libs/Progress"),
        meta: {
          description: "进度条组件，用于展示操作的当前进度"
        }
      },
      {
        path: "/RadioBox",
        name: "RadioBox",
        component: () => import("@/libs/RadioBox"),
        meta: {
          description: "单选框组件，用于在多个选项中选择一个"
        }
      },
      {
        path: "/Rate",
        name: "Rate",
        component: () => import("@/libs/Rate"),
        meta: {
          description: "评分组件，用于对事物进行评级打分"
        }
      },
      {
        path: "/Result",
        name: "Result",
        component: () => import("@/libs/Result"),
        meta: {
          description: "结果组件，用于反馈操作结果"
        }
      },
      {
        path: "/Segment",
        name: "Segment",
        component: () => import("@/libs/Segment"),
        meta: {
          description: "分段控制器组件，用于在不同视图间切换"
        }
      },
      {
        path: "/SelectMenus",
        name: "SelectMenus",
        component: () => import("@/libs/SelectMenus"),
        meta: {
          description: "选择菜单组件，提供下拉选择功能"
        }
      },
      {
        path: "/Slider",
        name: "Slider",
        component: () => import("@/libs/Slider"),
        meta: {
          description: "滑动输入条组件，用于在范围内选择值"
        }
      },
      {
        path: "/Spin",
        name: "Spin",
        component: () => import("@/libs/Spin"),
        meta: {
          description: "加载中组件，用于页面和区块的加载状态"
        }
      },
      {
        path: "/Steps",
        name: "Steps",
        component: () => import("@/libs/Steps"),
        meta: {
          description: "步骤条组件，引导用户按步骤完成任务"
        }
      },
      {
        path: "/SwitchBox",
        name: "SwitchBox",
        component: () => import("@/libs/SwitchBox"),
        meta: {
          description: "开关组件，用于切换状态"
        }
      },
      {
        path: "/Tab",
        name: "Tab",
        component: () => import("@/libs/Tab"),
        meta: {
          description: "标签页组件，用于分类展示不同内容"
        }
      },
      {
        path: "/TagsList",
        name: "TagsList",
        component: () => import("@/libs/TagsList"),
        meta: {
          description: "标签列表组件，用于展示和管理多个标签"
        }
      },
      {
        path: "/TextInput",
        name: "TextInput",
        component: () => import("@/libs/TextInput"),
        meta: {
          description: "文本输入组件，用于接收用户的文本输入"
        }
      },
      {
        path: "/Timeline",
        name: "Timeline",
        component: () => import("@/libs/Timeline"),
        meta: {
          description: "时间轴组件，用于展示时间流信息"
        }
      },
      {
        path: "/TimePicker",
        name: "TimePicker",
        component: () => import("@/libs/TimePicker"),
        meta: {
          description: "时间选择器组件，用于选择时间"
        }
      },
      {
        path: "/Tooltip",
        name: "Tooltip",
        component: () => import("@/libs/Tooltip"),
        meta: {
          description: "文字提示组件，鼠标悬停时显示提示文本"
        }
      },
      {
        path: "/Upload",
        name: "Upload",
        component: () => import("@/libs/Upload"),
        meta: {
          description: "上传组件，用于文件上传功能"
        }
      },
      {
        path: "/Waterfall",
        name: "Waterfall",
        component: () => import("@/libs/Waterfall"),
        meta: {
          description: "瀑布流组件，用于不规则网格布局展示"
        }
      },
      {
        path: "/Watermark",
        name: "Watermark",
        component: () => import("@/libs/Watermark"),
        meta: {
          description: "水印组件，用于在页面上添加背景水印"
        }
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.vue"),
    meta: {
      description: "404页面，当访问不存在的路由时显示"
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
