var many_tovar = Number($("#many_tovar").html());
if (many_tovar > 0) {
  $("#many_tovar").addClass("many_tovar");
} else {
  $("#many_tovar").addClass("many_tovar_null");
}
jQuery("#many_tovar").bind('DOMSubtreeModified', function () { // отслеживаем изменение содержимого блока 2
  var many_tovar = Number($("#many_tovar").html());
  if (many_tovar > 0) {
    jQuery("#many_tovar").addClass("many_tovar");
    jQuery("#many_tovar").removeClass("many_tovar_null");
  } else {
    jQuery("#many_tovar").addClass("many_tovar_null");
    jQuery("#many_tovar").removeClass("many_tovar");
  }
});