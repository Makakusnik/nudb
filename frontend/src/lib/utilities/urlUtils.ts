import type { URLParameter } from '@type/Api';
// TODO domysliet niekedy
export function urlJoin(url: string, params: URLParameter | URLParameter[]) {
  let finalParameters = '';
  if (Array.isArray(params)) {
    finalParameters = params.reduce((previousItem, currentItem, index) => {
      const prefix = index === 0 ? previousItem.concat('&') : '';
      const pair = prefix.concat(currentItem.name, '=', currentItem.value);
      return previousItem.concat(pair);
    }, '');
  } else {
    finalParameters = params.name + '=' + params.value;
  }

  finalParameters = '?' + finalParameters;
  const finalUrl = url.concat(finalParameters);
  return finalUrl;
}
