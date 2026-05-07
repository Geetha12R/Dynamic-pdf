"use client";

import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import dynamic from "next/dynamic";
import DynamicForm from "@/components/form/DynamicForm";

const PdfViewer = dynamic(() => import("@/components/PDF/PdfViewer"), {
  ssr: false,
});

// Tailwind is conflicting with Panels, switching for inline style
const inlineStyle = { width: "1px", background: "red" };

export default function Home() {
  return (
    // Utilising panels for better handling left and right split
    <PanelGroup direction="horizontal">
      <Panel defaultSize={50} minSize={30}>
        <PdfViewer />
      </Panel>
      {/* Panel resizer */}
      <PanelResizeHandle style={inlineStyle} />

      <Panel defaultSize={50} minSize={30} className="h-full">
        <div className="h-full w-full flex items-center justify-center bg-black/60">
          <DynamicForm />
        </div>
      </Panel>
    </PanelGroup>
  );
}
