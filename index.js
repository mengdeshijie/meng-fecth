//这样就写好了一个模块，外部就可以调用了
// node-fetch模块异步请求成功后再执行，然后解析成html
const fetch = require('node-fetch'); //引入下载好的node-fetch模块

//get
module.exports.get = async url => { //添加async是异步请求
    // console.log(url);
    const response = await fetch(url);
    const resData = await response.json(); //把获取的数据解析成json格式
    return resData;
}

//post
module.exports.post = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}

//put
module.exports.put = async(url, data) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}

//delete
module.exports.delete = async(url) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    });
    const resData = await 'delete success';
    return resData;
}