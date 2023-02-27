'use client'
import ArticleMain from '@/components/ArticleMain'
import ReadersNav from '@/components/ReadersNav'
import Recommendations from '@/components/Recommendations'
import { useState, useEffect, useContext } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { MediumContext } from '../../../context/Mediumcontext'

const styles = {
  container: 'flex',
}
export default function Post() {
  const { posts, users } = useContext(MediumContext)
  const router = useRouter()
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const pathname = String(usePathname()).split('/')[2] //it is now in next 13

  useEffect(() => {
    if (posts.lenght === 0) {
      return
    }
    const rePost = posts.find((post) => post.id === pathname)
    setPost(rePost)

    setAuthor(users.find((user) => user.id === rePost?.data?.author))
  }, [])

  return (
    <div className={styles.container}>
      <ReadersNav />

      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  )
}
