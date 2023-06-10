let DonutCount = 0;
let RecordClick = 0;
let autoClickerCount = 0;
let AutoClickCost = 100;
let ClickPriceNow = AutoClickCost;
let DisplayDonut = document.getElementById('donut-count')
let ClickCounter = document.getElementById('click-count')
let displayAutoClickerCount = document.getElementById('auto-click-count')

function AddDonutCount(){
        ClickCounter.innerText = DonutCount;
        DisplayDonut.innerText = DonutCount++
}
 // function BuyAutoClicker(){
//     if (DonutCount >= AutoClickCost){
//        DonutCount -= AutoClickCost;
//        AutoClickCost *=1.1;
//        Math.floor(AutoClickCost);
//        ClickPriceNow = AutoClickCost;
//        document.getElementById('Clicker-cost').innerText = ClickPriceNow;
//        setInterval(AddDonutCount, 1000);
//        DisplayDonut.innerText = DonutCount;
// }


        // displayAutoClickerCount.innerText = autoClickerCount++
        // donutCount = donutCount-100;
        // displayDonut.innerText = DonutCount;


}
setInterval(AddDonutCount,1000)
