function Food({ price, img, title, setOrderList, orderList }) {
  return (
    <>
      <div className="w-full h-24 bg-white rounded-md flex ">
        <div className="flex w-full">
          <div className="w-24 h-10">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>
              <b>{title}</b>
            </p>
            <p>{price} تومان</p>
            {/* counter div */}
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center text-center  ">
                <button className=" bg-red-700 px-1 flex justify-center items-center rounded-r-md text-white text-2xl w-5 h-6">
                  +
                </button>
                <p className="px-2 bg-slate-200 w-10 h-6">0</p>
                <button className=" bg-red-700 px-1 rounded-l-md text-white text-2xl w-5 h-6">
                  -
                </button>
              </div>
              <p>0 تومان</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Food;
