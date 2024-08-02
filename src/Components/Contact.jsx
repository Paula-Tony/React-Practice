import Separator from "./Separator";

function Contact() {
  return (
    <div className=" py-20 px-4">
      <h2 className="text-center uppercase mb-4 font-bold text-3xl">
        Contact Section
      </h2>
      <Separator bg="bg-white" text="bg-black" />
      <form className="w-full max-w-lg mx-auto">
        <input
          className="w-full p-2 mb-4 border-b-2 focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full p-2 mb-4 border-b-2 focus:outline-none"
          type="text"
          placeholder="Age"
        />
        <input
          className="w-full p-2 mb-4 border-b-2 focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 mb-6 border-b-2 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <button
          className="text-white bg-caribbeanGreen py-2 px-4 rounded-md"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
