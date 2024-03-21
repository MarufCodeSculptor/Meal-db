const Banner = () => {
  return (
    <div className="min-h-[20rem] lg:min-h-[40.625rem] flex items-center justify-center banner-background">
      <div className="md:w-banner-width p-5">
        <div className="text-dim-white">
          <h2 className=" text-2xl lg:text-5xl font-bold text-center  lg:leading-big-line">
            Taste Our <span className="font-extrabold ">Delicious</span> <br />{' '}
            Best Foods
          </h2>
          <p className="text-sm lg:text-text-des lg:leading-9 text-center">
            {' '}
            Explore our diverse menu featuring an enticing selection of dishes
            crafted with passion and expertise. Savor the flavors of our
            carefully curated ingredients, sourced from local farmers and
            producers. Whether you're craving a hearty meal.
          </p>
        </div>
        <div className="flex items-center justify-center mt-3 w-1/2 mx-auto md:w-full">
          <label className="input input-bordered input-primary w-full max-w-xs flex items-center gap-2 border-r-0 rounded-r-none">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn border-l-0 rounded-l-none"> sing up</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
