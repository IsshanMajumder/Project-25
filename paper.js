class paper{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.circle(110,360,20,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.w, this.h);
			pop()

      }
















}