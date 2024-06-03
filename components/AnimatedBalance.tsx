'use client';
import CountUp from 'react-countup';

const AnimatedBalance = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            prefix='$'
            end={amount}
            decimals={2}
            decimal='.'
        />
    </div>
  )
}

export default AnimatedBalance