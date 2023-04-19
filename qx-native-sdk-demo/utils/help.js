// 存储本地信息
function saveLocalStorage(key, value) {
	if (typeof value == 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 查询本地信息
function getLocalStorage(key) {
  let value = localStorage.getItem(key)
  let value2 = value
  try {
    value2 = JSON.parse(value)
  } catch(err) {
    value2 = value
  }
  return value2
}

// 删除本地信息
function removeLocalStorage(key) {
	localStorage.removeItem(key)
}