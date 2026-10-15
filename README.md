# FixFlow
Dự án giao diện quản lý sửa chữa
1. Giới thiệu dự án

FixFlow là giao diện website quản lý công việc dành cho kỹ thuật viên, được xây dựng bằng HTML, CSS và JavaScript.

Dự án giúp hiển thị danh sách yêu cầu sửa chữa thiết bị, theo dõi trạng thái công việc, mức độ ưu tiên và xem thông tin chi tiết của từng yêu cầu.

Đây là dự án thực hành nhằm củng cố kiến thức về lập trình web cơ bản, thiết kế giao diện và xử lý sự kiện bằng JavaScript.

2. Công nghệ sử dụng

HTML5: Xây dựng cấu trúc và nội dung trang web.

CSS3: Thiết kế giao diện, bố cục, màu sắc và hiệu ứng hiển thị.

JavaScript: Xử lý dữ liệu công việc, cập nhật giao diện, điều khiển menu và hộp thoại chi tiết.

3. Chức năng chính

Dashboard thống kê: Hiển thị số lượng công việc đang xử lý, chờ nhận và hoàn thành.

Quản lý danh sách công việc: Hiển thị mã yêu cầu, thiết bị, loại sự cố, mức độ ưu tiên và trạng thái.

Phân loại mức độ ưu tiên: Hiển thị nhãn Cao, Trung bình và Thấp bằng các màu sắc khác nhau.

Xem chi tiết công việc: Nhấn nút “Xem” để mở hộp thoại chứa thông tin của yêu cầu sửa chữa.

Đóng hộp thoại: Hỗ trợ nút đóng, nhấn phím ESC hoặc nhấn vào vùng bên ngoài hộp thoại.

Điều hướng menu: Cho phép chuyển đổi giữa các mục Trang chủ, Công việc của tôi, Yêu cầu của tôi, Thông báo, Tài khoản và Cài đặt.

Giao diện responsive: Tự điều chỉnh bố cục theo kích thước màn hình máy tính, máy tính bảng và điện thoại.

4. Cấu trúc thư mục

FixFlow/
├── index.html
├── style.css
├── script.js
└── README.md

Tệp

Mô tả

index.html

Chứa cấu trúc giao diện và các thành phần HTML.

style.css

Chứa các quy tắc định dạng giao diện.

script.js

Chứa dữ liệu mẫu và xử lý các chức năng tương tác.

README.md

Giới thiệu dự án và hướng dẫn sử dụng.

5. Hướng dẫn cài đặt và chạy dự án

Bước 1: Tải hoặc clone repository về máy tính.

git clone <URL-repository-cua-ban>

Bước 2: Mở thư mục FixFlow bằng Visual Studio Code.

Bước 3: Kiểm tra các tệp index.html, style.css và script.js nằm đúng vị trí.

Bước 4: Mở tệp index.html bằng trình duyệt hoặc sử dụng tiện ích Live Server trong Visual Studio Code.

Không cần cài đặt thư viện hay chạy máy chủ backend để sử dụng phiên bản giao diện hiện tại.

6. Dữ liệu công việc mẫu

Dự án hiện sử dụng dữ liệu được khai báo trực tiếp trong JavaScript, gồm bốn yêu cầu:

Mã yêu cầu

Thiết bị

Sự cố

Trạng thái

REQ001

Máy chiếu

Không hiển thị hình ảnh

Đang xử lý

REQ002

Điều hòa

Không mát

Chờ xử lý

REQ003

Máy tính

Lỗi phần mềm

Đã nhận

REQ004

Máy in

Kẹt giấy

Hoàn thành

Dữ liệu được sử dụng để minh họa cách hiển thị bảng công việc và mở hộp thoại chi tiết.

7. Kiến thức áp dụng

Thông qua dự án, người thực hiện vận dụng các kiến thức:

Sử dụng các thẻ HTML để xây dựng cấu trúc trang web.

Sử dụng CSS Flexbox và Grid để bố trí giao diện.

Sử dụng CSS Media Queries để thiết kế giao diện responsive.

Khai báo biến, mảng, đối tượng và hàm trong JavaScript.

Sử dụng forEach(), find() và các phương thức thao tác với mảng.

Truy cập và thay đổi nội dung HTML thông qua DOM.

Xử lý sự kiện bằng addEventListener().

Tạo và điều khiển hộp thoại bằng JavaScript kết hợp CSS.

8. Hạn chế hiện tại

Dữ liệu công việc chỉ là dữ liệu mẫu, chưa kết nối cơ sở dữ liệu.

Chưa có chức năng đăng nhập và phân quyền người dùng.

Các mục Thông báo, Tài khoản và Cài đặt chưa có nội dung chức năng hoàn chỉnh.

Số liệu thống kê cần được đồng bộ với dữ liệu công việc thực tế.

9. Hướng phát triển

Trong tương lai, dự án có thể được mở rộng với các chức năng:

Thêm, sửa, xóa và cập nhật trạng thái công việc.

Tìm kiếm và lọc công việc theo trạng thái hoặc mức độ ưu tiên.

Xây dựng hệ thống đăng nhập cho kỹ thuật viên.

Kết nối cơ sở dữ liệu để lưu trữ yêu cầu sửa chữa.

Bổ sung thông báo khi có yêu cầu mới.

Hoàn thiện các trang tài khoản và cài đặt.

10. Tác giả

Tên dự án: FixFlow

Loại dự án: Thực hành lập trình Web

Công nghệ: HTML, CSS, JavaScript

Mục đích: Học tập và thực hành phát triển giao diện website.
