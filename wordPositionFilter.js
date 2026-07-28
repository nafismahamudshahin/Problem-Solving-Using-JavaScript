const filterEvenPositionWords = (sentence) => {
    const words = sentence.split(" ");
    let eventWords = "";
    let i = 0;
    for (const word of words) {
        if (i % 2 == 0) {
            if (i == words.length - 1) {
                eventWords += word;
            } else eventWords += word + " ";
        }
        i++;
    }
    return eventWords;
}


console.log(filterEvenPositionWords('The quick brown fox jumps'))