import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"

export default async function Sidebar({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="lg:pi-20 h-full">
        {children}
      </main>
    </div>
  )
}