import Image from 'next/image'
import Logo from '../public/static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
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

export default function PostCard() {
  return (
    <Link href={'/posts/123'}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                className={styles.authorImage}
                width={60}
                height={60}
                alt="demo image"
              />
            </div>
            <div className={styles.authorName}>Muhammad Ammar</div>
          </div>
          <h1 className={styles.title}>
            {' '}
            7 Free Tools That Will Make You More Productive In 2023
          </h1>
          <div className={styles.briefing}>
            Productivity is a skill that can be learned.
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              June 15 * 14 min *{' '}
              <span className={styles.category}>Category</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image src={Logo} height={200} width={200} alt="ace" />
        </div>
      </div>
    </Link>
  )
}
