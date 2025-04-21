import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const LetterPreview = ({ letter }) => {
  const letterRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(letterRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("autodraft_letter.pdf");
  };

  return (
    <div className="my-6">
      <div
        ref={letterRef}
        className="bg-white p-8 shadow-md rounded-md border max-w-3xl mx-auto whitespace-pre-wrap font-[serif] text-[16px] leading-relaxed"
      >
        <div dangerouslySetInnerHTML={{ __html: letter.replace(/\n/g, "<br/>") }} />
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default LetterPreview;
