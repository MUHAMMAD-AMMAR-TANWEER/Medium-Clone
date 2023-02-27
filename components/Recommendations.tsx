import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../public/static/replit.png'
import CPLogo from '../public/static/cp.jpg'
import JSLogo from '../public/static/jsLogo.png'
import Ammar from '../public/static/cp.jpg'
import Rusty from '../public/static/Rusty.jpg'
import Hacker from '../public/static/Hacker.jpg'
import Destroyer from '../public/static/AIDD.png'
import Alpha from '../public/static/AIDDD.png'
import Tutorial from '../public/static/tutorial.jpg'

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full `,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] py-[.4rem] px-[.6rem] text-white rounded-full text-sm`,
  recommendationContainer: ``,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  title: ``,
  articleContainer: `my-[2rem]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[2rem]`,
  articleContent: `flex-[4]`,
}

export default function Recommendations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Ammar} height={100} width={100} alt="author Image" />
        </div>
        <div className={styles.authorName}>Muhammad Ammar Tanweer</div>
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articleContainer}>
          {RecommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper} key={post.id}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={styles.recommendationAuthorProfileImageContainer}
                  >
                    <Image
                      src={post.author.Aimage}
                      height={100}
                      width={100}
                      alt="Js tutorial"
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  height={100}
                  width={100}
                  alt="Js tutorial"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const RecommendedPosts = [
  {
    id: 1,
    title: 'What can you do with replit to boost the programming experience',
    image: ReplitLogo,
    author: {
      name: 'Muhammad Ammar',
      Aimage: CPLogo,
    },
  },
  {
    id: 2,
    title: 'How general AI can be harmful for us',
    image: Destroyer,
    author: {
      name: 'Hacker Dude',
      Aimage: Hacker,
    },
  },
  {
    id: 3,
    title: 'How to become developer in 2023',
    image: Tutorial,
    author: {
      name: 'Rusty',
      Aimage: Rusty,
    },
  },
]
