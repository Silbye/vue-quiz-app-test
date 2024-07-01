<template>
  <div class="header">
    <button class="show-menu" v-if="!showMenu" @click="toggleMenu">
      <img src="../assets/img/menu.svg" alt="" />
    </button>

    <div class="header-text yeseva-one-regular">
      <img
        v-if="
          this.$store.state.isStarted &&
          this.$store.state.currentQuestionIndex <=
            this.$store.getters.questionsLength
        "
        src="../assets/img/megamozg.svg"
        alt=""
      />
      {{
        this.$store.state.isStarted &&
        this.$store.state.currentQuestionIndex <=
          this.$store.getters.questionsLength
          ? "тест на определение IQ"
          : this.$store.state.currentQuestionIndex >
            this.$store.getters.questionsLength
          ? "Готово!"
          : ""
      }}
    </div>

    <div
      :class="
        showMenu ? 'menu roboto-light menu-shown' : 'menu roboto-light hidden'
      "
    >
      <button class="close-menu" @click="toggleMenu">
        <img src="../assets/img/menu-close.svg" alt="" />
      </button>
      <a href="">Главная</a>
      <a href="">Информация о тесте</a>
      <button class="menu-start roboto-light" @click="startTest">
        пройти тест
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    startTest() {
      this.showMenu = false;
      this.$store.commit("startQuiz");
    },
  },
};
</script>
