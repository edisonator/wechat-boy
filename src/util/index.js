export default class Util {
  static handleWeatherData(response) {
    const data = response.result.data;
    const realtime = data.realtime;
    const weather = realtime.weather;
    const wind = realtime.wind;
    const pm25 = data.pm25.pm25;
    return `今天是${realtime.date}
    农历${realtime.moon}
    ${realtime.city_name}天气：${weather.info}
    温度：${weather.temperature}
    湿度：${weather.humidity}
    空气质量：pm2.5 ${pm25.pm25} ${pm25.quality}
    ${pm25.des}`;
  }

  static handleNewsData(response) {
    const data = response.result.data;
    let msg = '今日早报:\n';
    data.slice(0, 10).forEach(item => {
      msg = msg + `${item.title}\n来源：${item.author_name},${item.url}\n\n`;
    });
    return msg;
  }

  static handleTopNews({ data }, ian) {
    const { calendar, newsList, weather, sentence } = data;
    const { cMonth, cDay, nWeek, ncWeek, monthCn, dayCn, isTerm, term } = calendar;
    const termName = isTerm ? `，${term}` : '';
    const content = newsList.map((news, index) => {
      return `${index + 1}、${news.title}。`
    }).join('\n\n');
    const greetings = (1 <= nWeek && nWeek <= 5) ? '工作愉快，生活喜乐' : '周末愉快';

    return `${cMonth}月${cDay}日，${ncWeek}，农历${monthCn}${dayCn}${termName}，${greetings}！

一份微语报，早知天下事！

${content}

${ian ? `【帅帅微语】${ian}` : ''}`
  }
}
