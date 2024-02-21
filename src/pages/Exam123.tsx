import { motion } from "framer-motion";

const Exam123 = () => {
  return (
    <>
      <div className="my-5">
        <motion.h1
          className="text-3xl text-red-500 font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          RECOMMENDED
        </motion.h1>
        <motion.h2
          className="text-lg text-red-500 font-semibold"
          whileHover={{ scale: 1.1 }}
        >
          Recipe
        </motion.h2>
      </div>

      <div className="grid xl:grid-cols-4 grid-cols-1  gap-4">
        <motion.div
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div whileHover={{ opacity: 0.9 }}>
            <img
              className="h-48 w-full object-cover"
              src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
              alt="Food 1"
            />
          </motion.div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  food
                </a>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  THANG NOODLE
                </p>
                <p className="mt-3 text-base text-gray-500">
                  20 mins | 4 servings
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div whileHover={{ opacity: 0.9 }}>
            <img
              className="h-48 w-full object-cover"
              src="https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D"
              alt="Food 1"
            />
          </motion.div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  food
                </a>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  THANG NOODLE
                </p>
                <p className="mt-3 text-base text-gray-500">
                  20 mins | 4 servings
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div whileHover={{ opacity: 0.9 }}>
            <img
              className="h-48 w-full object-cover"
              src="https://imageproxy.wolt.com/venue/6232faaafd94b762808350de/ebcc50b6-a903-11ec-8d84-92cd96cd4d02_habib3.jpg"
              alt="Food 1"
            />
          </motion.div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  food
                </a>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  THANG NOODLE
                </p>
                <p className="mt-3 text-base text-gray-500">
                  20 mins | 4 servings
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div whileHover={{ opacity: 0.9 }}>
            <img
              className="h-48 w-full object-cover"
              src="https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-520363077-medium.jpg?_=58727"
              alt="Food 1"
            />
          </motion.div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href="#" className="hover:underline">
                  food
                </a>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  THANG NOODLE
                </p>
                <p className="mt-3 text-base text-gray-500">
                  20 mins | 4 servings
                </p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Exam123;
