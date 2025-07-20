import { motion } from 'framer-motion'
import '../styles/Projects.css'

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      id: 1,
      name: "STUDDY BUDDY",
      description: "StudyBuddy는 학생들이 효율적으로 스터디 그룹을 형성하고 관리할 수 있도록 도와주는 웹 애플리케이션입니다.",
      image: "src/assets/studdybuddyIcon.png",
      details: {
        fullDescription: " 이 프로젝트의 핵심은 팀원들간의 불가능한 시간을 입력하면 자동으로 모든 팀원이 참가 가능한 시간을 산출해줍니다. 🏠 대시보드: 개인화된 대시보드로 활동 현황 한눈에 파악 👥 그룹 관리: 스터디 그룹 생성, 참여 및 관리 📅 일정 관리: 그룹별 일정 조율 및 캘린더 기능 🔔 알림 시스템: 실시간 그룹 요청 및 일정 알림 👤 프로필 관리: 개인 프로필 및 설정 관리",
        techStack: ["React", "Node.js", "Firebase"],
        github: "https://github.com/taejinchoi-cbnu/StudyBuddy",
        ppt: "/assets/StuddyBuddy_Presentation.pptx",
        video: "/assets/StuddyBuddy_Demo_Video.mp4"
      }
    },
    {
      id: 2,
      name: "NOTI",
      description: "AI 기술과 Spring Boot 백엔드와 Android 앱으로 구성된 음성 기록 및 요약 서비스입니다.",
      image: "src/assets/notiIcon.png",
      details: {
        fullDescription: "핵심 가치: 녹음을 진행하면 자동으로 텍스트 변환 및 요약 제공 AI 기반 대화형 질의응답으로 회의 내용 검색 및 분석이 서비스는 회의 후 문서 정리에 어려움을 겪는 직장인들을 위해 설계되었습니다. 업로드된 음성을 기반으로 회의 스크립트를 자동 생성하고, AI 요약본, 챗봇과의 대화를 통해 회의 내용에 대한 질의응답이 가능합니다.",
        techStack: ["Kotlin", "Java", "MySQL"],
        github: "https://github.com/ujin999/NoTI",
        ppt: "/assets/Noti_Presentation.pptx",
        video: "/assets/Noti_Demo_Video.mp4"
      }
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        
        {/* PROJECTS 태그 - 왼쪽에서 오른쪽으로 슬라이드 */}
        <motion.div 
          className="projects-tag"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="lato-bold">PROJECTS</span>
        </motion.div>

        {/* 프로젝트 소개 텍스트 */}
        <motion.div 
          className="projects-intro"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="projects-subtitle lato-regular">
            사용자 경험을 중시하며 <br/> 실제 문제를 해결하는 서비스들을 개발했습니다.
          </p>
        </motion.div>

        {/* 프로젝트 카드들 */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              
              <div className="project-content">
                <h3 className="project-name lato-bold">{project.name}</h3>
                <p className="project-description lato-regular">{project.description}</p>
                
                <div className="project-tech-preview">
                  <span className="tech-label lato-regular">주요 기술:</span>
                  <div className="tech-tags">
                    {project.details.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag lato-regular">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="project-button lato-bold"
                  onClick={() => onProjectClick(project)}
                >
                  자세히 보기
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
