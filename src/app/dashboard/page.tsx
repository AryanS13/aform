"use client"
import Image from "next/image";
import NavBar from "@/components/nav-bar/nav-bar";
import Tabs, { TabsProps } from "@/components/global-components/tabs"
import "../../styles/product.scss";
import ResponseDetail from "@/components/response-detail/response-detail";
import WorkSpaceBar from "@/components/workspace-bar/workspace-bar"
import WorkSpaceList from "@/components/workspace-list/workspace-list"
import Button from "@/components/global-components/button";
import EmptyState from "@/components/global-components/empty-state"
import Search from "@/components/global-components/search"
import { BUTTON_TYPES, BUTTON_VARIANTS } from "@/helpers/utils"
import Link from "next/link"
import { getLocalStorageItem } from "@/services/authservice";
import { getFormList } from "@/services/formservice";
import { useContext, useEffect, useState } from "react";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/global-components/loadingSkeleton";
import { Form } from "@/models/form.model";
import { ListResult } from "@/models/utils.models";
import { FormCardsList, FormCardListProps } from "@/components/form-cards-list/form-cards-list";

export default function Dashboard() {

    const [token, setToken] = useState('')
    const [formsList, setFormsList] = useState<ListResult<Form>>()
    const [isLoading, setLoading] = useState(true)


    let formCardListProps: FormCardListProps = {
        formsList: new ListResult<Form>({}),
        onClick: gotToFormEdit
    };

 
  useEffect(() => {
    const savedValue = window.localStorage.getItem("token");
    setToken(savedValue ? savedValue : '');

    const config = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${savedValue}`
        }
    }

    fetch('/api/forms', config).then((res) => res.json()).then((data) => {
        console.log(data)
        formCardListProps = {
            formsList: data,
            onClick: gotToFormEdit
        }
        setFormsList(data)
        setLoading(false)
      })
    }, [])
    
    if (isLoading) return <Suspense fallback={<LoadingSkeleton />}></Suspense>
    

    // const { data, error, isLoading } = useSWR(['/api/forms', token], ([url, token]) => getFormList(url, token))
    const tabsProps: TabsProps = {
        values: ['Forms', 'Integrations']
    }

    function gotToFormEdit(event: Form) {
        console.log('What the fuck is this')
    }

    return (
        <div className="rounded-layout-container w-full my-4 mx-16 p-2 rounded-md flex flex-col">
        <Tabs {...tabsProps}/>

        <div className="gap-1 flex h-svh">
                <div className="section1 w-1/4 flex flex-col gap-1">
                    <div className="p-4 bg-stone-100">
                        <Link href={'/form/add'}>
                            <Button {...{text: 'Create new Typeform', type: BUTTON_TYPES.PRIMARY, variant: BUTTON_VARIANTS.NORMAL}} />
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

                    { formsList?.count === 0 && 
                        <div className="empty-dtate h-full flex items-center justify-center">
                            <EmptyState />
                        </div>
                    }
                    {
                        formsList?.count && 
                        <FormCardsList {...{formsList: formsList, onClick: (e) => gotToFormEdit(e)}}/>
                    }

                </div>
            </div>
        </div>
    );
}