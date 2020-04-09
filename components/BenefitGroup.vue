<template>
  <div :class="'feature-list-outer-' + index + ' col col-md-5'">
    <div class="feature-list">
      <div class="feature-list-inner">
        <component :is="iconComponent"></component>
        <h2 class="feature-list-title">{{ title }}</h2>
        <p class="paragraph">{{ description }}</p>
        <BenefitItem v-for="item in items" :key="item.icon" :icon="item.icon" :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitItem from '@/components/BenefitItem.vue'
import UseCaseIcon from '@/assets/images/home/icon-chainpoint-usecases.svg?inline'
import DevelopersIcon from '@/assets/images/home/icon-chainpoint-developers.svg?inline'

export default {
  components: {
    BenefitItem,
    UseCaseIcon,
    DevelopersIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: null
    }
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case 'icon-chainpoint-usecases':
          return 'UseCaseIcon'
        case 'icon-chainpoint-developers':
          return 'DevelopersIcon'
        default:
          return null
      }
    }
  },
  methods: {
    isExternal: path => {
      return path.startsWith('http://') || path.startsWith('https://')
    }
  }
}
</script>

<style></style>
