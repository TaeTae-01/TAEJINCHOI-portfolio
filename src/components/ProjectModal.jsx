import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, FileText, Play, Zap } from 'lucide-react'
import '../styles/ProjectModal.css'
import { FaReact } from 'react-icons/fa'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-container"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* 모달 헤더 */}
          <div className="modal-header">
            <div className="modal-title-section">
              <h2 className="modal-title lato-bold">{project.name}</h2>
            </div>
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {/* 모달 바디 */}
          <div className="modal-body">
            
            {/* 프로젝트 이미지 & 동영상 섹션 */}
            <div className="modal-media-section">
              <div className="project-showcase">
                {project.details.video && (
                  <div className="video-section">
                    <h4 className="section-title lato-bold">
                      <Play size={20} />
                      데모 영상
                    </h4>
                    <video 
                      controls 
                      className="demo-video"
                      poster={project.image}
                    >
                      <source src={project.details.video} type="video/mp4" />
                      브라우저가 비디오를 지원하지 않습니다.
                    </video>
                  </div>
                )}
              </div>
            </div>

            {/* 프로젝트 상세 정보 */}
            <div className="modal-content-section">
              
              {/* 프로젝트 설명 */}
              <div className="description-section">
                <h4 className="section-title lato-bold">💁 프로젝트 소개</h4>
                <div className="description-content">
                  <p className="lato-regular">{project.details.fullDescription}</p>
                </div>
              </div>

              {/* 기술 스택 */}
              <div className="tech-section">
                <h4 className="section-title lato-bold">사용된 주요 기술</h4>
                <div className="tech-stack-grid">
                  {project.details.techStack.map((tech, index) => (
                    <div key={index} className="tech-item">
                      <span className="lato-regular-bold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="action-section">
                <h4 className="section-title lato-bold">관련 자료</h4>
                <div className="action-buttons">
                  
                  {project.details.github && (
                    <motion.button
                      className="action-btn github-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.details.github, '_blank')}
                    >
                      <Github size={20} />
                      <span className="lato-bold">GitHub Link</span>
                    </motion.button>
                  )}

                  <motion.button
                    className="action-btn pdf-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.details.ppt, '_blank')}
                  >
                    <FileText size={20} />
                    <span className="lato-bold">발표자료</span>
                  </motion.button>

                </div>
              </div>

            </div>

          </div>

          {/* 모달 푸터 */}
          <div className="modal-footer">
            <motion.button
              className="close-btn lato-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              닫기
            </motion.button>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
