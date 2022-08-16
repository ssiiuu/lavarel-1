<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/listProducts.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

</head>
<body>
<div class="row">
    <div class="col p-12 t-12 m-12 category">
        <div class="cate_header">
            <p>danh sách sản phẩm</p>
        </div>
        <div class="cate_main">
            <div class="product_list row" id="listProducts">
            </div>
        </div>
    </div>
    <div class="col p-12 t-12 m-12">
        <div class="pagination">
            <a href="#" class="pagination__item">
                <i class="fa-solid fa-angles-left"></i>
            </a>
            <a href="#" class="pagination__item active">1</a>
            <a href="#" class="pagination__item">2</a>
            <a href="#" class="pagination__item">3</a>
            <a href="#" class="pagination__item">
                <i class="fa-solid fa-angles-right"></i>
            </a>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/list-products.js"></script>
</body>
</html>
