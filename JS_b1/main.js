/** 
 * Bài 1 Tính Tiền lương của nhân viên
 * Công thức : lương 1 ngày * số ngày đi làm
 * - Đầu vào :
 *          + lương 1 ngày : luongNgay = 100000
 *          + số ngày đi làm
 * - Xử lý : 
 *          + Tiền lương của nhân viên : lương 1 ngày * ngày đi làm 
 * - Đầu ra 
 *          + In kết quả ra màn hình
*/

var luongNgay = 100000;
var ngayDilam = 3;

var tienLuong = luongNgay * ngayDilam;
var result = "tien luong la " + tienLuong;
console.log(result);

/** 
 * Bài 2 Tính Giá Trị Trung Bình
 * Công thức : Tổng 5 số / 5
 * - Đầu vào : 5 số thực
 *          +  a=2
 *          +  b=2
 *          +  c=2
 *          +  d=2
 *          +  e=2
 * - Xử lý : 
 *          + tổng 5 số thực : Tong = a + b + c + d + e
 *          + Giá trị trung bình : Tong / 5
 * - Đầu ra 
 *          + In kết quả ra màn hình
*/

var a = 2;
var b = 2;
var c = 2;
var d = 2;
var e = 2;

var Tong = a + b + c + d + e;
var trungBinh = Tong / 5;
var result = " Giá trị Trung bình " + trungBinh;
console.log( result);

/** 
 * Bài 3 Quy đổi Tiền Tệ
 * Công thức : số USD * Giá USD đổi sang VND
 * - Đầu vào : 
 *          +  Số USD : USD=3
 *          +  Giá USD đổi sang VND : VND = 23500
 *          +  Đon vị Tiền Tệ : VND
 * - Xử lý : 
 *          + tienQuyDoi : ( USD * 23500 ) + "VND"
 * - Đầu ra 
 *          + In kết quả ra màn hình
*/

var USD = 3
var VND = 23500

var tienQUyDoi = ( 3 * 23500 ) + " VND";
var result = "Tiền Quy Đổi là " + tienQUyDoi;
console.log(result);

/** 
 * Bài 4 Tính Diện tích , chu vi hình chữ nhật
 * Công thức : 
 *          + Diện tích = dài * rộng
 *          + chu vi = (dài + rộng) * 2
 * - Đầu vào : 
 *          +  chiều dài : a=2
 *          +  chiều rộng : b=2
 * - Xử lý : 
 *          + diện tích : S = a * b
 *          + Tong chiều dài chiều rộng : Tong = a + b
 *          + chu vi : P = Tong * 2
 * - Đầu ra 
 *          + In kết quả ra màn hình
*/

var a = 2;
var b = 2;

var S = a * b;
var result = "Dien Tich la " + S ;
console.log(result);

var Tong = a + b;
var P = Tong * 2;
var result = "Chu Vi la " + P ;
console.log(result);

/** 
 * Bài 5 Tổng 2 ký số
 * - Đầu vào : 
 *          +  số 2 chữ số : n=73
 * - Xử lý : 
 *          + Tách số hàng chục : b = a / 10
 *          + Tách số hàng đơn vị: unit = a % 10
 *          + Tổng : sum = b + c
 * - Đầu ra 
 *          + In kết quả ra màn hình
*/

var n = 70;

var ten = n / 10;
var unit = n % 10;
var sum = ten + unit 
var result = "Tổng 2 ký số là " + sum;
console.log(result);


