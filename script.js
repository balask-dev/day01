var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(data[i].id,data[i].name,data[i].email);
    }
}




//https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json - contry name,capital