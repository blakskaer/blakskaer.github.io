import styles from '../styles/CustomCursor.module.css'
import { useRef, useEffect } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const left = clientX - cursorRef.current.clientWidth / 2;
      const top = clientY - cursorRef.current.clientHeight / 2;
      // -1 and -8 is to center the cursor in the middle of the circle. It can be left out.
      cursorRef.current.style.transform = `translate3d(${left -1}px, ${top -8}px, 0)`;
    })
  }, [])

  return (
    <div className={styles.cursor} ref={cursorRef} />
  );
}
 
export default CustomCursor;