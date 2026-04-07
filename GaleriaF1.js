/* Karla Alamillo
Diseño Web */
const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");
const gallery = document.getElementById("gallery");

let currentIndex = 0;
let zoom = 1;


const images = [

"https://i.pinimg.com/736x/aa/d4/8f/aad48f0882e42d8df873f5a282f8c4e1.jpg",
"https://i.pinimg.com/736x/1f/bb/14/1fbb14c9aeb6cc9f2b3006d993d542bc.jpg",
"https://i.pinimg.com/736x/fc/50/28/fc5028e228c89b5bbf6f1137dc8a52d4.jpg",
"https://i.pinimg.com/736x/e5/ee/d6/e5eed6f9758cf3a7869ff62cbdd3ba8b.jpg",
"https://i.pinimg.com/736x/1a/95/41/1a954174b3938311cd177396427de351.jpg",
"https://i.pinimg.com/736x/7d/3e/ed/7d3eed52bcc42499a0749a6263c86a6e.jpg",
"https://i.pinimg.com/736x/61/ea/5f/61ea5fffd2c4aa0059f7d3df9b74ce25.jpg",
"https://i.pinimg.com/736x/b8/d8/65/b8d865009f7d07e5b531cf34e5559d4d.jpg",
"https://i.pinimg.com/736x/49/31/7f/49317f57e2e9aa11a67ab11825c16636.jpg",
"https://i.pinimg.com/736x/4b/9d/a7/4b9da7aca4f9040f874b3739aceeba91.jpg",
"https://i.pinimg.com/736x/0b/3e/f3/0b3ef3baeb754639572ec600a54edf8c.jpg",
"https://i.pinimg.com/736x/1c/8c/f8/1c8cf8198338d9e09eba2e092f09a95d.jpg",
"https://i.pinimg.com/736x/87/47/a6/8747a6f0ecd5c5d8258c7049ecc2dd55.jpg",
"https://i.pinimg.com/1200x/78/06/9c/78069c2ad474776f8582403e5eea9787.jpg",
"https://i.pinimg.com/736x/75/29/50/752950cee471bfb2e430a929778fbab3.jpg",
"https://i.pinimg.com/736x/2c/02/30/2c02306c8488fa24af7f88604ca35a72.jpg",
"https://i.pinimg.com/1200x/8a/f9/ac/8af9ac2d521da51f5e34cd25dfc7c358.jpg",
"https://i.pinimg.com/736x/82/2f/c2/822fc2a3dc365acca7d7cd3bfb830754.jpg",
"https://i.pinimg.com/736x/b2/b7/44/b2b744b79c9341a5357065a1bc42e70f.jpg",
"https://i.pinimg.com/736x/c5/39/3e/c5393efbb6f3f2ae25c8de76479c5793.jpg",
"https://i.pinimg.com/1200x/ac/96/d2/ac96d230542c977a86ee0226d4a5dad3.jpg",
"https://i.pinimg.com/1200x/f5/54/e6/f554e6df8035d05980c2f482b7b447e9.jpg",
"https://i.pinimg.com/736x/fa/f4/ec/faf4ecf30a15c4a4e237cd73c59e4cac.jpg",
"https://i.pinimg.com/1200x/1b/e5/e7/1be5e7f5039f4034b459e928cf244800.jpg",
"https://i.pinimg.com/736x/7a/c2/29/7ac2293197cf4528b41622233dee6dc8.jpg",
"https://i.pinimg.com/736x/88/4b/c9/884bc95075429d325255b1014cb9102c.jpg",
"https://i.pinimg.com/736x/bf/e3/a2/bfe3a230772c5749f8e2dd3ae0e0ac6b.jpg",
"https://i.pinimg.com/736x/20/cb/ef/20cbefca4bdacf8ba6628b4bf254338f.jpg",
"https://i.pinimg.com/736x/2d/9c/4d/2d9c4de7cc4dc5138007e16feffdb48d.jpg",
"https://i.pinimg.com/736x/7b/6c/6d/7b6c6d5899156b64411c274d73b5876b.jpg",
"https://i.pinimg.com/736x/75/24/a4/7524a4b40fdb8e98b8f8640d945a916a.jpg",
"https://i.pinimg.com/736x/25/21/e5/2521e55471da17118e4ef0a60b8d460a.jpg",
"https://i.pinimg.com/736x/3d/86/72/3d867222d16473aac4abc66123702b0a.jpg",
"https://i.pinimg.com/736x/83/fe/c0/83fec0703201f17f340bd6bdcf898925.jpg",
"https://i.pinimg.com/1200x/c6/0a/0f/c60a0ff8f50bd21eddd246209380f20e.jpg",
"https://i.pinimg.com/736x/cd/a9/33/cda9339b3ceede07421206938b3b4e1d.jpg",
"https://i.pinimg.com/736x/8b/c1/cb/8bc1cb28fb64276a5ba078266f56c026.jpg",
"https://i.pinimg.com/736x/c2/bc/03/c2bc037588600d310f7e00c2e5546f17.jpg",
"https://i.pinimg.com/736x/23/cc/2e/23cc2e2cf67d0e46572e00042ac698e9.jpg",
"https://i.pinimg.com/736x/a5/ab/90/a5ab9069140926ee483c8f1b31206039.jpg",
"https://i.pinimg.com/1200x/22/52/b9/2252b9fd9d9e005ed884c35a249d2108.jpg",
"https://i.pinimg.com/736x/37/63/18/37631820b32652fcb90cd5a3aae6c12b.jpg",
"https://i.pinimg.com/1200x/05/8d/b3/058db3c0d250f8bf7ff1f9d9d2d06a39.jpg",
"https://i.pinimg.com/736x/fc/c4/60/fcc46011549a3c415d08d701ba70e80f.jpg",
"https://i.pinimg.com/1200x/21/a8/85/21a885ef32ece25bd5790b0a923e8feb.jpg",
"https://i.pinimg.com/736x/02/03/59/02035980229406fdc9be9be0b8350c80.jpg",
"https://i.pinimg.com/736x/ea/0f/f8/ea0ff8b7d340140f6c19dd16f85516e9.jpg",
"https://i.pinimg.com/736x/50/34/82/503482d666c317c4896d7a6141463feb.jpg",
"https://i.pinimg.com/1200x/eb/c1/d0/ebc1d003a5e906315967a9cface597f8.jpg",
"https://i.pinimg.com/1200x/20/5b/9f/205b9fb1b75312726480e0e79b4022bd.jpg",
"https://i.pinimg.com/736x/05/f9/d9/05f9d90b21b03eda96d96addc353c94d.jpg",
"https://i.pinimg.com/736x/65/91/48/6591484eab67c8fe3aba6180f51c9e85.jpg",
"https://i.pinimg.com/736x/ec/a9/f6/eca9f6ceca80f30057c62bdd7754267a.jpg",
"https://i.pinimg.com/736x/77/14/17/7714174dba91e4f53ec5e033db01d334.jpg",
"https://i.pinimg.com/1200x/b1/3d/33/b13d33f856cc56d22fc9027836a98e27.jpg",
"https://i.pinimg.com/1200x/40/7f/f6/407ff6125e207178aaddf99c30d08b66.jpg",
"https://i.pinimg.com/736x/7c/3b/d3/7c3bd3c1d93e39c70eb633f63e3f0896.jpg",
"https://i.pinimg.com/736x/b5/c9/44/b5c94467370ad0686b9a9faeff2a2d2f.jpg",
"https://i.pinimg.com/1200x/14/9f/3c/149f3cdab7285fcbb83003d261e8c11e.jpg",
"https://i.pinimg.com/736x/ce/f0/d5/cef0d5ea9839921d4256c66dad1087f4.jpg",
"https://i.pinimg.com/736x/79/c1/b6/79c1b653fca2962dac049f831e430d35.jpg",
"https://i.pinimg.com/1200x/8e/a1/8f/8ea18fd3b34a53f350f45859220f9f7c.jpg",
"https://i.pinimg.com/736x/4c/fd/29/4cfd29f0b7d7a58650cab2780bdc5ebb.jpg",
"https://i.pinimg.com/736x/82/18/de/8218dee7e44edbf98356f4fc85cc615f.jpg",
"https://i.pinimg.com/736x/4e/83/92/4e839205e6e81898043c77f22ca34ab3.jpg",
"https://i.pinimg.com/736x/57/32/19/5732190e518c1164176f0f8adfb704a4.jpg",
"https://i.pinimg.com/736x/40/26/41/402641ed012f458f0bea0801d19c3406.jpg",
"https://i.pinimg.com/736x/d2/fd/a2/d2fda20cf379900aa8d27e8fad0c0d1c.jpg",
"https://i.pinimg.com/736x/ff/12/2a/ff122a047ce8fc6ba359d4f086fce825.jpg",
"https://i.pinimg.com/736x/41/19/11/4119118579d56131f9b2263455ff1ed1.jpg",
"https://i.pinimg.com/1200x/80/e1/a1/80e1a1b56b72dda4b2c0953be09c56ed.jpg",
"https://i.pinimg.com/736x/02/98/ea/0298eaf20c30a5a5a93ce3472ee63184.jpg",
"https://i.pinimg.com/1200x/dd/46/f0/dd46f0c2bc486d0a9cb4866005166d35.jpg",
"https://i.pinimg.com/736x/3f/fd/bb/3ffdbbede4ea62e5fdc51a0c949300df.jpg",
"https://i.pinimg.com/736x/ff/1a/15/ff1a1522f93c1eb4b490608759fa3ae6.jpg",
"https://i.pinimg.com/736x/8c/e5/5a/8ce55a02c2e70238510dd1d5a1f16716.jpg",
"https://i.pinimg.com/736x/65/3e/6c/653e6cbded78d5d2b4613f54057cd758.jpg",
"https://i.pinimg.com/736x/6c/3d/1c/6c3d1c1c7cb5fbc0a54d40965faa91b7.jpg",
"https://i.pinimg.com/736x/a2/cd/69/a2cd6995cc56fdbe7e3b4bb8d14b5023.jpg",
"https://i.pinimg.com/736x/12/27/43/122743c7b136ca35590e333b407683cb.jpg",
"https://i.pinimg.com/736x/6c/3d/1c/6c3d1c1c7cb5fbc0a54d40965faa91b7.jpg",
"https://i.pinimg.com/1200x/f2/31/ed/f231edd3f3048308a1462bb2390fa96b.jpg",
"https://i.pinimg.com/736x/02/bc/70/02bc7032e3e98f69890d0015bf8b1a77.jpg",
"https://i.pinimg.com/736x/d3/1c/16/d31c16a566e2e64abcac5d82b08e8fd8.jpg",
"https://i.pinimg.com/736x/24/93/15/2493150df117095072e99f70f06d5a06.jpg",
"https://i.pinimg.com/736x/2f/ee/82/2fee82499e577780082728e76e72ffb0.jpg",
"https://i.pinimg.com/736x/79/e0/13/79e0134ab097471d6adbcb489f5c355d.jpg",
"https://i.pinimg.com/736x/81/1f/11/811f11834748956587b62abd0eca4f6b.jpg",
"https://i.pinimg.com/736x/f4/52/81/f452815820d3c10c12f197ff2108345a.jpg",
"https://i.pinimg.com/736x/a6/25/19/a62519b25ceae4886c5dabc4a0793ba4.jpg",
"https://i.pinimg.com/736x/62/c7/77/62c7779b2328fe91d609c16344291083.jpg",
"https://i.pinimg.com/736x/f1/45/19/f145197739a43a81b73f8080569523a7.jpg",
"https://i.pinimg.com/736x/3e/43/4f/3e434fd21d2e2069c068d9888ca1688d.jpg",
"https://i.pinimg.com/736x/4d/23/19/4d231974ee7f17819e8de7bce7305dad.jpg",
"https://i.pinimg.com/736x/1d/42/ed/1d42ed8e2cb8713ff5e9c83f3ba21f84.jpg",
"https://i.pinimg.com/736x/2e/79/5a/2e795adb6bf99fdd9833763ca6e10743.jpg",
"https://i.pinimg.com/736x/ba/95/d6/ba95d66b1fb9588c7ba54a7822523a02.jpg",
"https://i.pinimg.com/736x/95/78/77/9578776835199f03c3fa58d868b97c4f.jpg",
"https://i.pinimg.com/736x/1c/87/f1/1c87f188be131a050f29ad9de70d5cf4.jpg",
"https://i.pinimg.com/736x/e8/65/dd/e865dd0c62d54682307acb45be568b31.jpg",
"https://i.pinimg.com/736x/8b/c1/01/8bc1011c76aaf25acb8f6e33d0fbd776.jpg",
"https://i.pinimg.com/736x/a3/29/ce/a329ceaa155a15e654edb4c17d99e2c8.jpg",
"https://i.pinimg.com/736x/2e/79/5a/2e795adb6bf99fdd9833763ca6e10743.jpg",
"https://i.pinimg.com/736x/fd/db/0f/fddb0f5636f8d5f695c50842b79714b5.jpg",
"https://i.pinimg.com/736x/0d/40/c7/0d40c7fffcde60298957b062fd0bf48b.jpg",
"https://i.pinimg.com/736x/5f/00/9c/5f009cabd9bba831f8a61418a6653466.jpg",
"https://i.pinimg.com/736x/82/e7/a4/82e7a4870e279b80e596fdde9856dd32.jpg",
"https://i.pinimg.com/736x/e3/d5/be/e3d5be38393cd158ed4f40910b4f24f1.jpg",
"https://i.pinimg.com/1200x/11/6b/a8/116ba808e16b2c8d05ce9e97be25d60f.jpg",
"https://i.pinimg.com/736x/82/08/6d/82086dba6b9c384fd909ec23630e025a.jpg",
"https://i.pinimg.com/736x/99/31/a1/9931a16ba8376750270bdf82fda25f19.jpg",
"https://i.pinimg.com/736x/a5/52/fe/a552fee83054a4a100e96ff07f0d8c87.jpg"

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

/* crea el efecto de semaforo F1 */

const lights = document.querySelectorAll(".light");

lights.forEach((light,index)=>{

setTimeout(()=>{

light.style.background="red";
light.style.boxShadow="0 0 20px red";

},index*800);

});


setTimeout(()=>{

document.getElementById("loader").style.display="none";

},4500);