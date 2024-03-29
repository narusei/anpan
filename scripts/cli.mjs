/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as readline from 'readline';
import * as process from 'process';

const reader = readline.createInterface({
  input: process.stdin, // 標準入力
  output: process.stdout, // 標準出力
});

const getAnswer = (msg) =>
  new Promise((res) => reader.question('? ' + msg + ' > ', res));

export const cli = async (questions = []) => {
  const answers = {};
  let answer, question;
  let name, type, message; // Required property
  let result;

  for (question of questions) {
    result = '';
    ({ name, type, message } = question);

    result = await getAnswer(message);
    switch (type) {
      case 'text':
        if (result !== '') {
          answer = result;
        } else {
          console.log('Invalid value');
        }
        break;

      case 'number':
        if (result !== '' && parseInt(result)) {
          answer = parseInt(result);
        } else {
          console.log('Invalid value');
        }
        break;

      case 'boolean':
        if (result.toLowerCase() === 'y' || result.toLowerCase() === 'n') {
          switch (result.toLowerCase()) {
            case 'y':
              answer = true;
              break;

            case 'n':
              answer = false;
              break;
          }
        } else {
          console.log('Invalid value');
        }
        break;
    }
    answers[name] = answer;
  }

  return answers;
};
