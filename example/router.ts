import type { RouteRecordRaw } from "vue-router";
import Index from "./page/index.vue";
import Text from "./page/text.vue";
import Form from "./page/form.vue";
import Other from "./page/other.vue";
import Class from "./page/class.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/text",
    component: Text,
  },
  {
    path: "/form",
    component: Form,
  },
  {
    path: "/other",
    component: Other,
  },
  {
    path: "/class",
    component: Class,
  },
];

export default routes;
