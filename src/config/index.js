export const TIANQI_URL = 'http://op.juhe.cn/onebox/weather/query';
export const TIANQI_CITY = '深圳';
export const TIANQI_KEY = 'afc28ae28c6f1b520dab5d1ed537f6c0';

export const NEWS_URL = 'http://v.juhe.cn/toutiao/index';
export const NEWS_KEY = 'c3f9d6c4c70559205cab02fb9f8d4a66';

export const TULING_API = 'http://www.tuling123.com/openapi/api';
export const TULING_API_KEY = 'b7c3791e4a6d42e7b112616e0a6ee989';
export const TULING_ERROR_MESSAGE = '可爱小机器人宕机啦 :>_<":'; // error语句

export const HELLO_WORLD = 'Hello 可爱聪明的小机器人上线啦 :>_<:'; //招呼语
export const MY_NAME = '@资深syachiku'; // 自己的昵称
export const CONTACT_ALIAS = '冰仔'; // 想要发消息的人（备注）
export const CONTACT_NAME = ''; // 想要发送消息的人（真实昵称）
export const ROOM_TOPIC = '伐木累'; // 想要发送消息的群组
// 每分钟的第30秒： '30 * * * * *'
// 每小时的1分30秒 ：'30 1 * * * *'
// 每天的1点1分30秒 ：'30 1 1 * * *'
// 每月的1日1点1分30秒 ：'30 1 1 1 * *'
// 每周1的1点1分30秒 ：'30 1 1 * * 1'
// 详情见node_schedule文档
// 每天的8点0分0秒
export const SCHEDULE_CONFIG = '0 0 8 * * *';

// 是否使用本地数据，因为免费接口有次数限制，调试建议开启mock
export const MOCK = true;

export const ENABLE_TULING_MACHINE = true;
