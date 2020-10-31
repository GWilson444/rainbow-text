const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
for(let i = 0; i < colors.length; i++){
    const allSpans = document.querySelectorAll('span')[i];
    allSpans.style.color = colors[i];
}