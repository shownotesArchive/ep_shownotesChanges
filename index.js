exports.eejsBlock_styles = function (hook, context)
{
  var resizeChat = '<style type="text/css">\n';
  resizeChat += '#editbar {border-bottom: none;background: white;}';
  resizeChat += '.menu_left, #settingslink, #embedlink {display:none;}';
  resizeChat += 'iframe[name=ace_outer] {top:-32px;}';
  resizeChat += '</style>\n';
  
  context.content = context.content + resizeChat;
}
