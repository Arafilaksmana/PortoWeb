function Home() {
  return (
    <div className="px-3 lg:px-8 pt-4">
      <div className="flex flex-col">
        <div className="flex h-[20dvh] lg:h-[40dvh]">
          <div className="w-1/3 ">Dirga</div>
          <div className="">
            Based in <br /> Yogyakarta, IDN
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
          <div className="flex flex-col w-full lg:w-1/3">
            <span>Get in touch</span>
            <span className="text-black/50">Arfilaks.dev@gmail.com</span>
          </div>
          <div className="w-full lg:w-2/3">
            <span className="text-4xl lg:text-5xl">
              I am
              <div className="w-[100px] h-14 inline-block align-middle mx-2">
                <img
                  src="PROPICT.jpg"
                  alt="Dirga"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              Dirga. A Frontend  & Designer who creates solution based on user needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
