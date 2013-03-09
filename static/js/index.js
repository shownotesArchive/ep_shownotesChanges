exports.postAceInit = function(hook, context)
{
  $("#settingslink").remove();
  $("#usericon").prev().remove(); // seperator
  $("#embedlink").remove();
}