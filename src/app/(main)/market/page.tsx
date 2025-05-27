/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './market.scss'

const MarketPage = () => {
  return (
    <div className="banner">
      <div className="product">
        <div
          className="soda"
          style={{ ['--url' as any]: "url('/img/heineken.jpg')" } as React.CSSProperties}
        />
        <div
          className="soda"
          style={{ ['--url' as any]: "url('/img/gatorade.jpg')" } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

export default MarketPage
