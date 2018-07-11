import React from 'react'

const Example = ({json = {}}) => {
  return (
    <div>
      <pre>
        <code className='json'>
          {
            typeof json === 'object'
              ? JSON.stringify(json)
              : json
          }
        </code>
      </pre>
    </div>
  )
}

export default Example
