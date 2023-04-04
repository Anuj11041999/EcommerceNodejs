const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir,'data','products.json');


const getFileInfo = (cb)=>{
    fs.readFile(p,(err,data)=>{
        if(err){
            cb([])
        }else{
            cb(JSON.parse(data));
        }
    })
}
module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        getFileInfo(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }
    static fetchAll(cb){
        getFileInfo(cb);
    }
}