import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AccountCard from './AccountCard'

const RightSidebar = ({ email, name, banks }:RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'/>
            <div className='profile'>
                <div className='profile-img'>
                    <span className='text-5xl font-Bold text-blue-500'>{name[0]}</span>
                </div>
                <div className="profile-details">
                    <h1 className='profile-name'>
                        {name}
                    </h1>
                    <p className="profile-email">{email}</p>
                </div>
            </div>
        </section>
        <section className="banks">
            <div className="flex w-full justify-between">
                <h2 className="header-2">My Accounts</h2>
                <Link href="/" className='flex gap-2'>
                    <Image
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt='plut'
                    />
                    <h2 className='text-14 font-semibold text-gray-700'>
                        Add Account
                    </h2>
                </Link>
            </div>
            {banks?.length>0 && (
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                        <AccountCard
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={name}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <AccountCard
                                key={banks[1].$id}
                                account={banks[1]}
                                userName={name}
                                showBalance={false}
                            />
                        </div>
                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSidebar