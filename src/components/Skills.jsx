import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaSlack, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiMysql, SiFirebase, SiNotion } from 'react-icons/si'
import '../styles/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      icon: <Code size={24} />,
      title: "LANGUAGES",
      skills: [
        { name: "JavaScript", level: "중급", icon: <FaJs /> },
        { name: "TypeScript", level: "초급", icon: <SiTypescript /> },
        { name: "C", level: "중급", icon: <Code size={20} /> },
        { name: "HTML + CSS", level: "고급", icon: <><FaHtml5 /><FaCss3Alt /></> }
      ],
      description: "JavaScript 기반의 풀스택 개발을 위한 여러 언어들과 각종 프론트엔드 관련 기술들을 습득하고 있으며, CS 지식을 직접 코드로 구현하기 위한 C언어를 활용 업"
    },
    {
      id: 2,
      icon: <Database size={24} />,
      title: "LIBRARIES & FRAMEWORKS",
      skills: [
        { name: "React.js", level: "중급", icon: <FaReact /> },
        { name: "React Native", level: "중급", icon: <FaReact /> },
        { name: "Node.js", level: "초급", icon: <FaNodeJs /> }
      ],
      description: "React 기반과 node.js 백엔드를 웹/앱 구현을 위해 React Native 도 활용"
    },
    {
      id: 3,
      icon: <Database size={24} />,
      title: "DATABASE",
      skills: [
        { name: "MySQL", level: "중급", icon: <SiMysql /> },
        { name: "Firebase", level: "중급", icon: <SiFirebase /> }
      ],
      description: "서버와의 실시간 db nosql을 배우기 위해 Firebase 정규짐을 위해 Mysql 활용"
    },
    {
      id: 4,
      icon: <Wrench size={24} />,
      title: "TOOLS & COLLABORATION",
      skills: [
        { name: "Figma", level: "중급", icon: <FaFigma /> },
        { name: "Git/GitHub", level: "중급", icon: <FaGitAlt /> },
        { name: "Slack", level: "초급", icon: <FaSlack /> },
        { name: "Notion", level: "고급", icon: <SiNotion /> }
      ],
      description: "이것저것 협업툴과 디자인 툴 사용을 좋 알고 "
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case '고급': return 'advanced'
      case '중급': return 'intermediate'
      case '초급': return 'beginner'
      default: return 'intermediate'
    }
  }

  return (
    <section className="skills">
      <div className="skills-container">
        
        {/* SKILLS 태그 - 왼쪽에서 오른쪽으로 슬라이드 */}
        <motion.div 
          className="skills-tag"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="lato-bold">SKILLS</span>
        </motion.div>

        {/* 스킬 카드들 그리드 */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="skill-card"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>
                <h3 className="skill-category-title lato-bold">{category.title}</h3>
              </div>

              <div className="skill-divider"></div>

              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name lato-regular">{skill.name}</span>
                    <div className={`skill-level ${getLevelColor(skill.level)}`}>
                      <span className="lato-regular">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-description">
                <p className="lato-regular">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
