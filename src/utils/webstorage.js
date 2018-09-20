export const setSession = function(token) {
  // save in local storage
  const settings = JSON.stringify({
    hashtag: '',
    queryType: 'recentuser',
  });

  localStorage.setItem('_wlrsession', token);
  localStorage.setItem('_wlrsettings', settings);
  return true;
}

export const getSession = function() {
  // save in local storage
  return {
    token : localStorage.getItem('_wlrsession')
  }
}

export const closeSession = function() {
  localStorage.removeItem('_wlrsession')
  localStorage.removeItem('_wlrsettings')
  return true;
}

export const setSettings = function(settings) {
  const stringSettings = JSON.stringify(settings);
  localStorage.setItem('_wlrsettings', stringSettings);
  return true;
}

export const getSettings = function() {
  const settings = localStorage.getItem('_wlrsettings');
  return JSON.parse(settings);
}