import type { ReactNode } from "react"

export default function DesarrolloWebLayout({ children }: { children: ReactNode }) {
  return <div className="dark">{children}</div>
}
