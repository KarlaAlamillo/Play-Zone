/* Karla Alamillo
Diseño Web */
const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");
const gallery = document.getElementById("gallery");

let currentIndex = 0;
let zoom = 1;



const images = [

"https://i.pinimg.com/736x/c5/0b/68/c50b68f4a5389955bd3a6b7fd198f288.jpg",
"https://i.pinimg.com/736x/04/35/50/043550e02c9cb0fc9a365951a182b6fe.jpg",
"https://i.pinimg.com/736x/80/b6/ba/80b6bad44cf5c42faf6ee68ba7da9133.jpg",
"https://i.pinimg.com/736x/c6/1d/a5/c61da5ca870325e813d2ee8b87bda4c9.jpg",
"https://i.pinimg.com/736x/e2/a4/36/e2a4362568969f2ba64885a2dd19e328.jpg",
"https://i.pinimg.com/1200x/b0/b7/59/b0b759176f74c66d9184d37570eb9e1b.jpg",
"https://i.pinimg.com/1200x/22/9c/d4/229cd40636f87410b0b9135c9eb5ff7d.jpg",
"https://i.pinimg.com/736x/c9/2b/7d/c92b7d91732e07fb8248426296b97494.jpg",
"https://i.pinimg.com/1200x/a7/1f/44/a71f4493ad1152807bec808f693b7994.jpg",
"https://i.pinimg.com/736x/4b/44/50/4b44505be68f0c3c549456b820bdf933.jpg",
"https://i.pinimg.com/1200x/23/32/13/233213710ee58f4357a50d1f9c13c329.jpg",
"https://i.pinimg.com/736x/b7/f4/c9/b7f4c9e725a1b668aa7ac55f9a0a3663.jpg",
"https://i.pinimg.com/736x/ad/f8/42/adf8428506140c2a4395531df8008d8f.jpg",
"https://i.pinimg.com/736x/60/57/bd/6057bd2f3f38aa4ad5176da74b1803fa.jpg",
"https://i.pinimg.com/736x/80/9a/54/809a545fb89342cbf12f11a7dd015b4a.jpg",
"https://i.pinimg.com/736x/26/32/52/263252c9d93326f850bf0e6589c0b2a9.jpg",
"https://i.pinimg.com/1200x/93/a9/6d/93a96d49bef46a695d642f96f3d945a2.jpg",
"https://i.pinimg.com/736x/4b/89/b2/4b89b2ee56affe0c70df775e1bea56a6.jpg",
"https://i.pinimg.com/736x/81/38/f7/8138f714e8ed20a225e431b4744fac5c.jpg",
"https://i.pinimg.com/1200x/43/5d/8a/435d8a4feed0908ed6c1e4994670a547.jpg",
"https://i.pinimg.com/736x/1a/d0/72/1ad0729e8e942a13aad742cc5f9f140b.jpg",
"https://i.pinimg.com/736x/1d/aa/19/1daa1989da0400647ed4d617f2bb989c.jpg",
"https://i.pinimg.com/1200x/3f/fa/5a/3ffa5a53d96f1d2d0cfe25c967382d30.jpg",
"https://i.pinimg.com/1200x/23/2c/6f/232c6f778ce79f662e399cfa3c9d9bb8.jpg",
"https://i.pinimg.com/736x/15/12/58/151258edbbe6cde933c79bff510e2132.jpg",
"https://i.pinimg.com/1200x/e0/d5/40/e0d5407b453ae8209487ce97156af243.jpg",
"https://i.pinimg.com/736x/53/c3/e8/53c3e85bcb2eb5a921d4b5312224dea4.jpg",
"https://i.pinimg.com/736x/bf/50/fd/bf50fda24bd70b910c1de28f0a52b2e2.jpg",
"https://i.pinimg.com/736x/8e/b1/07/8eb107cc7aed0cfad4aa50ca6c6b86ad.jpg",
"https://i.pinimg.com/736x/8c/0c/51/8c0c519da6e1e69556f7350547e74ffe.jpg",
"https://i.pinimg.com/736x/36/06/c5/3606c5a2ebce4b3c46cb867029e30556.jpg",
"https://i.pinimg.com/736x/77/65/79/7765799571a3d86380b96a6e782d909a.jpg",
"https://i.pinimg.com/736x/db/5a/8d/db5a8da7d409de79a42b45ac64107af7.jpg",
"https://i.pinimg.com/736x/a7/07/68/a70768bcd8ac9491b7567096819ed1b2.jpg",
"https://i.pinimg.com/736x/e9/40/a7/e940a75a1b175d8a4d618de15b2f72f2.jpg",
"https://i.pinimg.com/736x/55/7b/6f/557b6fb55aef56e264732a2b4f5dbef8.jpg",
"https://i.pinimg.com/736x/47/c6/6c/47c66cebdd77c18c79b79c84308d3c46.jpg",
"https://i.pinimg.com/736x/82/c9/9a/82c99af3986fa5bfd064672527ff0866.jpg",
"https://i.pinimg.com/736x/fe/f6/11/fef6117b9163d839d04732e896950bf4.jpg",
"https://i.pinimg.com/736x/90/b1/5d/90b15ded7ff21fd7c09a2d2da1a3523f.jpg",
"https://i.pinimg.com/736x/ea/e1/09/eae109dfb6f0d0c8d69f15ede16aa8df.jpg",
"https://i.pinimg.com/1200x/68/f6/06/68f6067bd4bae3c1b265a87add4fab0e.jpg",
"https://i.pinimg.com/736x/2d/86/d6/2d86d61817616dbac4b93bb2c47de140.jpg",
"https://i.pinimg.com/736x/d3/e3/28/d3e328fa93c66c42eb44feb3f65b004c.jpg",
"https://i.pinimg.com/736x/26/50/d8/2650d84d943d19549ad2252ee18f3d80.jpg",
"https://i.pinimg.com/736x/e0/25/c6/e025c6cc6ab3c9502d82ce2542705339.jpg",
"https://i.pinimg.com/736x/79/12/0f/79120fc61b71dd4d42812e86902e8351.jpg",
"https://i.pinimg.com/736x/08/7f/a3/087fa303f6da5c30ac58b99b7fb4155e.jpg",
"https://i.pinimg.com/736x/87/2c/df/872cdf8ba2cc7f49df28a6c140260bab.jpg",
"https://i.pinimg.com/736x/74/61/c1/7461c1d7e295f7d7356bb53ed5fecd45.jpg",
"https://i.pinimg.com/736x/8f/f3/3b/8ff33bac26320cee55e963fb8ae8d17d.jpg",
"https://i.pinimg.com/736x/03/ce/90/03ce9007f0341cdb7f0f5c0b289dc78c.jpg",
"https://i.pinimg.com/736x/5e/a9/7e/5ea97eb2d847073adeda26e926b0cf78.jpg",
"https://i.pinimg.com/736x/a7/2e/85/a72e852df7ad04fb55d4b79e8d91ded3.jpg",
"https://i.pinimg.com/736x/33/1e/f1/331ef1ecbcf0f9ca49605e5ded3a6f98.jpg",
"https://i.pinimg.com/736x/86/1b/d7/861bd70424a075e2900c09046193f95b.jpg",
"https://i.pinimg.com/736x/9f/6b/c2/9f6bc21da2f03029bcb80c490e6b566e.jpg",
"https://i.pinimg.com/1200x/a9/c7/3a/a9c73ad10890180ae5fc43f0e2c87023.jpg",
"https://i.pinimg.com/736x/22/fe/f9/22fef99a1b6803a13ddeb0fa0f36abcf.jpg",
"https://i.pinimg.com/736x/11/64/7b/11647bd8b66b8c39edc997ab51e3db56.jpg",
"https://i.pinimg.com/736x/f3/2b/08/f32b08151ab7aa9fcbd7e56e68884fe6.jpg",
"https://i.pinimg.com/736x/48/d8/f9/48d8f96ccbcd0f82ae608d9163a8bff4.jpg",
"https://i.pinimg.com/1200x/b2/0a/cf/b20acf69c499b3791210a59d0e672e18.jpg",
"https://i.pinimg.com/1200x/e2/14/c8/e214c8eac02dcaa0c0a61432445199e1.jpg",
"https://i.pinimg.com/1200x/d5/f3/35/d5f335bc624f7e9573775a14dc8ad184.jpg",
"https://i.pinimg.com/1200x/92/08/8f/92088ff52f092c605113a3c094e668b8.jpg",
"https://i.pinimg.com/1200x/d4/e9/33/d4e93374164d26572f84eb022ab71783.jpg",
"https://i.pinimg.com/1200x/fb/68/02/fb680242f3f82037be118f2773247496.jpg",
"https://i.pinimg.com/1200x/c0/88/39/c0883941867a046e84cd3298ca43161e.jpg",
"https://i.pinimg.com/1200x/69/b1/57/69b1572736a314a8b88bd734ce685776.jpg",
"https://i.pinimg.com/736x/6a/18/f3/6a18f3679902e9e34c7621ecf9a5acb4.jpg",
"https://i.pinimg.com/736x/d1/7a/a9/d17aa90735d1a22429e14d7c255bc025.jpg",
"https://i.pinimg.com/736x/d3/1d/77/d31d77e60c5b1d5b529bf3d780686af1.jpg",
"https://i.pinimg.com/736x/5c/6e/1b/5c6e1bc7983ecca45aecb501f82892ee.jpg",
"https://i.pinimg.com/1200x/0a/1c/ae/0a1cae58f3fddc8f45dfa9d30b72c4f5.jpg",
"https://i.pinimg.com/736x/a3/33/1f/a3331f1025db371490200777a60d56d7.jpg",
"https://i.pinimg.com/1200x/5d/23/8f/5d238f0038cb02bcb55807c5703414ea.jpg",
"https://i.pinimg.com/1200x/89/3d/d5/893dd5fcae6747ab4b737ddfc16cd633.jpg",
"https://i.pinimg.com/1200x/c8/8c/37/c88c371eadd725e1957059234a7f5e92.jpg",
"https://i.pinimg.com/1200x/78/2e/3a/782e3ace2a7da0b855fdae1c77da2757.jpg",
"https://i.pinimg.com/1200x/ee/54/3f/ee543f423187ea273b41f538701531c7.jpg",
"https://i.pinimg.com/736x/56/5c/f6/565cf6c8acbd4930d6a262be95847a6f.jpg",
"https://i.pinimg.com/1200x/01/46/a6/0146a6f720600c5afa2d4aa08d6d1d99.jpg",
"https://i.pinimg.com/1200x/3a/cb/00/3acb0083480e864743427091ff2058c7.jpg",
"https://i.pinimg.com/1200x/d0/de/ee/d0deee48f5fd6f40354e5923437c0114.jpg",
"https://i.pinimg.com/1200x/f2/4f/54/f24f54416e29a053bf3e7564707f887e.jpg",
"https://i.pinimg.com/1200x/0e/29/f2/0e29f256234924fdd4dce96b1299e0fa.jpg",
"https://i.pinimg.com/736x/ee/04/98/ee04989dea6b3b20fd57d772fd4cec9c.jpg",
"https://i.pinimg.com/736x/c9/be/12/c9be1287fd27de7834c0f95af9f13ea5.jpg",
"https://i.pinimg.com/1200x/15/ba/69/15ba6958a8c7e70d27ac10388a00e261.jpg",
"https://i.pinimg.com/736x/04/d1/bf/04d1bf1a01229b5182dabb5084fa4863.jpg",
"https://i.pinimg.com/736x/2d/81/4e/2d814e282363f8db5efbff6987d6af32.jpg",
"https://i.pinimg.com/1200x/79/10/c5/7910c52b9e9cde0eb0a306ddbb2359cd.jpg",
"https://i.pinimg.com/1200x/6a/b8/f0/6ab8f073c91de2096b216e301004717b.jpg",
"https://i.pinimg.com/1200x/98/64/bc/9864bc300d452cea029d9f179638a1c2.jpg",
"https://i.pinimg.com/1200x/33/f1/d2/33f1d2fc11ce2d9651f22331eb344ec5.jpg",
"https://i.pinimg.com/1200x/9f/c2/b3/9fc2b35e76816bbf757a3b9a351efc88.jpg",
"https://i.pinimg.com/1200x/e5/c6/0a/e5c60abbe5b1cbf288b5a8adf291afc5.jpg",
"https://i.pinimg.com/736x/b7/90/76/b790760e3b593a21b75a9b76e7e8d686.jpg",
"https://i.pinimg.com/736x/e7/54/01/e754019dc3cee88d3b9f170f6227a08d.jpg",
"https://i.pinimg.com/1200x/13/a1/33/13a133750450f38b73f5122d2733f668.jpg",
"https://i.pinimg.com/1200x/0d/05/5f/0d055f3003490665bccc830bf1184ba8.jpg",
"https://i.pinimg.com/736x/95/33/7e/95337e992eb2c03d9fcfd70294e14a2e.jpg",
"https://i.pinimg.com/1200x/18/7b/f9/187bf90542c74ecd6b2b3182e1b510c9.jpg",
"https://i.pinimg.com/736x/f6/18/cc/f618ccf7c0a89b5d576de00c3abcefb0.jpg",
"https://i.pinimg.com/1200x/dd/2c/e3/dd2ce32f8716b69c069a66b780bd6e04.jpg",
"https://i.pinimg.com/1200x/7f/5a/34/7f5a34933909143a57c8065692b231f7.jpg",
"https://i.pinimg.com/1200x/4e/52/65/4e526595cc897c7d4a72fcc785f1a4c1.jpg",
"https://i.pinimg.com/736x/79/90/14/799014660687cbfa5b797bb78e22f1d7.jpg",
"https://i.pinimg.com/1200x/df/aa/5e/dfaa5e525354df3c963aa0b0b9e34f9e.jpg",
"https://i.pinimg.com/736x/71/86/30/71863003190ddd0f87558e48b33df362.jpg",
"https://i.pinimg.com/736x/e0/1a/e7/e01ae7fe7e88b4295eabefe68336c9a7.jpg",
"https://i.pinimg.com/736x/71/c8/d5/71c8d5ceea32192f903f3e5eee23b548.jpg",
"https://i.pinimg.com/736x/c7/ac/58/c7ac586ed54c4d789bb5167673750088.jpg",
"https://i.pinimg.com/1200x/d8/fa/42/d8fa42c336fc13b43d4c4fbdda8e7038.jpg",
"https://i.pinimg.com/1200x/df/91/63/df916341543d7a791b0ae1a7148a8629.jpg",
"https://i.pinimg.com/736x/36/4d/9f/364d9f3bd385ca832f2e9dadd1fd5908.jpg",
"https://i.pinimg.com/1200x/26/9b/ab/269babb81345ca8827789a2c2b7dd996.jpg",
"https://i.pinimg.com/1200x/36/69/41/366941a54d5f6694ccdf99a654091aa7.jpg",
"https://i.pinimg.com/736x/f7/97/47/f79747cc7eac45a8e98f43765048407c.jpg",
"https://i.pinimg.com/1200x/b6/07/13/b607132c20ff1c492b1f19679d279c56.jpg",
"https://i.pinimg.com/1200x/7d/5d/bb/7d5dbbe0b4621a287f5b0238d34666b5.jpg",
"https://i.pinimg.com/1200x/07/62/41/076241d3fae19a94f5c858f74df0242c.jpg",
"https://i.pinimg.com/1200x/93/b0/c3/93b0c3ca48d2854c875819ca0ee51193.jpg",
"https://i.pinimg.com/736x/b9/41/37/b9413799f34f17bbdf0d92d6a8900615.jpg",
"https://i.pinimg.com/1200x/8f/5e/06/8f5e063db5e1167fee5a876d61276769.jpg",
"https://i.pinimg.com/736x/70/c3/82/70c3820948b14bc9e9e76075561a10c1.jpg",
"https://i.pinimg.com/736x/df/9f/0f/df9f0f6584f60c04ed33b99f3bf3a5a1.jpg",
"https://i.pinimg.com/1200x/97/85/44/978544b70a73444bfd46c314435b9348.jpg"

];



