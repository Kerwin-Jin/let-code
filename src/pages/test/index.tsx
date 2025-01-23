import useDownloadPdf from '@/hooks/useDownloadPdf'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useRef } from 'react'

export default function Test() {
  const { ref, downloadPdf } = useDownloadPdf()

  return (
    <div className="relative py-12">
      <button
        className="px-4 py-2 border border-orange-400 bg-orange-300 text-white rounded-md absolute right-[100px] top-[80px]"
        onClick={downloadPdf}
      >
        下载
      </button>
      <input type="text" className="border" />
      <div className="w-[1600px] mx-auto p-3" ref={ref}>
        <div className="flex justify-between">
          <span>聚光投放结案报告</span>
          <span>数据更新至：2024-09-02</span>
        </div>
        <div className="text-center p-4 border-t-2 border-b-2 border-dashed my-2">
          <h3>智己LS6聚光投放 | 结案报告</h3>
        </div>
        <div className="text-center text-[#979AA8] text-sm mt-2">
          品牌：智己 车系：LS6 内容发布：24-08-08至2024-09-30 内容加热：24-08-08至2024-09-12
          报告计算周期：24-08-08至2024-09-05
        </div>
        <div>
          <table>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </table>
        </div>
      </div>
    </div>
  )
}
