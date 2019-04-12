const faker =require('faker');
const Mock =require('mockjs')
const _ =require('lodash')

module.exports = function(){
    return{
        product:_.times(50,function(n){
            return {
                id:n,
                name:Mock.Random.ctitle(9),
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1326098065,3614587677&fm=26&gp=0.jpg',
                text:Mock.Random.cparagraph(1, 3),
                time:Mock.Random.date('yyyy-MM-dd'),
                price:Mock.mock({
                    "number|1-100": 100
                  })

            }
        }),
        people:_.times(50,function(n){
            return {
                id:n,
                name:Mock.Random.ctitle(9),
                address:Mock.Random.county(true),
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1944966921,2611850360&fm=15&gp=0.jpg',
                text:Mock.Random.cparagraph(),
                time:Mock.Random.date('yyyy-MM-dd'),
                price:Mock.mock({
                    "number|1-100": 100
                  })
            }
        }),
        carousel:_.times(5,function(n){
            return {
                id:n,
                img:'http://p1.music.126.net/5gfqDu-k1pi3SiMeF0h4-g==/109951163985100053.jpg',
                url:Mock.Random.url()

            }
        }),

    }
}