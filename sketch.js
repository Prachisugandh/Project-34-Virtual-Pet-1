var  dog, happyDog, database, foodS, foodStock

function preload()
{
  dog=loadImage("dog1.png");
  happyDog=loadImage("dog2.png");
}

function setup() {
  database=firebase.database();

  createCanvas(500, 500);
  dogSprite=createSprite(250,250)
  dogSprite.scale=0.2;
  dogSprite.addImage(dog)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
  background(46, 139, 87)


  if(keyWentDown(UP_ARROW)){
writeStock(foodStock)
dogSprite.addImage(happyDog);
  }
  drawSprites();
textSize(20)
fill(0,0,0)
text("Note:Press UP_ARROW Key To Feed Drago Milk!",100,100)
text("food remaining:"+foodStock,150,150)

}
function readStock(data){
foodStock=data.val()
}

function writeStock(x){
if(x<=0){
x=0;
}else{
  x=x-1
}
  database.ref('/').update({
    Food:x
  })
}






