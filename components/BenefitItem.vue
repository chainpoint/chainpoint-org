<template>
  <div class="feature-list-item">
    <component :is="iconComponent"></component>
    <div class="feature-item-text">{{ text }}</div>
  </div>
</template>

<script>
import NotarizeIcon from '@/assets/images/home/icon-chainpoint-notarize.svg?inline'
import AgreementsIcon from '@/assets/images/home/icon-chainpoint-agreements.svg?inline'
import SignaturesIcon from '@/assets/images/home/icon-chainpoint-signatures.svg?inline'
import EducationIcon from '@/assets/images/home/icon-chainpoint-education.svg?inline'
import RegulationsIcon from '@/assets/images/home/icon-chainpoint-regulations.svg?inline'
import StackIcon from '@/assets/images/home/icon-chainpoint-stack.svg?inline'
import DocumentationIcon from '@/assets/images/home/icon-chainpoint-documentation.svg?inline'
import DirectIcon from '@/assets/images/home/icon-chainpoint-direct.svg?inline'

export default {
  components: {
    NotarizeIcon,
    AgreementsIcon,
    SignaturesIcon,
    EducationIcon,
    RegulationsIcon,
    StackIcon,
    DocumentationIcon,
    DirectIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case 'icon-chainpoint-notarize':
          return 'NotarizeIcon'
        case 'icon-chainpoint-agreements':
          return 'AgreementsIcon'
        case 'icon-chainpoint-signatures':
          return 'SignaturesIcon'
        case 'icon-chainpoint-education':
          return 'EducationIcon'
        case 'icon-chainpoint-regulations':
          return 'RegulationsIcon'
        case 'icon-chainpoint-stack':
          return 'StackIcon'
        case 'icon-chainpoint-documentation':
          return 'DocumentationIcon'
        case 'icon-chainpoint-direct':
          return 'DirectIcon'
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
