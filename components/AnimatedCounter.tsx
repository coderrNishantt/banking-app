import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
       duration={2}
       decimal=","
       end={amount} 
       />
    </div>
  )
}

export default AnimatedCounter