const fs = require('fs');

// Читаємо JSON дані з файлу data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка читання файлу:', err);
    return;
  }

  try {
    // Розпарсюємо JSON дані
    const jsonData = JSON.parse(data);

    // Спершу сортуємо дані за полем "value" у зростаючому порядку
    jsonData.sort((a, b) => a.value - b.value);

    // Фільтруємо та мапимо дані з ku === 13 і value > 5
    const filteredData = jsonData
      .filter((x) => x.ku === '13' && parseFloat(x.value) > 5)
      .map((x) => x.value.toString());

    // Записуємо відфільтровані та відсортовані дані у файл output.txt
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
