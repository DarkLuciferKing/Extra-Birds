class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    display(){
        image(this.sling1, 200, 70, 36, 150)
         
         if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(7);
            stroke("#301608")
            line(pointA.x - 25, pointA.y, pointB.x + 25, pointB.y + 22);
            image(this.sling3, pointA.x - 25, pointA.y - 10, 20, 30)
            bird1.display();
            line(pointA.x - 25, pointA.y, pointB.x - 25, pointB.y + 22); 
        }

        image(this.sling2, 170, 60, 42, 100)
      
      //image(this.sling3, x, y, this.width, this.height)
    }
    
    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }
}