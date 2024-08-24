import styles from './page.module.css'

export default async function ReviewsPage() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div className={styles.container}>
      <p>Reviews Page</p>
    </div>
  )
}