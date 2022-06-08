import Vue from 'vue'

import AMap from 'vue-amap'
Vue.use(AMap)
let walking = null
export function getMyWalkingRoute(params) {
    var walkOption = {
        map: params.map,
        hideMarkers: false,
        isOutline: true,
        outlineColor: '#ffeeee',
        autoFitView: false
    }

    // 步行导航
    if (!walking) {
        walking = new AMap.Walking(walkOption)
    }

    // 根据起终点坐标规划步行路线
    walking.search(params.beginPoint, params.endPoint, function(status, result) {
        // result即是对应的不行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_RidingResult
        if (status === 'complete') {
            console.log(result)
            console.log('步行路线数据查询成功')
        } else {
            console.log('步行路线数据查询失败' + result)
        }
    })
}
