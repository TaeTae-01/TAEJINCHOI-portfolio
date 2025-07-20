import { motion } from 'framer-motion'
import '../styles/Splash.css'

const Splash = () => {
  return (
    <motion.div 
      className="splash-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="splash-content"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >

        {/* 메인 타이틀 */}
        <motion.div 
          className="splash-main"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="splash-title lato-black">
            PORTFOLIO
          </h1>
        </motion.div>

        {/* 하단 이름 */}
        <motion.div 
          className="splash-footer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="splash-name-kr lato-regular">최태진</p>
          <p className="splash-name-en lato-light">TAE JIN CHOI</p>
        </motion.div>

        {/* 로딩 인디케이터 */}
        <motion.div 
          className="loading-indicator"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1.3, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Splash
