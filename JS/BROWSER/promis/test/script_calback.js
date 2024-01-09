function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт `));
    document.head.append(script);
  }


loadScript('calback_022.js', function(error, script) {
    if (error) {
      alert('ERROR')
    } else {
      test()
    }
  });