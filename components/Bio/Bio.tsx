export default function Bio() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
            Kacper Malek
          </h1>
          <h2 className="font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Front-End Developer at{" "}
            <a
              href="https://www.growl.be/"
              className="font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-500 ease-in-out"
            >
              Growl.be
            </a>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Helping build better, faster and amazing looking websites / web
            applications, with great UI/UX.
          </p>
          <p className="font-bold text-gray-500 dark:text-gray-300  mb-4">
            Big fan of South Park.
          </p>
        </div>
      </div>
      <div className="relative mb-8 sm:mb-0 mr-auto">
        <img
          className="inline-block rounded-md w-full h-full"
          src="/avatar(5).png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}
