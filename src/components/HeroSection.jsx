import SearchInput from "./SearchInput";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]  bg-no-repeat bg-cover bg-[url('./assets/heroimage-2.jpg')] opacity-90">
      <h1 className="font-poppins text-center text-black font-bold text-[25px] sm:text-[40px]">
        Find your fav Books & Authors
      </h1>
      <SearchInput />
    </div>
  );
};

export default HeroSection;
