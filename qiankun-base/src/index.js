import { registerMicroApps, initGlobalState, start } from "qiankun";

const actions = initGlobalState({
  string: "",
});

actions.onGlobalStateChange((state, prev) => {
  console.log("master global state change event", state, prev);
});

registerMicroApps([
  {
    name: "app1",
    entry: "//localhost:8001",
    container: "#root",
    activeRule: "/app1",
  },
  {
    name: "app2",
    entry: "//localhost:8002",
    container: "#root",
    activeRule: "/app2",
  },
]);

start();
