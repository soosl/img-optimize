import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

const jpegOpt = {};
const pngOpt = {};
const svgOpt = {};

const files = await imagemin(["img/*.{jpg,png,svg}"], {
    destination: "build",
    plugins: [
        imageminMozjpeg(jpegOpt),
        imageminPngquant(pngOpt),
        imageminSvgo(svgOpt)
    ],
});

console.log(files);
