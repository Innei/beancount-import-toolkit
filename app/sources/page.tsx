import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

export default function Home() {
    const resolveAsset = (asset: string) => {
        const ASSET_URL =
            "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

        return `${ASSET_URL}${asset}`;
    };

    return (
        <div>
            <Head>
                <title>Beancount Import Toolkit</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='container mx-auto h-screen p-4'>
                <div className='pb-8'>
                    <div>
                        <p className='text-3xl'>
                            Import Transactions to Beancount
                        </p>
                    </div>
                </div>

                <div className='pb-8'>
                    <p className='text-2xl'>
                        Choose Your Source
                    </p>
                </div>
                <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
                    <Link href={'/record/cmb-credit'} >
                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img src={resolveAsset("office1.png")} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">CMB Credit Card</h2>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </main >
        </div >
    )
}
