// Business Logic

function wordCounter(text) {
  if (text.trim(). length === 0){
    return 0;
  }
  let wordCount =0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element){
    if (!Number(element)){
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  if (text.trim().length ===0) {
    return 0;
  }
  const wordArray = text.splot(" ");
  let wordCount = 0;
  wordArray.forEach(function(element){
    if (element.toLowerCase().includes(word.toLowerCase())){

    }
  });
  return wordCount;

  }
}

// UI Logic

$(document).ready(funtion(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});