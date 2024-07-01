<script>
import RadioQuestion from "../components/RadioQuestion.vue";
import ColorQuestion from "../components/ColorQuestion.vue";
import ImageBoxesQuestion from "../components/ImageBoxesQuestion.vue";
import ImageRadioQuestion from "../components/ImageRadioQuestion.vue";

export default {
  name: "TestView",
  data() {
    return {
      questions: this.$store.state.questions,
      currentQuestionAnswer: "",
      resultGot: false,
      data: {},
      dots: "",
      timeLeft: 600,
      timerGoing: false,
    };
  },
  components: {
    RadioQuestion,
    ColorQuestion,
    ImageBoxesQuestion,
    ImageRadioQuestion,
  },
  methods: {
    startTest() {
      this.$store.commit("startQuiz");
    },
    updateAnswer(answer) {
      this.currentQuestionAnswer = answer;
    },
    nextQuestion() {
      this.$store.commit("nextQuestion");
      this.currentQuestionAnswer = "";
      if (this.$store.state.currentQuestionIndex == this.questions.length) {
        setTimeout(
          () => (this.$store.commit("nextQuestion"), (this.timerGoing = true)),
          5000
        );
      }
    },
    addDot() {
      if (this.dots.length < 3) {
        this.dots = this.dots + ".";
      } else {
        this.dots = "";
      }
    },
    decreaseTime() {
      if (this.timerGoing) {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          location.reload();
        }
      }
    },
    getResult() {
      this.timerGoing = false;
      this.resultGot = true;

      fetch("https://swapi.dev/api/people/1/")
        .then((res) => res.json())
        .then((data) => (this.data = data))
        .catch((error) => console.error("Error:", error));
    },
  },
  mounted: function () {
    this.addDot();
    setInterval(this.addDot, 1000);
    setInterval(this.decreaseTime, 1000);
  },
};
</script>

