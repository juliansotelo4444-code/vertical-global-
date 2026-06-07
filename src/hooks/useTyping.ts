import { useEffect, useRef, useState } from 'react'

const useTyping = (text: string, speed: number = 60, inView: boolean) => {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)

  useEffect(() => {
    if (!inView) return

    indexRef.current = 0

    const timer = setInterval(() => {
      indexRef.current++
      setDisplayed(text.slice(0, indexRef.current))
      if (indexRef.current >= text.length) clearInterval(timer)
    }, speed)

    return () => {
      clearInterval(timer)
      setDisplayed('')
    }
  }, [inView, text, speed])

  return displayed
}

export default useTyping