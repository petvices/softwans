import "./global.css"
import type { ReactNode } from "react"

export default function LinksLayout({ children }: { children: ReactNode }) {
  return <div className="dark">{children}</div>
}
