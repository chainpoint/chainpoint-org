import React, { Component } from 'react'
import 'chainpoint-client-web/dist/react/index.css'

class Demo extends React.Component {
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
    )
  }
}

export default Demo
