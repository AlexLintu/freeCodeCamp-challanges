try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}