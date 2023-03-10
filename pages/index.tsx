import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/layouts/banner'
import CategoryList from '@/components/layouts/categoryList'
import ShowProductSection from '@/components/sections/showProductSection'
import { mockProducts } from '@/constants/productList'
import WhoSection from '@/components/layouts/whoSection'
import WarningSection from '@/components/layouts/warningSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Music Gear TH</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`my_container`}>
        <Banner />
        <div className={`my-28`}>
          <CategoryList />
        </div>
        <div className='mb-28'>
          <ShowProductSection title={"popular"} data={mockProducts} />
        </div>
        <div className='mb-28'>
          <ShowProductSection title={"most liked"} data={mockProducts} />
        </div>
        <div className='mb-28'>
          <ShowProductSection title={"most view"} data={mockProducts} />
        </div>
        <div className='mb-28'>
          <ShowProductSection title={"hot"} data={mockProducts} />
        </div>
      </div>

      <WhoSection />
      <WarningSection />
    </>
  )
}
