import React from 'react'

// components
import SyntaxHightedContainer from '../components/SyntaxHighlightedContainer'
import Example from '../components/Example'
import {
  ContentBlock,
  Diagram,
  HeroBlock,
  LinkExternal
} from '../components/UI'

// images
import diagram from '../images/diagram@2x.png'
import companyLogos from '../images/company-logos@2x.png'
import whitespace from '../images/whitepaper@2x.png'

// content
import examplev1 from '../content/example-v1.json'
import examplev2 from '../content/example-v2.json'
import examplev3 from '../content/example-v3.json'

const IndexPage = () => (
  <div className='home'>
    <HeroBlock
      heading='Chainpoint is an open standard for creating a timestamp proof of any data, file, or process.'
      subheading='Anchor an unlimited amount of data to multiple blockchains. Verify the integrity and existence of data without relying on a trusted third-party.'
    >
      <br />
      <Diagram src={diagram} />
    </HeroBlock>

    <ContentBlock className='feature-github'>
      <Diagram src={companyLogos} />
      <p>...plus hundreds of others use Chainpoint.</p>
    </ContentBlock>

    <ContentBlock className='proof-works'>
      <div className='row'>
        <div className='col-12'>
          <h2>How does <span>Chainpoint</span> work?</h2>
          <p> Chainpoint links a <LinkExternal href='https://en.wikipedia.org/wiki/Cryptographic_hash_function'>hash</LinkExternal> of your data to a blockchain and returns a timestamp proof. A Chainpoint Node receives hashes which are aggregated together using a <LinkExternal href='https://en.wikipedia.org/wiki/Merkle_tree'>Merkle tree</LinkExternal>. The root of this tree is published in a Bitcoin transaction. The final Chainpoint proof defines a set of operations that cryptographically link your data to the Bitcoin blockchain.</p>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock className='proof-what'>
      <div className='row'>
        <div className='col-12'>
          <h2>What is a <span>Chainpoint Proof?</span></h2>
          <p className='subhead'>
          A Chainpoint proof contains the information to verify that the hash of some data is anchored to a blockchain. It proves the data existed at time it was anchored. Chainpoint proofs can be verified without reliance on a trusted third party.</p>
          <br />
          <img src={whitespace} className='img-fluid whitepaper' />
        </div>
      </div>
    </ContentBlock>

    <ContentBlock className='proof-tools'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='text-block'>
            <h2>Chainpoint Node API</h2>
            <p className='subhead'>Chainpoint Nodes have an HTTP API. You can interact with Nodes using any programming language that supports HTTP calls. Thousands of Chainpoint Nodes operate as part of a global network. </p>
            <LinkExternal className='btn btn-primary' href='https://github.com/chainpoint/chainpoint-node/wiki/Chainpoint-Node-API:-How-to-Create-a-Chainpoint-Proof'>Chainpoint Node API Tutorial</LinkExternal>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='text-block'>
            <h2>Chainpoint JS Client</h2>
            <p className='subhead'>
          This Chainpoint javascript client can be used in both Browser and Node.js based Javascript applications using callback functions, Promises (using .then, .catch), or Promises (using async/await) functional styles.</p>
            <LinkExternal className='btn btn-primary' href='https://github.com/chainpoint/chainpoint-client-js'>Chainpoint JS Client</LinkExternal>
          </div>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock className='proof-versions'>
      <SyntaxHightedContainer>
        <div className='row'>
          <div className='col-12'>
            <h2>Chainpoint Proof Versions</h2>
            <p className='subhead'>The third major version of the Chainpoint proof specification is currently in testing and scheduled for release soon. A <LinkExternal href='https://github.com/chainpoint/chainpoint-proof-json-schema'>JSON schema validator</LinkExternal> is available.</p>
            <div className='docs docs-content'>
              <ul className='nav nav-tabs'>
                <li className='nav-item'><a className='nav-link active' href='#v3x' data-toggle='tab'>Version 3.0</a></li>
                <li className='nav-item'><a className='nav-link' href='#v2x' data-toggle='tab'>Version 2.0</a></li>
                <li className='nav-item'><a className='nav-link' href='#v1x' data-toggle='tab'>Version 1.x</a></li>
              </ul>
              <div className='tab-content'>
                <div id='v3x' className='tab-pane fade in active show'>
                  <table className='multi-level'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>@context<br /><small>string, required</small></td>
                        <td>the JSON-LD context for the proof</td>
                      </tr>
                      <tr>
                        <td>type<small>string, required</small></td>
                        <td>the JSON-LD type definition</td>
                      </tr>
                      <tr>
                        <td>hash<small>string, required</small></td>
                        <td>hash value between 40 and 128 hex characters. Must be even length.</td>
                      </tr>
                      <tr>
                        <td>hash_id_node<small>string, required</small></td>
                        <td>a <LinkExternal href='https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_.28date-time_and_MAC_address.29'>Version 1 UUID</LinkExternal> with embedded timestamp and 5 byte BLAKE2s hash of the input data. Timestamp represents Node server time (UTC) of hash submission.</td>
                      </tr>
                      <tr>
                        <td>hash_submitted_node_at<small>string, required</small></td>
                        <td>Human readable <a href='https://en.wikipedia.org/wiki/ISO_8601' target='_blank'>ISO 8601</a> timestamp extracted from time embedded in the hash_id_node</td>
                      </tr>
                      <tr>
                        <td>hash_id_core<small>string, required</small></td>
                        <td>a <LinkExternal href='https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_.28date-time_and_MAC_address.29' target='_blank'>Version 1 UUID</LinkExternal> with embedded timestamp and 5 byte BLAKE2s hash of the input data. Timestamp represents Core server time (UTC) of hash submission.</td>
                      </tr>
                      <tr>
                        <td>hash_submitted_core_at<small>string, required</small></td>
                        <td>Human readable <LinkExternal href='https://en.wikipedia.org/wiki/ISO_8601' target='_blank'>ISO 8601</LinkExternal> timestamp extracted from time embedded in the hash_id_core</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>branches - an array of branch objects. Branches can be nested without limit and MUST be traversed only after executing 'ops'. <span className='required'>(required only at root)</span></td>
                      </tr>
                      <tr className='sublevel'>
                        <td>label<small>string, optional</small></td>
                        <td>text string representing the branch name</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>ops<small>array, optional</small></td>
                        <td>an array of operations objects. Operations are performed in sequence to arrive at an intermediate hash prior to entering a nested branch.</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>branches<small>array, optional</small></td>
                        <td>nested array of branch objects. Each branch contains ops; labels and additional nested branches are optional.</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>ops - an array of operation objects <span className='required'>(required under every 'branches' object)</span> </td>
                      </tr>
                      <tr className='sublevel'>
                        <td>l<small>string, optional</small></td>
                        <td>left concatenate a value. If the value is a hexadecimal string, it will be read as a hexadecimal byte array, otherwise the string will be converted to its byte value assuming UTF-8 encoding.</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>r<small>string, optional</small></td>
                        <td>right concatenate a value. If the value is a hexadecimal string, it will be read as a hexadecimal byte array, otherwise the string will be converted to its byte value assuming UTF-8 encoding.</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>op<small>string, optional</small></td>
                        <td>an operation to perform on the current value combined with a previous 'l' or 'r' operation. Current operations: 'sha-224', 'sha-256', 'sha-384', 'sha-512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512', or the special purpose 'sha-256-x2' which applies 'sha-256' twice.</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>anchors - an array of anchor objects <span className='required'>(required under every 'ops' object).</span></td>
                      </tr>
                      <tr className='sublevel'>
                        <td>type<small>string, required</small></td>
                        <td>one of 'cal' (Calendar), 'btc' (Bitcoin), or 'eth' (Ethereum) anchor types</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>anchor_id<small>string, required</small></td>
                        <td>an identifier used to look up embedded anchor data. e.g. a Bitcoin transaction or block ID.</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>uris<small>array, optional</small></td>
                        <td>an array of special purpose string URI's, each of which can be used to lookup and retrieve the exact hash resource required to validate this anchor. The URI MUST return only a Hexadecimal hash value as a string. The URI MUST also contain the 'anchor_id' value to lookup the URI resource. This strict requirement is to allow automated clients to retrieve and validate intermediate hashes when verifying a proof. The body value returned by the URI MUST be of even length and match the regex [a-fA-F0-9].</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Example</h3>
                  <Example json={examplev3} />
                </div>
                <div id='v2x' className='tab-pane fade'>
                  <table className='multi-level'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>@context</td>
                        <td>the JSON-LD context for the receipt</td>
                      </tr>
                      <tr>
                        <td>type</td>
                        <td>receipt type definition specifying hash method and version</td>
                      </tr>
                      <tr>
                        <td>targetHash</td>
                        <td>hash value being anchored to the blockchain</td>
                      </tr>
                      <tr>
                        <td>merkleRoot</td>
                        <td>merkle tree root value that is anchored to the blockchain</td>
                      </tr>
                      <tr>
                        <td>proof</td>
                        <td>merkle proof establishing link from the targetHash to the merkleRoot</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>anchors</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>type</td>
                        <td>anchor type definition specifying anchoring method</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>sourceId</td>
                        <td>identifier, such as a transaction id, used to locate anchored data</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Example</h3>
                  <Example json={examplev2} />
                  <h3>Receipt Types</h3>
                  <p>Receipt type values indicate the hash type and version of the receipt. The following values are supported.</p>
                  <table className='multi-level'>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ChainpointSHA224v2</td>
                        <td>Chainpoint 2.0 receipt using SHA-224</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA256v2</td>
                        <td>Chainpoint 2.0 receipt using SHA-256</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA384v2</td>
                        <td>Chainpoint 2.0 receipt using SHA-384</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA512v2</td>
                        <td>Chainpoint 2.0 receipt using SHA-512</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA3-224v2</td>
                        <td>Chainpoint 2.0 receipt using SHA3-224</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA3-256v2</td>
                        <td>Chainpoint 2.0 receipt using SHA3-256</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA3-384v2</td>
                        <td>Chainpoint 2.0 receipt using SHA3-384</td>
                      </tr>
                      <tr>
                        <td>ChainpointSHA3-512v2</td>
                        <td>Chainpoint 2.0 receipt using SHA3-512</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Anchor Types</h3>
                  <p>Anchor type values indicate the method and location of the anchored data. The following values are supported. Support for additional methods is planned.</p>
                  <table className='multi-level'>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BTCOpReturn</td>
                        <td>Anchored to a Bitcoin transaction within an OP_RETURN output.</td>
                      </tr>
                      <tr>
                        <td>ETHData</td>
                        <td>Anchored to an Ethereum transaction within the data field.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div id='v1x' className='tab-pane fade'>
                  <table className='multi-level'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan='2' className='table-section-header'>Header</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>chainpoint_version</td>
                        <td>version of the Chainpoint standard</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>hash_type</td>
                        <td>hashing algorithm used to encrypt target data (sha­256)</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>merkle_root</td>
                        <td>root of the Merkle Tree that is published in the blockchain</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>tx_id</td>
                        <td>blockchain transaction id</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>timestamp</td>
                        <td>non­authoritative Unix timestamp of the target</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>Target</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>target_hash</td>
                        <td>hash of the target that is being recorded in the blockchain</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>target_proof</td>
                        <td>Merkle proof used to prove target_hash is part of Merkle tree</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>target_URI (optional)</td>
                        <td>path to the target</td>
                      </tr>
                      <tr>
                        <td colSpan='2' className='table-section-header'>Extra</td>
                      </tr>
                      <tr className='sublevel'>
                        <td>custom (optional)</td>
                        <td>array of user defined key value pairs</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Example</h3>
                  <Example json={examplev1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SyntaxHightedContainer>
    </ContentBlock>

    <ContentBlock className='proof-verify'>
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Verifying <span>Chainpoint Proofs</span></h2>
          <p className='subhead'>Verification confirms that the proof is well formatted, and all proof operations lead to the expected anchor hash on the blockchain. Verification of version 3.x proofs can be performed with the <LinkExternal href='https://github.com/chainpoint/chainpoint-cli'>Chainpoint CLI</LinkExternal>. Verification of older versions can be performed using the <LinkExternal href='https://www.npmjs.com/package/chainpoint-validate'>chainpoint-validate</LinkExternal> Javascript package for Node.js.</p>
        </div>
      </div>
    </ContentBlock>

  </div>
)

export default IndexPage
