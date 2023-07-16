import Image from 'next/image'
import React from 'react'
import pnfSvg from '../../public/icon/404Svg.svg'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='pageNotFoundPage'>
        <Image src={pnfSvg} width={500} height={400} alt="404" />
        <Link href={'/'}>Go To Home Page &#8594;</Link>
    </div>
  )
}

export default NotFound