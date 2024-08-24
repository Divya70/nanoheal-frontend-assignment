import { Input } from "@nextui-org/react";
import { IconSearch } from "../assets/assets";
const SearchInput = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "50%",
          padding: "20px",
        }}
      >
        <Input
          clearable
          contentRight={
            <IconSearch
              className="w-10 h-10 text-black"
              fill="currentColor"
              size={20}
            />
          }
          placeholder="Search..."
          css={{
            "@xs": { width: "100%" },
            "@sm": { width: "75%" },
            "@md": { width: "50%" },
            "@lg": { width: "33%" },
          }}
        />
      </div>
    </>
  );
};

export default SearchInput;
