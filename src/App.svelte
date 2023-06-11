<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import startAutosaving from "./lib/startAutosaving";

  startAutosaving()
</script>

<Router {routes} />
