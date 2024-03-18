const Card = () => {
  return (
    <>
      <section className=" max-w-52 lg:max-w-[1320px] mx-auto mt-10">
        <h2 className="text-4xl m-4">Our Recipes</h2>
        <p className="w-2/3 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quis dolore fugit animi est exercitationem labore officia recusandae
          beatae quod!
        </p>

        {/* card container  */}
        <div className="flex flex-col lg:flex-row  ">
          <div className="flex flex-col lg:flex-row w-full lg:w-2/3">
            <div className="card space-y-6 card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://s3-alpha-sig.figma.com/img/4c9c/4907/5cdba92e95d1813e3a14122be673189a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Isijp6Uk7o3zmr0plCYtuSAw7A8RHxKNO83xJltwYTvMgJe8pz2uxq6~rDdRjUfyLUGyJK-h-7PbtI2niPTXbzVW7x1qXaXfZeLUufRz53Isj36ofrmT9Cf~dPHMoCu1Q5F-cDhrcWtQRxlln7Latt8b7TJTJxFYeTWSpGpojazPv0ZslkWqVqN~x6Uf9ocaCdW4xuB~SFBeUUb9qWMyLQLfME~25a1zR6mv1TC4PNSa~c2fzTIr68ajQkvBsNu9ciqU1wD3JfjYrCsGIgGHQhC3TqYLGCMFiPuq9elJaG8hwXl640JaETntRDcNWwCS1xUKgSLBfA~OyYHf0hzHvA__"
                  alt="Shoes"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Spaghetti Bolognese</h2>
                <p className="text-left mb-2">
                  Classic Italian pasta dish with savory meat sauce.
                </p>

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
                    <img
                      className="h-6 w-6"
                      src="../../images/time.png"
                      alt=""
                    />
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
                  <button className="btn btn-primary rounded-full">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
            <div className="card space-y-6 card-compact  bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://s3-alpha-sig.figma.com/img/728d/7565/fe29593b9f62c1def025edfb2345fe84?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUlx~THQi-kNKo91b3Vbf80obF1oJQX8qf-fZbVQugo5UdWgOsqbiUATA2Im82BaHPDbJoYQFs5k9YilS19n7NdAdshyGS3kWc5Fmu6C0ETWjkHYJo2M6Zs1BSstAd62hjAoEs3y6BeTQW7X7G41-vfxtbR2620nqA62FKvz4VF2pNkr~oBV7kWKNipb6dkvXegEyKqphLCvM5EkQpFlXWK~bT44p-XFRN46myLDylWVw-ISFYnSvTxBue9VsmBrB19O4iqfbihf4xAyHrWjMk959~GOLrpB7tYyzJm-uhIfiNS2iUSsE-LbYVQZdLqJdsuRqLpigWNFnlizc9n~nA__"
                  alt="Shoes"
                />
              </figure>
              <div className="">
                <h2 className="card-title">Chicken Caesar Salad</h2>
                <p className="text-left mb-2">
                  Classic Italian pasta dish with savory meat sauce.
                </p>

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
                    <img
                      className="h-6 w-6"
                      src="../../images/time.png"
                      alt=""
                    />
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
                  <button className="btn btn-primary rounded-full">
                    Want to Cook
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3  mt-6 shadow-xl shadow-gray-400">
            <div className="flex justify-around">
              <p>Name </p>
              <p>Time </p>
              <p>Calories </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
