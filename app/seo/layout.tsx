import type { ReactNode } from "react"

export default function SEOLayout({ children }: { children: ReactNode }) {
  return <div className="dark">{children}</div>
}
