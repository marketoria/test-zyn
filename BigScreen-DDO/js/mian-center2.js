










function comdify(n){//加千分符
       n=n+'';
    　　var re=/\d{1,3}(?=(\d{3})+$)/g;
    　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
    　　return n1;
    }
 
var myChart3 = echarts.init(document.getElementById('main-center'));
var respData3={
	"data": [{
			"data": [{
					"name": "江苏",
					"value": [58757356, "江苏"]
				}, {
					"name": "河南",
					"value": [35383750, "河南"]
				}, {
					"name": "广东",
					"value": [18102101, "广东"]
				}, {
					"name": "陕西",
					"value": [11615785, "陕西"]
				}, {
					"name": "四川",
					"value": [2278884, "四川"]
				}, {
					"name": "内蒙古",
					"value": [2103210, "内蒙古"]
				}, {
					"name": "吉林",
					"value": [1641931, "吉林"]
				}, {
					"name": "广西",
					"value": [993790, "广西"]
				}, {
					"name": "湖北",
					"value": [692127, "湖北"]
				}, {
					"name": "贵州",
					"value": [591355, "贵州"]
				}, {
					"name": "海南",
					"value": [401265, "海南"]
				}, {
					"name": "湖南",
					"value": [325386, "湖南"]
				}, {
					"name": "上海",
					"value": [297100, "上海"]
				}, {
					"name": "安徽",
					"value": [270780, "安徽"]
				}, {
					"name": "福建",
					"value": [231015, "福建"]
				}, {
					"name": "浙江",
					"value": [189480, "浙江"]
				}, {
					"name": "河北",
					"value": [132050, "河北"]
				}, {
					"name": "山东",
					"value": [50593, "山东"]
				}, {
					"name": "重庆",
					"value": [42780, "重庆"]
				}, {
					"name": "云南",
					"value": [21160, "云南"]
				}, {
					"name": "北京",
					"value": [18930, "北京"]
				}, {
					"name": "山西",
					"value": [16995, "山西"]
				}, {
					"name": "黑龙江",
					"value": [8593, "黑龙江"]
				}, {
					"name": "宁夏",
					"value": [7995, "宁夏"]
				}, {
					"name": "辽宁",
					"value": [4331, "辽宁"]
				}, {
					"name": "江西",
					"value": [610, "江西"]
				}, {
					"name": "天津",
					"value": [340, "天津"]
				}, {
					"name": "新疆",
					"value": [285, "新疆"]
				}, {
					"name": "甘肃",
					"value": [95, "甘肃"]
				}, {
					"name": "青海",
					"value": [10, "青海"]
				}
			],
			"top": [{
					"name": "江苏",
					"value": [58757356, "江苏"]
				}, {
					"name": "河南",
					"value": [35383750, "河南"]
				}, {
					"name": "广东",
					"value": [18102101, "广东"]
				}, {
					"name": "陕西",
					"value": [11615785, "陕西"]
				}, {
					"name": "四川",
					"value": [2278884, "四川"]
				}, {
					"name": "内蒙古",
					"value": [2103210, "内蒙古"]
				}, {
					"name": "吉林",
					"value": [1641931, "吉林"]
				}, {
					"name": "广西",
					"value": [993790, "广西"]
				}, {
					"name": "湖北",
					"value": [692127, "湖北"]
				}, {
					"name": "贵州",
					"value": [591355, "贵州"]
				}
			],
			"extremum": {
				"min": 10,
				"max": 58757356
			}
		}, {
			"data": [{
					"name": "湖南",
					"value": [635793892.48, "湖南"]
				}, {
					"name": "山东",
					"value": [528857195.68, "山东"]
				}, {
					"name": "江苏",
					"value": [461473016.4, "江苏"]
				}, {
					"name": "浙江",
					"value": [281593375.28, "浙江"]
				}, {
					"name": "湖北",
					"value": [261044802.16, "湖北"]
				}, {
					"name": "广东",
					"value": [250927556.16, "广东"]
				}, {
					"name": "河南",
					"value": [243247819.68, "河南"]
				}, {
					"name": "四川",
					"value": [222920888.72, "四川"]
				}, {
					"name": "辽宁",
					"value": [214036545.04, "辽宁"]
				}, {
					"name": "贵州",
					"value": [213113939.6, "贵州"]
				}, {
					"name": "河北",
					"value": [204870187.44, "河北"]
				}, {
					"name": "广西",
					"value": [201418019.52, "广西"]
				}, {
					"name": "安徽",
					"value": [192284567.28, "安徽"]
				}, {
					"name": "上海",
					"value": [179721151.28, "上海"]
				}, {
					"name": "陕西",
					"value": [164514583.52, "陕西"]
				}, {
					"name": "新疆",
					"value": [158721254.08, "新疆"]
				}, {
					"name": "内蒙古",
					"value": [113017755.52, "内蒙古"]
				}, {
					"name": "江西",
					"value": [109624037.2, "江西"]
				}, {
					"name": "黑龙江",
					"value": [104928205.12, "黑龙江"]
				}, {
					"name": "北京",
					"value": [100964752.16, "北京"]
				}, {
					"name": "福建",
					"value": [77834392.64, "福建"]
				}, {
					"name": "山西",
					"value": [77148068.16, "山西"]
				}, {
					"name": "天津",
					"value": [76747260.64, "天津"]
				}, {
					"name": "云南",
					"value": [64817465.68, "云南"]
				}, {
					"name": "宁夏",
					"value": [63850362.48, "宁夏"]
				}, {
					"name": "重庆",
					"value": [59013132.4, "重庆"]
				}, {
					"name": "吉林",
					"value": [55876090.8, "吉林"]
				}, {
					"name": "海南",
					"value": [43994479.28, "海南"]
				}, {
					"name": "青海",
					"value": [29342878.32, "青海"]
				}, {
					"name": "甘肃",
					"value": [28686686.24, "甘肃"]
				}, {
					"name": "西藏",
					"value": [3697565.52, "西藏"]
				}
			],
			"top": [{
					"name": "湖南",
					"value": [635793892.48, "湖南"]
				}, {
					"name": "山东",
					"value": [528857195.68, "山东"]
				}, {
					"name": "江苏",
					"value": [461473016.4, "江苏"]
				}, {
					"name": "浙江",
					"value": [281593375.28, "浙江"]
				}, {
					"name": "湖北",
					"value": [261044802.16, "湖北"]
				}, {
					"name": "广东",
					"value": [250927556.16, "广东"]
				}, {
					"name": "河南",
					"value": [243247819.68, "河南"]
				}, {
					"name": "四川",
					"value": [222920888.72, "四川"]
				}, {
					"name": "辽宁",
					"value": [214036545.04, "辽宁"]
				}, {
					"name": "贵州",
					"value": [213113939.6, "贵州"]
				}
			],
			"extremum": {
				"min": 3697565.52,
				"max": 635793892.48
			}
		}, {
			"data": [{
					"name": "河南",
					"value": [47658630.24, "河南"]
				}, {
					"name": "广东",
					"value": [43546709.1, "广东"]
				}, {
					"name": "浙江",
					"value": [34624188, "浙江"]
				}, {
					"name": "湖南",
					"value": [25945138.34, "湖南"]
				}, {
					"name": "江苏",
					"value": [23951328.1, "江苏"]
				}, {
					"name": "吉林",
					"value": [20865376.48, "吉林"]
				}, {
					"name": "山东",
					"value": [16675867.68, "山东"]
				}, {
					"name": "贵州",
					"value": [14493857.6, "贵州"]
				}, {
					"name": "辽宁",
					"value": [13056006.92, "辽宁"]
				}, {
					"name": "河北",
					"value": [10224795.52, "河北"]
				}, {
					"name": "湖北",
					"value": [8482354, "湖北"]
				}, {
					"name": "四川",
					"value": [6845881.9, "四川"]
				}, {
					"name": "上海",
					"value": [6218368, "上海"]
				}, {
					"name": "山西",
					"value": [6186785.62, "山西"]
				}, {
					"name": "新疆",
					"value": [5798400.92, "新疆"]
				}, {
					"name": "北京",
					"value": [5688692.58, "北京"]
				}, {
					"name": "重庆",
					"value": [5044818, "重庆"]
				}, {
					"name": "黑龙江",
					"value": [4974585.94, "黑龙江"]
				}, {
					"name": "内蒙古",
					"value": [4758580.96, "内蒙古"]
				}, {
					"name": "陕西",
					"value": [3587766.42, "陕西"]
				}, {
					"name": "安徽",
					"value": [3153838, "安徽"]
				}, {
					"name": "江西",
					"value": [2386011.34, "江西"]
				}, {
					"name": "云南",
					"value": [2142894, "云南"]
				}, {
					"name": "天津",
					"value": [1792074, "天津"]
				}, {
					"name": "广西",
					"value": [1773860.94, "广西"]
				}, {
					"name": "福建",
					"value": [1029620, "福建"]
				}, {
					"name": "宁夏",
					"value": [937542.38, "宁夏"]
				}, {
					"name": "青海",
					"value": [746916, "青海"]
				}, {
					"name": "甘肃",
					"value": [648558, "甘肃"]
				}, {
					"name": "海南",
					"value": [412360, "海南"]
				}, {
					"name": "西藏",
					"value": [164340, "西藏"]
				}, {
					"name": "澳门",
					"value": [0, "澳门"]
				}, {
					"name": "香港",
					"value": [0, "香港"]
				}
			],
			"top": [{
					"name": "河南",
					"value": [47658630.24, "河南"]
				}, {
					"name": "广东",
					"value": [43546709.1, "广东"]
				}, {
					"name": "浙江",
					"value": [34624188, "浙江"]
				}, {
					"name": "湖南",
					"value": [25945138.34, "湖南"]
				}, {
					"name": "江苏",
					"value": [23951328.1, "江苏"]
				}, {
					"name": "吉林",
					"value": [20865376.48, "吉林"]
				}, {
					"name": "山东",
					"value": [16675867.68, "山东"]
				}, {
					"name": "贵州",
					"value": [14493857.6, "贵州"]
				}, {
					"name": "辽宁",
					"value": [13056006.92, "辽宁"]
				}, {
					"name": "河北",
					"value": [10224795.52, "河北"]
				}
			],
			"extremum": {
				"min": 0,
				"max": 47658630.24
			}
		}, {
			"data": [{
					"name": "广东",
					"value": [85854550.23, "广东"]
				}, {
					"name": "山西",
					"value": [28095630.76, "山西"]
				}, {
					"name": "北京",
					"value": [26829334, "北京"]
				}, {
					"name": "山东",
					"value": [22012154.89, "山东"]
				}, {
					"name": "河北",
					"value": [13001659.3, "河北"]
				}, {
					"name": "江苏",
					"value": [11939420.66, "江苏"]
				}, {
					"name": "浙江",
					"value": [10404699.69, "浙江"]
				}, {
					"name": "吉林",
					"value": [7104648.35, "吉林"]
				}, {
					"name": "天津",
					"value": [6903309.82, "天津"]
				}, {
					"name": "辽宁",
					"value": [6449184.33, "辽宁"]
				}, {
					"name": "湖北",
					"value": [6180054.11, "湖北"]
				}, {
					"name": "四川",
					"value": [5530216.39, "四川"]
				}, {
					"name": "黑龙江",
					"value": [4759511.01, "黑龙江"]
				}, {
					"name": "河南",
					"value": [4128730.23, "河南"]
				}, {
					"name": "安徽",
					"value": [3534603.52, "安徽"]
				}, {
					"name": "湖南",
					"value": [3391282.31, "湖南"]
				}, {
					"name": "重庆",
					"value": [3377326.43, "重庆"]
				}, {
					"name": "上海",
					"value": [3365019.51, "上海"]
				}, {
					"name": "福建",
					"value": [3304253.81, "福建"]
				}, {
					"name": "陕西",
					"value": [3170117.13, "陕西"]
				}, {
					"name": "宁夏",
					"value": [3034880.57, "宁夏"]
				}, {
					"name": "内蒙古",
					"value": [2734477.88, "内蒙古"]
				}, {
					"name": "新疆",
					"value": [2599343.47, "新疆"]
				}, {
					"name": "江西",
					"value": [2553963.64, "江西"]
				}, {
					"name": "海南",
					"value": [2453624.82, "海南"]
				}, {
					"name": "未知",
					"value": [1635270.99, "未知"]
				}, {
					"name": "贵州",
					"value": [1119732.7, "贵州"]
				}, {
					"name": "青海",
					"value": [1112430.51, "青海"]
				}, {
					"name": "甘肃",
					"value": [1083024.35, "甘肃"]
				}, {
					"name": "广西",
					"value": [876042.35, "广西"]
				}, {
					"name": "云南",
					"value": [812141.71, "云南"]
				}, {
					"name": "西藏",
					"value": [685257.07, "西藏"]
				}
			],
			"top": [{
					"name": "广东",
					"value": [85854550.23, "广东"]
				}, {
					"name": "山西",
					"value": [28095630.76, "山西"]
				}, {
					"name": "北京",
					"value": [26829334, "北京"]
				}, {
					"name": "山东",
					"value": [22012154.89, "山东"]
				}, {
					"name": "河北",
					"value": [13001659.3, "河北"]
				}, {
					"name": "江苏",
					"value": [11939420.66, "江苏"]
				}, {
					"name": "浙江",
					"value": [10404699.69, "浙江"]
				}, {
					"name": "吉林",
					"value": [7104648.35, "吉林"]
				}, {
					"name": "天津",
					"value": [6903309.82, "天津"]
				}, {
					"name": "辽宁",
					"value": [6449184.33, "辽宁"]
				}
			],
			"extremum": {
				"min": 685257.07,
				"max": 85854550.23
			}
		}, {
			"data": [{
					"name": "湖南",
					"value": [635793892.48, "湖南"]
				}, {
					"name": "山东",
					"value": [528857195.68, "山东"]
				}, {
					"name": "江苏",
					"value": [461473016.4, "江苏"]
				}, {
					"name": "浙江",
					"value": [281593375.28, "浙江"]
				}, {
					"name": "湖北",
					"value": [261044802.16, "湖北"]
				}, {
					"name": "广东",
					"value": [250927556.16, "广东"]
				}, {
					"name": "河南",
					"value": [243247819.68, "河南"]
				}, {
					"name": "四川",
					"value": [222920888.72, "四川"]
				}, {
					"name": "辽宁",
					"value": [214036545.04, "辽宁"]
				}, {
					"name": "贵州",
					"value": [213113939.6, "贵州"]
				}, {
					"name": "河北",
					"value": [204870187.44, "河北"]
				}, {
					"name": "广西",
					"value": [201418019.52, "广西"]
				}, {
					"name": "安徽",
					"value": [192284567.28, "安徽"]
				}, {
					"name": "上海",
					"value": [179721151.28, "上海"]
				}, {
					"name": "陕西",
					"value": [164514583.52, "陕西"]
				}, {
					"name": "新疆",
					"value": [158721254.08, "新疆"]
				}, {
					"name": "内蒙古",
					"value": [113017755.52, "内蒙古"]
				}, {
					"name": "江西",
					"value": [109624037.2, "江西"]
				}, {
					"name": "黑龙江",
					"value": [104928205.12, "黑龙江"]
				}, {
					"name": "北京",
					"value": [100964752.16, "北京"]
				}, {
					"name": "福建",
					"value": [77834392.64, "福建"]
				}, {
					"name": "山西",
					"value": [77148068.16, "山西"]
				}, {
					"name": "天津",
					"value": [76747260.64, "天津"]
				}, {
					"name": "云南",
					"value": [64817465.68, "云南"]
				}, {
					"name": "宁夏",
					"value": [63850362.48, "宁夏"]
				}, {
					"name": "重庆",
					"value": [59013132.4, "重庆"]
				}, {
					"name": "吉林",
					"value": [55876090.8, "吉林"]
				}, {
					"name": "海南",
					"value": [43994479.28, "海南"]
				}, {
					"name": "青海",
					"value": [29342878.32, "青海"]
				}, {
					"name": "甘肃",
					"value": [28686686.24, "甘肃"]
				}, {
					"name": "西藏",
					"value": [3697565.52, "西藏"]
				}
			],
			"top": [{
					"name": "湖南",
					"value": [635793892.48, "湖南"]
				}, {
					"name": "山东",
					"value": [528857195.68, "山东"]
				}, {
					"name": "江苏",
					"value": [461473016.4, "江苏"]
				}, {
					"name": "浙江",
					"value": [281593375.28, "浙江"]
				}, {
					"name": "湖北",
					"value": [261044802.16, "湖北"]
				}, {
					"name": "广东",
					"value": [250927556.16, "广东"]
				}, {
					"name": "河南",
					"value": [243247819.68, "河南"]
				}, {
					"name": "四川",
					"value": [222920888.72, "四川"]
				}, {
					"name": "辽宁",
					"value": [214036545.04, "辽宁"]
				}, {
					"name": "贵州",
					"value": [213113939.6, "贵州"]
				}
			],
			"extremum": {
				"min": 3697565.52,
				"max": 635793892.48
			}
		}, {
			"data": [{
					"name": "广东",
					"value": [85854550.23, "广东"]
				}, {
					"name": "山西",
					"value": [28095630.76, "山西"]
				}, {
					"name": "北京",
					"value": [26829334, "北京"]
				}, {
					"name": "山东",
					"value": [22012154.89, "山东"]
				}, {
					"name": "河北",
					"value": [13001659.3, "河北"]
				}, {
					"name": "江苏",
					"value": [11939420.66, "江苏"]
				}, {
					"name": "浙江",
					"value": [10404699.69, "浙江"]
				}, {
					"name": "吉林",
					"value": [7104648.35, "吉林"]
				}, {
					"name": "天津",
					"value": [6903309.82, "天津"]
				}, {
					"name": "辽宁",
					"value": [6449184.33, "辽宁"]
				}, {
					"name": "湖北",
					"value": [6180054.11, "湖北"]
				}, {
					"name": "四川",
					"value": [5530216.39, "四川"]
				}, {
					"name": "黑龙江",
					"value": [4759511.01, "黑龙江"]
				}, {
					"name": "河南",
					"value": [4128730.23, "河南"]
				}, {
					"name": "安徽",
					"value": [3534603.52, "安徽"]
				}, {
					"name": "湖南",
					"value": [3391282.31, "湖南"]
				}, {
					"name": "重庆",
					"value": [3377326.43, "重庆"]
				}, {
					"name": "上海",
					"value": [3365019.51, "上海"]
				}, {
					"name": "福建",
					"value": [3304253.81, "福建"]
				}, {
					"name": "陕西",
					"value": [3170117.13, "陕西"]
				}, {
					"name": "宁夏",
					"value": [3034880.57, "宁夏"]
				}, {
					"name": "内蒙古",
					"value": [2734477.88, "内蒙古"]
				}, {
					"name": "新疆",
					"value": [2599343.47, "新疆"]
				}, {
					"name": "江西",
					"value": [2553963.64, "江西"]
				}, {
					"name": "海南",
					"value": [2453624.82, "海南"]
				}, {
					"name": "未知",
					"value": [1635270.99, "未知"]
				}, {
					"name": "贵州",
					"value": [1119732.7, "贵州"]
				}, {
					"name": "青海",
					"value": [1112430.51, "青海"]
				}, {
					"name": "甘肃",
					"value": [1083024.35, "甘肃"]
				}, {
					"name": "广西",
					"value": [876042.35, "广西"]
				}, {
					"name": "云南",
					"value": [812141.71, "云南"]
				}, {
					"name": "西藏",
					"value": [685257.07, "西藏"]
				}
			],
			"top": [{
					"name": "广东",
					"value": [85854550.23, "广东"]
				}, {
					"name": "山西",
					"value": [28095630.76, "山西"]
				}, {
					"name": "北京",
					"value": [26829334, "北京"]
				}, {
					"name": "山东",
					"value": [22012154.89, "山东"]
				}, {
					"name": "河北",
					"value": [13001659.3, "河北"]
				}, {
					"name": "江苏",
					"value": [11939420.66, "江苏"]
				}, {
					"name": "浙江",
					"value": [10404699.69, "浙江"]
				}, {
					"name": "吉林",
					"value": [7104648.35, "吉林"]
				}, {
					"name": "天津",
					"value": [6903309.82, "天津"]
				}, {
					"name": "辽宁",
					"value": [6449184.33, "辽宁"]
				}
			],
			"extremum": {
				"min": 685257.07,
				"max": 85854550.23
			}
		}, {
			"data": [{
					"name": "河南",
					"value": [47658630.24, "河南"]
				}, {
					"name": "广东",
					"value": [43546709.1, "广东"]
				}, {
					"name": "浙江",
					"value": [34624188, "浙江"]
				}, {
					"name": "湖南",
					"value": [25945138.34, "湖南"]
				}, {
					"name": "江苏",
					"value": [23951328.1, "江苏"]
				}, {
					"name": "吉林",
					"value": [20865376.48, "吉林"]
				}, {
					"name": "山东",
					"value": [16675867.68, "山东"]
				}, {
					"name": "贵州",
					"value": [14493857.6, "贵州"]
				}, {
					"name": "辽宁",
					"value": [13056006.92, "辽宁"]
				}, {
					"name": "河北",
					"value": [10224795.52, "河北"]
				}, {
					"name": "湖北",
					"value": [8482354, "湖北"]
				}, {
					"name": "四川",
					"value": [6845881.9, "四川"]
				}, {
					"name": "上海",
					"value": [6218368, "上海"]
				}, {
					"name": "山西",
					"value": [6186785.62, "山西"]
				}, {
					"name": "新疆",
					"value": [5798400.92, "新疆"]
				}, {
					"name": "北京",
					"value": [5688692.58, "北京"]
				}, {
					"name": "重庆",
					"value": [5044818, "重庆"]
				}, {
					"name": "黑龙江",
					"value": [4974585.94, "黑龙江"]
				}, {
					"name": "内蒙古",
					"value": [4758580.96, "内蒙古"]
				}, {
					"name": "陕西",
					"value": [3587766.42, "陕西"]
				}, {
					"name": "安徽",
					"value": [3153838, "安徽"]
				}, {
					"name": "江西",
					"value": [2386011.34, "江西"]
				}, {
					"name": "云南",
					"value": [2142894, "云南"]
				}, {
					"name": "天津",
					"value": [1792074, "天津"]
				}, {
					"name": "广西",
					"value": [1773860.94, "广西"]
				}, {
					"name": "福建",
					"value": [1029620, "福建"]
				}, {
					"name": "宁夏",
					"value": [937542.38, "宁夏"]
				}, {
					"name": "青海",
					"value": [746916, "青海"]
				}, {
					"name": "甘肃",
					"value": [648558, "甘肃"]
				}, {
					"name": "海南",
					"value": [412360, "海南"]
				}, {
					"name": "西藏",
					"value": [164340, "西藏"]
				}, {
					"name": "澳门",
					"value": [0, "澳门"]
				}, {
					"name": "香港",
					"value": [0, "香港"]
				}
			],
			"top": [{
					"name": "河南",
					"value": [47658630.24, "河南"]
				}, {
					"name": "广东",
					"value": [43546709.1, "广东"]
				}, {
					"name": "浙江",
					"value": [34624188, "浙江"]
				}, {
					"name": "湖南",
					"value": [25945138.34, "湖南"]
				}, {
					"name": "江苏",
					"value": [23951328.1, "江苏"]
				}, {
					"name": "吉林",
					"value": [20865376.48, "吉林"]
				}, {
					"name": "山东",
					"value": [16675867.68, "山东"]
				}, {
					"name": "贵州",
					"value": [14493857.6, "贵州"]
				}, {
					"name": "辽宁",
					"value": [13056006.92, "辽宁"]
				}, {
					"name": "河北",
					"value": [10224795.52, "河北"]
				}
			],
			"extremum": {
				"min": 0,
				"max": 47658630.24
			}
		}
	],
	"name": ["电子券", "清账单", "迷你厅", "金融理财", "自助终端", "外部资金归集", "代理商资金归集"],
	"parm": {
		"TITLE": "支付业务额分布",
		"MAXNAME": "高",
		"MINNAME": "低"
	}
}
;
// $.ajax({
//    url:getContextPath()+'/querykpmgf04.json',
//    type:'post',
//    dataType:'json',
//    cache:false,
//    async:false,
//    success:function(respdata){
//        respData3 = respdata
//        }

   
// })
var TITLE =respData3.parm.TITLE;
var MAXNAME=respData3.parm.MAXNAME;
var MINNAME=respData3.parm.MINNAME;


