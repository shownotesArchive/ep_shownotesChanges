exports.postAceInit = function(hook, context)
{
  $("#settingslink").remove();
  $("#usericon").prev().remove(); // seperator
  $("#embedlink").remove();
  $("iframe[name=ace_outer]").contents().find("#sidediv").css('background-color', 'white');
}