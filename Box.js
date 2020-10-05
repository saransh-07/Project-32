    class Box{
        constructor(x,y,width,height){
    var options = {
        isStatic:false,
        restitution:0.2,
        friction:1.3,
        density:1 
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
   
    World.add(world,this.body);

        }
        score(){
            
        if(this.visibility<0 && this.visibility>-1000){
            score++;
        }
    }
        display(a){
            
            var pos = this.body.position;
            var angle = this.body.angle;
            fill (a);
            rectMode(CENTER);
            if(this.body.speed<3){
             push();   
             translate(pos.x,pos.y);
             angleMode(RADIANS);
             rotate(angle);
             rect(pos.x,pos.y,this.width,this.height);
            pop();

            rect(pos.x,pos.y,this.width,this.height);
            }else{
                push();
                World.remove(world,this.body);
                this.visibility = this.visibility - 5;
                tint (0,0,0,this.visibility);
                pop();
            }
            
            
        }
   }