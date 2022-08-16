let data=[
    {   id:'1',
        tenSP:"Samsung 1",
        category:"dienThoai",
        hinhAnh:"https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1a536.jpg",
        giaVon:"1000000",
        khuyenMai:"0.1",
        danhGia:"8",
        loaiHinh:"Siêu Hot",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Samsung Shop",
        soLuongTonKho:"10",
        giaSi:"800000",
        soLuongThanhSi:"10"
    },
    {   id:'2',
        tenSP:"Iphone 1",
        category:"dienThoai",
        hinhAnh:"https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/28/637840956036926900_iphone-13-pro-max-xanhreu-1.jpg",
        giaVon:"2000000",
        khuyenMai:"0.1",
        danhGia:"8",
        loaiHinh:"Bán Chạy",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Iphone Shop",
        soLuongTonKho:"20",
        giaSi:"1000000",
        soLuongThanhSi:"10"
    },
    {   id:'3',
        tenSP:"Vivo",
        category:"dienThoai",
        hinhAnh:"https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_27321/dien-thoai-v23e_main_202_1020.png.webp",
        giaVon:"1500000",
        khuyenMai:"0.2",
        danhGia:"6",
        loaiHinh:"Giảm Sâu",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Vivo Shop",
        soLuongTonKho:"15",
        giaSi:"600000",
        soLuongThanhSi:"10"
    },

    {   id:'4',
        tenSP:"Oppo",
        category:"dienThoai",
        hinhAnh:"https://fptshop.com.vn/Uploads/Originals/2021/7/8/637613342139496099_oppo-reno6z-dd.jpg",
        giaVon:"1200000",
        khuyenMai:"0.2",
        danhGia:"5",
        loaiHinh:"Giảm Sâu",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Oppo Shop",
        soLuongTonKho:"18",
        giaSi:"700000",
        soLuongThanhSi:"10"
    },
    {   id:'5',
        tenSP:"Iphone 2",
        category:"dienThoai",
        hinhAnh:"https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png",
        giaVon:"1200000",
        khuyenMai:"0.2",
        danhGia:"5",
        loaiHinh:"Siêu Hot",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Iphone Shop",
        soLuongTonKho:"25",
        giaSi:"1200000",
        soLuongThanhSi:"10"
    },
    {   id:'6',
        tenSP:"Samsung 2",
        category:"dienThoai",
        hinhAnh:"https://images.samsung.com/is/image/samsung/assets/vn/2203/galaxy-a-series/02_Showroom_kv_asset_product.png",
        giaVon:"1400000",
        khuyenMai:"0.25",
        danhGia:"9",
        loaiHinh:"Siêu Hot",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Samsung Shop",
        soLuongTonKho:"22",
        giaSi:"1300000",
        soLuongThanhSi:"10"
    },
    {   id:'7',
        tenSP:"Bàn phím",
        category:"phuKien",
        hinhAnh:"https://cdn.tgdd.vn/Products/Images/4547/243200/co-co-day-gaming-razer-huntsman-tournament-edition-2-org.jpg",
        giaVon:"1400000",
        khuyenMai:"0.25",
        danhGia:"6.5",
        loaiHinh:"Giảm Sâu",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Samsung Shop",
        soLuongTonKho:"22",
        giaSi:"1300000",
        soLuongThanhSi:"10"
    },
    {   id:'8',
        tenSP:"Chuột",
        category:"phuKien",
        hinhAnh:"https://salt.tikicdn.com/ts/product/aa/e7/92/f6767d13b63b70c89e2e39360cff84c0.jpg",
        giaVon:"400000",
        khuyenMai:"0.35",
        danhGia:"7.5",
        loaiHinh:"Bán Chạy",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Samsung Shop",
        soLuongTonKho:"22",
        giaSi:"300000",
        soLuongThanhSi:"10"
    },
    {   id:'9',
        tenSP:"Màn hình",
        category:"phuKien",
        hinhAnh:"https://cdn.tgdd.vn/Products/Images/5697/238484/man-hinh-may-tinhasus-lcd-proart-pa247cv-238-inch-full-hd-600x600.jpg",
        giaVon:"10000000",
        khuyenMai:"0.15",
        danhGia:"8",
        loaiHinh:"Siêu Hot",
        logoShop:"https://brademar.com/wp-content/uploads/2022/05/Samsung-Logo-PNG-2005-%E2%80%93-Now.png",
        tenShop:"Samsung Shop",
        soLuongTonKho:"22",
        giaSi:"8000000",
        soLuongThanhSi:"10"
    },
]



$(document).ready(function(){
    let contentHTML="";
    let giaSauKM=0;
    for (let i = 0; i < data.length; i++) {
        let sp=data[i];
        giaSauKM=sp.giaVon*(1-sp.khuyenMai)
        contentHTML+=`
                <div class="product_item p-4">
                    <div class="product_cart">
                        <div class="cart_header">
                            <div class="product_image">
                                <img src=${sp.hinhAnh} alt=${sp.tenSP}>
                            </div>
                            <div class="shop_info">
                                <div class="shop_avatar">
                                    <img src=${sp.logoShop} alt=${sp.tenSP}>
                                </div>
                                <span class="shop_name">${sp.tenShop}</span>
                            </div>
                            <div class="kpi">${sp.loaiHinh}</div>
                        </div>
                        <div class="cart_content">
                            <p class="product_name">
                                ${sp.tenSP}
                            </p>
                            <div class="rate_and_price">
                                <div class="rate_star">
                                    ${sp.danhGia}
                                    <i class="fa-solid fa-star"></i>

                                </div>
                                <div class="product_price">
                                    <span class="old_price">$ ${(sp.giaVon*1).toLocaleString()}</span>
                                    <span class="new_price">$ ${giaSauKM.toLocaleString()}</span>
                                </div>
                            </div>
                            <div class="addCart">
                                <button>Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    $("#listProducts").append(contentHTML);
});
