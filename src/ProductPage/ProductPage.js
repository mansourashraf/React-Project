import { NavLink } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import ScrollToTop from "react-scroll-to-top";


function Page() {
  const { addItem } = useCart();

  const products = [
    {
      "id": 1,
      "title": "Classic set",
      "description": "A blouse and bantloo Classic",
      "price": 3500,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 19,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://i.pinimg.com/236x/8d/71/2b/8d712b5c201b6f5ab6e58768fb41d779.jpg",
      "images": [
      "https://i.pinimg.com/236x/8d/71/2b/8d712b5c201b6f5ab6e58768fb41d779.jpg",
      
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 2,
      "title": "Blouse",
      "description": "Blouse Satan With short sleeves",
      "price": 2000,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://i.pinimg.com/236x/ec/ba/31/ecba3108ea2c4ab750f108ddad06c883.jpg",
      "images": [
      "https://i.pinimg.com/236x/ec/ba/31/ecba3108ea2c4ab750f108ddad06c883.jpg",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 3,
      "title": "Satin-Shirt",
      "description": "satin-look button-down shirt",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/8741/036/506/18/w/607/8741036506_1_1_1.jpg?ts=1687511099239",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/8741/036/506/18/w/607/8741036506_1_1_1.jpg?ts=1687511099239"
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 4,
      "title": "Satin-Shirt",
      "description": "satin-look button-down shirt",
      "price": 1250,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/8741/036/307/18/w/607/8741036307_2_1_1.jpg?ts=1686754109171",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/8741/036/307/18/w/607/8741036307_2_1_1.jpg?ts=1686754109171",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 5,
      "title": "Linen shirt",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 1789,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/1/p/8372/096/505/2/w/750/8372096505_2_1_1.jpg?ts=1681207980413",
      "images": [
      "https://static.zara.net/photos///2023/V/0/1/p/8372/096/505/2/w/750/8372096505_2_1_1.jpg?ts=1681207980413",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 6,
      "title": "Shirt Jacket",
      "description": "Small shirt jacket",
      "price": 2249,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/4877/075/505/13/w/607/4877075505_2_1_1.jpg?ts=1689852256293",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/4877/075/505/13/w/607/4877075505_2_1_1.jpg?ts=1689852256293",
     
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      // {
      // "id": 7,
      // "title": "Satin Dress",
      // "description": "stain slip dress",
      // "price": 1499,
      // "discountPercentage": 4.15,
      // "rating": 4.25,
      // "stock": 50,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/15691276/09a1a32f172c9a3fe6fc1684ca42e04e0fa850f8/1/image-thumb__4508715__product_listing/09a1a32f172c9a3fe6fc1684ca42e04e0fa850f8.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/15691276/09a1a32f172c9a3fe6fc1684ca42e04e0fa850f8/1/image-thumb__4508715__product_listing/09a1a32f172c9a3fe6fc1684ca42e04e0fa850f8.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      // {
      // "id": 8,
      // "title": "Wrap Dress",
      // "description": " wrap meni dress ",
      // "price": 1999,
      // "discountPercentage": 10.23,
      // "rating": 4.43,
      // "stock": 68,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/16736008/2a13698551ec486dcfec633f281dd960ea5042a3/1/image-thumb__4896823__product_listing/2a13698551ec486dcfec633f281dd960ea5042a3.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/16736008/2a13698551ec486dcfec633f281dd960ea5042a3/1/image-thumb__4896823__product_listing/2a13698551ec486dcfec633f281dd960ea5042a3.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      // {
      // "id": 9,
      // "title": "Drapped Dress",
      // "description": "white Darpped dress",
      // "price": 1199,
      // "discountPercentage": 11.83,
      // "rating": 4.54,
      // "stock": 96,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/16700802/acb65c9ce3c2bfb934a774c2f2158ed163b6d51a/2/image-thumb__4858522__product_listing/51c0ae6e3f8fd4982b44e9ced00954ceb57c76f0.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/16736427/581188f4e2af1a53d1f5c3c216b4a352807c13bf/1/image-thumb__4897370__product_listing/581188f4e2af1a53d1f5c3c216b4a352807c13bf.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      // {
      // "id": 10,
      // "title": "Pleated Dress",
      // "description": "Pleated Dress",
      // "price": 1699,
      // "discountPercentage": 6.18,
      // "rating": 4.43,
      // "stock": 89,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/16364576/ae672adedfa6011e231dec07bacc8f95e76bcf45/1/image-thumb__4676891__product_listing/ae672adedfa6011e231dec07bacc8f95e76bcf45.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/16364576/ae672adedfa6011e231dec07bacc8f95e76bcf45/1/image-thumb__4676891__product_listing/ae672adedfa6011e231dec07bacc8f95e76bcf45.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      // {
      // "id": 11,
      // "title": "Plit shirt Dress",
      // "description": "Plit shirt Dress tall",
      // "price": 1250,
      // "discountPercentage": 8.4,
      // "rating": 4.26,
      // "stock": 65,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/15410077/509cb9255fa25d3568d35013729a4d793ce7d53d/1/image-thumb__4450097__product_listing/509cb9255fa25d3568d35013729a4d793ce7d53d.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/15410077/509cb9255fa25d3568d35013729a4d793ce7d53d/1/image-thumb__4450097__product_listing/509cb9255fa25d3568d35013729a4d793ce7d53d.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      // {
      // "id": 12,
      // "title": "Knot-Dress",
      // "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      // "price": 2549,
      // "discountPercentage": 15.66,
      // "rating": 4,
      // "stock": 52,
      // "brand": "H&M",
      // "category": "Clothing",
      // "thumbnail": "https://eg.hm.com/assets/styles/HNM/15787824/cb311d798fd3981cea717a55ff30e8e511b22e1b/1/image-thumb__4555065__product_listing/cb311d798fd3981cea717a55ff30e8e511b22e1b.jpg",
      // "images": [
      // "https://eg.hm.com/assets/styles/HNM/15787824/cb311d798fd3981cea717a55ff30e8e511b22e1b/1/image-thumb__4555065__product_listing/cb311d798fd3981cea717a55ff30e8e511b22e1b.jpg",
      
      // ],
      // "allowedScreens": [
      //   "S -",
      //   " L"
      //   ],
      // },
      {
      "id": 13,
      "title": "Cuasl-Dress",
      "description": "tall dress",
      "price": 2350,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Lc",
      "category": "Clothing",
      "thumbnail": "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20221/5845021/l_20221-s2i463z8-kdy_a.jpg",
      "images": [
      "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20221/5845021/l_20221-s2i463z8-kdy_a.jpg",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 14,
      "title": "Cusal-Dress",
      "description": "dress small",
      "price": 1250,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Lc",
      "category": "Clothing",
      "thumbnail": "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20222/6243975/v1/l_20222-w2hr89z8-r3t-87-63-90-180_a.jpg",
      "images": [
      "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20222/6243975/v1/l_20222-w2hr89z8-r3t-87-63-90-180_a.jpg",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 15,
      "title": "Clissic-Dress",
      "description": "Dress-Clissec",
      "price": 1999,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lc",
      "category": "fClothing",
      "thumbnail": "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20222/5918087/l_20222-w27347z8-s4n_a.jpg",
      "images": [
       "https://img-lcwaikiki.mncdn.com/mnresize/600/800/pim/productimages/20222/5918087/l_20222-w27347z8-s4n_a.jpg",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      
      {
      "id": 16,
      "title": "Satin-Skirt",
      "description": "tall Satin scrit",
      "price": 1999,
      "discountPercentage": 13.31,
      "rating": 4.83,
      "stock": 15,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/8473/169/330/2/w/607/8473169330_1_1_1.jpg?ts=1691758079804",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/8473/169/330/2/w/607/8473169330_1_1_1.jpg?ts=1691758079804",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 17,
      "title": "Belisaa-Skirt",
      "description": "white Belisaa skirt",
      "price": 2499,
      "discountPercentage": 4.09,
      "rating": 4.52,
      "stock": 78,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/9878/170/251/2/w/607/9878170251_1_1_1.jpg?ts=1689940540346",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/9878/170/251/2/w/607/9878170251_1_1_1.jpg?ts=1689940540346",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 18,
      "title": "Short-Skirt",
      "description": "Small skirt",
      "price": 1799,
      "discountPercentage": 13.1,
      "rating": 4.56,
      "stock": 88,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/0/1/p/1608/036/800/18/w/607/1608036800_1_1_1.jpg?ts=1689173514832",
      "images": [
      "https://static.zara.net/photos///2023/I/0/1/p/1608/036/800/18/w/607/1608036800_1_1_1.jpg?ts=1689173514832",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 19,
      "title": "Jeans",
      "description": "jreans Bantlooo",
      "price": 2179,
      "discountPercentage": 10.68,
      "rating": 4.42,
      "stock": 54,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/1/p/8246/047/676/12/w/607/8246047676_2_2_1.jpg?ts=1684492186074",
      "images": [
      "https://static.zara.net/photos///2023/V/0/1/p/8246/047/676/12/w/607/8246047676_2_2_1.jpg?ts=1684492186074",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 20,
      "title": "Jeans",
      "description": "Jeanns",
      "price": 2599,
      "discountPercentage": 16.99,
      "rating": 4.06,
      "stock": 140,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/1/p/6045/025/406/18/w/607/6045025406_2_1_1.jpg?ts=1683274623517",
      "images": [
      "https://static.zara.net/photos///2023/V/0/1/p/6045/025/406/18/w/607/6045025406_2_1_1.jpg?ts=1683274623517",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 21,
      "title": "Jeans",
      "description": "Jeans",
      "price": 2190,
      "discountPercentage": 4.81,
      "rating": 4.44,
      "stock": 133,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/1/p/8246/051/712/13/w/607/8246051712_1_1_1.jpg?ts=1684492187991",
      "images": [
      "https://static.zara.net/photos///2023/V/0/1/p/8246/051/712/13/w/607/8246051712_1_1_1.jpg?ts=1684492187991",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 22,
      "title": "Bolo-T-Shirt",
      "description": "T-Shirt",
      "price": 1450,
      "discountPercentage": 15.58,
      "rating": 4.57,
      "stock": 146,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/2/p/6462/402/800/2/w/449/6462402800_2_1_1.jpg?ts=1676473754141",
      "images": [
      "https://static.zara.net/photos///2023/V/0/2/p/6462/402/800/2/w/449/6462402800_2_1_1.jpg?ts=1676473754141",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 23,
      "title": "T-Shirt",
      "description": "Shirt",
      "price": 1499,
      "discountPercentage": 8.04,
      "rating": 4.85,
      "stock": 26,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/2/p/3284/452/427/2/w/449/3284452427_2_1_1.jpg?ts=1677844129403",
      "images": [
      "https://static.zara.net/photos///2023/V/0/2/p/3284/452/427/2/w/449/3284452427_2_1_1.jpg?ts=1677844129403",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 24,
      "title": "Bolo-T-Shirt",
      "description": "T-Shirt",
      "price": 1499,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/V/0/2/p/3284/456/251/2/w/449/3284456251_2_1_1.jpg?ts=1678784948806",
      "images": [
      "https://static.zara.net/photos///2023/V/0/2/p/3284/456/251/2/w/449/3284456251_2_1_1.jpg?ts=1678784948806",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 25,
      "title": "Suit",
      "description": "Clissic ",
      "price": 4500,
      "discountPercentage": 13.58,
      "rating": 4.87,
      "stock": 47,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/T/1/p/0402/522/770/2/w/364/0402522770_15_2_1.jpg?ts=1689608845671",
      "images": [
      "https://static.zara.net/photos///2023/I/T/1/p/0402/522/770/2/w/364/0402522770_15_2_1.jpg?ts=1689608845671",
      
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],

      },
      {
      "id": 26,
      "title": "Cusal-Suit",
      "description": "suit",
      "price": 5600,
      "discountPercentage": 17.86,
      "rating": 4.08,
      "stock": 131,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/T/1/p/0562/408/681/2/w/450/0562408681_1_1_1.jpg?ts=1689682167695",
      "images": [
      "https://static.zara.net/photos///2023/I/T/1/p/0562/408/681/2/w/450/0562408681_1_1_1.jpg?ts=1689682167695",
     
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
      {
      "id": 27,
      "title": "Clissic-Suit",
      "description": "suit",
      "price": 5550,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Zara",
      "category": "Clothing",
      "thumbnail": "https://static.zara.net/photos///2023/I/T/1/p/9000/000/143/2/w/450/9000000143_1_1_1.jpg?ts=1690356615522",
      "images": [
      "https://static.zara.net/photos///2023/I/T/1/p/9000/000/143/2/w/450/9000000143_1_1_1.jpg?ts=1690356615522",
   
      ],
      "allowedScreens": [
        "S -",
        " L"
        ],
      },
    {
     "id": 28,
      "title": "Ground-Shoes",
      "description": "Shoes",
      "price": 1550,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/2/p/2743/120/400/2/w/449/2743120400_6_1_1.jpg?ts=1689695400997",
      "images": [
       "https://static.zara.net/photos///2023/I/1/2/p/2743/120/400/2/w/449/2743120400_6_1_1.jpg?ts=1689695400997",

      ],
      "allowedScreens": [
         "37 -",
        " 38 -",
        " 39 -",
        " 40"
      ],
    },
    {
      "id": 29,
      "title": "Sport-Shoes",
      "description": "Shoes",
      "price": 1550,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/2/p/2202/220/001/2/w/449/2202220001_6_1_1.jpg?ts=1689698208891",
      "images": [
        "https://static.zara.net/photos///2023/I/1/2/p/2202/220/001/2/w/449/2202220001_6_1_1.jpg?ts=1689698208891",
          
      ],
      "allowedScreens": [
         "37 -",
         " 38 -",
         " 39 -",
         " 40"
     ],
    },
    {
      "id": 30,
      "title": "Bamba-Shoes",
      "description": "Shoes",
      "price": 1599,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2022/I/1/2/p/2221/020/001/2/w/449/2221020001_6_1_1.jpg?ts=1660809779724",
      "images": [
        "https://static.zara.net/photos///2022/I/1/2/p/2221/020/001/2/w/449/2221020001_6_1_1.jpg?ts=1660809779724",
            
      ],
      "allowedScreens": [
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ],
    },
    {
      "id": 31,
      "title": "Slipper",
      "description": "Shoes",
      "price": 1299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 20,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/2/p/2707/120/800/2/w/449/2707120800_6_1_1.jpg?ts=1689693872244",
      "images": [
        "https://static.zara.net/photos///2023/I/1/2/p/2707/120/800/2/w/449/2707120800_6_1_1.jpg?ts=1689693872244",
              
     ],
     "allowedScreens": [
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ],
    },
    {
      "id": 32,
      "title": " rope-Slipper",
      "description": "Shoes",
      "price": 1299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/2/p/2713/120/102/2/w/449/2713120102_6_1_1.jpg?ts=1689697482317",
      "images": [
        "https://static.zara.net/photos///2023/I/1/2/p/2713/120/102/2/w/449/2713120102_6_1_1.jpg?ts=1689697482317",
                
      ],
      "allowedScreens": [
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ],
    },
    {
      "id": 33,
      "title": " Cross",
      "description": "Shoes",
      "price": 1799,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/2/p/2750/220/500/2/w/449/2750220500_6_1_1.jpg?ts=1689695485820",
      "images": [
        "https://static.zara.net/photos///2023/I/1/2/p/2750/220/500/2/w/449/2750220500_6_1_1.jpg?ts=1689695485820",
                 
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]
    },
    {
      "id": 34,
      "title": " Hills-Low-Hell",
      "description": "Shoes",
      "price": 1999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 15,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail": "https://static.zara.net/photos///2023/I/1/1/p/1222/210/102/2/w/364/1222210102_15_1_1.jpg?ts=1691478049963",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/1222/210/102/2/w/364/1222210102_15_1_1.jpg?ts=1691478049963",
                  
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 35,
      "title": " High-Slipper-Jeans",
      "description": "Shoes",
      "price": 1599,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 20,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/2316/210/043/2/w/364/2316210043_15_1_1.jpg?ts=1691063519960",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/2316/210/043/2/w/364/2316210043_15_1_1.jpg?ts=1691063519960",
                 
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 36,
      "title": " Hills-open-Hell",
      "description": "Shoes",
      "price": 1299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 24,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/3237/210/902/2/w/364/3237210902_15_1_1.jpg?ts=1690962576748",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/3237/210/902/2/w/364/3237210902_15_1_1.jpg?ts=1690962576748",
                 
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 37,
      "title": " Hills-Jeans",
      "description": "Shoes",
      "price": 3299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 24,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/1107/210/017/2/w/364/1107210017_15_2_1.jpg?ts=1688391775931",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/1107/210/017/2/w/364/1107210017_15_2_1.jpg?ts=1688391775931",
                  
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 38,
      "title": "Flat-open-Shoes",
      "description": "Shoes",
      "price": 1299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 24,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/3203/210/001/2/w/364/3203210001_15_3_1.jpg?ts=1690361054372",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/3203/210/001/2/w/364/3203210001_15_3_1.jpg?ts=1690361054372",
        
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 39,
      "title": "Textile-Slipper",
      "description": "Shoes",
      "price": 4299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 24,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/1620/210/111/2/w/364/1620210111_15_2_1.jpg?ts=1689854065428",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/1620/210/111/2/w/364/1620210111_15_2_1.jpg?ts=1689854065428",
                  
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 40,
      "title": "Flat-Sandals",
      "description": "Shoes",
      "price": 3299,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/1512/210/002/2/w/364/1512210002_15_3_1.jpg?ts=1689836801483",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/1512/210/002/2/w/364/1512210002_15_3_1.jpg?ts=1689836801483",
                  
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 41,
      "title": "High-Sandals",
      "description": "Shoes",
      "price": 3599,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/2340/110/800/2/w/364/2340110800_1_1_1.jpg?ts=1690536143003",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/2340/110/800/2/w/364/2340110800_1_1_1.jpg?ts=1690536143003",
                
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 42,
      "title": "Ballerina with rope",
      "description": "Shoes",
      "price": 1799,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 9,
      "brand": "Zara",
      "category": "Shoes",
      "thumbnail":"https://static.zara.net/photos///2023/I/1/1/p/3503/210/800/2/w/364/3503210800_15_3_1.jpg?ts=1689668949113",
      "images": [
        "https://static.zara.net/photos///2023/I/1/1/p/3503/210/800/2/w/364/3503210800_15_3_1.jpg?ts=1689668949113",
                  
      ],
      "allowedScreens":[
        "37 -",
        " 38 -",
        " 39 -",
        " 40"
     ]

    },
    {
      "id": 43,
      "title": "Sun-Glasses",
      "description": "Assec",
      "price": 999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 20,
      "brand": "H&M",
      "category": "Asses",
      "thumbnail":"https://eg.hm.com/assets/styles/HNM/16480003/0afa069c385c88c8596a18c76a3a7ac115d947ee/1/image-thumb__4803791__product_listing/0afa069c385c88c8596a18c76a3a7ac115d947ee.jpg",
      "images": [
        "https://eg.hm.com/assets/styles/HNM/16480003/0afa069c385c88c8596a18c76a3a7ac115d947ee/1/image-thumb__4803791__product_listing/0afa069c385c88c8596a18c76a3a7ac115d947ee.jpg",
                
      ],
    },
    {
      "id": 44,
      "title": "Sun-Glasses",
      "description": "Assec",
      "price": 799,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "H&M",
      "category": "Asses",
      "thumbnail":"https://i.pinimg.com/236x/bf/1f/28/bf1f280d763e069bd0c175edd2aeca2c.jpg",
      "images": [
        "https://i.pinimg.com/236x/bf/1f/28/bf1f280d763e069bd0c175edd2aeca2c.jpg",
                  
      ],
    },
    {
      "id": 45,
      "title": "Sun-Glasses",
      "description": "Assec",
      "price": 799,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "H&M",
      "category": "Asses",
      "thumbnail":"https://eg.hm.com/assets/styles/HNM/15735232/9b0567a88881f5549cb3d6d7dd0e0d9b1ba63fcf/1/image-thumb__4536929__product_listing/9b0567a88881f5549cb3d6d7dd0e0d9b1ba63fcf.jpg",
      "images": [
        "https://eg.hm.com/assets/styles/HNM/15735232/9b0567a88881f5549cb3d6d7dd0e0d9b1ba63fcf/1/image-thumb__4536929__product_listing/9b0567a88881f5549cb3d6d7dd0e0d9b1ba63fcf.jpg",
                  
      ],
    },
    {
      "id": 46,
      "title": "Watch",
      "description": "Assec",
      "price": 1999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?s=612x612&w=0&k=20&c=UyKrdFcqdfWnPWeJcDRdkhI0IoJqT8C5d-hc7TMjyr0=",
      "images": [
        "https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?s=612x612&w=0&k=20&c=UyKrdFcqdfWnPWeJcDRdkhI0IoJqT8C5d-hc7TMjyr0=",
                  
      ],
    },
    {
      "id": 46,
      "title": "Watch",
      "description": "Assec",
      "price": 2999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 10,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://media.istockphoto.com/id/173640935/photo/watch-silver-gold-isolated-on-white.jpg?s=612x612&w=0&k=20&c=xX39T5VQmlk8aDW3Wov_FJkUutQ9e0oAuZkK_jMTHeY=",
      "images": [
        "https://media.istockphoto.com/id/173640935/photo/watch-silver-gold-isolated-on-white.jpg?s=612x612&w=0&k=20&c=xX39T5VQmlk8aDW3Wov_FJkUutQ9e0oAuZkK_jMTHeY=",
             
      ],
    },
    {
      "id": 47,
      "title": "Watch",
      "description": "Assec",
      "price": 1999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 9,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://media.istockphoto.com/id/146907173/photo/antique-pocketwatch.jpg?s=612x612&w=0&k=20&c=NI9PpgsCkcpe86AvjRNVc45lt0CHnvjCcrtv39CRlDU=",
      "images": [
        "https://media.istockphoto.com/id/146907173/photo/antique-pocketwatch.jpg?s=612x612&w=0&k=20&c=NI9PpgsCkcpe86AvjRNVc45lt0CHnvjCcrtv39CRlDU=",
                
      ],
    },
    {
      "id": 47,
      "title": "Watch",
      "description": "Assec",
      "price": 999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 9,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://media.istockphoto.com/id/173260617/photo/watch.jpg?s=612x612&w=0&k=20&c=NvwwfdzGsaj_-oh4Hf5nx9KvppugWSX7kVVfjogaoCA=",
      "images": [
        "https://media.istockphoto.com/id/173260617/photo/watch.jpg?s=612x612&w=0&k=20&c=NvwwfdzGsaj_-oh4Hf5nx9KvppugWSX7kVVfjogaoCA=",
   
      ],
    },
    {
      "id": 48,
      "title": "Watch",
      "description": "Assec",
      "price": 5999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 9,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "images": [
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        
      ],
    },
    {
      "id": 49,
      "title": "Watch",
      "description": "Assec",
      "price": 7999,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 9,
      "brand": "cassio",
      "category": "Asses",
      "thumbnail":"https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      "images": [
        "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      
      ],
    }







  ];

  return (
    <div>
      <Container>
        <Row className="mt-5">
         {products.map((p) => (
          <Col md="4" key={p.id} className="text-center mb-4">
          <img src={p.images[0]} className="img-fluid mb-3" style={{height:400,width:300,borderRadius:6}}></img>
          <h3 >{p.title}</h3>
          <h5>{p.price} -EGP</h5>
          <h5>{p.stock}piceas</h5>
          <h5>{p.allowedScreens}</h5>
          <button onClick={() => addItem(p)} className="btn btn-primary">Add to cart</button>
        </Col>
      ))}
        </Row>
      </Container>
     
    </div>
  );
}



function ProductPage() {
  return (
    <CartProvider>
      <Navbar/>
      <Page />
      <Footer/>
      <ScrollToTop smooth />
    </CartProvider>
    
  );
}
export default ProductPage;