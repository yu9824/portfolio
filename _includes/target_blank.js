<script language="JavaScript">
$(document).ready( function () {
   $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
   $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('rel', 'noopener');
})
</script>