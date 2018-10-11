import React, { Component } from 'react'
import Layout from '../components/Layout'
import 'chainpoint-client-web/dist/react/index.css'

class Demo extends Component {
  state = {
    ProofClient: null,
  }
  componentDidMount() {
    const ProofClient = require('chainpoint-client-web/dist/react/index.js')
      .default
    this.setState({
      ProofClient,
    })
  }
  render() {
    const { ProofClient } = this.state
    return (
      <Layout>
        <div className="demo">
          {ProofClient && (
            <ProofClient
              onAppearCreate={() => {}}
              onAppearVerify={() => {}}
              onChangeProofCount={() => {}}
              onChangeCreateStatus={() => {}}
              onChangeVerifyAnalysisStatus={() => {}}
              onChangeVerifySuccessStatus={() => {}}
              onChangeVerifyFailStatus={() => {}}
            />
          )}
        </div>
      </Layout>
    )
  }
}

export default Demo
