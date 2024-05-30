import BalanceBox from '@/components/BalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Harshal"};

  return (
    <section className='home'>
      <div className='home-content'>
        <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subText="Access and manage your accounts and Transactions."
        />
        <BalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={14324.43}
        />
      </div>
    </section>
  )
}

export default Home