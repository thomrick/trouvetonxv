import { FlexBox } from "../../../../components";
import "./stores.css";

const Stores = () => (
  <FlexBox justify="space-around">
    <div className="store">
      <img src="/stores-appstore.png" />
    </div>
    <div className="store">
      <img src="/stores-googleplay.png" />
    </div>
  </FlexBox>
);

export default Stores;
