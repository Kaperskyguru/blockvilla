<template>
  <div class="col-md-4 col-sm-12 col-xl-4 py-3">
    <div class="card1 shadow rounded border-0">
      <nuxt-link :to="'/courses/' + course.slug">
        <div class="card">
          <img :src="banner" :alt="course.title" />
        </div>
      </nuxt-link>
      <div class="px-3 py-4">
        <nuxt-link :to="'/courses/' + course.slug">
          <h4>{{ course.title }}</h4>
          <p class="mt-2">
            {{ course.summary }}
          </p>
        </nuxt-link>
        <div class="d-flex justify-content-between text-black-50 mt-1">
          <span class="d-block"
            ><i class="fas fa-play-circle"></i> {{ totalLessons }} lessons</span
          >
          <span><i class="fab fa-youtube"></i> {{ premiumLabel }}</span>
          <!-- <span>Beginner</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    totalLessons() {
      if (this.course.Videos) return this.course.Videos.length
      return 0
    },

    premiumLabel() {
      return this.course.premium ? 'Paid Course' : 'Free Course'
    },

    banner() {
      if (this.course.banner) {
        return this.course.banner
      }
      return 'https://res.cloudinary.com/mezie/image/upload/v1527784441/learn-adonisjs/Learn_AdonisJs_from_zero_to_deploy_j5t6kd.png'
    },
  },
}
</script>

<style scoped>
a {
  color: inherit;
}
</style>
