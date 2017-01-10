/**
 * Created by anfen on 17-1-10.
 */
function setIs_press() {
    let revise = document.getElementById('revise');
    let submit=document.getElementById('submit');
    let information = document.getElementsByClassName('user1 form-control');
    for (let i of information) {
        i.setAttribute('is_press', 'false')
    }
    revise.setAttribute('is_press','false');
    submit.setAttribute('is_press','false');
}
function isTrue(id) {
    console.log("id: " + id);
    let hasTrue = document.getElementById(id);
     console.log("hasTrue: " + hasTrue.getAttribute('is_press'));
    return hasTrue.getAttribute('is_press');
}
function changeIs_press(id) {
    let change = document.getElementById(id);
    return (change.setAttribute('is_press', 'true'));
}
function revise_Usr () {
    let information = document.getElementsByClassName('user1 form-control');
    for (let i of information) {
        i.disabled=false
    }
}