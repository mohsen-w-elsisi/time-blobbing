import type { RouteDefinition } from "svelte-spa-router";
import MainScreen from "./components/MainScreen.svelte";
import FocusScreen from "./components/FocusScreen.svelte"

const routes: RouteDefinition = {
  "/": MainScreen,
  "/focus": FocusScreen
} as const;

export default routes;
