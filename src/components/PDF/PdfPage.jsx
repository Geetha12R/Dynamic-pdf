import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// required to  load pdf from location and render file
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfPage({ setPageSize, isLoading, setIsLoading }) {
  
  return (
    <>
    {/* Loading screen until file loads */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <span className="text-gray-600">Loading PDF...</span>
        </div>
      )}
      {/* Displaying sample PDF with default values */}
      <Document
        file="/sampleBank.pdf"
        onLoadSuccess={() => setIsLoading(false)}
      >
        <Page
          pageNumber={1}
          width={600}
          onLoadSuccess={(page) => {
            setPageSize({
              width: page.width,
              height: page.height,
            });
          }}
        />
      </Document>
    </>
  );
}
