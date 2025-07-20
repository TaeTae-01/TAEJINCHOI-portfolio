import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'
import '../styles/Contact.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "이메일",
      value: "ctj0999@gmail.com",
      link: "mailto:ctj0999@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "전화번호",
      value: "+82-3570-4688",
      link: "tel:+82-35700-4688"
    },
    {
      icon: <MapPin size={24} />,
      label: "위치",
      value: "충청북도 청주시",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub size={28} />,
      label: "Personal GitHub",
      url: "https://github.com/TaeTae-01",
      color: "#333"
    },
    {
      icon: <FaGithub size={28} />,
      label: "School Github",
      url: "https://github.com/taejinchoi-cbnu",
      color: "#AB1F54"
    },
    {
      icon: <FaGithub size={28} />,
      label: "Tech Blog",
      url: "https://velog.io/@xowls000/posts",
      color: "#333"
    }
  ]

  return (
    <section className="contact">
      <div className="contact-container">
        
        {/* 메인 타이틀 */}
        <motion.div 
          className="contact-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title lato-bold">
            🔗 Contact
          </h2>
          <p className="contact-subtitle lato-regular">
            새로운 기회와 협업에 항상 열려있습니다. 언제든지 편하게 연락주세요!
          </p>
        </motion.div>

        {/* 연락처 및 소셜 링크 */}
        <div className="contact-content">
          
          {/* 연락처 정보 */}
          <motion.div 
            className="contact-info-section"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="section-title lato-bold">연락처</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {info.link ? (
                    <a href={info.link} className="contact-link">
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <span className="contact-label lato-regular">{info.label}</span>
                        <span className="contact-value lato-bold">{info.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-link">
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <span className="contact-label lato-regular">{info.label}</span>
                        <span className="contact-value lato-bold">{info.value}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div 
            className="social-section"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="section-title lato-bold">소셜 미디어</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                  style={{ '--hover-color': social.color }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="social-icon">
                    {social.icon}
                  </div>
                  <span className="social-label lato-regular">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 푸터 메시지 */}
        <motion.div 
          className="contact-footer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="footer-content">
            <p className="footer-name lato-bold">최태진 (TAE JIN CHOI)</p>
            <p className="footer-role lato-regular">Frontend Developer</p>
            <p className="footer-copyright lato-light">
              © 2025 Tae Jin Choi. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
