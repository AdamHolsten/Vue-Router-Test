<template>
  <div>
    <div v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
        <p v-if="destination.test">{{ destination.test }}</p>
      </div>
    </div>
    <div class="experiences">
      <h2>Top Expereinces in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
  components: { ExperienceCard, GoBack },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};

// Load data via fetch from external api
// https://vueschool.io/lessons/reacting-to-param-changes
</script>
