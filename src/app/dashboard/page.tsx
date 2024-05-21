"use client"
import Image from "next/image";
import NavBar from "@/components/nav-bar/nav-bar";
import Tabs, { TabsProps } from "@/components/global-components/tabs"
import "../../styles/product.scss";
import { redirect } from "next/navigation"
import ResponseDetail from "@/components/response-detail/response-detail";
import WorkSpaceBar from "@/components/workspace-bar/workspace-bar"
import WorkSpaceList from "@/components/workspace-list/workspace-list"
import Button from "@/components/global-components/button";
import EmptyState from "@/components/global-components/empty-state"
import Search from "@/components/global-components/search"
import { BUTTON_TYPES, BUTTON_STYLES } from "@/helpers/utils"
import Link from "next/link"

export default function Dashboard() {

    const tabsProps: TabsProps = {
      values: ['Forms', 'Integrations']
    }
    return (
        <div className="rounded-layout-container w-full my-4 mx-16 p-2 rounded-md">
          <Tabs {...tabsProps}/>

          <div className="gap-1 flex h-svh">
                <div className="section1 w-1/4 flex flex-col gap-1">
                    <div className="p-4 bg-stone-100">
                        <Link href={'/form/add'}>
                            <Button {...{text: 'Create new Typeform', type: BUTTON_TYPES.PRIMARY, style: BUTTON_STYLES.NORMAL}} />
                        </Link>
                    </div>

                    <div className="p-4 bg-stone-100">
                        <Search />
                    </div>

                    <div className="p-4 bg-stone-100 h-2/3">
                        <WorkSpaceList {...{listItems: ['Workspace1', 'Unicode']}}></WorkSpaceList>
                    </div>

                    <div className="p-4 bg-stone-100">
                        <ResponseDetail />
                    </div>
                </div>

                <div className="Section2 w-3/4 bg-stone-100 gap-1 p-8">
                    <div className="workspace-bar">
                        <WorkSpaceBar />
                    </div>

                    <div className="empty-dtate h-full flex items-center justify-center">
                        <EmptyState />
                    </div>

                </div>
            </div>
        </div>
    );
  }