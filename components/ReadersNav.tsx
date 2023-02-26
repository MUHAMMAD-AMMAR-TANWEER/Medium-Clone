import SmallLogo from '../public/static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Ammar from '../public/static/cp.jpg'
import Image from 'next/image'
import Link from 'next/link'

const styles = {
  logoContainer: `cursor-pointer`,
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center`,
  profileImage: `object-cover`,
}

export default function ReadersNav() {
  return (
    <div className={styles.wrapper}>
      <Link href={'/'}>
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} height={100} width={100} alt="Home logo" />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={Ammar}
          height={100}
          width={100}
          alt="Down Image"
        />
      </div>
    </div>
  )
}
