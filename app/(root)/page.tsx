import HeaderBox from '@/components/HeaderBox'
import BalanceBox from '@/components/BalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
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
        transactions={account?.transactions}
        banks={accountsData?.slice(0,2)}
      />
    </section>
  )
}

export default Home