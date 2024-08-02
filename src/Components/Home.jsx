import avatar from "../assets/images/avatar.svg";
import Separator from "./Separator";

function Home() {
  return (
    <div className="bg-caribbeanGreen p-4 text-center text-white">
      <div className="w-60 mx-auto mb-4">
        <img className="w-full" src={avatar} alt="avater" />
      </div>
      <h1 className="uppercase text-3xl font-bold mb-4">start Framework</h1>
      <Separator bg="bg-caribbeanGreen" text="before:bg-white" />
      <p className="text-xl mb-4">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}

export default Home;
