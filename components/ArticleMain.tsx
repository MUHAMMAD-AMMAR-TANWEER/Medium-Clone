import Ammar from '../public/static/cp.jpg'
import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import BannerImage from '../public/static/banner.png'

const styles = {
  wrapper: `flex  items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen  w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  Image: `object-cover`,
  columns: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  ArticleMainContainer: `flex flex-col gap-[1rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  title: `font-bold text-3xl`,
  subTitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  ArticleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
}

export default function ArticleMain() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.Image}
                src={Ammar}
                height={100}
                width={100}
                alt="author Image"
              />
            </div>
            <div className={styles.columns}>
              <div>Muhammad Ammar Tanweer</div>
              <div className={styles.postDetails}>
                <span>June 15 * 7 min read * </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.ArticleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              src={BannerImage}
              alt="Banner Image"
              className={styles.Image}
            />
          </div>
          <h1 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2023
          </h1>
          <h4 className={styles.subTitle}>
            <div>Muhamamd Ammar , Feb 25, 2023</div>
            <div>Breif: Productivty is a skill that can be learned.</div>
          </h4>
          <div className={styles.ArticleText}>
            Is your current social media management software really effective?
            Do you even use appropriate social media management software, or do
            you rely on specialized agencies like The Marketing Heaven to get
            the job done? You may be wondering if there is another tool that is
            easier to use, offers additional functionality, or even better value
            for money? Or maybe you need to plan content for a platform not
            integrated with your current tool? The right tool will save you time
            and effectively manage your social networks so that your social
            content strategy is really effective. It's easy to say, but how do
            you know which social media management software is right for you?
            The choice will be even more difficult if you have never used a
            social media management tool. Indeed, the ideal solution can vary
            according to needs, and it will not be the same for a novice blogger
            as for a marketing agency offering full services. Before investing
            your time (or money) in social media management tools, be sure to
            choose the one that suits you best in order to immediately optimize
            your productivity. If your requirements are very specific, it is a
            good idea to develop your own social media management software. A
            customized tool can help you save costs and benefit from a better
            ROI in the long term.
          </div>
        </div>
      </div>
    </div>
  )
}
