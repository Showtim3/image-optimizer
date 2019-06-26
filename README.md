# image-optimizer

## Objective :
If you have worked as a front-end developer, You must have dealt with a lot of images.
To optimize speed and ratings of a website, the images served must be as optimized as possible. 
So after resizing a lot of images online and then changing their format to .webp(because webp images loads faster) again and again , i get bored and tired of that.
And Hence i wrote a script in nodeJs using `Sharp` and fs which :

1. Takes images as input,
2. Resizes them to 200*200 which you can change as per your needs,
3. Changes their format to .webP from jpg, jpeg, png etc
4. Generate optimized images. Tada!



## How to use

Prerequisites: Nodejs and run `npm install` to install all the dependencies.

1. Create a directory called original and put all the images there.
2. Create a directory called transform and the script will generate the optimized images in the transform directory.
3. Run the script by `node index.js`



## Things that can be improved
1. A code section can be added to check whether the directory `transform` already exists or not. In case it doesn't exist, 
it shall be created automatically.Thereby reducing user efforts and making this script easier to use.

2. Suppose the original image is a.jpg then in the transform directory, the optimized output image will be a.jpg.webp which 
can be made better by using some string manipulation on the `originalName Array`.

Pull Requests are welcome.
