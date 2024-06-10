import { FlexBox, Image } from "../../../../components";
import "./stores.css";

const Stores = () => (
  <FlexBox justify="space-around">
    <div className="store">
      <Image src="/stores-appstore.png" />
    </div>
    <div className="store">
      <Image src="/stores-googleplay.png" />
    </div>
  </FlexBox>
);

export default Stores;
