"use client";
import dynamic from "next/dynamic"

const FunnelPage = dynamic(() => import("@/components/funnel"), { ssr: false })

export default function Home() {
  return <FunnelPage />
}
