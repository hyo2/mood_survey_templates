Survey.StylesManager.applyTheme("defaultV2");
var json = {
  title: "설문조사",
  showProgressBar: "bottom",
  startSurveyText: "설문조사 시작!",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "MOOD는 당신에 대해 알고 싶어요 <br/>기분에 따라 어떤 노래를 듣는지 알려주세요 <br/>앞으로의 노래 추천에 반영될 거예요",
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "civilwar",
          title: "나는 '기쁨'일 때 이런 음악을 듣는다",
          choices: [
            "1750-1800",
            "1800-1850",
            "1850-1900",
            "1900-1950",
            "after 1950",
          ],
          correctAnswer: "1850-1900",
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "libertyordeath",
          title: "Who said 'Give me liberty or give me death?'",
          choicesOrder: "random",
          choices: [
            "John Hancock",
            "James Madison",
            "Patrick Henry",
            "Samuel Adams",
          ],
          correctAnswer: "Patrick Henry",
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "magnacarta",
          title: "What is the Magna Carta?",
          choicesOrder: "random",
          choices: [
            "The foundation of the British parliamentary system",
            "The Great Seal of the monarchs of England",
            "The French Declaration of the Rights of Man",
            "The charter signed by the Pilgrims on the Mayflower",
          ],
          correctAnswer: "The foundation of the British parliamentary system",
        },
      ],
    },
  ],
  completedHtml:
    "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
window.survey = new Survey.Model(json);
survey.onComplete.add(function (sender) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});
$("#surveyElement").Survey({ model: survey });
