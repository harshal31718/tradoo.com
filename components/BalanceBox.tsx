import AnimatedBalance from './AnimatedBalance'
import DoughnutChart from './DoughnutChart'

const BalanceBox = ({
    accounts=[], totalBanks, totalCurrentBalance
}: BalanceBoxProps) => {
    return (
        <section className="total-balance">
          <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
          </div>
    
          <div className="flex flex-col gap-6">
            <h2 className="header-2">
              Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="total-balance-label">
                Total Current Balance
              </p>
    
              <div className="total-balance-amount flex-center gap-2">
                <AnimatedBalance amount={totalCurrentBalance} />
              </div>
            </div>AnimatedCounter
          </div>
        </section>
      )
}

export default BalanceBox