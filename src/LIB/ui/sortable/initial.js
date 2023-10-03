function sortable(id){
$(".sort1 #"+id).sortable();
$(".sort-block").sortable({cancel: ":.cancel",connectWith:".sort-block",receive: function(ev, ui){
 if(ui.item.hasClass("number")) ui.sender.sortable("cancel");
 },
 items:".sort",placeholder:"placeh ui-state-highlight"});
}