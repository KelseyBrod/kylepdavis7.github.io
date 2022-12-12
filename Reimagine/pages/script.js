
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

function ShowAndHide() {
    var x = document.getElementById('options');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function pin(){
    const x = document.getElementById('pin');
    x.style.position = 'absolute';
    x.style.position = 'fixed';
    x.style.top='10%';
    x.style.left='25%';
}
