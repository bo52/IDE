function draggable_initial(id){
//$(function(){
var $gallery = $("#"+id);
$(".block", $gallery ).draggable({cursor: "move"});
//});
}