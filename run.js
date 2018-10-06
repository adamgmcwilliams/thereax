fetch('https://us19.api.mailchimp.com/3.0/lists/c160b732bf/members', {
  method: 'GET',
}).then((response) => {
  return response.json();
}).then((res) => {
  console.log(res, 'RES<<');
});
