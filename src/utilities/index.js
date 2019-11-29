export const fakeDelay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export function authHeader() {
  // return authorization header with jwt token
  let user = null;
  user = getCookie('userToken');
  user = user ? user : null;
  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
  }
}

export function parseJwt (token) {
  if (token && token !== null) {
    const base64Url = token.split('.')[1];
	  const base64 = base64Url.replace('-', '+').replace('_', '/');
	  return JSON.parse(window.atob(base64));
  }
}

export function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

export function setCookie(name, value, days, domain) {
  var d = new Date();
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";domain=" + domain + ";path=/;expires=" + d.toGMTString();
}

export function deleteCookie(name) { setCookie(name, '', -1, ''); }
