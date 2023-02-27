'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../public/static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
const styles = {
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878] text-md`,
  postDetails: ``,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  bookmarkContainer: `cursor-pointer`,
  wrapper: `flex max-w-[36rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  thumbnailContainer: ` flex flex-col`,
}

export default function PostCard({ post }) {
  const [authorData, setAuthorData] = useState(null)

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, 'users', post.data.author))).data())
    }
    getAuthorData()
  }, [post])
  return (
    <Link href={`/posts/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                className={styles.authorImage}
                width={60}
                height={60}
                alt="demo image"
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}> {post.data.title}</h1>
          <div className={styles.briefing}>{post.data.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString('en-Us', {
                day: 'numeric',
                month: 'short',
              })}{' '}
              * {post.data.postLength} min read *
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            height={200}
            width={200}
            alt="ace"
          />
        </div>
      </div>
    </Link>
  )
}
