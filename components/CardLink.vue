<template>
  <div class="col col-12 col-sm-8 col-lg-6 col-xl-6">
    <a
      class="ui-card"
      :href="path"
      :target="isExternal(path) ? '_blank' : undefined"
      :rel="isExternal(path) ? 'noopener noreferrer' : undefined"
    >
      <component :is="iconComponent"></component>
      <div class="arrow-link" target="_blank">{{ title }}</div>
      <div class="paragraph">{{ description }}</div>
    </a>
  </div>
</template>

<script>
import NodeAPIIcon from '@/assets/images/home/icon-chainpoint-api.svg?inline'
import ClientLibraryIcon from '@/assets/images/home/icon-chainpoint-client-library.svg?inline'
import RunNodeIcon from '@/assets/images/home/icon-chainpoint-node.svg?inline'
import CLIIcon from '@/assets/images/home/icon-chainpoint-cli.svg?inline'

export default {
  components: {
    NodeAPIIcon,
    ClientLibraryIcon,
    RunNodeIcon,
    CLIIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconComponent() {
      switch (this.icon) {
        case 'icon-chainpoint-api':
          return 'NodeAPIIcon'
        case 'icon-chainpoint-client-library':
          return 'ClientLibraryIcon'
        case 'icon-chainpoint-node':
          return 'RunNodeIcon'
        case 'icon-chainpoint-cli':
          return 'CLIIcon'
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
