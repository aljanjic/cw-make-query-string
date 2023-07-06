function toQueryString(obj) {

  let queryString = [];
 
  for(let prop in obj){
    if(Array.isArray(obj[prop])){
      for (let i = 0; i < obj[prop].length; i++){
        queryString.push(`${prop}=${obj[prop][i]}`)
      }
    }else{
      queryString.push(`${prop}=${obj[prop]}`)
    }

  }

  return queryString.join('&');
}

module.exports = toQueryString;