images.forEach((src,index)=>{

let img=document.createElement("img");

img.src=src;

img.onclick=()=>openFulImg(index);

gallery.appendChild(img);

});


function openFulImg(index){

currentIndex=index;

fulImg.src=images[index];

fulImgBox.style.display="flex";

zoom=1;

fulImg.style.transform="scale(1)";

}



function closeImg(){

fulImgBox.style.display="none";

}

/* Boton de siguinet */

function changeImg(direction){

currentIndex+=direction;

if(currentIndex<0){

currentIndex=images.length-1;

}

if(currentIndex>=images.length){

currentIndex=0;

}

fulImg.src=images[currentIndex];

}

/* crea el zoom */

fulImg.addEventListener("wheel",(e)=>{

e.preventDefault();

if(e.deltaY<0){

zoom+=0.1;

}else{

zoom-=0.1;

}

zoom=Math.min(Math.max(zoom,1),3);

fulImg.style.transform=`scale(${zoom})`;

});

/* animacion de balon */
let progress = 0;

const bar = document.querySelector(".yard-progress");
const text = document.getElementById("yard-text");

let interval = setInterval(()=>{

progress++;

bar.style.width = progress + "%";

text.innerText = progress + " YARDAS";

if(progress >= 100){

clearInterval(interval);

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

}

},40);

