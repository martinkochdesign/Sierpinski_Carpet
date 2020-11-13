// Sierpinski Carpet

var squares = [];
var generations = 5;
let el;

function setup() {
    createCanvas(800,800);
    rectMode(CENTER);
    noStroke();
    el = new element(width/2, height/2, 700);
    squares.push(el);
}

function draw() {
    background(0);
    //translate(width/2, height/2);
    
    for (var i = 0; i < generations; i++){
    squares = generate();
    }
    
    for (var i = 0; i<squares.length; i++){
    squares[i].show();
    }
    
    noStroke();
    fill(255, 255, 255);
    textSize(12);
    text("@martinkochdesign, 2020", width-145, height-8);
    noLoop();
    } 



function generate(){
var next = []
    
for (var i = 0; i<squares.length; i++){
var children = []

var x = [ 
squares[i].x-squares[i].len/3,
squares[i].x,
squares[i].x+squares[i].len/3  
]
    
var y = [    
squares[i].y-squares[i].len/3,
squares[i].y,
squares[i].y+squares[i].len/3      
];
    
var d = squares[i].len/3;

for (var n = 0; n < y.length; n++){
for (var m = 0; m < x.length; m++){
    

var child = new element(x[m], y[n], d);
children.push(child);  

}  
}    
children.splice(4,1);
next = concat(next,children);
}

return next;
}


class element{
        
constructor(x_,y_,len_){
    this.x = x_;
    this.y = y_;
    this.len=len_;

}
show(){
    var d = dist(this.x, this.y,width/2, height/2);
    fill(255,map(d, 0, dist(0,0,width/2, height/2), 0, 255),255);
    rect(this.x, this.y, this.len, this.len);
    fill(0);
    rect(this.x, this.y,this.len/3, this.len/3);
}
    
}