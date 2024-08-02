import Separator from "./Separator";

function About() {
  return (
    <div className="bg-caribbeanGreen text-white px-4 py-20">
      <h2 className="uppercase text-3xl font-bold mb-4 text-center">
        about component
      </h2>
      <Separator bg="bg-caribbeanGreen" text="bg-white" />
      <div className="flex flex-wrap mb-4">
        <p className="sm:w-1/2 mb-4 sm:mb-0 sm:pr-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sit
          cupiditate voluptatum soluta dolor? Iste, totam. Deleniti quaerat
          expedita corporis.
        </p>
        <p className="sm:w-1/2 sm:pl-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sit
          cupiditate voluptatum soluta dolor? Iste, totam. Deleniti quaerat
          expedita corporis.
        </p>
      </div>
    </div>
  );
}

export default About;
