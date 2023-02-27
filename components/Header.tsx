'use client'
import Image from 'next/image'
import Logo from '../public/static/logo.png'
import { useContext } from 'react'
import { MediumContext } from '../context/Mediumcontext'
import Modal from 'react-modal'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import PostModal from './PostModal'

// Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50% , -50%)',
    backgroundColor: '#fff',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10,11, 13,0.75)',
  },
}

export default function Header() {
  const router = useRouter()
  const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',

    logo: 'cursor-pointer object-contain justify-self-start',
    bannerNav: 'flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  }
  const pathname = String(usePathname()).split('/')
  const params = useSearchParams()

  const { handleUserAuth, currentUser } = useContext(MediumContext)
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
            alt="medium Logo"
          />
        </div>
        {currentUser ? (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <Link href={'/?addNew=1'}>
              <div className={styles.accentedButton}>Write</div>
            </Link>
            <div className={styles.accentedButton}>Get Unlimited access</div>
          </div>
        ) : (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div onClick={handleUserAuth}>Sign in</div>
            <div className={styles.accentedButton}>Get Started</div>
          </div>
        )}
      </div>
      <Modal
        isOpen={params.has('addNew')}
        onRequestClose={() => router.push('/')}
        style={customStyles}
        ariaHideApp={false}
      >
        <PostModal />
      </Modal>
    </div>
  )
}
