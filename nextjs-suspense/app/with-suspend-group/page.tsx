import style from './page.module.css'

import Product from "../components/Product/Product";
import { Suspense } from 'react';
import Loading from './loading';
import Category from '../components/Category/Category';
import User from '../components/User/User';

export default async function Home() {
  return (
    <div>
      <div className={style.container}>
        <Suspense fallback={<Loading />}>
          <Product />
          <Category />
          <User />
        </Suspense>
      </div>
      Sou um texto e apareço bem rápido!  
    </div>
  );
}
