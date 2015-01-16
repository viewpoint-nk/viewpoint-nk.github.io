function main(){
    // canvasの取得と領域してい
    var c = document.getElementById("webgl");
    c.width = 500;
    c.height = 500;

    // WebGLコンテキストの取得
    var gl = c.getContext("webgl");

    // クリアする色の指定
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // canvasのクリア
    gl.clear(gl.COLOR_BUFFER_BIT);
}