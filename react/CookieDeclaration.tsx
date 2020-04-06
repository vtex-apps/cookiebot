import React, { FC, useCallback } from 'react'
import { FormattedMessage } from 'react-intl'

import styles from './styles.css'

const CookieDeclaration: FC = () => {
  const ref = useCallback(node => {
    if (!node) {
      return
    }
    const cbid = window.__cookiebot_id
    const script = document.createElement('script')
    script.id = 'CookieDeclaration'
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://consent.cookiebot.com/${cbid}/cd.js`
    node.appendChild(script)
  }, [])

  return (
    <div className={`${styles.declaration} lh-copy`}>
      <h1 className={`${styles.declarationHeader} heading-2`}>
        <FormattedMessage id="store/cookiebot.declaration" />
      </h1>
      <div ref={ref} id="CookiebotDeclaration" />
    </div>
  )
}

export default CookieDeclaration
