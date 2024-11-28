import Skeleton from "./Skeleton"; // Adjust the import path if needed

const FooterSkeleton = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-between items-center p-4">
      <div className="flex items-center space-x-2">
        <Skeleton width="40px" height="40px" />
        <Skeleton width="80px" height="24px" />
      </div>
      <div className="text-sm">
        <Skeleton width="150px" height="20px" />
      </div>
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            <Skeleton width="150px" height="24px" />
          </h1>
          <p className="text-lg mb-2 font-bold text-blue-600">
            <Skeleton width="100px" height="24px" />
          </p>
          <p className="text-lg mb-2 text-blue-600 font-bold">
            <Skeleton width="150px" height="20px" />
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <Skeleton width="48px" height="48px" />
            <Skeleton width="48px" height="48px" />
            <Skeleton width="48px" height="48px" />
          </div>
          <p className="text-sm text-gray-600">
            <Skeleton width="300px" height="16px" />
            <br />
            <Skeleton width="300px" height="16px" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSkeleton;
