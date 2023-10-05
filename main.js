const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка читання файлу:', err);
    return;
  }

  try {

    const jsonData = JSON.parse(data);

    jsonData.sort((a, b) => a.value - b.value);

    const filteredData = jsonData
      .filter((x) => x.ku === '13' && parseFloat(x.value) > 5)
      .map((x) => x.value.toString());

    fs.writeFile('output.txt', filteredData.join('\n'), 'utf8', (err) => {
      if (err) {
        console.error('Помилка запису у файл output.txt:', err);
      } else {
        console.log('Відфільтровані та відсортовані дані успішно записані у файл output.txt');
      }
    });
  } catch (error) {
    console.error('Помилка розбору JSON:', error);
  }
});
