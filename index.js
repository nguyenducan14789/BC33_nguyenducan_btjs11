/**
 *  bài 1
 INPUT: số ngày làm, lương 1 ngày
 PROCESS:
        1. lấy được INPUT(hardcode)
        2. tính lương = số ngày làm*lương 1 ngày
        3. log lương ra màn hình
 OUTFUT: Lương     

 */
var solarayPerDay = 100000;
var workingDays = 28;
var totalSolary = solarayPerDay*workingDays;
console.log("Tổng lương trong tháng là:",totalSolary,"vnd")


/**
 * bài 2
 *  INPUT: số thực 1, số thực 2, số thực 3, số thực 4, số thực 5
 PROCESS:
        1. lấy được INPUT(hardcode)
        2. tính giá trị trung bình của năm số thực = (số thực 1 + số thực 2 + số thực 3 + số thực 4 + số thực 5)/5
        3. log lương ra màn hình
 OUTFUT:  Giá trị trung bình của năm số thực
 */
var r1 = 2;
var r2 = 8;
var r3 = 8;
var r4 = 9;
var r5 = 7;
var average = (r1 + r2 + r3 +r4 +r5)/5
console.log("Giá trị trung bình:",average)

/**
 * bài 3
 *  INPUT: giá USD theo tiền VND, số USD
 PROCESS:
        1. lấy được INPUT(hardcode)
        2. tính giá trị số tiền sau khi quy đổi sang VND = giá USD theo tiền VND*số USD
        3. log lương ra màn hình
 OUTFUT:  Số tiền sau khi quy đổi
 */

 var usdTransperVnd = 23500;
 var usds = 50000;
 var vnd = usdTransperVnd*usds;
 console.log("số tiền sau khi quy đổi:",vnd,"vnd")

 /**
 * bài 4
 *  INPUT: chiều dài hcn, chiều rộng hình chữ nhật
 PROCESS:
        1. lấy được INPUT(hardcode)
        2. tính diện tích  = chiều dài hcn*chiều rộng hình chữ nhật
        và 
        chu vi của hcn = (chiều rộng hình chữ nhật+chiều dài hcn)*2
        3. log diện tích chu vi ra màn hình
 OUTFUT:
       1. Diện tích hình chữ nhật
       2. Chu vi hình chữ nhật
 */


var length = 50;
var width = 20;
var perimeter = (length + width)*2;
var area = length*width;
console.log("Diện tích hình chữ nhật", perimeter, "dvcd");
console.log("Diện tích hình chữ nhật", area, "dvdt");


 /**
 * bài 5
 *  INPUT: số tự nhiên có 2 chữ số
 PROCESS:
        1. lấy được INPUT(hardcode)
        2. tính chữ số hàng đơn vị = số tự nhiên%10
       Tính chữ số hàng chục = làm tròn lên (số tự nhiên /10)
        3. log tổng 2 ký số
 OUTFUT:Tổng 2 ký số
 */

 var number = 75;
 var number1 = number%10;
 var number2 = Math.floor(number/10);
 var total = number1 + number2;
 console.log("Tổng 2 ký số", total);