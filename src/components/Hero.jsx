import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  // 모든 애니메이션이 끝나면 타이핑 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true)
    }, 2500) // 모든 카드 애니메이션 완료 후

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* ABOUT ME 태그 - 왼쪽에서 오른쪽으로 슬라이드 */}
        <motion.div 
          className="about-tag"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="lato-bold">ABOUT ME</span>
        </motion.div>

        {/* 메인 소개 카드 - 첫 번째로 아래에서 위로 */}
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
            <h3>
              자바스크립트 풀스택 개발자를 지향 얘 CSS 좀 해야겠다
            </h3>
          </div>
          
          <div className="profile-section">
            <img 
              src="src/assets/profile.JPG" 
              alt="프로필 이미지" 
              className="profile-image"
            />
          </div>
        </motion.div>

        {/* 학력 카드 - 두 번째로 아래에서 위로 (딜레이 적용) */}
        <motion.div 
          className="education-card"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="education-content">
            <h3 className="education-title lato-bold">학력</h3>
            <img className='education-icon' src="src\assets\educationIcon.png" alt='학교 아이콘'/>
            <p className="education-text lato-regular">충북대학교 소프트웨어학부 재학</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
