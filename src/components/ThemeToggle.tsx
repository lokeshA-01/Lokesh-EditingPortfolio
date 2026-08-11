import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    const theme = isLight ? 'light' : 'dark'

    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem('theme', theme)
  }, [isLight])

  return (
    <button
      className={`theme-toggle ${isLight ? 'light' : 'dark'}`}
      onClick={() => setIsLight(prev => !prev)}
      aria-label="Toggle light and dark mode"
      type="button"
    >
      <span className="toggle-icon moon">☾</span>

      <span className="toggle-track">
        <span className="toggle-knob"></span>
      </span>

      <span className="toggle-icon sun">☀</span>
    </button>
  )
}

export default ThemeToggle