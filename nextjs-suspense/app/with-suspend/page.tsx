import style from './page.module.css'

import Product from "../components/Product/Product";
import { Suspense } from 'react';
import Loading from './loading';
import Category from '../components/Category/Category';

export default async function Home() {
  return (
    <div>
      <div className={style.container}>
        <Suspense fallback={<Loading />}>
          <Category />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Product />
        </Suspense>
      </div>
      Sou um texto e apareço bem rápido!  
    </div>
  );
}
