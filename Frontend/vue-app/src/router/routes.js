import TasksPage from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import Summary from "../pages/SummaryPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";

const routes = [
  {
    path: "/tasks",
    component: TasksPage,
    name: "tasks",
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/summary",
    component: Summary,
    name: "summary",
    meta: {
      auth: true,
    },
  },
  {
    path: "/:notFound(.*)",
    component: NotFoundErrorPage,
    name: "error.404",
  },
];

export default routes;
