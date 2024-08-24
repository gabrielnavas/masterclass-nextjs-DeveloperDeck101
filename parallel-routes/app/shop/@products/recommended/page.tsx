import Link from 'next/link'
import styles from './page.module.css'

export default async function RecomendedProductsPage() {
  await new Promise(resolve => setTimeout(resolve, 3200));
  return (
    <div>
      <p>Recommended products</p>
    </div>
  )
}