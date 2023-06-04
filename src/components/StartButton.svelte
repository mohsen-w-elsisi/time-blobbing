<script>
  import { link } from "svelte-spa-router";
  import AlarmIcon from "./icons/AlarmIcon.svelte";
</script>

<a
  class="btn btn-primary btn-square drop-shadow-lg fixed right-3 bottom-4"
  href="/focus"
  use:link
>
  <AlarmIcon />
</a>
