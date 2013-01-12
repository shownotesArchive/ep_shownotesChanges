exports.postAceInit = function(hook, context)
{
  $("#myswatchbox").off();
  $("#clearAuthorship").remove();
  $("#settingslink").remove();
  $("#usericon").prev().remove(); // seperator
  $("#embedlink").remove();
}