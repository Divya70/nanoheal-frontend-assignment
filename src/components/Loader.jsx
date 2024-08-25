import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="text-center mt-3">
      <Spinner label="Loading..." color="primary" labelColor="primary" />
    </div>
  );
};

export default Loader;
