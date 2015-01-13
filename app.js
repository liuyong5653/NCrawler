/**
 *  数据抓取demo
 *
 *  NCrawler
 *  Created by Jacky.L on 1/7/15.
 *  Copyright (c) 2014 ZLYCare. All rights reserved.
 */
var
  Hospital = require('./app/controllers/HospitalController'),
  Doctor = require('./app/controllers/DoctorController');

console.log("测试fork-pull合并代码");

//Demo: 查询并存储北京所有的医院
//Hospital.getHospitalListByProvince()
//  .then(function(data){
//    console.log("Finish get data.");
//    return Hospital.parseAndStore(data);
//  })
//  .then(function(){
//    console.log("Finish parse and store data.");
//  },function(err){
//    console.log("oooo:" + err);
//  });


Doctor.getDoctorListByDepartmentId(125)
  .then(function (data) {
    console.log("Finish get data.");
    return Doctor.parseAndStore(data,125);
  })
  .then(function () {
    console.log("Finish parse and store data.");
  }, function (err) {
    console.log("oooo:" + err);
  });
