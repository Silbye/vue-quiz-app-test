<template>
  <div class="image-boxes-question">
    <img
      :src="questions[this.$store.state.currentQuestionIndex].image"
      alt=""
    />
    <div
      class="answer-buttons"
      :style="{
        width:
          questions[this.$store.state.currentQuestionIndex].answers.length == 4
            ? '250px'
            : '290px',
      }"
    >
      <button
        class="answer-button pt-serif-regular"
        v-for="(answer, index) in questions[
          this.$store.state.currentQuestionIndex
        ].answers"
        :class="
          currentQuestionAnswer == answer
            ? 'number-box selected-color-box'
            : 'number-box'
        "
        @click="$emit('updateAnswer', answer)"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: this.$store.state.questions,
    };
  },
  props: {
    currentQuestionAnswer: String,
  },
};
</script>
