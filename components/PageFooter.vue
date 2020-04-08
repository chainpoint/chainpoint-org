<template>
  <footer class="site-footer">
    <div class="notification-container">
      <a class="notification" href="/careers"
        ><div class="notification-pill">New</div>
        <span class="notification-text">Tierion is hiring! See our current openings.</span></a
      >
    </div>
    <div class="container">
      <div class="row site-footer-navigation">
        <div class="site-footer-logo col col-12 col-sm-4 col-lg-3">
          <a href="/"
            ><svg width="81" height="68" viewBox="0 0 81 68" xmlns="http://www.w3.org/2000/svg">
              <g fill="#F94081" fill-rule="evenodd">
                <path
                  d="M58.118 42.85a249.613 249.613 0 0 0-35.161-.003l-.966-14.914a263.59 263.59 0 0 1 37.092 0l-.965 14.917M48.526 67.135c-6.389-.304-9.59-.303-15.979.001-.171-5.317-.258-7.975-.43-13.291 6.733-.321 10.106-.32 16.839.001l-.43 13.289M.052 3.922a8304.202 8304.202 0 0 1 2.617 18.011 246.666 246.666 0 0 1 3.825-6.566c23.29-3.344 45.615-3.298 68.892.136a269.302 269.302 0 0 1 3.017 6.43c1.04-7.206 1.565-10.808 2.618-18.011-27.374-4.59-53.595-4.59-80.969 0"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>For Businesses</dt>
            <dd><a class="site-footer-nav-link" href="/proof">Proof</a></dd>
          </dl>
        </div>
        <div class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>For Developers</dt>
            <dd><a class="site-footer-nav-link" href="/chainpoint">Chainpoint</a></dd>
          </dl>
        </div>
        <div class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>Company</dt>
            <dd><a class="site-footer-nav-link" href="/about">About</a></dd>
            <dd><a href="https://blog.tierion.com" class="site-footer-nav-link" rel="noopener">Blog</a></dd>
            <dd><a class="site-footer-nav-link" href="/contact">Contact</a></dd>
            <dd><a class="site-footer-nav-link" href="/careers">Careers</a></dd>
          </dl>
        </div>
        <div class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>Community</dt>
            <dd>
              <a href="https://twitter.com/tierion/" class="site-footer-nav-link" target="_blank" rel="noopener"
                >Twitter</a
              >
            </dd>
            <dd>
              <a href="https://facebook.com/TierionInc" class="site-footer-nav-link" target="_blank" rel="noopener"
                >Facebook</a
              >
            </dd>
            <dd>
              <a
                href="https://discordapp.com/invite/9HM4Qy9"
                class="site-footer-nav-link"
                target="_blank"
                rel="noopener"
                >Discord</a
              >
            </dd>
            <dd>
              <a href="http://t.me/tierion" class="site-footer-nav-link" target="_blank" rel="noopener">Telegram</a>
            </dd>
            <dd>
              <a href="https://tokensale.tierion.com" class="site-footer-nav-link" target="_blank" rel="noopener"
                >Token Sale</a
              >
            </dd>
          </dl>
        </div>
        <div class="col col-6 col-sm-4 col-lg-3">
          <dl>
            <dt>GitHub</dt>
            <dd>
              <a href="https://github.com/tierion" class="site-footer-nav-link" target="_blank" rel="noopener"
                >Tierion</a
              >
            </dd>
            <dd>
              <a href="https://github.com/chainpoint" class="site-footer-nav-link" target="_blank" rel="noopener"
                >Chainpoint</a
              >
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="site-footer-copyright">
      ©{{ year }} Tierion, Inc. All rights reserved.<a href="/privacy-policy">Privacy Policy</a
      ><a href="/tos">Terms of Service</a>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style></style>
