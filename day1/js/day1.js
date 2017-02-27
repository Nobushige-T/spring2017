var main = document.getElementsByClassName("main");
main[0].insertAdjacentHTML('afterbegin','<p>Learning JavaScript</p>');

(function sample(){
  console.log("これはJavaScriptのサンプルです.");
})(); //即時関数はかっこをつける

var cat = function(name){
  this.name = name;
};
cat.prototype.run = function () {
  console.log(this.name + "が走る。");
};
var tama = new cat('たま');
tama.run();
console.log(tama.name);