var Linedate =respData3.name;
var mapdate=respData3.data;
var inRangeColor= [
                   
                   [ '#d3d9fb','#c6cdf7','#b3bbe9','#a3a4da','#8386cb','#6365af',],
                   [ '#e6f7ff','#bae7fe','#95d6fe','#6dc1fd','#46abfb','#2493fc','#1770d6','#0a53b1',],
                   [ '#fed9d4','#f9b9b1','#f69e93','#e87465','#b54245',],
                   [ '#fff8e8','#fde6bc','#fdd494','#febf70','#fda84d','#f88b2c','#d26b20',],
                   [ '#fed9d4','#f9b9b1','#f69e93','#e87465','#b54245',],
                   [ '#e6f7ff','#bae7fe','#95d6fe','#6dc1fd','#46abfb','#2493fc','#1770d6','#0a53b1',], 
                   [ '#e6fffb','#b7f4ec','#8be8de','#62dbd2','#3fcec8','#28c2c2','#1a979b',],
                   
]
var  color=['#6365af','#2493fc','#e87465','#f88b2c','#e87465','#2493fc','#28c2c2'];

//var xx={label:{
//	normal:{
//		textStyle:{
//            color:'red',
//            fontSize:16,
//		},
//		
//		rotate:10,
//	},
//    emphasis:{
//    	textStyle:{
//			color:'#fff',
//		},
//    }
//}}
//Array.prototype.insert = function (index, item) {  
//	  this.splice(index, 0, item);  
//	}; 
//console.log(Linedate);

