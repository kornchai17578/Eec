"use client";

import { useSearchParams } from "next/navigation";

import AirCompany from "@/data/company/AirCompany";
import Amgen from "@/data/company/Amgen";
import CaptisAireLLC from "@/data/company/CaptisAireLLC";
import DionisiosG from "@/data/company/DionisiosG";
import MerckCO from "@/data/company/MerckCO";
import Merck from "@/data/company/Merck";
import ModernMeadow from "@/data/company/ModernMeadow";
import PhoSul from "@/data/company/PhoSul";
import ProFarmGroup from "@/data/company/ProFarmGroup";
import Provivi from "@/data/company/Provivi";
import RichardLaine from "@/data/company/RichardLaine";
import Solugen from "@/data/company/Solugen";
import SongLin from "@/data/company/SongLin";
import TheCloroxCompany from "@/data/company/TheCloroxCompany";
import UCDevis from "@/data/company/UCDavis";
import ViridisChemical from "@/data/company/ViridisChemical";

export default function CaseStudiesClient() {
  const searchParams = useSearchParams();
  const selectedIndex = Number(searchParams.get("index") ?? 0);
  const selectedCompany = searchParams.get("company");

  const items = [
    {
      title: "1. การป้องกันของเสีย (Prevention)",
      content: [
        "MerckCO",
        "ProFarmGroup",
        "PhoSul",
        "Solugen",
        "CaptisAireLLC",
        "TheCloroxCompany",
        "RichardLaine",
        "AirCompany",
        "Amgen",
        "SongLin",
        "Provivi",
        "UCDevis",
      ],
    },
    {
      title: "2. เศรษฐศาสตร์ของอะตอม (Atom Economy)",
      content: [
        "ViridisChemical",
        "DionisiosG",
        "Solugen",
        "CaptisAireLLC",
        "ModernMeadow",
        "RichardLaine",
        "Amgen",
        "MerckCO",
        "UCDevis",
      ],
    },
    {
      title: "3. การสังเคราะห์ที่มีอันตรายน้อยลง (Less hazardous synthesis)",
      content: [
        "ProFarmGroup",
        "ViridisChemical",
        "DionisiosG",
        "PhoSul",
        "Solugen",
        "CaptisAireLLC",
        "TheCloroxCompany",
        "RichardLaine",
        "AirCompany",
        "Amgen",
        "Merck",
        "SongLin",
        "Provivi",
        "UCDevis",
      ],
    },
    {
      title: "4. การออกแบบสารเคมีที่ปลอดภัยขึ้น (Safer chemicals)",
      content: [
        "ProFarmGroup",
        "DionisiosG",
        "PhoSul",
        "Solugen",
        "CaptisAireLLC",
        "TheCloroxCompany",
        "ModernMeadow",
        "SongLin",
        "Provivi",
      ],
    },
    {
      title:
        "5. การใช้ตัวทำละลายและสารช่วยที่ปลอดภัย (Safer Solvents and Auxiliaries)",
      content: ["MerckCO", "TheCloroxCompany", "ModernMeadow", "Provivi"],
    },
    {
      title:
        "6. การใช้พลังงานอย่างมีประสิทธิภาพ (Design for Energy Efficiency)",
      content: [
        "MerckCO",
        "ProFarmGroup",
        "ViridisChemical",
        "DionisiosG",
        "Solugen",
        "CaptisAireLLC",
        "TheCloroxCompany",
        "ModernMeadow",
        "RichardLaine",
        "AirCompany",
        "Amgen",
        "Merck",
        "SongLin",
        "Provivi",
        "UCDevis",
      ],
    },
    {
      title: "7. การใช้วัตถุดิบที่หมุนเวียนได้ (Use of Renewable Feedstocks)",
      content: [
        "MerckCO",
        "ProFarmGroup",
        "ViridisChemical",
        "DionisiosG",
        "PhoSul",
        "Solugen",
        "ModernMeadow",
        "RichardLaine",
        "AirCompany",
        "Provivi",
        "UCDevis",
      ],
    },
    {
      title:
        "8. การออกแบบให้เกิดผลิตภัณฑ์ที่มีประสิทธิภาพสูง (Reduce Derivatives)",
      content: ["Amgen", "Merck", "Provivi", "UCDevis"],
    },
    {
      title: "9. การใช้ตัวเร่งปฏิกิริยา (Catalysis)",
      content: [
        "ViridisChemical",
        "DionisiosG",
        "Solugen",
        "CaptisAireLLC",
        "RichardLaine",
        "AirCompany",
        "Merck",
        "SongLin",
      ],
    },
    {
      title: "10. การออกแบบให้ย่อยสลายได้ (Design for Degradation)",
      content: [
        "ProFarmGroup",
        "PhoSul",
        "CaptisAireLLC",
        "ModernMeadow",
        "RichardLaine",
        "AirCompany",
        "UCDevis",
      ],
    },
    {
      title:
        "11. การตรวจสอบแบบเรียลไทม์เพื่อป้องกันมลพิษ (Real-time Analysis for Pollution Prevention)",
      content: ["MerckCO", "Solugen"],
    },
    {
      title: "12. การป้องกันอุบัติเหตุทางเคมี (Inherently Safer Chemistry)",
      content: [
        "CaptisAireLLC",
        "TheCloroxCompany",
        "RichardLaine",
        "AirCompany",
        "Amgen",
        "Merck",
        "SongLin",
        "UCDevis",
      ],
    },
  ];

  const Companies = {
    AirCompany,
    Amgen,
    CaptisAireLLC,
    DionisiosG,
    MerckCO,
    Merck,
    ModernMeadow,
    PhoSul,
    ProFarmGroup,
    Provivi,
    RichardLaine,
    Solugen,
    SongLin,
    TheCloroxCompany,
    UCDevis,
    ViridisChemical,
  };

  const selectedItem = items[selectedIndex] ?? items[0];

  // ✅ ถ้ามี query "company" → แสดงเฉพาะบริษัทนั้น
  const filteredCompanies = selectedCompany
    ? selectedItem.content.filter((c) => c === selectedCompany)
    : selectedItem.content;

  return (
    <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
      <h3 className="text-lg font-semibold mb-3">
        {selectedItem.title}
      </h3>

      <div className="px-3 mb-3 space-y-8">
        {filteredCompanies.map((name, i) => {
          const Component = Companies[name];
          return (
            <div key={i} className="guideline-section">
              {Component ? <Component /> : <p>{name} not found</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
