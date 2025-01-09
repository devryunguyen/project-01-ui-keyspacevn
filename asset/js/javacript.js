document.addEventListener("DOMContentLoaded", function () {
        var slides = document.querySelectorAll('.list__img img');
        var currentSlide = 0;

        function showSlide(index) {
            // Ẩn tất cả các slide
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            // Hiển thị slide theo chỉ mục đã cho
            slides[index].style.display = 'block';
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function previousSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Hiển thị slide đầu tiên
        showSlide(currentSlide);

        // Thiết lập chuyển tiếp slide tự động 3 giây một lần
        setInterval(nextSlide, 3000);

        // Chức năng điều hướng tới slide tiếp theo
        function nextList() {
            nextSlide();
        }

        // Chức năng điều hướng về slide trước
        function preList() {
            previousSlide();
        }

        // Xử lý sự kiện dành cho các nút điều hướng qua slide tiếp theo
        document.querySelector('.icon--right').addEventListener('click', nextList);
        document.querySelector('.icon--left').addEventListener('click', preList);
    });






// tải thêm sản phẩm trang s2-sanpham.html

document.addEventListener("DOMContentLoaded", function() {
    var loadMoreButton = document.querySelector('.showsplusproduct a');
    var productContainer = document.querySelector('.showproduct');

    var clickCount = 0;

    loadMoreButton.addEventListener('click', function() {
        clickCount++;

        if (clickCount === 1) {
            // Nối bộ sản phẩm đầu tiên
            productContainer.innerHTML += `
                <div class="product-row">
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling5.png" alt="item1">
                        <p>Bàn phím Razer Huntsman V3 Pro Mini</p>
                        <p>4.890.000₫</p>
                    </div>
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling6.jpg" alt="item2">
                        <p>Bàn phím HE DrunkDeerG65-Black</p>
                        <p>2.790.000₫</p>
                    </div>
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling7.jpg" alt="item3">
                        <p>Bàn phím HE DrunkDeerG65-White</p>
                        <div class="price__sale">
                            <p style="color: #444; text-decoration-line: line-through; font-size: 1.6rem;" >2.790.000₫</p>
                            <p>2.690.000₫</p>
                        </div>
                    </div>
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling8.jpg" alt="item4">
                        <p>Bàn phím DareU EK75-Full White</p>
                        <p>690.000₫</p>
                    </div>
                </div>
            `;
        } else if (clickCount === 2) {
            // Nối bộ sản phẩm thứ hai
            productContainer.innerHTML += `
                <div class="product-row">
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling1.webp" alt="item1">
                        <p>Razer DA V3 Pro + HyperPolling 8K</p>
                        <div class="price__sale">
                            <p style="color: #444; text-decoration-line: line-through; font-size: 1.6rem;" >4.590.000₫</p>
                            <p>3.890.000₫</p>
                        </div>
                    </div>
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling2.png" alt="item2">
                        <p>Chuột Beast X Wireless-Red</p>
                        <p>3.090.000₫</p>
                    </div>
                    <div class="content__main-item">
                        <p>GIẢM GIÁ CỰC SỐC KHI MUA COMBO</p>
                        <img class="ten-box" src="./asset/img/salling3.webp" alt="item3">
                        <p>Tai nghe HyperX Cloud III-Black</p>
                        <div class="price__sale">
                            <p style="color: #444; text-decoration-line: line-through; font-size: 1.6rem;" >2.490.000₫</p>
                            <p>2.290.000₫</p>
                        </div>
                    </div>
                    <div class="content__main-item">
                            <p>GIẢM GIÁ CỰC SỐC  KHI MUA COMBO</p>
                            <img class="ten-box" src="./asset/img/salling4.png" alt="item4">
                            <p>Chuột Asus ROG Strix Impact III</p>
                            <div class="price__sale">
                                <p style="color: #444; text-decoration-line: line-through; font-size: 1.6rem;" >1.690.000₫</p>
                                <p>1.590.000₫</p>
                            </div>
                        </div>
                </div>
            `;
            // Ẩn link "Tải thêm sản phẩm" sau lần nhấp thứ hai
            // Xong rồi ẩn nút đó đi 
            loadMoreButton.style.display = 'none';
        }
    });
});



    
    

