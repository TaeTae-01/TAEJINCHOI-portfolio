import { motion } from 'framer-motion'
import '../styles/Projects.css'

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      id: 1,
      name: "STUDDY BUDDY",
      description: "StudyBuddy는 학생들이 효율적으로 스터디 그룹을 형성하고 스케줄 관리를 도와주는 웹 애플리케이션입니다.",
      image: "/TAEJINCHOI-portfolio/assets/images/studdybuddyIcon.png",
      details: {
        fullDescription: `이 프로젝트의 핵심은 팀원들간의 불가능한 시간을 입력하면 자동으로 모든 팀원이 참가 가능한 시간을 산출해줍니다.
        
        🏠 대시보드: 개인화된 대시보드로 활동 현황 한눈에 파악

        👥 그룹 관리: 스터디 그룹 생성, 참여 및 관리
        
        📅 일정 관리: 그룹별 일정 조율 및 캘린더 기능
        
        🔔 알림 시스템: 실시간 그룹 요청 및 일정 알림
        
        👤 프로필 관리: 개인 프로필 및 설정 관리`,
        techStack: ["React", "Node.js", "Firebase"],
        github: "https://github.com/taejinchoi-cbnu/StudyBuddy",
        ppt: "https://www.canva.com/design/DAGn3WDx3dU/p_m7sYcjUqOhT3UhAj8UqA/view?utm_content=DAGn3WDx3dU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99d589430c",
        video: "/TAEJINCHOI-portfolio/assets/videos/StuddyBuddy_Demo_Video.mp4"
      }
    },
    {
      id: 2,
      name: "NOTI",
      description: "AI 기술과 Spring Boot 백엔드와 Android 앱으로 구성된 음성 기록 및 요약 서비스입니다.",
      image: "/TAEJINCHOI-portfolio/assets/images/notiIcon.png",
      details: {
        fullDescription: `이 프로젝트의 핵심은 녹음을 진행하면 AI 기반 텍스트 변환 및 요약 제공해주며 대화형 질의응답으로 회의 내용 검색 및 분석이 가능합니다.

        🎙️ 음성 처리: 앱 내에서 직접 회의 녹음 가능
            STT 변환: 녹음 파일을 Text로 전환하는 Speech-to-Text 기능
        
        🧠 스마트 요약: AI 기반 회의 내용 자동 요약
            대화형 챗봇: 회의 내용 기반 질의응답 시스템
            
        🗂️ 데이터 관리: 서버 기반 데이터 보관 혹은 사용자의 기기 로컬에 보관 가능`,
        techStack: ["Kotlin", "Java", "MySQL"],
        github: "https://github.com/ujin999/NoTI",
        ppt: "https://www.canva.com/design/DAGqHTIFfh8/MRz47cBzYjHNQvYeFh_TCw/view?utm_content=DAGqHTIFfh8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he0dd656cf4",
        video: "/TAEJINCHOI-portfolio/assets/videos/Noti_Demo_Video.mp4"
      }
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">

       {/* 프로젝트 소개 텍스트 */}
       <motion.div 
          className="projects-intro"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title lato-bold">
            ✅ Projects
          </h2>
          <p className="projects-subtitle lato-regular">
            사용자 경험을 중시하며 실제 문제를 해결하는 서비스들을 개발했습니다.
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

        {/* 추가 프로젝트 안내 */}
        <motion.div 
          className="projects-footer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="footer-text lato-regular">
            더 많은 프로젝트는 GitHub에서 확인하실 수 있습니다.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
