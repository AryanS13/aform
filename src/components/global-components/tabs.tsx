import ResponseDetail from "../response-detail/response-detail"
import WorkSpaceBar from "../workspace-bar/workspace-bar"
import WorkSpaceList from "../workspace-list/workspace-list"
import Button, { BUTTON_STYLES, BUTTON_TYPES } from "./button"
import EmptyState from "./empty-state"
import Search from "./search"

export interface TabsProps {
    values: Array<string>
}

export default function Tabs(props: TabsProps) {

    return (
        <div className="bg-white w-full flex flex-col rounded-md gap-1">
            <nav className="flex flex-col sm:flex-row bg-stone-100">
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                    Forms
                </button><button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Integrations
                </button>
            </nav>
            <div className="gap-1 flex h-svh">
                <div className="section1 w-1/4 flex flex-col gap-1">
                    <div className="p-4 bg-stone-100">
                        <Button {...{text: 'Create new Typeform', type: BUTTON_TYPES.PRIMARY, style: BUTTON_STYLES.NORMAL}} />
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
    )
}