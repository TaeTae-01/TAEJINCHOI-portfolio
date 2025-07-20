import { useState, useEffect } from 'react'

// Components Import
import Splash from './components/Splash'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)

  // 스플래시 화면 3초 후 숨김
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // 프로젝트 모달 열기
  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  // 프로젝트 모달 닫기
  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  if (showSplash) {
    return <Splash />
  }

  return (
    <div className="App">
      {/* Main Portfolio Sections */}
      <Hero />
      <Skills />
      <Projects onProjectClick={openProjectModal} />
      <Contact />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </div>
  )
}

export default App
