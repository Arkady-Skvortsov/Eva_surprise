let happyBirthday = document.querySelector(".happy-birthday-to-you-owl");

window.addEventListener("load", () => {
  setTimeout(() => {
    const audio = new Audio("../audio/Dream.mp3");

    audio.loop = true;

    const vButton = document.createElement("a");

    if (audio.paused) audio.play();

    happyBirthday.classList.add("happy-birthday-message");

    vButton.click();
    return true;
  }, 0);

  setTimeout(() => {
    happyBirthday.style.transform = "scale(1)";

    new Typed(".text-view-block", {
      // Waits 1000ms after typing "First"
      strings: [
        "Hyvaa paivaa pollo)).. Сегодня твой день рождения, а это значит, что впереди у тебя очень много событий, опыта и других вещей в жизни)). Я не зря выбрал такую композицию, ведь она запомнилась мне очень сильно в момент нашего знакомства).. Тогда я играл в Valiant Hearts).. И да, тогда я не знал(как и ты, возможно) то, к чему может привести наше знакомство)).. То, сколько у нас общих интересов, целей - не счесть)).. Сейчас у меня очень сильно горят руки и я не могу не отметить то, как ты выросла за это время)).. Как внешне, так и внутренне)). Мне нравится то, насколько ты креативная и добрая)).. Хочется прямо сейчас взять тебя за руки). Ты стараешься не унывать и идти вперед)). С днем рождения Ева).. Не хочу желать каких-то банальных вещей по типу: счастья, здоровья и прочего... Я желаю тебе не поддаваться страхам и идти очень уверенно по жизни, ничего не бояться и быть всегда в радостном настроении)).",
      ],
      typeSpeed: 80,
    });
  }, 1500);
});
