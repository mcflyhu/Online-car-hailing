let driving = null
export function getMyDrivingRoute(params) {
    var drivingOption = {
        policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
        ferry: 1, // 是否可以使用轮渡
        map: params.map,
        autoFitView: false
    }

    // 构造路线导航类
    if (!driving) { driving = new AMap.Driving(drivingOption) }

    // 根据起终点经纬度规划驾车导航路线
    driving.search(params.beginPoint, params.endPoint, function(status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            console.log(result)
            console.log('绘制驾车路线完成')
        } else {
            console.log('获取驾车数据失败：' + result)
        }
    })
}
