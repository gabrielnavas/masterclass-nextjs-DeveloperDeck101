import Link from 'next/link'
import styles from './page.module.css'

export default async function ProductsPage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div >
      <p>Products Page</p>
    </div>
  )
}