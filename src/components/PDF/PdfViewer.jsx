"use client";

import { useRef, useState } from "react";
import { useForm } from "@/store/useForm";
import PdfPage from "./PdfPage";
import BaseOverlay from "./BaseOverlay";

export default function PdfViewer() {
  const { fields, activeField } = useForm();

  const [pageSize, setPageSize] = useState({ width: 600, height: 800 });
  const [isLoading, setIsLoading] = useState(true);

   const [containerWidth, setContainerWidth] = useState(600);

  // scale factor for responsiveness
  const scale = containerWidth / pageSize.width;
  
  return (
    <div className="flex justify-center">
      <div
        className="relative"
        style={{
          width: pageSize.width,
          height: pageSize.height,
        }}
      >
        {/* Loads PDF Sample File */}
        <PdfPage setPageSize={setPageSize} isLoading={isLoading} setIsLoading={setIsLoading} />
        {/* Places overlay on top of pdf to display dynamic content */}
        {!isLoading && fields.map((field) => (
          <BaseOverlay
            key={field.id}
            field={field}
            scale={scale}
            isActive={activeField === field.id}
          />
        ))}
      </div>
    </div>
  );
}