/*
x = column starting with zero
y = row starting with zero
var index = row*width+column

          COLUMNS
R   (0) 0   1   2   3   4
O   (1) 5   6   7   8   9
W   (2) 10  11  12  13  14
S   (3) 15  16  17  18  19

(4,2)
 x,y
 
(column 3, row 1)
index = 1*5+3 = 8

       [ pix 1 ][ pix 2 ]
        0 1 2 3  4 5 6 7 
pixels=[_,_,_,_, _,_,_,_,...]
        r g b a  r g b a ...

for (var row=0;row<height;row++) {
  for (var col=0;col<width;col++) {
   ellipse(col,row,width,height)
  }
}



*/
var vid

function setup() {
  createCanvas(400,400)
  vid = createCapture("video")
  vid.size(400,400)
  vid.hide() //hide seperate video capture
}

function draw() {
  
  vid.loadPixels()
  
  for (var row=0;row<height;row=row+20) {
    for (var col=0;col<width;col=col+20) {
//increase incremental movement through index for a smaller array of pixels

      var index = (row*width+col)*4
//multiply by four because changing color includes 4 components (r,g,b,a)

      var r = vid.pixels[index]
      var g = vid.pixels[index+1]
      var b = vid.pixels[index+2]
      var a = vid.pixels[index+3]
//creates variables to control r,g,b,a values for video pixels
      
      fill(r,g,b,a)
      noStroke()
      rect(col,row,20,20)
//creates a rectangle at each point defined by the array
}
}

/*  loadPixels()
  
  for (var row=0;row<height;row++) {
    for (var col=0;col<width;col++) {
      
      var index = (row*width+col)*4
//multiply by four because changing color includes 4 components (r,g,b,a)

      var r = vid.pixels[index]
      var g = vid.pixels[index+1]
      var b = vid.pixels[index+2]
      var a = vid.pixels[index+3]
//creates variables to control r,g,b,a values for video pixels

      var bright = (r+g+b)/3
//one method to adust brightness, can insert variable "bright" to create grayscale video

      if (r>=0 && r<=85) {
        r = 255
        g = 0
        b = 0
      }
//replaces all red values between 0 and 85 with "red"
        else if (r>85 && r<170) {
          r = 0
          g = 0
          b = 255
        }
//replaces all red values between 85 and 170 with "blue"
        else if (r>170 && r<=255) {
          r = 0
          g = 255
          b = 0
        }
//replaces all red values between 170 and 255 with "green"
        else {
          r = vid.pixels[index]
          g = vid.pixels[index+1]
          b = vid.pixels[index+2]
        }
//loads original colors where red values do not exist

      pixels[index]=r //red
      pixels[index+1]=g //blue
      pixels[index+2]=b //green
      pixels[index+3]=a //alpha
//horizontal gradient: use row for all values
//vertical gradient: use col for all values
//diagnol gradient: use row+col for all values
  }
}
  
  updatePixels()*/
}