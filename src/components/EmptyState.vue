<template>
  <section class="empty-state">
    <span class="empty-state__emoji">&#x1F9D1;&#x200D;&#x1F680;</span>
    <h2 class="empty-state__title">
      Looks like this planet is keeping its secrets for now. Try exploring
      another one!
    </h2>
  </section>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.75rem;
  max-width: 43rem;
  padding: 1.5rem;
  margin: auto 0;
}

.empty-state__emoji {
  font-size: 3.75rem;
}

.empty-state__title {
  font-size: 1.75rem;
  line-height: 2.25rem;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .empty-state__emoji {
    font-size: 5rem;
  }
}
</style>
