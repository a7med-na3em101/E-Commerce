import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductservicesService {
  constructor() {}
  product = [
    {
      id:3,
      title: 'lel',
      price: 1000,
      description:
        'Special digital featuresProduct Dimensions DepthxWidthxHeight 27.5Dx31.6Wx38H cmblack color4 liter capacityPlastic materialsRecommended uses for HeatBrand name MediaControl method Touch',
      images: [
        'https://i.imgur.com/4lTaHfF.jpeg',
        'https://i.imgur.com/JktHE1C.jpeg',
        'https://i.imgur.com/cQeXQMi.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T19:36:37.000Z',
      category: {
        id: 3,
        name: 'لاب توب ألعاب فيكتس اتش بي 15-fa1093dx-انتل i5-13420H جيل 13 ثماني النواة،6 جيجا GDDR6 جيفورس RTX 3050، RAM 8GB، SSD 512 جيجا، FHD 15.6 بوصة (1920x1080)144 هرتز، كيبورد بإضاءة خلفية، ويندوز 11، أزرق',
        image:
          'assets/img/71-6mkLcrPL.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T18:23:17.000Z',
      },
    },
    {
      id: 4,
      title: 'sdafsdafasf',
      price: 350,
      description:
        'Screen size is 55 inchesBrand name SamsungSupported Internet Services Netflix, Browser, YouTube4K LED display technologyProduct Dimensions Depth x Width x Height 6D x 123.1W x 70.7H cmResolution 4KRefresh rate 50 HzSpecial Features Game Mode, 3 Edgeless Design, Browser, Game Mode, BrowserModel name UA55DU7000UXEGIncluded components include power cable, user manual, slim full motion stand (Y22)remote control',
      images: [
        'https://i.imgur.com/3dU0m72.jpeg',
        'https://i.imgur.com/zPU3EVa.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T19:37:26.000Z',
      category: {
        id: 3,
        name: 'تلفزيون سامسونج سمارت 55 بوصة 4 كيه الترا اتش دي ال اي دي - أسود - UA55DU7000UXEG [موديل 2024]',
        image: 'assets/img/Untitled_design-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T18:23:17.000Z',
      },
    },
    {
      id: 5,
      title: 'Futuristic Holographic Soccer Cleats',
      price: 39,
      description:
        "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      images: [
        'https://i.imgur.com/qNOjJje.jpeg',
        'https://i.imgur.com/NjfCFnu.jpeg',
        'https://i.imgur.com/eYtvXS1.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'اب توب ايديا باد 1 من لينوفو - انتل كور i7-1255U - 8 جيجا - 512 جيجا اس اس دي - بطاقة رسومات انتل ايريس اكس اي - شاشة FHD 15.6 انش - ويندوز 11 - ازرق',
        image: 'assets/img/71gfWwWhd4L._AC_SX679_-removebg-preview (1).png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 6,
      title: 'Sale',
      price: 149,
      description:
        'Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.',
      images: [
        'https://i.imgur.com/62gGzeF.jpeg',
        'https://i.imgur.com/5MoPuFM.jpeg',
        'https://i.imgur.com/sUVj7pK.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T16:48:09.000Z',
      category: {
        id: 4,
        name: 'لاب بتوب اسس تي يو اف للالعاب F15 FX507ZC4-HN081W (انتل كور I5 12500H - ذاكرة رام 8 جيجا - هارد 512 SSD- وحدة معالجة انفيديا جيفورس RTX™ 3050 4 جيجا - شاشة 15.6 انش 144 هرتز - ويندوز 11 Home',
        image: 'assets/img/616OnX7KKaL._AC_SX679_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 7,
      title: 'Chic Summer Denim Espadrille Sandals',
      price: 33,
      description:
        'Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.',
      images: [
        'https://i.imgur.com/9qrmE1b.jpeg',
        'https://i.imgur.com/wqKxBVH.jpeg',
        'https://i.imgur.com/sWSV6DK.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'لاب توب لينوفو ايديا باد جيمينج 3 15IHU6، شاشة 15.6 بوصة FHD، معالج كور i5 الجيل 11 11300H بتردد 3.10 جيجاهرتز، ذاكرة RAM 8 جيجابايت، هارد SSD سعة 256 جيجابايت، انفيديا RTX 3050 4 جيجابايت، اسود شادو',
        image: 'assets/img/51sfAk+pcQL._AC_SX300_SY300_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 8,
      title: 'Vibrant Runners: Bold Orange & Blue Sneakers',
      price: 27,
      description:
        "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
      images: [
        'https://i.imgur.com/hKcMNJs.jpeg',
        'https://i.imgur.com/NYToymX.jpeg',
        'https://i.imgur.com/HiiapCt.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'طبول والات ايقاعية',
        image:
          'assets/img/XCM_Manual_1346013_3987929_Egypt_EG_OHL_Music_L2_Navtiles_Drums_440x400_2X-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 9,
      title: 'Vibrant Pink Classic Sneakers',
      price: 84,
      description:
        'Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!',
      images: [
        'https://i.imgur.com/mcW42Gi.jpeg',
        'https://i.imgur.com/mhn7qsF.jpeg',
        'https://i.imgur.com/F8vhnFJ.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'معدات دى جية',
        image:
          'assets/img/XCM_Manual_1346013_3987928_Egypt_EG_OHL_Music_L2_Navtiles_DJ_440x400_2X-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 110,
      title: 'Futuristic Silver and Gold High-Top Sneaker',
      price: 68,
      description:
        'Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!',
      images: [
        'https://i.imgur.com/npLfCGq.jpeg',
        'https://i.imgur.com/vYim3gj.jpeg',
        'https://i.imgur.com/HxuHwBO.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'جيتارات و معدات موسيقية',
        image:
          'assets/img/XCM_Manual_1346013_3987930_Egypt_EG_OHL_Music_L2_Navtiles_Guitars_440x400_2X-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 43,
      title: 'Elegant Purple Leather Loafers',
      price: 17,
      description:
        "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
      images: [
        'https://i.imgur.com/Au8J9sX.jpeg',
        'https://i.imgur.com/gdr8BW2.jpeg',
        'https://i.imgur.com/KDCZxnJ.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'بيانو موسيقى',
        image:
          'assets/img/XCM_Manual_1346013_3987932_Egypt_EG_OHL_Music_L2_Navtiles_Piano_440x400_2X-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 44,
      title: 'Classic Blue Suede Casual Shoes',
      price: 39,
      description:
        'Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.',
      images: [
        'https://i.imgur.com/sC0ztOB.jpeg',
        'https://i.imgur.com/Jf9DL9R.jpeg',
        'https://i.imgur.com/R1IN95T.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'الات وترية',
        image:
          'assets/img/XCM_Manual_1346013_3987935_Egypt_EG_OHL_Music_L2_Navtiles_String_440x400_2X-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 45,
      title: 'Sleek Futuristic Electric Bicycle',
      price: 22,
      description:
        "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
      images: [
        'https://i.imgur.com/BG8J0Fj.jpg',
        'https://i.imgur.com/ujHBpCX.jpg',
        'https://i.imgur.com/WHeVL9H.jpg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 5,
        name: 'سماعة فوق الأذن سلكي الالعاب ستيريو الصوت المحيطي للالعاب مع ضوء التنفس الفضاء اللوني ار جي بي وميكروفون قابل للتعديل لجهاز بلاي ستيشن 4-5 PC اكس بوكس وان لاب توب ماك ازرق',
        image: 'assets/img/Untitled_design__4_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 46,
      title: 'Sleek All-Terrain Go-Kart',
      price: 37,
      description:
        'Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.',
      images: [
        'https://i.imgur.com/Ex5x3IU.jpg',
        'https://i.imgur.com/z7wAQwe.jpg',
        'https://i.imgur.com/kc0Dj9S.jpg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 5,
        name: 'Miscellaneous',
        image: 'assets/img/Untitled_design__2_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 49,
      title: 'Chic Transparent Fashion Handbag',
      price: 61,
      description:
        'Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.',
      images: [
        'https://i.imgur.com/Lqaqz59.jpg',
        'https://i.imgur.com/uSqWK0m.jpg',
        'https://i.imgur.com/atWACf1.jpg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 5,
        name: 'ماوس ألعاب بسلك USB مريح من بينجوو، متغير اللون للكمبيوتر واللاب توب (لون أسود، 2400 نقطة لكل بوصة، 6 أزرار)',
        image: 'assets/img/71B1ZECPw6L._AC_SX679_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 10,
      title: 'Trendy Pink-Tinted Sunglasses',
      price: 38,
      description:
        'Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.',
      images: [
        'https://i.imgur.com/0qQBkxX.jpg',
        'https://i.imgur.com/I5g1DoE.jpg',
        'https://i.imgur.com/myfFQBW.jpg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 5,
        name: 'قاعدة ماوس كبيرة للالعاب مقاومة للانزلاق مطاط بتصميم برسومات انيمي يابانية واطار بحافة مخيطة والوان RGB واضاءة LED، مناسبة للكيبورد والماوس لاجهزة الكمبيوتر واللاب توب، مقاس 35.4 ×15.7 بوصة',
        image: 'assets/img/Untitled_design__3_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id:41,
      title: 'Elegant Glass Tumbler Set',
      price: 50,
      description:
        'Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.',
      images: [
        'https://i.imgur.com/TF0pXdL.jpg',
        'https://i.imgur.com/BLDByXP.jpg',
        'https://i.imgur.com/b7trwCv.jpg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 5,
        name: 'مبرد موبايل AH-102 مروحة تبريد ردياتير الموبايل مع شاشة عرض درجة الحرارة للألعاب والفيديو المباشر/مدونة الفيديو يدعم الموبايل بعرض 6 - 8 سم مبرد موبايل العاب شبه الموصل مشتت حراري للتبريد 5 دبابيس',
        image: 'assets/img/Untitled_design__1_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 71,
      title: 'Juan Esteban Salazar',
      price: 100,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: [
        'https://previews.123rf.com/images/zenobillis/zenobillis1801/zenobillis180100011/93146261-yo-signo-de-palabra-punto-de-exclamaci%C3%B3n-texto-rojo-negro-sobre-fondo-blanco.jpg',
      ],
      creationAt: '2024-03-25T15:06:37.000Z',
      updatedAt: '2024-03-25T15:07:19.000Z',
      category: {
        id: 1,
        name: 'ս',
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T13:25:46.000Z',
      },
    },
    {
      id: 77,
      title: 'New Longboard',
      price: 199,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: [
        'https://www.traektoria.ru/upload/resized/2/11147732/11147732-1500x1500.jpg',
      ],
      creationAt: '2024-03-25T16:47:57.000Z',
      updatedAt: '2024-03-25T16:47:57.000Z',
      category: {
        id: 36,
        name: 'Longboards',
        image:
          'https://www.traektoria.ru/upload/resized/2/11147563/11147563-1500x1500.jpg',
        creationAt: '2024-03-25T16:47:26.000Z',
        updatedAt: '2024-03-25T16:47:26.000Z',
      },
    },
    {
      id: 88,
      title: 'rrr',
      price: 53,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: [
        'https://famt.ru/wp-content/uploads/2019/05/sonnik-govoryaschiy-kot.jpg',
        'https://famt.ru/wp-content/uploads/2019/05/sonnik-govoryaschiy-kot.jpg',
      ],
      creationAt: '2024-03-25T17:21:56.000Z',
      updatedAt: '2024-03-25T17:21:56.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://i.imgur.com/ZANVnHE.jpeg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 92,
      title: 'New Product VCA',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: ['https://placeimg.com/640/480/any'],
      creationAt: '2024-03-25T19:15:25.000Z',
      updatedAt: '2024-03-25T19:15:25.000Z',
      category: {
        id: 1,
        name: 'ս',
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T13:25:46.000Z',
      },
    },
    {
      id: 93,
      title: 'New Product VCA',
      price: 10,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: ['https://placeimg.com/640/480/any'],
      creationAt: '2024-03-25T19:16:07.000Z',
      updatedAt: '2024-03-25T19:16:07.000Z',
      category: {
        id: 1,
        name: 'ս',
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T13:25:46.000Z',
      },
    },
    {
      id: 94,
      title:
        'extremely long name cause I have to limit test the styling of a project im making, sorry :(. enjoy the puppy at least  :)',
      price: 16,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: [
        'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D',
      ],
      creationAt: '2024-03-25T19:27:46.000Z',
      updatedAt: '2024-03-25T19:27:46.000Z',
      category: {
        id: 5,
        name: 'Miscellaneous',
        image: 'https://i.imgur.com/BG8J0Fj.jpg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id: 95,
      title: 'Testing new product',
      price: 14,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet, atque.Rem, hic animi corporis dolor quia ab modi Providenteiusr erumanimiexplicaboeume xcepturiofficiis odiovoluptate, repellendus dolorem!',
      images: ['https://placeimg.com/640/480/any'],
      creationAt: '2024-03-25T19:32:46.000Z',
      updatedAt: '2024-03-25T19:32:46.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://i.imgur.com/ZANVnHE.jpeg',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
    {
      id:101,
      title: 'lel',
      price: 100,
      description:
        'Special digital featuresProduct Dimensions DepthxWidthxHeight 27.5Dx31.6Wx38H cmblack color4 liter capacityPlastic materialsRecommended uses for HeatBrand name MediaControl method Touch',
      images: [
        'https://i.imgur.com/4lTaHfF.jpeg',
        'https://i.imgur.com/JktHE1C.jpeg',
        'https://i.imgur.com/cQeXQMi.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T19:36:37.000Z',
      category: {
        id: 3,
        name: 'لاب توب ألعاب فيكتس اتش بي 15-fa1093dx-انتل i5-13420H جيل 13 ثماني النواة،6 جيجا GDDR6 جيفورس RTX 3050، RAM 8GB، SSD 512 جيجا، FHD 15.6 بوصة (1920x1080)144 هرتز، كيبورد بإضاءة خلفية، ويندوز 11، أزرق',
        image:
          'assets/img/71-6mkLcrPL.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T18:23:17.000Z',
      },
    },
    {
      id: 102,
      title: 'Futuristic Holographic Soccer Cleats',
      price: 39,
      description:
        "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      images: [
        'https://i.imgur.com/qNOjJje.jpeg',
        'https://i.imgur.com/NjfCFnu.jpeg',
        'https://i.imgur.com/eYtvXS1.jpeg',
      ],
      creationAt: '2024-03-25T12:49:55.000Z',
      updatedAt: '2024-03-25T12:49:55.000Z',
      category: {
        id: 4,
        name: 'اب توب ايديا باد 1 من لينوفو - انتل كور i7-1255U - 8 جيجا - 512 جيجا اس اس دي - بطاقة رسومات انتل ايريس اكس اي - شاشة FHD 15.6 انش - ويندوز 11 - ازرق',
        image: 'assets/img/71gfWwWhd4L._AC_SX679_-removebg-preview (1).png',
        creationAt: '2024-03-25T12:49:55.000Z',
        updatedAt: '2024-03-25T12:49:55.000Z',
      },
    },
  ];

  
}
