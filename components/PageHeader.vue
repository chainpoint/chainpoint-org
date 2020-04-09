<template>
  <nav class="navbar navbar-expand flex-column flex-md-row navbar-light">
    <div class="container">
      <nuxt-link class="navbar-brand mb-0" to="/">
        <span class="sr-only">Tierion - Blockchain Proof Engine</span>
        <TierionLogo />
      </nuxt-link>
      <div class="nav-menu-container">
        <div class="nav-menu" :class="{ 'is-visible': mobileNavOpen }">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li v-for="navLink in navLinks" :key="navLink.title" class="nav-item">
              <nuxt-link class="nav-link" :to="navLink.path" @click.native="toggleMobileNav">
                <span>{{ navLink.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <button class="nav-burger" @click="toggleMobileNav">
          <NavBurger v-if="!mobileNavOpen" />
          <NavClose v-else />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import TierionLogo from '@/assets/images/header/tierion-logo.svg?inline'
import NavBurger from '@/assets/images/header/nav-burger.svg?inline'
import NavClose from '@/assets/images/header/nav-close.svg?inline'

export default {
  components: {
    TierionLogo,
    NavBurger,
    NavClose
  },
  data() {
    return {
      mobileNavOpen: false,
      navLinks: [
        {
          title: 'Link 1',
          path: '/link1'
        },
        {
          title: 'Link 2',
          path: '/link2'
        }
      ]
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen
    }
  }
}
</script>

<style></style>
