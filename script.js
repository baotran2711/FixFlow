
// DỮ LIỆU CÔNG VIỆC MẪU
const jobs = [
    {
        id: "REQ001",
        device: "Máy chiếu",
        issue: "Không hiển thị hình ảnh",
        priority: "Cao",
        priorityClass: "priority-high",
        status: "Đang xử lý",
        statusClass: "status-processing"
    },
    {
        id: "REQ002",
        device: "Điều hòa",
        issue: "Không mát",
        priority: "TB",
        priorityClass: "priority-medium",
        status: "Chờ xử lý",
        statusClass: "status-waiting"
    },
    {
        id: "REQ003",
        device: "Máy tính",
        issue: "Lỗi phần mềm",
        priority: "TB",
        priorityClass: "priority-medium",
        status: "Đã nhận",
        statusClass: "status-received"
    },
    {
        id: "REQ004",
        device: "Máy in",
        issue: "Kẹt giấy",
        priority: "Thấp",
        priorityClass: "priority-low",
        status: "Hoàn thành",
        statusClass: "status-completed"
    }
];

// LẤY CÁC PHẦN TỬ HTML
const workList = document.getElementById("workList");
const sectionTitle = document.getElementById("sectionTitle");
const emptyMessage = document.getElementById("emptyMessage");

const modal = document.getElementById("detailModal");
const detailContent = document.getElementById("detailContent");

// HIỂN THỊ THỐNG KÊ
function updateStatistics() {
    document.getElementById("processingCount").textContent = 3;
    document.getElementById("waitingCount").textContent = 1;
    document.getElementById("completedCount").textContent = 2;
}

// HIỂN THỊ DANH SÁCH CÔNG VIỆC
function renderJobs(list) {
    workList.innerHTML = "";

    // Nếu không có dữ liệu
    if (list.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    list.forEach(function(job) {
        const row = document.createElement("tr");

        // Tạo các ô dữ liệu
        const values = [
            job.id,
            job.device,
            job.issue
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        // Ô mức độ ưu tiên
        const priorityCell = document.createElement("td");
        const priorityBadge = document.createElement("span");

        priorityBadge.className =
            "badge " + job.priorityClass;

        priorityBadge.textContent = job.priority;
        priorityCell.appendChild(priorityBadge);
        row.appendChild(priorityCell);

        // Ô trạng thái
        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");

        statusBadge.className =
            "badge " + job.statusClass;

        statusBadge.textContent = job.status;
        statusCell.appendChild(statusBadge);
        row.appendChild(statusCell);

        // Ô thao tác
        const actionCell = document.createElement("td");
        const viewButton = document.createElement("button");

        viewButton.className = "view-btn";
        viewButton.textContent = "Xem";
        viewButton.type = "button";

        viewButton.addEventListener("click", function() {
            showDetails(job.id);
        });

        actionCell.appendChild(viewButton);
        row.appendChild(actionCell);

        workList.appendChild(row);
    });
}

// XEM CHI TIẾT CÔNG VIỆC
function showDetails(id) {
    const job = jobs.find(function(item) {
        return item.id === id;
    });

    if (!job) return;

    // Dùng textContent để hiển thị dữ liệu an toàn
    detailContent.replaceChildren();

    const details = [
        ["Mã yêu cầu", job.id],
        ["Thiết bị", job.device],
        ["Loại sự cố", job.issue],
        ["Mức độ ưu tiên", job.priority],
        ["Trạng thái", job.status]
    ];

    details.forEach(function(detail) {
        const paragraph = document.createElement("p");
        const label = document.createElement("strong");

        label.textContent = detail[0] + ": ";
        paragraph.appendChild(label);
        paragraph.appendChild(
            document.createTextNode(detail[1])
        );

        detailContent.appendChild(paragraph);
    });

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.getElementById("closeModal").focus();
}

// ĐÓNG HỘP THOẠI
function closeDetails() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeModal")
    .addEventListener("click", closeDetails);

document.getElementById("confirmClose")
    .addEventListener("click", closeDetails);

// Nhấn ra ngoài hộp thoại để đóng
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeDetails();
    }
});

// Nhấn phím ESC để đóng
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeDetails();
    }
});

// XỬ LÝ MENU BÊN TRÁI
document.querySelectorAll(".menu-item").forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault();

        // Đánh dấu mục menu đang được chọn
        document.querySelectorAll(".menu-item")
            .forEach(function(menuItem) {
                menuItem.classList.remove("active");
            });

        item.classList.add("active");

        const page = item.dataset.page;
        sectionTitle.textContent = page;

        // Các mục có danh sách công việc
        if (
            page === "Trang chủ" ||
            page === "Công việc của tôi" ||
            page === "Yêu cầu của tôi"
        ) {
            renderJobs(jobs);
        } else {
            // Những trang chưa xây dựng nội dung riêng
            renderJobs([]);
            emptyMessage.textContent =
                "Nội dung trang \"" + page +
                "\" đang được phát triển.";
        }
    });
});

// KHỞI TẠO TRANG
updateStatistics();
renderJobs(jobs);
