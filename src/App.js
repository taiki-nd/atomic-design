import { SecondaryButton } from "./components/atoms/button/SecoondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";
import { SerachInput } from "./components/molecures/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaulyLayout } from "./components/templetes/DefaultLayout";

const user = {
  name: "kii",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "test@example",
  phone: "000-0000-0000",
  company: {
    name: "test"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaulyLayout>
        <PrimaryButton>test</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SerachInput />
        <UserCard user={user} />
      </DefaulyLayout>
    </BrowserRouter>
  );
}
