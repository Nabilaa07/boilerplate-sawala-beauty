import { useState } from 'react'
const PnSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
}
const leftArrowStyles = {
  width: '170px',
  height: '70px',
  transform: 'translate(0, -50%)',
  left: '32px',
  zIndex: 1,
  cursor: 'pointer'
}
const rightArrowStyles = {
  width: '170px',
  height: '70px',
  transform: 'translate(0, -50%)',
  right: '32px',
  zIndex: 1,
  cursor: 'pointer'
}
const goToPrevious = () => {
  const isFirstSlide = currentIndex === 0
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
  setCurrentIndex(newIndex)
}

const goToNext = () => {
  const isLastSlide = currentIndex === slides.length - 1
  const newIndex = isLastSlide ? 0 : currentIndex + 1
  setCurrentIndex(newIndex)
}
return (
  <>
    <div style={leftArrowStyles} onClick={goToPrevious}>
      <Image src="/assets/panah-kiri.png" alt="" className="w-full" width={170} height={70} />
    </div>
    <div style={rightArrowStyles} onClick={goToNext}>
      <Image src="/assets/panah-kanan.png" alt="" className="w-full" width={170} height={70} />
    </div>
  </>
)

export default PnSlider
