async function typewrite(sentence, eleRef, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
async function deleteSentence(eleRef) {
    const sentence = document.getElementById(eleRef).innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      document.getElementById(eleRef).innerHTML = letters.join("")
    }
}

  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

window.addEventListener("load", async (event) => {
    await waitForMs(500)
    await deleteSentence("typeable")
    await typewrite("Programming", "typeable")
    await waitForMs(500)
    await deleteSentence("typeable")
    await typewrite("Teamwork", "typeable")
    await waitForMs(500)
    await deleteSentence("typeable")
    await typewrite("Design", "typeable")
    await waitForMs(500)
    await deleteSentence("typeable")
    await typewrite("Robotics", "typeable")
});


