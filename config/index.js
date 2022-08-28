export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx74b70ffc28716d4e",
    // 公众号appSecret
    appSecret: "3b397ef66ca294412c17ff0a7475771a",
    // 模板消息id
    templateId: "XwpQbs03mzqImT-csWl3VMf2vmInHz-zxguO5HVUYkw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oWLNj6Ny-pijtyNIsMqJ1mE1nc4Q"],
     
    // 信息配置
    // 所在省份
    province: "安徽",
    // 所在城市
    city: "合肥",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1995", "date": "03-22", "type": 'new'}
    ],
    // 在一起的日子，格式同上
    loveDate: "2019-12-21",
    // 结婚纪念日
    marryDate: "2022-08-08"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
