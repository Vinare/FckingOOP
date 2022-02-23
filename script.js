'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createElem = function () {
    if (this.selector.startsWith('.')) {
      let div = document.createElement('div');
      div.className = `${this.selector.slice(1)}`;
      div.style.cssText=`height: ${this.height}px;
      width: ${this.width}px;  
      background-color: ${this.bg};
      font-size: ${this.fontSize}px;`;
      div.innerHTML = "<span>Всем привет! <br> Я - новый div</span>";
      document.body.append(div);
    } else if (this.selector.startsWith('#')) {
      let p = document.createElement('p');
      p.setAttribute("id", `${this.selector.slice(1)}`);
      p.style.cssText=`height: ${this.height}px;
      width: ${this.width}px;  
      background-color: ${this.bg};
      font-size: ${this.fontSize}px;`;
      p.innerHTML = "<span>Всем привет! <br> Я - новый p</span>";
      document.body.append(p);
    }
  };
};

const domElement1 = new DomElement('.block', 150, 200, 'red', 20);

domElement1.createElem();

console.log(domElement1);