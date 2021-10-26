import { SecondaryButton } from "./components/atoms/button/SecoondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";
import { SerachInput } from "./components/molecures/SearchInput";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SerachInput />
    </div>
  );
}
