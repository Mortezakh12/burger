function Food({ price, img, title,setOrderList,orderList }) {
  return (
    <>
      <div className="w-full h-28 bg-white rounded-xl flex ">
        <div className="flex">
          <div className="w-24 h-10">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p>{title}</p>
            <p>{price} تومان</p>
            {/* counter div */}
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center items-center text-center">
                <button onClick={()=>{
                    let temp=orderList;
                    temp.map((item,index)=>{
                        if()
                    })
                }} className=" bg-green-700 px-1 flex justify-center items-center ">
                  +
                </button>
                <p className="px-2 bg-slate-200 w-10">0</p>
                <button className=" bg-blue-700 px-1">-</button>
              </div>
              <p className="w-full text-left">0 تومان</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Food;
