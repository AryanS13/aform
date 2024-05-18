import Image from "next/image";
import NavBar from "@/components/nav-bar/nav-bar";
import Tabs, { TabsProps } from "@/components/global-components/tabs"
import "../styles/product.scss";

export default function Home() {

  const tabsProps: TabsProps = {
    values: ['Forms', 'Integrations']
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-svh">
      <NavBar></NavBar>
      <div className="rounded-layout-container w-full my-4 mx-16 p-2 rounded-md">
        <Tabs {...tabsProps}/>
      </div>
    </main>
  );
}
