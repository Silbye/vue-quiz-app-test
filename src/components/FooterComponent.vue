<template>
  <div class="roboto-regular footer-text">
    <img
      v-if="!this.$store.state.isStarted"
      src="../assets/img/copyright.svg"
      alt=""
    />
    {{
      this.$store.state.currentQuestionIndex >
      this.$store.getters.questionsLength
        ? "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,"
        : !this.$store.state.isStarted
        ? "2019"
        : ""
    }}
  </div>
</template>
