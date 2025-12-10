import Image from 'next/image'
import React from 'react'

const GiftCard = () => {
  return (
    <div className="cursor-pointer">
        <Image src={"/giftCard.webp"} width={2000} height={1000} alt="Comet Banner" />
    </div>
  )
}

export default GiftCard