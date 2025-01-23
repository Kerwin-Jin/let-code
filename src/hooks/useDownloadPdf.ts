import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useRef } from 'react'

const useDownloadPdf = () => {
  const ref = useRef<HTMLDivElement>(null)
  const downloadPdf = () => {
    if (ref.current)
      html2canvas(ref.current, {}).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        // const pdf = new jsPDF()
        // pdf.addImage(imgData, 'JPEG', 0, 0, 1600, 3200)
        // pdf.save('download.pdf')
        const imgEle = document.createElement('img')
        imgEle.src = imgData
        document.body.appendChild(imgEle)
      })
  }
  return {
    ref,
    downloadPdf,
  }
}

export default useDownloadPdf
