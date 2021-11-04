$( document ).ready(function() {
    console.log( "ready!" );

    $("#fbbutton").click(() => getSquad());

    getSquad();
});

var sq = [
    {name: "Berke", id: 35},
    {name: "Altay", id: 1},
    {name: "Szalai", id: 41},
    {name: "Kim", id: 3},
    {name: "Tisserand", id: 32},
    {name: "Serdar Aziz", id: 4},
    {name: "Novak", id: 37},
    {name: "Gustavo", id: 20},
    {name: "İrfan Can", id: 17},
    {name: "Zajc", id: 26},
    {name: "Muhammed", id: 23},
    {name: "Sosa", id: 5},
    {name: "Meyer", id: 6},
    {name: "Crespo", id: 27},
    {name: "Osai-Samuel", id: 21},
    {name: "Nazım", id: 30},
    {name: "Ferdi", id: 16},
    {name: "Mesut", id: 10},
    {name: "Mert Hakan", id: 8},
    {name: "Arda", id: 25},
    {name: "Rossi", id: 9},
    {name: "Pelkas", id: 14},
    {name: "Berisha", id: 11},
    {name: "Valencia", id: 13},
    {name: "Serdar Dursun", id: 19}
];

var pos = {
    gk: [35, 1],
    dlc: [41, 37],
    dc: [3, 41, 32, 4],
    drc: [37, 4, 32, 3],
    lm: [23, 16, 37, 14],
    dm: [20, 17, 26, 5, 6, 27, 8, 25, 14],
    rm: [23, 21, 30, 16, 14],
    lf: [8, 10, 16, 14, 9, 13, 6, 23, 25, 17, 26],
    st: [19, 13, 11, 9, 10],
    rf: [21, 9, 14, 13, 8, 10, 16, 6, 23, 25, 17, 26]
};

var eleven = new Array(10);

//var eleven = [1, 41, 3, 37, 16, 17, 26, 21, 8, 19, 13];

var ps = ["gk", "dlc", "dc", "drc", "lm", "dm", "dm", "rm", "lf", "st", "rf"];

function getSquad(){
    var pool = JSON.parse(JSON.stringify(pos));

    var i;
    for (i = 0; i < 11; i++){
        var psi = ps[i];
        var players = pool[psi];
        var id = getRandomItem(players);
        //debugger;
        //pool[psi] = players.filter(x => x !== p);
        removePlayer(pool, id);
        eleven[i] = id;
    }

    placeSquad();
}

function placeSquad(){
    var pdivs = $("#players .fbplayer");

    var i;
    for (i = 0; i < 11; i++){
        var id = eleven[i];
        var pdiv = pdivs[i];
        var sqp = sq.find(x => x.id === id);
        $(pdiv).text(sqp.name);
    }
}

function removePlayer(pool, id){
    var i;
    for (i = 0; i < ps.length; i++){
        var p = ps[i];
        pool[p] = pool[p].filter(x => x !== id);

    } 
}

function getRandomItem(items)
{
    var i = Math.floor(Math.random()*items.length);
    var val = items[i];
    //items.splice(i, 1);
    return val;
}