<template>
  <div class="main">
    <div v-if="!this.$store.state.isStarted">
      <div class="section main-page-section-one">
        <div class="container">
          <p class="pt-serif-regular">Пройдите точный и быстрый</p>
          <h1 class="yeseva-one-regular">тест на определение IQ</h1>
          <button class="main-button merriweather-bold" @click="startTest">
            пРойти тест
          </button>
          <div class="section-one-bottom pt-serif-bold">
            И получите рекомендации <br />
            по развитию своего интеллекта
            <p>и улучшению финансового благосостояния и личной жизни</p>
          </div>
          <img src="../assets/img/arrow-up.svg" alt="" />
          <p class="section-one-more pt-serif-regular">подробнее</p>
        </div>
      </div>
      <div class="section main-page-section-two">
        <div class="container">
          <img class="quote-up" src="../assets/img/quote-up.svg" alt="" />
          <p class="section-two-quote yeseva-one-regular">
            Профессиональный IQ-тест позволяет не только определить коэффициент
            вашего интеллекта, <br />
            но и выработать список рекомендаций для повышения этого показателя.
          </p>
          <img class="quote-down" src="../assets/img/quote-down.svg" alt="" />
        </div>
      </div>
      <div class="section main-page-section-three">
        <div class="container">
          <p class="pt-serif-regular">
            Также по результатам теста <br /><b>вы получите</b> подробные<br />
            <b>советы</b> по определению наиболее перспективной
            <b>для вашего <br />типа</b>
            <b class="bold-lower"> интеллекта</b
            ><b> сферы деятельности,<br /></b>
            которая принесет вам скорейший финансовый результат.
          </p>
          <img src="../assets/img/backgrounds/3.png" alt="" />
          <button class="main-button merriweather-bold" @click="startTest">
            пРойти тест
          </button>
        </div>
      </div>
      <div class="section main-page-section-four">
        <div class="container">
          <p class="section-four-text-top merriweather-regular">
            Прохождение теста займет у вас не более <b>12 минут</b>, а его
            <b class="white">результаты</b> вы сможете
            <b>использовать всю жизнь.</b>
          </p>
          <p class="section-four-text-bottom merriweather-regular">
            Профессиональная интерпретация и детально
            <b>проработанные рекомендации</b> позволят вам <br />качественно
            <b>изменить все аспекты своей жизни:</b> от финансового до
            любовного.
          </p>
          <button
            class="main-button bottom-button merriweather-bold"
            @click="startTest"
          >
            пРойти тест
          </button>
        </div>
      </div>
    </div>
    <div class="quiz pt-serif-regular" v-else>
      <div
        class="quiz-wrapper"
        v-if="this.$store.state.currentQuestionIndex <= questions.length"
      >
        <div class="progress-bar">
          <div
            class="bar-top"
            :style="{
              width:
                260 *
                  (this.$store.state.currentQuestionIndex / questions.length) +
                'px',
            }"
          ></div>
          <div class="bar-under"></div>
        </div>

        <div
          class="questions"
          v-if="this.$store.state.currentQuestionIndex < questions.length"
        >
          <p
            class="question"
            :style="{
              'font-size': questions[this.$store.state.currentQuestionIndex]
                .customFont
                ? `${
                    questions[this.$store.state.currentQuestionIndex].customFont
                  }px`
                : '20px',
            }"
          >
            {{ questions[this.$store.state.currentQuestionIndex].question }}
          </p>

          <RadioQuestion
            @updateAnswer="updateAnswer"
            v-if="
              questions[this.$store.state.currentQuestionIndex].type == 'radio'
            "
          />

          <ColorQuestion
            :currentQuestionAnswer="currentQuestionAnswer"
            @updateAnswer="updateAnswer"
            v-else-if="
              questions[this.$store.state.currentQuestionIndex].type == 'color'
            "
          />

          <ImageBoxesQuestion
            :currentQuestionAnswer="currentQuestionAnswer"
            @updateAnswer="updateAnswer"
            v-else-if="
              questions[this.$store.state.currentQuestionIndex].type ==
              'image-boxes'
            "
          />

          <ImageRadioQuestion
            @updateAnswer="updateAnswer"
            v-else-if="
              questions[this.$store.state.currentQuestionIndex].type ==
              'image-radio'
            "
          />

          <button
            class="quiz-button merriweather-bold"
            @click="nextQuestion"
            :disabled="!currentQuestionAnswer"
          >
            ДАЛЕЕ
          </button>
        </div>
        <div
          class="waiting-for-result pt-serif-regular"
          v-else-if="this.$store.state.currentQuestionIndex == questions.length"
        >
          <p class="waiting-top">Обработка результатов</p>
          <img
            class="waiting-result"
            src="../assets/img/pending-result.svg"
            alt=""
          />
          <p class="waiting-bottom">Определение стиля мышления{{ dots }}</p>
        </div>
      </div>
      <div class="section quiz-done" v-else>
        <div class="container">
          <h1 class="done-title pt-serif-bold">Ваш результат рассчитан:</h1>
          <p class="done-percent pt-serif-regular">
            <u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более
            чем на <br />15 пунктов отличается от среднего в большую или меньшую
            сторону!
          </p>
          <h2 class="done-hurry pt-serif-bold">
            Скорее получите свой результат!
          </h2>
          <p class="done-incognito roboto-medium">
            В целях защиты персональных <br />данных результат теста, их<br />
            подробная интерпретация и рекомендации доступны в виде голосового
            сообщения по звонку с вашего мобильного телефона
          </p>
          <div class="done-timer pt-serif-regular">
            Звоните скорее, запись доступна всего
            <b
              >{{
                Math.floor(timeLeft / 60) < 10
                  ? `0${Math.floor(timeLeft / 60)}`
                  : Math.floor(timeLeft / 60)
              }}:{{
                timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
              }}</b
            >

            минут
          </div>
          <button class="please-call" @click="getResult">
            <img src="../assets/img/phone.svg" alt="" />
            <p class="roboto-black">Позвонить и прослушать результат</p>
          </button>

          <div
            class="fetched-data roboto-medium"
            v-if="Object.keys(data).length > 0"
          >
            <p>Имя: {{ data.name }}</p>
            <p>Рост: {{ data.height }}см</p>
            <p>Вес: {{ data.mass }}кг</p>
            <p>Год рождения: {{ data.birth_year }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
