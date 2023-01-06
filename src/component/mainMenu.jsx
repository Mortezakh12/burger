import Food from "./Food";
const foodObject=[
    {title: 'همبرگر معمولی',price:'8000',img:'./images/hamburger (1).png'},
    {title: 'همبرگر مخصوص',price:'10000',img:'./images/hamburger (1).png'},
    {title: 'همبرگر معمولی با قارچ',price:'8000',img:'./images/hamburger (1).png'},
    {title: 'همبرگر مخصوص با قارچ',price:'8000',img:'./images/hamburger (1).png'},
    {title: 'سیب زمینی ویژه',price:'25000',img:'./images/french_fries.png'},
    {title: 'سیب زمینی ساده',price:'10000',img:'./images/french_fries.png'},
    {title: 'نوشابه رژیمی',price:'2500',img:'./images/soda.png'},
    {title: 'نوشابه تگری',price:'25000',img:'./images/soda.png'},
    {title: 'سالاد شیرازی',price:'7000',img:'./images/salad.png'},
    {title: 'سالاد سزار',price:'25000',img:'./images/ceasar.png'}
];

function MainMenu ({orderList,setOrderList}){

    return (
        <>
            <div className="w-2/3 bg-gray-300 rounded-lg h-4/5 overflow-y-auto">
                <h1 className="text-center border-b-4 mt-5 pb-5">
                رستوران مک دونالد شعبه تهران
                </h1>
                <div className="grid grid-cols-2 gap-2 w-full">
                    {foodObject.map((item,index)=><Food key={item.title} price={item.price}
                    img={item.img} title={item.title} index={index}/>)}
                </div>

            </div>
        </>
    )
}
export default MainMenu;