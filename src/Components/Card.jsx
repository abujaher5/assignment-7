const Card = ({ sItem, handleAdd }) => {
  //   console.log(sItem);

  return (
    <>
      <section className=" max-w-52 lg:max-w-[1320px] mx-auto mt-10">
        {/* card container  */}

        <div className="flex flex-col lg:flex-row w-full lg:w-2/3">
          <div className="card space-y-6 card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={sItem.recipe_img} alt="Shoes" />
            </figure>
            <div className="">
              <h2 className="card-title">{sItem.recipe_name}</h2>
              <p className="text-left mb-2">{sItem.short_description}</p>

              <div className="text-left">
                <h3 className="text-xl font-semibold">Ingredients: 6</h3>
                <ul className="list-disc">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
              </div>
              <div className="flex justify-start mt-4 gap-10">
                <p className="inline-flex gap-1">
                  <img className="h-6 w-6" src="../../images/time.png" alt="" />
                  <span>30 minutes</span>
                </p>
                <p className="inline-flex gap-1">
                  <img
                    className="h-6 w-6"
                    src="../../images/calories.png"
                    alt=""
                  />
                  <span>600 calories</span>
                </p>
              </div>
              <div className="card-actions justify-start mt-2">
                <button
                  onClick={() => handleAdd(sItem)}
                  className="btn btn-primary rounded-full"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
