<template>
  <div class="color-question">
    <div
      v-for="(answer, index) in questions[
        this.$store.state.currentQuestionIndex
      ].answers"
      :style="{
        backgroundColor: answer,
      }"
      :class="
        currentQuestionAnswer == answer
          ? 'color-box selected-color-box'
          : 'color-box'
      "
      @click="$emit('updateAnswer', answer)"
    ></div>
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