//Linedate.insert(1,xx);
//console.log(Linedate)

var option3 = {
    textStyle:{
        fontFamily: "思源黑体",
    },
  
    baseOption: {
    animationDurationUpdate: 2000,
    animationEasingUpdate: 'quinticInOut',
    timeline:{
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval:35000,
            right:15,
            top:10,
            width:130,
            height:null,
            symbol: 'circle',
          
          
            label:{
            	normal:{
            		textStyle:{
            			color:'#ddd',
                        fontSize:16,
            		},
            		
            		rotate:10,
            	},
                emphasis:{
                	textStyle:{
            			color:'#fff',
            		},
                }
            },
            itemStyle:{
            	normal:{
            		color:'#ddd',
            		
            	},
            	  emphasis: {
                          color: '#fff'
                  }

            },
            
            lineStyle: {
                color:'rgba(0,73,134,0.6)'
            },
            checkpointStyle: {
                
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            tooltip : {
                show:false,
             },
            data:[],
        
        },
       
    
    title: {
        text:TITLE,
        left: 'center',
        top:30,
        textStyle: {
            fontSize: 18,
            color: '#c2e5fb',//'rgba(255,255,255, 0.9)'
            	 fontWeight:'normal'
        }  
    },
    tooltip: {
        formatter: function(params) {
        	try{
        		 if ('value' in params.data) {
                     return params.data.value[1] + ': ' +comdify(params.data.value[0]) ;
                 }
        	}catch(e){
        		return '';
        	}
           
        }
    },
    grid: {
            left: 10,
            right: '45%',
            top: '75%',
            bottom: 5
        },
  
    xAxis: {},
    yAxis: {},
    series: [{
        id: 'map',
        type: 'map',
        mapType: 'china',
        roam: true,
        itemStyle: {
            normal: {
            	 borderColor:  '#ddd',
                 borderWidth:1,
                position: 'bottom',
            },
            emphasis:{
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
           
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'bottom',
                show: true,
                textStyle:{
                   color:'#5f6060',
                	   fontWeight:'bolder'
               }
            },
            emphasis: {
                textStyle:{
                    color:'#ddb926'
                }
           }

        },
        data:[],
    }, {
        id: 'bar',
        type: 'bar',
        tooltip: {
            show: false
        },
        barWidth:15,
        label: {
            normal: {
                show: true,
         
                textStyle: {
                    color: '#ddd',
                  
                }
            }
        },
        data: []
    }]
    
           
         

 },
    options:[],
}
for (var i = 0; i < mapdate.length; i++) {
//	 console.log(mapdate[i].data)

	 var zz=[ 
	          {name:"南海诸岛",
         itemStyle:{
             normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
            
         }
     },
//     {name:"台湾",
//         itemStyle:{
//             normal:{label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
//            
//         }
//     },
//     {name:"香港",
//         itemStyle:{
//             normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
//            
//         }
//     },
//     {name:"澳门",
//         itemStyle:{
//             normal:{opacity:0,label:{show:false},borderWidth:"0",borderColor:"#10242b",areaStyle:{color:'#10242b'}},
//            
//         }
//     },
     ]
	 var yy =mapdate[i].data
	var oo = yy.concat(zz)
//	console.log(oo)
	
    option3.options.push({
    	timeline:{
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval:35000,
            right:25,
            top:10,
            width:130,
            height:null,
            symbol: 'circle',
            currentIndex:i,
           
//            label:{
//            	normal:{
//            		textStyle:{
//                        color:color[i],
//                        fontSize:16,
//            		},
//            		
//            		rotate:10,
//            	},
//                emphasis:{
//                	textStyle:{
//            			color:'#fff',
//            		},
//                }
//            },
         
            checkpointStyle: {
                color:color[i],
                symbolSize:15,
                borderWidth: 0
            },
            data:Linedate,
         
        
        },
        visualMap: [{
            //type:'continous',
            //type: 'continuous',
        	show:false,
            calculable: true,
            dimension: 0,
            left:0,
            top: 200,
            itemWidth: 12,
            max: mapdate[i].extremum.max,
            min: mapdate[i].extremum.min,
           
            text: [MAXNAME, MINNAME],
            textStyle: {
                color: '#ddd'
            },
            inRange: {
          
            	color: inRangeColor[i],
            }
        }],
        xAxis: {
        	show : false,
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false
            },
            max: (mapdate[i].extremum.max)*2.5//获取top10的最大值*2作为x的轴的坐标。
        },
        yAxis: {
        	show : false,
            type: 'category',
          
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },

            data: mapdate[i].top.map(function(ele) {
                return ele.value[1]
            }).reverse()
        },
        series: [{
            id: 'map',
//            data: mapdate[i].data,
           
            data:oo,
            aspectScale:0.85, //地图中心在屏幕中的位置
            left:'4%',
            right:'7%',
            top: 0,
            

           
        }, {
            id: 'bar',
            label: {
                normal: {
                    position: 'right',
   
                   formatter: function(params) {
                         	
                      
                   return params.name + ': ' +comdify(params.value);
                   }
                                 
                }
            },
          
            data: mapdate[i].top.map(function(ele) {
                return ele.value[0]
            }).sort(function(a, b) {
                return a - b
            })
        }]
    })
}

myChart3.setOption(option3);