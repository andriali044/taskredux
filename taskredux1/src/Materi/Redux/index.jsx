import { provider } from "react-redux";
import store from "../../app/store";
import Counter from "./pembahasan/Counter";

const Redux = () => {
    return (
        <div>
            <provider store={store}>
            <Counter/>
            </provider>
        </div>
    )
}

export default Redux;