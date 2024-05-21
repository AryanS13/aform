import Image from "next/image";
import NavBar from "@/components/nav-bar/nav-bar";
import Tabs, { TabsProps } from "@/components/global-components/tabs"
import "../styles/product.scss";
import { redirect } from "next/navigation";

export default function Home() {

  // This should redirect to dashboard

  redirect('/dashboard');
}
