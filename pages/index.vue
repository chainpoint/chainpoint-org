<template>
  <main class="page-container">
    <div class="page-chainpoint">
      <section class="section section-hero">
        <div class="cta-hero container background-chainpoint">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="section-title col col-md-8">
                <h1>For developers</h1>
                <h2>Chainpoint</h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row ">
              <div class="col col-md-7">
                <p class="paragraph-large">
                  Chainpoint is an open standard for linking data to the blockchain to create a timestamp proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-network">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="section-title col col-md-8">
              <h1>Chainpoint network</h1>
              <h2>
                Chainpoint is the world’s largest and fastest network for anchoring data to the blockchain
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-developertools">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="section-title col col-md-8">
              <h1>Developer Tools</h1>
              <h2>Get started in minutes</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center developer-tools">
            <CardLink
              v-for="cardLink in cardLinks"
              :key="cardLink.title"
              :title="cardLink.title"
              :path="cardLink.path"
              :icon="cardLink.icon"
              :description="cardLink.description"
            />
          </div>
        </div>
      </section>
      <section class="section section-benefits">
        <div class="container">
          <div class="row ">
            <BenefitGroup
              v-for="(benefit, index) in benefits"
              :key="benefit.title"
              :title="benefit.title"
              :description="benefit.description"
              :icon="benefit.icon"
              :items="benefit.listItems"
              :index="index"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import CardLink from '@/components/CardLink.vue'
import BenefitGroup from '@/components/BenefitGroup.vue'

export default {
  components: { CardLink, BenefitGroup },
  data() {
    return {
      cardLinks: [
        {
          title: 'Chainpoint Node API',
          path:
            'https://github.com/chainpoint/chainpoint-node/wiki/Chainpoint-Node-API:-How-to-Create-a-Chainpoint-Proof',
          icon: 'icon-chainpoint-api',
          description: 'Learn how to interact with a public network of Chainpoint Nodes. Each node has a REST API.'
        },
        {
          title: 'Chainpoint Client Library',
          path: 'https://github.com/chainpoint/chainpoint-client-js',
          icon: 'icon-chainpoint-client-library',
          description: 'A full-featured client that works in both Browser and Node.js based Javascript applications.'
        },
        {
          title: 'Run a Chainpoint Node',
          path: 'https://github.com/chainpoint/chainpoint-node',
          icon: 'icon-chainpoint-node',
          description:
            'Join the over 7,000 nodes that are part of the public Chainpoint Network, or run a private Chainpoint node.'
        },
        {
          title: 'Chainpoint CLI',
          path: 'https://github.com/chainpoint/chainpoint-cli',
          icon: 'icon-chainpoint-cli',
          description: 'A Command Line Interface (CLI) for creating and verifying Chainpoint proofs.'
        }
      ],
      benefits: [
        {
          title: 'Hundreds of use cases',
          description: 'Chainpoint is being used by thousands of organizations. Here are some common use cases.',
          icon: 'icon-chainpoint-usecases',
          listItems: [
            {
              icon: 'icon-chainpoint-notarize',
              text: 'Create an audit trail for business processes.'
            },
            {
              icon: 'icon-chainpoint-agreements',
              text: 'Timestamp important documents and data.'
            },
            {
              icon: 'icon-chainpoint-signatures',
              text: 'Add a blockchain proof to your digital signatures.'
            },
            {
              icon: 'icon-chainpoint-education',
              text: 'Issue blockchain verifiable education credentials.'
            },
            {
              icon: 'icon-chainpoint-regulations',
              text: 'Prove compliance with regulations.'
            }
          ]
        },
        {
          title: 'Built with developers in mind',
          description: 'Chainpoint is simple to use and can scale to meet the needs of any application',
          icon: 'icon-chainpoint-developers',
          listItems: [
            {
              icon: 'icon-chainpoint-stack',
              text: 'Chainpoint is easy to integrate with your existing applications'
            },
            {
              icon: 'icon-chainpoint-documentation',
              text: 'Clear documentation and APIs.'
            },
            {
              icon: 'icon-chainpoint-direct',
              text: 'Chainpoint proofs can be verified independently using open source tools.'
            }
          ]
        }
      ]
    }
  },
  head() {
    return {
      title: 'Chainpoint - Blockchain Proof & Anchoring Standard'
    }
  }
}
</script>

<style></style>
