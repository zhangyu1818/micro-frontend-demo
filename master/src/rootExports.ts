let data = '';
let eventList: any[] = [];

export function getData() {
  return data;
}

export function bindOnChange(fn: any) {
  if (typeof fn === 'function') {
    eventList.push(fn);
  }
  return function unBind() {
    eventList = eventList.filter(v => v !== fn);
  };
}

export function setData(newData: string) {
  data = newData;
  eventList.forEach(cb => cb(data));
}
