import { Suspense } from "react";
import CaseStudiesClient from "./components/CaseStudiesClient";
import Titile from "@/components/Titile";

export default function CaseStudies() {
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="กรณีตัวอย่าง" />

        {/* ✅ ห่อด้วย Suspense เพื่อรองรับ useSearchParams */}
        <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
          <CaseStudiesClient />
        </Suspense>
      </div>
    </div>
  );
}
