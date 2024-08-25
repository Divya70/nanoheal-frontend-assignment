import SearchInput from "./SearchInput";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center object-contain justify-center h-[100vh] overflow-hidden bg-no-repeat bg-cover bg-[url('./assets/heroimage-2.jpg')] ">
      <h1 className="font-poppins text-center text-black font-bold text-3rem sm:text-[40px]">
        Find All your Favorite Books & Authors
      </h1>
      <SearchInput />
    </div>
  );
};

export default HeroSection;
