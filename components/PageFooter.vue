<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row site-footer-navigation">
        <div class="site-footer-logo col col-12 col-sm-4 col-lg-3">
          <nuxt-link to="/">
            <TierionIcon />
          </nuxt-link>
        </div>
        <div v-for="linkGroup in linkGroups" :key="linkGroup.title" class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>{{ linkGroup.title }}</dt>
            <dd v-for="link in linkGroup.links" :key="link.title">
              <a
                class="site-footer-nav-link"
                :href="link.path"
                :target="isExternal(link) ? '_blank' : undefined"
                :rel="isExternal(link) ? 'noopener' : undefined"
              >
                {{ link.title }}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="site-footer-copyright">©{{ year }} Chainpoint. All rights reserved.</div>
  </footer>
</template>

<script>
import TierionIcon from '@/assets/images/footer/tierion-icon.svg?inline'

export default {
  components: {
    TierionIcon
  },
  data() {
    return {
      year: new Date().getFullYear(),
      mobileNavOpen: true,
      linkGroups: [
        {
          title: 'For Businesses',
          links: [
            {
              title: 'Proof',
              path: '/proof'
            }
          ]
        },
        {
          title: 'For Developers',
          links: [
            {
              title: 'Chainpoint',
              path: '/chainpoint'
            }
          ]
        },
        {
          title: 'Company',
          links: [
            {
              title: 'About',
              path: '/about'
            },
            {
              title: 'Blog',
              path: 'https://blog.tierion.com'
            },
            {
              title: 'Contact',
              path: '/contact'
            },
            {
              title: 'Careers',
              path: '/careers'
            }
          ]
        },
        {
          title: 'Community',
          links: [
            {
              title: 'Twitter',
              path: 'https://twitter.com/tierion/'
            },
            {
              title: 'Facebook',
              path: 'https://facebook.com/TierionInc'
            },
            {
              title: 'Discord',
              path: 'https://discordapp.com/invite/9HM4Qy9'
            },
            {
              title: 'Telegram',
              path: 'http://t.me/tierion'
            }
          ]
        },
        {
          title: 'GitHub',
          links: [
            {
              title: 'Tierion',
              path: 'https://github.com/tierion'
            },
            {
              title: 'Chainpoint',
              path: 'https://github.com/chainpoint'
            }
          ]
        }
      ]
    }
  },
  methods: {
    isExternal: link => {
      return link.path.startsWith('http://') || link.path.startsWith('https://')
    }
  }
}
</script>

<style></style>
