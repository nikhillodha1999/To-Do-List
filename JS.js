let inputbox = document.getElementById("inputbox");
    let addbutton = document.getElementById("addbutton");
    let todoitemcontainer = document.getElementById("todoitemcontainer");

    addbutton.addEventListener('click', function () {
      let item = document.createElement('h5');
      let hr = document.createElement('hr');
      item.innerText = inputbox.value;
      todoitemcontainer.appendChild(item);
      todoitemcontainer.appendChild(hr);
      inputbox.value = "";
    });