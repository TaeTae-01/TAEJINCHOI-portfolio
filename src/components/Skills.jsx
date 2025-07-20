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
        { name: "C", level: "초급", icon: <Code size={20} /> },
        { name: "HTML + CSS", level: "고급", icon: <><FaHtml5 /><FaCss3Alt /></> }
      ]
    },
    {
      id: 2,
      icon: <Database size={24} />,
      title: "LIBRARIES & FRAMEWORKS",
      skills: [
        { name: "React.js", level: "고급", icon: <FaReact /> },
        { name: "React Native", level: "중급", icon: <FaReact /> },
        { name: "Node.js", level: "초급", icon: <FaNodeJs /> }
      ]
    },
    {
      id: 3,
      icon: <Database size={24} />,
      title: "DATABASE",
      skills: [
        { name: "MySQL", level: "중급", icon: <SiMysql /> },
        { name: "Firebase", level: "중급", icon: <SiFirebase /> }
      ]
    },
    {
      id: 4,
      icon: <Wrench size={24} />,
      title: "TOOLS & COLLABORATION",
      skills: [
        { name: "Figma", level: "초급", icon: <FaFigma /> },
        { name: "Git/GitHub", level: "중급", icon: <FaGitAlt /> },
        { name: "Slack", level: "초급", icon: <FaSlack /> },
        { name: "Notion", level: "고급", icon: <SiNotion /> }
      ]
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
        
        {/* 메인 타이틀 - Contact와 동일한 스타일 */}
        <motion.div 
          className="skills-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title lato-bold">
            🔧 SKILLS
          </h2>
          <p className="skills-subtitle lato-regular">
            현재 기술 스택과 숙련도입니다.
          </p>
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
