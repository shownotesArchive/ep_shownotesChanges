exports.postAceInit = function(hook, context)
{
  $("#myswatchbox").off();
  $("#clearAuthorship").remove();
  $("#settingslink").remove();
  $("#embedlink").removeClass('grouped-right')
  $("#embedcode").remove();
}