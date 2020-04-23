$(document).ready(function(){
    var villagerTemplate = $("#villager-template").html();

    var compiledVillagers = Handlebars.compile(villagerTemplate);

    $.ajax("./db.json").done(function(villager) {
        $(".villager-container").html(compiledVillagers(villager));
    });
});
