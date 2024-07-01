<template>
  <div class="answers-container">
    <label
      class="radio-label"
      :style="{
        height: questions[this.$store.state.currentQuestionIndex].customHeight
          ? `${
              questions[this.$store.state.currentQuestionIndex].customHeight
            }px`
          : '50px',
      }"
      v-for="(answer, index) in questions[
        this.$store.state.currentQuestionIndex
      ].answers"
      :for="answer"
      ><input
        class="radio-input"
        type="radio"
        v-model="currentQuestionAnswer"
        v-on:input="$emit('updateAnswer', answer)"
        :value="answer"
        :name="questions[this.$store.state.currentQuestionIndex].question"
        :id="answer"
      />
      <p class="pt-serif-regular">{{ answer }}</p>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: this.$store.state.questions,
    };
  },
};
</script>
