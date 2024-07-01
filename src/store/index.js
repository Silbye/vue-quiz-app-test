import { createStore } from "vuex";

export default createStore({
  state: {
    isStarted: false,
    currentQuestionIndex: 0,
    questions: [
      {
        question: "ваш пол:",
        type: "radio",
        answers: ["мужчина", "женщина"],
      },
      {
        question: "укажите ваш возраст:",
        type: "radio",
        answers: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"],
      },
      {
        question: "Выберите лишнее:",
        type: "radio",
        answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
      },
      {
        question: "Продолжите числовой ряд: 18    20    24    32",
        type: "radio",
        answers: [62, 48, 74, 57, 60, 77],
        customHeight: 40,
      },
      {
        question: "Выберите цвет, который сейчас наиболее Вам приятен:",
        type: "color",
        answers: [
          "#A8A8A8",
          "#0000A9",
          "#00A701",
          "#F60100",
          "#FDFF19",
          "#A95403",
          "#000000",
          "#850068",
          "#46B2AC",
        ],
      },
      {
        question:
          "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
        type: "color",
        answers: [
          "#A8A8A8",
          "#46B2AC",
          "#A95403",
          "#00A701",
          "#000000",
          "#F60100",
          "#850068",
          "#FDFF19",
          "#0000A9",
        ],
        customFont: 19,
      },
      {
        question: "Какой из городов лишний?",
        type: "radio",
        answers: [
          "Вашингтон",
          "Лондон",
          "Париж",
          "Нью-Йорк",
          "Москва",
          "Оттава",
        ],
        customHeight: 40,
      },
      {
        question: "Выберите правильную фигуру из четырёх пронумерованных.",
        image: new URL(
          "@/assets/img/questions/stickman-question.png",
          import.meta.url
        ),
        type: "image-boxes",
        answers: [1, 2, 3, 4],
        customFont: 18,
      },
      {
        question: "Вам привычнее и важнее:",
        type: "radio",
        answers: [
          "Наслаждаться каждой минутой проведенного времени",
          "Быть устремленными мыслями в будущее",
          "Учитывать в ежедневной практике прошлый опыт",
        ],
        customHeight: 78,
      },
      {
        question:
          "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
        image: new URL(
          "@/assets/img/questions/pyramid-question.png",
          import.meta.url
        ),
        type: "image-radio",
        answers: [
          "оно остроконечное",
          "оно устойчиво",
          "оно-находится в состоянии равновесия",
        ],
        customFont: 16,
      },
      {
        question: "Вставьте подходящее число",
        image: new URL(
          "@/assets/img/questions/star-question.png",
          import.meta.url
        ),
        type: "image-boxes",
        answers: [34, 36, 53, 44, 66, 42],
      },
    ],
  },
  getters: {
    questionsLength: (state) => {
      return state.questions.length;
    },
  },
  mutations: {
    startQuiz(state) {
      state.isStarted = true;
    },
    nextQuestion(state) {
      state.currentQuestionIndex++;
    },
  },
  actions: {},
});
