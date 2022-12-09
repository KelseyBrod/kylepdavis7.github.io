
var favteams = '';
function getrightanswer(){
    
    var team = document.getElementsByClassName('team');
    console.log(team)
for (let i = 0; i<team.length; i++) {
    if (team[i].checked){
        if(favteams.length>0){
            favteams = favteams +" , "+ team[i].value;
        }
        else{
            favteams = favteams +" "+ team[i].value;
        }
    }
}
console.log(favteams)
}

function whatdidIget(){
    document.getElementById('yourteams').innerHTML = "You want to add the: " + favteams;
    favteams = ""
} 
