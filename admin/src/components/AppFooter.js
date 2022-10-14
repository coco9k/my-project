import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Copyright &copy; 2022 Aricat Esport. All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <span>PoolPy9k</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
