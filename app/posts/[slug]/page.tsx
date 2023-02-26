import ArticleMain from '@/components/ArticleMain'
import ReadersNav from '@/components/ReadersNav'
import Recommendations from '@/components/Recommendations'

const styles = {
  container: 'flex',
}
export default function Post() {
  return (
    <div className={styles.container}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  )
}
