const getData = () => {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => response.json())
    .then(data => {
      if (data.getUsersData === true) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(dat => console.log(dat));
      }
    });
};

// eslint-disable-next-line import/prefer-default-export
export { getData };
