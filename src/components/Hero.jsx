import { motion } from 'framer-motion'
import '../styles/Hero.css'

const Hero = () => {
  // 스크롤 네비게이션 함수
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`.${sectionId}`)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Navigation Bar - 클릭 시 해당 컴포넌트로 바로 이동 */}
        <nav className="hero-navbar">
          <button 
            className="nav-item lato-regular"
            onClick={() => scrollToSection('skills')}
          >
            SKILLS
          </button>
          <button 
            className="nav-item lato-regular"
            onClick={() => scrollToSection('projects')}
          >
            PROJECTS
          </button>
          <button 
            className="nav-item lato-regular"
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
          </button>
        </nav>

        {/* 메인 소개 카드 */}
        <motion.div 
          className="hero-main-card"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="main-text">
            <h1 className="lato-bold">
              사용자와 서비스를 연결하는<br />
              프론트엔드 개발자 최태진입니다.
            </h1>
            <h3 className="lato-regular">
              저는 JavaScript 기반의 기술을 바탕으로 현재는 프론트엔드 개발에 집중하고 있으며, <br />
              장기적으로는 백엔드까지 아우르는 풀스택 개발자를 목표로 하고 있습니다.
            </h3>
          </div>
          
          <div className="profile-section">
            <img 
              src="public/assets/images/profile.JPG" 
              alt="프로필 이미지" 
              className="profile-image"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
