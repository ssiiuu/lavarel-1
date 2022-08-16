<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/grid.css">
    <link rel="stylesheet" href="./css/main.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

</head>
<body>
<div class="fillter__sidebar">
    <div class="teller">
        <p>Bộ Lọc</p>
    </div>
    <div class="sort">
        <p>Sắp Xếp</p>
        <div>
            <input type="radio" class="radio-title" name="drone" value="Giá Cao Đến Thấp"
                   checked/>
            <label >Giá Cao Đến Thấp</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="Giá Thấp Đến Cao"/>
            <label >Giá Thấp Đến Cao</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="Từ A-Z">
            <label >Từ A-Z</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="Từ Z-A">
            <label >Từ Z-A</label>
        </div>
        <div>
            <input type="radio" id="radio-title " name="drone" value="Khuyến Mãi Nhiều Nhất">
            <label >Khuyến Mãi Nhiều Nhất</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="Khuyến Mãi Ít Nhất">
            <label >Khuyến Mãi Ít Nhất</label>
        </div>
    </div>
    <div class="type sort">
        <p>Loại Hình</p>
        <div>
            <input type="radio" class="radio-title" name="drone" value="TatCa"checked>
            <label >Tất Cả</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="BanChay">
            <label >Bán Chạy</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="GiamSau">
            <label >Giảm Sâu Friends</label>
        </div>
        <div>
            <input type="radio" class="radio-title" name="drone" value="SieuHot">
            <label >Siêu Hot</label>
        </div>
    </div>
    <div class="evaluate sort">
        <p>Đánh Giá</p>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star fa-color"></i>
        </div>
    </div>
    <div class="range sort">
        <p>Khoảng Giá</p>
        <div class="range-slide">
            <div class="slide">
                <div class="line" id="line" style="left: 0%; right: 0%;"></div>
                <span class="thumb" id="thumbMin" style="left: 0%;"></span>
                <span class="thumb" id="thumbMax" style="left: 100%;"></span>
            </div>
            <input class="range-input" id="rangeMin" type="range" max="100" min="10" step="5" value="0">
            <input class="range-input" id="rangeMax" type="range" max="100" min="10" step="5" value="100">
        </div>
        <div class="display">
            <span id="min">10</span>
            <span id="max">100</span>
        </div>

    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
