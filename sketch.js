var dog,dogImg,dogImg1;
 var database;
  var foodS,foodStock;
  var fedTime,lastFed;
   var feed,addFood; 
   var foodObj;
    function preload(){ 
      sadDog=loadImage("Images/Dog.png");
       happyDog=loadImage("Images/happy dog.png");
       } 
       function setup() { 
         database=firebase.database();
          createCanvas(1000,400);
           foodObj = new Food();
            foodStock=database.ref('Food');
             foodStock.on("value",readStock);
              dog=createSprite(800,200,150,150);
               dog.addImage(sadDog);
                dog.scale=0.15;
                 feed=createButton("Feed the dog");
                  feed.position(700,95);
                   feed.mousePressed(feedDog); 
                   addFood=createButton("Add Food"); 
                   addFood.position(800,95);
                    addFood.mousePressed(addFoods);
                   }   
              function draw() {
              background(46,139,87);
               if(keyWentDown(UP_ARROW)){
                  writeStock(foodS);
                   dog.addImage(dogImg1);
                   } 
                   drawSprites();
                    fill(255,255,254);
                     stroke("black"); 
                     text("Food remaining : "+foodS,170,200);
                      textSize(13);
                       text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
                       } 
                       function readStock(data){
                          foodS=data.val();
                         } 
                         function writeStock(x){ 
                           if(x<=0){ x=0; }else{ x=x-1;
                           } 
                           database.ref('/').update({ Food:x }) 
                          }