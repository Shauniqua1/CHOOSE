



let text = document.querySelector('.text');
let walking = document.querySelector('.walking');
let  RunButton = document.querySelector('.Run-button');
let InvestigateButton = document.querySelector('.investigate-button');
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
RunButton.addEventListener('click', function() {
text.innerHTML = "The police who suspiciously just so happen to be around the corner ask if you saw or heard anything concerning. Double click to tell them. Use the scroll wheel over the photo to keep running.";
walking.style.display = "none";
choiceAimage.style.display ="block";
RunButton.style.display="none";
InvestigateButton.style.display="none"
});choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "The “police” were actually working with the murderers in the alley. You try to call 911 but are killed before they pick up."
    choiceA1image.style.display ="block";
});choiceAimage.addEventListener("wheel", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You go home and head to bed. You have nightmares about what could've happened in the alley, but ultimately, you live."
    choiceA2image.style.display ="block";
});


let choiceBimage = document.querySelector('.choiceBimage');
    choiceBimage.style.display ="none";
 let choiceB1image = document.querySelector('.choiceB1image');
    choiceB1image.style.display ="none";
let choiceB2image = document.querySelector('.choiceB2image');
    choiceB2image.style.display ="none";
InvestigateButton.addEventListener("click", function(){
text.innerHTML = "You reach the alley and see two dark figures trying to murder a woman, but she is fighting back. Do you try to pick up the metal pipe or wooden plank to help her fight? use the scroll wheel over the photo pick up the wooden plank. Double click the picture to grab the pipe";
 walking.style.display = "none";
choiceBimage.style.display ="block";
RunButton.style.display="none";
InvestigateButton.style.display="none";
});
  choiceBimage.addEventListener("wheel", function(){
       text.innerHTML = "You pick up the plank but it’s heavier than you thought. You drop it and the dark figures see you. Both you and the woman are killed." 
       walking.style.display="none";
        choiceBimage.style.display="none";
        RunButton.style.display="none";
        InvestigateButton.style.display="none";
        choiceB1image.style.display="block";
    });

    //     choiceBimage.addEventListener("keydown", function(){
    //         text.innerHTML = "You pick up the pipe and swiftly knock one of them out. You and the woman work together to take down the other, you're safe." 
    //         walking.style.display="none";
    //          choiceBimage.style.display="none";
    //          RunButton.style.display="none";
    //          InvestigateButton.style.display="none";
    //          choiceB2image.style.display="block";




    // });

    choiceBimage.addEventListener("dblclick", function(){
        text.innerHTML = "You pick up the pipe and swiftly knock one of them out. You and the woman work together to take down the other, you're safe." 
        walking.style.display="none";
         choiceBimage.style.display="none";
         RunButton.style.display="none";
         InvestigateButton.style.display="none";
         choiceB2image.style.display="block";




});