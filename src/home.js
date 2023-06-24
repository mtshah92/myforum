import { Filter } from "./components/filter";
import { Header } from "./components/header";
import { Post } from "./components/post";
import { SideBar } from "./components/sidebar";

export const Home = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Post />
      <Filter />
    </div>
  );
};
