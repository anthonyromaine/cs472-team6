import Icon from "../Icon/Icon";
import { PageState, devViewState } from "../../state"
import FileInput from "../FileInput/FileInput";
import { devViewState, ExportModalState } from "../../state"

export default function Navbar() {
    const setPageState = PageState((state) => state.setPageState)
    let isDevView = devViewState((state) => state.isDevView);
    let setDevView = devViewState((state) => state.setDevView);
    let setShown = ExportModalState((state) => state.setShown);

    return (
        <nav className="flex h-14 bg-gray-200 items-center">
            <button onClick={() => setDevView(!isDevView)} className={`py-2 px-4 bg-blue-400 mr-auto ml-4 rounded-lg ${ import.meta.env.MODE == "development" ? "visible" : "invisible" } `}>
                Dev View
            </button>

            <FileInput name={"data-input"} onChange={(data) => setPageState(JSON.parse(data))} />
            <button onClick={() => setShown(true)} className="py-2 px-4 bg-blue-400 mr-4 rounded-lg">
                <Icon name="arrow-down-tray" />
            </button>
        </nav>
    )
}