<template>
  <div class="list d-flex justify-content-between mt-1 mb-4">
    <span :class="{ premium: !video.premium }" class="span">
      <i class="fab fa-youtube"></i>
      <nuxt-link :to="redirect">{{ video.title }}</nuxt-link>
      <span class="badge badge-pill badge-success">{{ premiumLabel }}</span>
    </span>

    <nuxt-link :to="redirect" class="btn btn-info">Start</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: [Object, Array],
      default: () => [],
    },
    video: {
      type: [Object, Array],
      default: () => [],
    },
  },

  computed: {
    redirect() {
      const authURL = `/courses/${this.course.slug}/lessons/${this.video.slug}`
      if (!this.video.premium) {
        return authURL
      }
      if (
        this.video.premium &&
        this.$auth.loggedIn &&
        !this.isExpired(this.$auth.user.grace_period)
      ) {
        return authURL
      }
      if (
        this.video.premium &&
        this.$auth.loggedIn &&
        this.isExpired(this.$auth.user.premium_expiration_date) &&
        this.isExpired(this.$auth.user.grace_period)
      ) {
        return '/plans?r=checkout'
      }
      return '/login'
    },

    premiumLabel() {
      return this.video.premium ? 'Paid' : 'Free'
    },
  },

  methods: {
    isExpired(date) {
      if (!date) {
        return true
      }
      if (new Date(date).getTime() < new Date().getTime()) {
        return true
      }

      return false
    },
  },
}
</script>

<style scoped>
div.list .span,
.span a {
  color: rgb(145, 144, 144) !important;
}

.premium {
  font-weight: bold;
}
</style>
