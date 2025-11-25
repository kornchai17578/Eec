"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { Select, Card } from "antd";
import Icons from "@/components/Icons";

export default function ChemicalConverter({ options = [] }) {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const fromBoxRef = useRef(null);
  const [getWidth, setGetWidth] = useState("100%");

  // ตั้งค่า default เป็นตัวแรก
  useEffect(() => {
    if (options.length > 0 && !from) {
      const first = options[0];
      setFrom(first.label);
      setTo(first.subOptions?.[0]?.label || null);
    }
  }, [options, from]);

  const fromOptions = useMemo(
    () => options.map((o) => ({ label: o.label, value: o.label })),
    [options]
  );

  const toOptions = useMemo(() => {
    if (!from) return [];
    const found = options.find((o) => o.label === from);
    return (
      found?.subOptions?.map((s) => ({ label: s.label, value: s.label })) || []
    );
  }, [from, options]);

  const fromVHR = options.find((o) => o.label === from)?.VHR ?? null;
  const toVHR =
    options
      .find((o) => o.label === from)
      ?.subOptions?.find((s) => s.label === to)?.VHR ?? null;

  // getWidth

  // ดึงความกว้างจาก element
  const updateWidth = () => {
    if (fromBoxRef.current) {
      const width = fromBoxRef.current.offsetWidth;
      setGetWidth(width);
    }
  };

  useEffect(() => {
    // รอจน DOM พร้อม
    if (!fromBoxRef.current) return;

    const el = fromBoxRef.current;
    const observer = new ResizeObserver(updateWidth);

    observer.observe(el);
    updateWidth(); // เรียกตอน mount ครั้งแรก

    // ✅ เพิ่ม listener สำหรับ window resize ด้วย
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [fromBoxRef.current, toOptions]);

  return (
    <Card
      title="Convert"
      className="rounded-t-[12px] overflow-hidden"
      styles={{
        header: {
          background: "#1173A9",
          color: "#fff",
          borderRadius: "12px 12px 0 0",
          fontWeight: 600,
        },
        body: {
          background: "#fff",
        },
      }}
    >
      {/* Select row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        {/* From */}
        <Select
          value={from}
          onChange={(v) => {
            setFrom(v);
            const found = options.find((o) => o.label === v);
            setTo(found?.subOptions?.[0]?.label || null);
          }}
          placeholder="From"
          options={fromOptions}
          style={{ maxWidth: getWidth }}
          styles={{
            control: {
              borderRadius: 8,
              border: "1px solid #1173A9",
              padding: "8px 12px",
              color: "#1173A9",
              fontSize: 16,
              fontWeight: 600,
            },
            dropdown: { borderRadius: 8 },
          }}
          className="w-full md:flex-1 text-selected"
        />

        {/* Arrow between Select */}
        <div className="shrink-0 flex justify-center items-center my-2 md:my-0">
          <div
            className="rounded-full bg-[#1173A9] flex items-center justify-center"
            style={{
              width: 40,
              height: 40,
            }}
          >
            <Icons name="arrow" color="#fff" size="20px" />
          </div>
        </div>

        {/* To */}
        <Select
          value={to}
          onChange={setTo}
          placeholder="To"
          disabled={!from}
          options={toOptions}
          style={{ maxWidth: getWidth }}
          styles={{
            control: {
              borderRadius: 8,
              border: "1px solid #1173A9",
              padding: "8px 12px",
              color: "#1173A9",
              fontSize: 16,
              fontWeight: 600,
              maxWidth: getWidth,
            },
            dropdown: { borderRadius: 8 },
          }}
          className="w-full md:flex-1 text-selected"
        />
      </div>

      {/* Show VHR results */}
      {from && to && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6 text-center">
          {/* From */}
          <div
            ref={fromBoxRef}
            className="rounded-lg p-4 flex flex-col justify-center flex-1 w-full"
            style={{
              background: "#F8F8F8",
              borderRadius: 8,
            }}
          >
            <p
              style={{
                color: "#1173A9",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {from.toUpperCase()}
            </p>
            <p className="text-[#1173A9] font-semibold text-[clamp(24px,5vw,60px)]">
              VHR : {fromVHR?.toLocaleString() ?? "-"}
            </p>
          </div>

          {/* Arrow between VHR */}
          <div className="shrink-0 flex justify-center items-center">
            <div
              className="rounded-full bg-[#1173A9] flex items-center justify-center"
              style={{
                width: 40,
                height: 40,
              }}
            >
              <Icons name="arrow" color="#fff" size="20px" />
            </div>
          </div>

          {/* To */}
          <div
            className="rounded-lg p-4 flex flex-col justify-center flex-1 w-full"
            style={{
              background: "#F8F8F8",
              borderRadius: 8,
            }}
          >
            <p
              style={{
                color: "#1173A9",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {to.toUpperCase()}
            </p>
            <p className="text-[#1173A9] font-semibold text-[clamp(24px,5vw,60px)]">
              VHR : {toVHR?.toLocaleString() ?? "-"}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
