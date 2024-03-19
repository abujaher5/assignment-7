const Header = () => {
  return (
    <>
      <header className=" max-w-52 lg:max-w-[1320px] mx-auto">
        <nav className="flex justify-between items-center ">
          <div>
            <h3 className="text-xl font-bold">Recipe Calories</h3>
          </div>
          <div className="flex flex-col lg:flex-row  list-none gap-3">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </div>
          <div className="flex justify-end items-center gap-2 ml-2 ">
            <label className="input input-bordered flex items-center gap-2   rounded-full">
              <input
                type="text"
                className="grow hidden lg:block"
                placeholder="Search"
              />
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

            <button className="flex justify-end items-center w-8 h-8 bg-green-400 rounded-full ">
              <img src="../../images/profile.png" alt="" />
            </button>
          </div>
        </nav>
      </header>

      <section className="  rounded-2xl mt-10 max-w-52 lg:max-w-[1320px] mx-auto">
        <div className="hero    rounded-2xl lg:h-[500px] bg-[url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTU9cRG9u1xWOggoy1oPSzluJI1qJWhQ-SxLc8Ns1Uh-F~9CkUpCmV9NLALSwlfsmdZMpOzDvhfR-oCvlJZ4djYbgdOwZQaCZCX~HNA3GYOj3yIwJhrYB5Mt6PIVsZ-BnWg-SwVLhRyhYIx1kotjm47H~2WhDnmsjaL0Gggv5a6CeKC4MryeS5oj~ssvJb5wOVk1v0UBYRw6J86S9AbsCX5izXlQ~qHoQ1gouVlm3n0glkL5oX9BAn9NrPjPehrGknIqYzIcBWM1Zn7GibBgvs7UZ7S0qHuBfWi8WeY0dYnzjIMtkRrvebcfs~f423UDnPTmAcIjAyA-kbLgRDUB~g__)] ">
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <h1 className="mb-5 text-3xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="mb-5">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className=" flex gap-1 lg:gap-10 w-20 lg:w-1/3 mx-auto">
                <button className="btn btn-active btn-accent rounded-full">
                  Explore Now
                </button>
                <button className="btn btn-active btn-ghost rounded-full">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
