import BalanceBox from '@/components/BalanceBox';
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: "Harshal", 
    lastName: "Dodke",
    email: "harshal.dodke@gmail.com"
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
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
        </header>
        {/* recent transactions */}
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.4},{currentBalance: 504}]}
      />
    </section>
  )
}

export default Home